# SFilterJS

SFilter is lightweight (1.5KB) javascript library for searching through array with fault tolerant.

## Example
### on web
```html
<script src="/dist/sfilter.js"></script>
<script>
		SFilter.setResources(["Javascript", "Hack-lang", "Go-lang", "Coffeescript", "PHP", "Ruby", "Swift", "Python", "Perl", "Java", "Scala", "Clojure", "Erlang", "Elixir", "C", "C++", "C#"]);
		SFilter.find("jvscript");
		// Return should be ["Javascript", "Coffeescript", "Swift", "C", "Java"]
		// Sorted by most similar words
		
</script>
```

### on NodeJS
```javascript
var sfilter = require('sfilter');
var sf = new sfilter();
sf.setResources(["Java","php","node","scala","hacklang"]);
sf.setLimit(2);
console.dir ( sf.find("scalde") );
```

## Installation

### using NPM
```sh
npm install sfilter --save
```


### using Browser
```sh
git clone git@github.com:alileza/sfilter.git
cd sfilter
open example.html
```

## Docs
### Set Resources
Array list is called as Resources, for the array of object will be supported soon.
```javascript
// all resources must be string, and not an object
SFilter.setResources(["Javascript", "Hack-lang", "Go-lang"]);
```
### Set Limit
Limit the response of SFilter find
```javascript
// Set response limit
SFilter.setLimit(2);
```

### Find
Find similar string on the resources
```javascript
// Get the response
SFilter.find("Jvscrpth");
```
## Test
coming soon
