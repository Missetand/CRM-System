import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('developer/developer-table', 'Integration | Component | developer/developer table', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{developer/developer-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#developer/developer-table}}
      template block text
    {{/developer/developer-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
