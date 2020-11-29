# Central Cities
NPM package to get the capital of the countries


![npm](https://img.shields.io/npm/v/central-cities?style=flat-square)
![npm](https://img.shields.io/npm/dm/central-cities?style=flat-square)
![NPM](https://img.shields.io/npm/l/central-cities?style=flat-square)


## Getting Started

### Prerequisites

```sh
node -v
node: >= v8.3
```

## Installing

#### Using npm
```sh
npm install --save central-cities
npm i central-cities
```

#### Using Yarn
```sh
yarn add central-cities
```


## How to use

#### Importing with Commonjs style

```javascript
const Countries = require('central-cities')
const countries = new Countries()
```

#### Importing with ES6 modules style

```javascript
import Countries from 'central-cities'
const countries = new Countries()
```

#### Filter by name

```javascript

const portugal = countries.byName('portugal')

/**
 * Get all country data
 [{
    "country": "Portugal",
    "city": "Lisboa",
    "independence": "1143",
    "location": "Southern Europe"
 }]
*/
portugal.toJson()

// get capital
portugal.capital // Lisboa

```

#### TypeScript is supported

```javascript
import Countries from 'central-cities'
const countries = new Countries()

countries.locations() // return type: array of strings
const portugal = countries.byName('portugal') // return type: Countries class
portugal.capital // return type: string ("Lisboa")
```
