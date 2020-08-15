ember-engine-ahlev-hero
==============================================================================

Hero Addon is a routeless-engine; because there is no route in this addon. It is simply a single-component addon. You might have a question, if it is all about just one single component, why bother to create this external addon? A simple main app's component should be just enough for this very simple task.

Why?
------------------------------------------------------------------------------

* installable/uninstallable
* reusable in any ember project

Unit Test
------------------------------------------------------------------------------
```
ember test
```

Run as a stand alone application
------------------------------------------------------------------------------
```
ember serve
```

And go to 
```
http//localhost:4200
```


Run inside main application
------------------------------------------------------------------------------

Go to the main application and install it

```
ember install https://github.com/ohahlev/ember-engine-ahlev-hero
```

Use it as a normal component

```
<Hero @title="Welcome" @subtitle="Enjoy your learning time" @image="/assets/hero.png" />
```

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
