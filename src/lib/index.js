// @flow
/**
 * Performs an insertion sort where for every comparison we consult the human
 * (represented by a `compare` function that returns a Promise).
 *
 * You can resuse `humanSort` to create your human-sort clients. e.g., for a
 * command line application (such as the one included in this package), one
 * would probably implement the comparison function as a Promise-returning
 * function that asks the user which of the two elements that are being compared
 * should go first, wait for input/response via stdin, and resolve the Promise
 * depending on the user's input.
 **/
type humanSortOptions = { maxSize : ?number, updatesReceiver: ?Function }

export async function humanSort (sourceArray : Array, humanCompare : Function,
  options : humanSortOptions) {
  sourceArray = sourceArray.slice(0) // clone
  let sortedArray = []
  let maxSize = Number(options.maxSize) || Infinity
  let updatesReceiver = options.updatesReceiver || (_ => {})

  if (sourceArray.length === 0) return sortedArray

  // insert firt elem into sortedArray – no need to sort
  let firstElem = sourceArray.pop()
  sortedArray.push(firstElem)

  while (sourceArray.length) {
    var elem = sourceArray.pop()
    updatesReceiver(sourceArray, sortedArray, elem)

    let targetPos
    for (targetPos = 0; targetPos < sortedArray.length; ++targetPos) {
      let rival = sortedArray[targetPos]
      let diff = await humanCompare(elem, rival)
      if (typeof diff !== 'number') {
        throw new TypeError(`Expected 'humanCompare' to return a Promise that
          resolves into a Number, got ${diff}, a ${typeof diff}`)
      }
      if (diff <= 0) break
    }
    sortedArray.splice(targetPos, 0, elem)

    // remove exceeding element
    while (sortedArray.length > maxSize) sortedArray.pop()
  }
  return sortedArray
}
