console.log('we are running myscriptspec')

describe('joiner',function(){
	var joiner = require('../../lib/jasmine_examples/MyScript');
	it('will take an array and output a joined string',function(){
	  console.log(joiner([1,2,3]));
	  expect(joiner([1,2,3])).toBe('123');
	});
});