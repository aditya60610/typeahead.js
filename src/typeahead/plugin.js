/*
 * typeahead.js
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

(function() {
  var typeaheadKey, methods;

  typeaheadKey = 'ttTypeahead';

  method = {
    initialize: function initialize(o) {
      o = o || {};

      return this.each(attach);

      function attach() {
        var $input = $(this), typeahead;

        typeahead = new Typeahead({
          input: $input,
          withHint: _.isUndefined(o.hint) ? true : !!o.hint,
          minLength: o.minLength || 0,
          sections: _.isArray(o.sections) ? o.sections : [o.sections]
        });

        $input.data(typeaheadKey, typeahead);
      }
    },

    open: function open() {
      return this.each(openTypeahead);

      function openTypeahead() {
        var $input = $(this), typeahead;

        if (typeahead = $input.data(typeaheadKey)) {
          typeahead.open();
        }
      }
    },

    close: function close() {
      return this.each(closeTypeahead);

      function closeTypeahead() {
        var $input = $(this), typeahead;

        if (typeahead = $input.data(typeaheadKey)) {
          typeahead.close();
        }
      }
    },

    destroy: function destroy() {
      return this.each(unattach);

      function unattach() {
        var $input = $(this), typeahead;

        if (typeahead = $input.data(typeaheadKey)) {
          typeahead.destroy();
          $input.removeData(typeaheadKey);
        }
      }
    }
  };

  jQuery.fn.typeahead = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, [].slice.call(arguments, 1));
    }

    else {
      return methods.initialize.apply(this, arguments);
    }
  };
})();
