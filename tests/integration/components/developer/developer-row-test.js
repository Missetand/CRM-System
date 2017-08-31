import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('developer/developer-row', 'Integration | Component | developer/developer row', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{developer/developer-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#developer/developer-row}}
      template block text
    {{/developer/developer-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
