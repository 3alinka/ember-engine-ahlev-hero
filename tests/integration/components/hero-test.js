import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hero', function(hooks) {
  setupRenderingTest(hooks);

  test('test render component', async function(assert) {

    // when there is no attribute
    await render(hbs`<Hero />`);
    assert.equal(this.element.textContent.trim(), 'explore');

    // when all attributes are given

    await render(hbs`
      <Hero @title='Welcome' @subtitle='Enjoy your time' @image='/assets/hero.png' />
    `);

    //console.log(this.element.textContent);
    //console.log(this.element.getElementsByTagName('img')[0].src);

    assert.notEqual(this.element.textContent.indexOf('Welcome'), -1);

    assert.notEqual(this.element.textContent.indexOf('Enjoy your time'), -1);
    
    assert.notEqual(this.element.getElementsByTagName('img'), null);
    assert.notEqual(this.element.getElementsByTagName('img')[0], null);
    assert.notEqual(this.element.getElementsByTagName('img')[0].src, null);
    assert.equal(this.element.getElementsByTagName('img')[0].src.indexOf('/asserts/hero.png'), -1);
  });
});
