var assert = require("power-assert");

describe("Testing", function(){
	it("Mocha is integrated", function()
	{
		assert(true);
	});

	it("Destructuring works (ES2015)", function()
	{
        var { foo, bar } = {
            foo: 1,
            bar: 2
        };

		assert(foo === 1);
		assert(bar === 2);
	});
	it("Power Assert works", function()
	{
        var foo = "abc";
        var bar = 123;

        try
        {
            assert(foo == bar);
        }
        catch(e)
        {
            assert(/"abc"/.test(e));
            return
        }
		assert(false);
	});
});
