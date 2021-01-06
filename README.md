# https-lite

 A light weight nodejs https library

## Usage

```javascript
const httpslite = require("./https-lite");

(async () => {
    try{
        var result = await httpslite.Get("example.com", "", {});
        console.log(result);
    }catch(e){
        console.log(e);
    }
})();
```
