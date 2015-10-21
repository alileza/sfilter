/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var SFilter;

	SFilter = __webpack_require__(1);

	window.SFilter = new SFilter({});


/***/ },
/* 1 */
/***/ function(module, exports) {

	var SFilter,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	SFilter = (function() {
	  function SFilter(arg) {
	    var options, resources;
	    resources = arg.resources, options = arg.options;
	    this.find = bind(this.find, this);
	    this.sort = bind(this.sort, this);
	    this.Resources = resources != null ? resources : ["Javascript", "Hack-lang", "Go-lang", "Coffeescript", "PHP", "Ruby", "Swift", "Python", "Perl", "Java", "Scala", "Clojure", "Erlang", "Elixir", "C", "C++", "C#"];
	    this.limit = 5;
	    this.results = [];
	  }

	  SFilter.prototype.findSimilarity = function(query, expectation) {
	    var diff, i, length, min, plus;
	    plus = 0;
	    min = 0;
	    query = query.toLowerCase();
	    expectation = expectation.toLowerCase();
	    diff = Math.abs(query.length - expectation.length);
	    length = expectation.length > query.length ? expectation.length : query.length;
	    i = 0;
	    while (i < length) {
	      if (expectation.indexOf(query[i]) > -1) {
	        plus++;
	      } else {
	        min++;
	      }
	      i++;
	    }
	    plus += diff;
	    return (plus / (plus + min)) * 100;
	  };

	  SFilter.prototype.setResources = function(res) {
	    return this.Resources = res;
	  };

	  SFilter.prototype.setLimit = function(res) {
	    return this.limit = res;
	  };

	  SFilter.prototype.sort = function(key) {
	    return this.results = this.results.sort(function(a, b) {
	      return b[key] - a[key];
	    });
	  };

	  SFilter.prototype.calculate = function(searchString) {
	    this.results = this.Resources.map((function(_this) {
	      return function(item) {
	        return {
	          name: item,
	          score: _this.findSimilarity(searchString, item)
	        };
	      };
	    })(this));
	    return this;
	  };

	  SFilter.prototype.find = function(searchString) {
	    var i, resultFinal;
	    if (!this.Resources) {
	      return console.warn('no resources has been set, read the docs https://github.com/alileza/sfilter#setResources');
	    }
	    this.calculate(searchString).sort('score');
	    resultFinal = [];
	    i = 0;
	    while (i < this.limit) {
	      resultFinal.push(this.results[i].name);
	      i++;
	    }
	    return resultFinal;
	  };

	  return SFilter;

	})();

	module.exports = SFilter;


/***/ }
/******/ ]);