import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('photographers/photographers-row', 'Integration | Component | photographers/photographers row', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{photographers/photographers-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#photographers/photographers-row}}
      template block text
    {{/photographers/photographers-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
