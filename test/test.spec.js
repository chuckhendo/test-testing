var expect = require('chai').expect;

describe("A test suite", function() {
   beforeEach(function() { });
   afterEach(function() { });
   it('should fail', function() { expect(Array.from).to.exist; });
});
