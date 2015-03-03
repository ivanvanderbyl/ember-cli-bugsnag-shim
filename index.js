(function() {
/* globals define, Bugsnag */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('bugsnag', { 'default': Bugsnag });
})();
