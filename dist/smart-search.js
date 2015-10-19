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
/***/ function(module, exports) {

	var SmartSearch,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	SmartSearch = (function() {
	  function SmartSearch(arg) {
	    var options, resources;
	    resources = arg.resources, options = arg.options;
	    this.search = bind(this.search, this);
	    this.Resources = resources ? resources : ["Javascript", "Hack-lang", "Go-lang", "Coffeescript", "PHP", "Ruby", "Swift", "Python", "Perl", "Java", "Scala", "Clojure", "Erlang", "Elixir", "C", "C++", "C#"];
	    this.limit = 3;
	  }

	  SmartSearch.prototype.findSimilarity = function(query, expectation) {
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

	  SmartSearch.prototype.setResources = function(res) {
	    return this.Resources = res;
	  };

	  SmartSearch.prototype.search = function(searchString) {
	    var res, results, ret;
	    if (!this.Resources) {
	      return console.warn('no resources has been set, read the docs https://github.com/alileza/smart-search#setResources');
	    }
	    results = this.Resources.map((function(_this) {
	      return function(item) {
	        return {
	          name: item,
	          score: _this.findSimilarity(searchString, item)
	        };
	      };
	    })(this));
	    results = results.sort(function(a, b) {
	      return b.score - a.score;
	    });
	    ret = [];
	    res = 0;
	    while (res < this.limit) {
	      ret.push(results[res]);
	      res++;
	    }
	    return ret;
	  };

	  return SmartSearch;

	})();

	SmartSearch = new SmartSearch({});

	console.dir(SmartSearch.search('lang'));


/***/ }
/******/ ]);