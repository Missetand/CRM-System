import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('municipality/municipality-table', 'Integration | Component | municipality/municipality table', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{municipality/municipality-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#municipality/municipality-table}}
      template block text
    {{/municipality/municipality-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
