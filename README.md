# https-lite

 A light weight nodejs https library

## Usage

### Get

```javascript
const httpslite = require("./https-lite");

(async () => {
    try{
        var result = await httpslite.Get("example.com", {});
        console.log(result);
    }catch(e){
        console.log(e);
    }
})();
```

### Post

```javascript
const httpslite = require("./https-lite");

(async () => {
    try{
        var result = await httpslite.Post("example.com", {}, {name: "test", lastname: "test"});
        console.log(result);
    }catch(e){
        console.log(e);
    }
})();
```

### Put

```javascript
const httpslite = require("./https-lite");

(async () => {
    try{
        var result = await httpslite.Put("example.com", {}, {name: "test", lastname: "test"});
        console.log(result);
    }catch(e){
        console.log(e);
    }
})();
```

### Delete

```javascript
const httpslite = require("./https-lite");

(async () => {
    try{
        var result = await httpslite.Delete("example.com", {});
        console.log(result);
    }catch(e){
        console.log(e);
    }
})();
```
