define(function(require, exports, module) {

  var chai = require('chai'),
      expect = chai.expect,
      ExampleView = require('app/views/example');

  describe('the example view', function() {

    it('exist', function() {
      expect(ExampleView).to.exist;
    });

  });

});
