# ember-sortable-a11y-demo

For `ember-sortable@2.2.0`, the modifier feature is added. However a11y support is broken when using modifiers.
Steps to reproduce:
- Boot the app, go to `localhost:4200/`
- Open browser console
- Under the heading `Using modifiers`, reorder the items by dragging the handle, observe in the browser console that the new order and the item being reordered is correctly logged.
- Under the heading `Using modifiers`, reorder the items using the keyboard, observe in the browser console that the item being reordered is logged as `undefined`.

Note: this only breaks for modifiers. Using the addon in component form does not produce the same bug.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-sortable-a11y-demo`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
