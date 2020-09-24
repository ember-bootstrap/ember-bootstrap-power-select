## v3.0.0 (2020-09-24)

#### :boom: Breaking Change
* [#113](https://github.com/kaliber5/ember-bootstrap-power-select/pull/113) Update support for ember-bootstrap v4 and ember-power-select v4, drop support for older versions ([@simonihmig](https://github.com/simonihmig))
* [#103](https://github.com/kaliber5/ember-bootstrap-power-select/pull/103) Drop support for Ember < 3.16 ([@simonihmig](https://github.com/simonihmig))
* [#101](https://github.com/kaliber5/ember-bootstrap-power-select/pull/101) Drop support for node 8 ([@simonihmig](https://github.com/simonihmig))

#### :rocket: Enhancement
* [#113](https://github.com/kaliber5/ember-bootstrap-power-select/pull/113) Update support for ember-bootstrap v4 and ember-power-select v4, drop support for older versions ([@simonihmig](https://github.com/simonihmig))

#### :house: Internal
* [#109](https://github.com/kaliber5/ember-bootstrap-power-select/pull/109) Setup release-it ([@simonihmig](https://github.com/simonihmig))
* [#105](https://github.com/kaliber5/ember-bootstrap-power-select/pull/105) Setup dependabot ([@simonihmig](https://github.com/simonihmig))
* [#104](https://github.com/kaliber5/ember-bootstrap-power-select/pull/104) Move CI to Github Actions ([@simonihmig](https://github.com/simonihmig))
* [#100](https://github.com/kaliber5/ember-bootstrap-power-select/pull/100) Update to Ember 3.21, fix linting ([@simonihmig](https://github.com/simonihmig))

#### Committers: 3
- Jeldrik Hanschke ([@jelhan](https://github.com/jelhan))
- Simon Ihmig ([@simonihmig](https://github.com/simonihmig))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## 2.0.0 (2019-09-16)

#### Features
* Adds support for Ember Power Select v3.
* Does not require `ember-power-select-blockless` anymore. You may be able to remove it from your project.

#### :boom: Breaking Change
* Increased minimum supported versions of dependencies:
  * Ember Power Select v3.
  * Ember Bootstrap v3.
  * Ember.js v3.11 or above (per Ember Power Select v3).
  * Ember CLI v2.13 or above.
  * Node.js v8 or above.
* Please also review the [breaking changes introduced by Ember Power Select v3](https://github.com/cibernox/ember-power-select/blob/master/CHANGELOG.md#300-beta1).

It may work well together with Ember Bootstrap v2 but is not offically supported.
