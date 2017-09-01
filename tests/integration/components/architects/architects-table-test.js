import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('architects/architects-table', 'Integration | Component | architects/architects table', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{architects/architects-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#architects/architects-table}}
      template block text
    {{/architects/architects-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
