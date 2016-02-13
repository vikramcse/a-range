# a-range
Generate an integer Array containing an arithmetic progression.

# Install
```sh
$ npm install --save a-range
```

## Examples
```js
var arange = require('a-range');

console.log(arange(1, 10, 2));
// -> [ 1, 3, 5, 7, 9 ]

console.log(arange(0, 10, 1));
// -> [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

## Usage

#### `require('a-range')(start, end, step)`

**Arguments**:
- `start`: A number where you want to start the array
- `end`: A number upto which array size goes
- `step`: A number by which you want to step the array
- If the end is not given then the number will start from 0 and iterate upto 
	array size reaches argument ('start') value

```js
var arange = require('a-range');

console.log(arange(5));
// -> [ 0, 1, 2, 3, 4 ]
```

**Returns**: Returns a integer Array containing the specified range of numbers

## License

&copy; 2016 vikram. MIT License