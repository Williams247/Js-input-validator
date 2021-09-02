# JS-Input-Field-Validator

## Installation

```bash
$ npm i js-input-field-validator
```

## Usage

```js
const jsInputFieldValidator = require("js-input-field-validator");

const error = jsInputFieldValidator([
  { value: "Alex", type: "text", min: 4, max: 8, field: "name" },
  { value: 123, type: "number", min: 3, max: 5, field: "number" },
  { value: "testing testing", type: "any", field: "note" },
  { value: "alex@gmail.com", type: "email", field: "email" }
]);

if (error) {
  console.log(error);
} else {
  // Take your prefared action if the validation process passes.
  console.log("Validation process passed");
}
```
## Link
https://www.npmjs.com/package/js-input-field-validator
