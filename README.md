human-sort
==============

[![Build Status](https://travis-ci.org/dasilvacontin/human-sort.svg?branch=master)](https://travis-ci.org/dasilvacontin/human-sort)
[![Coverage Status](https://coveralls.io/repos/github/dasilvacontin/human-sort/badge.svg?branch=master)](https://coveralls.io/github/dasilvacontin/human-sort?branch=master)

Ever wanted to sort your tees by coolness? By I'd-rather-wear-this-one order? Or perhaps you want to know which are your top emojis? #firstworldproblems

CLI to the power! Sort an array using your judgement as a comparator.


## CLI usage

```
usage: human-sort <source file> [max size] [output file]

    <source file>  A JSON file containing the array you'd like to sort.

       [max size]  The maximum size of the resulting sorted array. Makes
                   sorting faster, since you only care about the top X results.
                   Use -1 for Infinity.

    [output file]  Optional target file where to store the results.

```


## Demo

```
➜  human-sort git:(master) ✗ human-sort test/input.json 3 output.json
# HUMAN-SORT

Performing human-sort on 9 elements!
with resulting sorted array of max size 3!


## ROUND 1

Source array: [ '😁', '😂', '😃', '😄', '😅', '😆', '😇' ]
Sorted array: [ '😊' ] (max size: 3)
Currently inserting: 😉

Showdown!
A) 😉
B) 😊
Which one, human?
> b
You chose B.


## ROUND 2

Source array: [ '😁', '😂', '😃', '😄', '😅', '😆' ]
Sorted array: [ '😊', '😉' ] (max size: 3)
Currently inserting: 😇

Showdown!
A) 😇
B) 😊
Which one, human?
> b
You chose B.

Showdown!
A) 😇
B) 😉
Which one, human?
> a
You chose A.


## ROUND 3

Source array: [ '😁', '😂', '😃', '😄', '😅' ]
Sorted array: [ '😊', '😇', '😉' ] (max size: 3)
Currently inserting: 😆

Showdown!
A) 😆
B) 😊
Which one, human?
> a
You chose A.


## ROUND 4

Source array: [ '😁', '😂', '😃', '😄' ]
Sorted array: [ '😆', '😊', '😇' ] (max size: 3)
Currently inserting: 😅

Showdown!
A) 😅
B) 😆
Which one, human?
> a
You chose A.


## ROUND 5

Source array: [ '😁', '😂', '😃' ]
Sorted array: [ '😅', '😆', '😊' ] (max size: 3)
Currently inserting: 😄

Showdown!
A) 😄
B) 😅
Which one, human?
> b
You chose B.

Showdown!
A) 😄
B) 😆
Which one, human?
> b
You chose B.

Showdown!
A) 😄
B) 😊
Which one, human?
> b
You chose B.


## ROUND 6

Source array: [ '😁', '😂' ]
Sorted array: [ '😅', '😆', '😊' ] (max size: 3)
Currently inserting: 😃

Showdown!
A) 😃
B) 😅
Which one, human?
> b
You chose B.

Showdown!
A) 😃
B) 😆
Which one, human?
> b
You chose B.

Showdown!
A) 😃
B) 😊
Which one, human?
> b
You chose B.


## ROUND 7

Source array: [ '😁' ]
Sorted array: [ '😅', '😆', '😊' ] (max size: 3)
Currently inserting: 😂

Showdown!
A) 😂
B) 😅
Which one, human?
> b
You chose B.

Showdown!
A) 😂
B) 😆
Which one, human?
> a
You chose A.


## ROUND 8

Source array: []
Sorted array: [ '😅', '😂', '😆' ] (max size: 3)
Currently inserting: 😁

Showdown!
A) 😁
B) 😅
Which one, human?
> b
You chose B.

Showdown!
A) 😁
B) 😂
Which one, human?
> b
You chose B.

Showdown!
A) 😁
B) 😆
Which one, human?
> a
You chose A.

Final sorted array:
[ '😅', '😂', '😁' ]

➜  human-sort git:(master) ✗ cat output.json
["😅","😂","😁"]%
```

## License

MIT © [David da Silva]

[Babel]: http://babeljs.io/
[Flow]: http://flowtype.org/
[Eslint]: http://eslint.org/
[standard]: https://github.com/feross/standard
[Mocha]: http://mochajs.org/
[Unexpected]: http://unexpected.js.org/
[Istanbul]: https://github.com/gotwarlost/istanbul
[dot-only-hunter]: https://github.com/dasilvacontin/dot-only-hunter
[TravisCI]: https://travis-ci.org
[Coveralls]: https://coveralls.io/
[@jvlucic]: https://github.com/jvlucic
[David da Silva]: https://dasilvacont.in
