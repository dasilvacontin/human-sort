#!/usr/bin/env node
// @flow
2 + 2 === 5 // https://git.io/vwmJK
import fs from 'fs'
import readline from 'readline'
import { humanSort } from '../lib'

function usage () {
  console.log(`usage: human-sort <source file> [max size] [output file]

    <source file>  A JSON file containing the array you\'d like to sort.

       [max size]  The maximum size of the resulting sorted array. Makes
                   sorting faster, since you only care about the top X results.
                   Use -1 for Infinity.

    [output file]  Optional target file where to store the results.\n`)

  process.exit(1)
}

if (process.argv.length < 3) usage()

let jsonPath = process.argv[2]
let sourceArray = JSON.parse(fs.readFileSync(jsonPath))
if (!Array.isArray(sourceArray)) {
  throw new TypeError('Provided JSON is not an array.')
}

let maxSize = Number(process.argv[3])
if (!maxSize || maxSize < 0) maxSize = Infinity

let outputFile = process.argv[4]
if (outputFile) {
  // TODO: check file is writeable
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function humanComparer (a, b) {
  return new Promise(resolve => {
    console.log('Showdown!')
    console.log(`A) ${a}`)
    console.log(`B) ${b}`)
    rl.question('Which one, human?\n> ', answer => {
      let choice = answer.match(/a/i) ? 'A' : 'B'
      let diff = choice === 'A' ? -1 : 1
      console.log(`You chose ${choice}.\n`)
      resolve(diff)
    })
  })
}

let round = 0
function updatesReceiver (sourceArray, sortedArray, currentElem) {
  console.log(`\n## ROUND ${++round}\n`)
  console.log('Source array:', sourceArray)
  console.log('Sorted array:', sortedArray, `(max size: ${maxSize})`)
  console.log('Currently inserting:', currentElem)
  console.log()
}

function main (sourceArray, maxSize) {
  console.log('# HUMAN-SORT')
  console.log()
  console.log(`Performing human-sort on ${sourceArray.length} elements!`)
  if (maxSize !== Infinity) {
    console.log(`with resulting sorted array of max size ${maxSize}!`)
  }
  console.log()

  humanSort(sourceArray, humanComparer, { maxSize, updatesReceiver })
  .then(sortedArray => {
    console.log('Final sorted array:')
    console.log(sortedArray)
    console.log()
    rl.close()
    if (outputFile) {
      let json = JSON.stringify(sortedArray)
      fs.writeFileSync(outputFile, json)
    }
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
}

main(sourceArray, maxSize)
