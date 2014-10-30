var i18nLazyLookup = require('broccoli-i18n-lazy-lookup');

module.exports = {
  name: 'ember-cli-i18n-lazy-lookup'

  included: function(app) {
    app.registry.remove('template', 'broccoli-ember-hbs-template-compiler');
    app.registry.add('template', {
      name: 'ember-cli-i18n-lazy-lookup',
      ext: 'hbs',
      toTree: function(tree) {
        return i18nLazyLookup(tree, options);
      }
    });
    app.registry.add('template', 'broccoli-ember-hbs-template-compiler')
  }
};
