
[![Maintainability](https://api.codeclimate.com/v1/badges/16b10def47d153885633/maintainability)](https://codeclimate.com/github/schnick3rs/cardz/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/16b10def47d153885633/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)

# cardz-webpack

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Terms

A *Project*

A *Repository* is a fixed set of defined/filled cartz.

A *Deck* is a (selected) subset of cartz used for printing. 

Cartz have a **, defining the object structure and therefore may be very specific

Cartz have a *theme*, they use the same underlying object structure but may impose major changes to the element arrangement and what flavours are availible.
> Examples would be futuristic, medival, cyberpunk, steam

Cartz can have a *flavour*, those are adjustments that mostly change the colors or background images used. They only rearange elements sligthly. 

## routes
/
> print from JSON | build-in set 

/design
/design/card
/design/card/:template

/build
/build/spellbook
/build/custom/

/print
/print/project/
/print/project/:slug
/print/custom/
> input JSON
