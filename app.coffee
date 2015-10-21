class SFilter

	constructor: () ->
		@Resources = if resources? then resources else ["Javascript", "Hack-lang", "Go-lang", "Coffeescript", "PHP", "Ruby", "Swift", "Python", "Perl", "Java", "Scala", "Clojure", "Erlang", "Elixir", "C", "C++", "C#"]
		@limit = 5
		@results = []

	findSimilarity: (query, expectation) ->
		plus = 0
		min = 0
		query = query.toLowerCase()
		expectation = expectation.toLowerCase()

		diff = Math.abs( query.length - expectation.length )

		length = if expectation.length > query.length then expectation.length else query.length

		i = 0
		while i < length
			if expectation.indexOf(query[i]) > -1
				plus++
			else
				min++
			i++
		
		plus += diff

		return (plus/(plus+min))*100

	setResources: (res) -> @Resources = res
	setLimit: (res) -> @limit = res

	sort: (key) => @results = @results.sort (a, b) -> (b[key]-a[key])

	calculate: (searchString) -> 
		@results = @Resources.map (item) => { name: item, score: @findSimilarity(searchString, item)  }

		return @

	find: (searchString) =>
		return console.warn 'no resources has been set, read the docs https://github.com/alileza/sfilter#setResources' if not @Resources
		
		@calculate( searchString ).sort('score')
		
		resultFinal = []
		i = 0
		while i < @limit
			resultFinal.push @results[i].name
			i++

		return resultFinal

module.exports = SFilter


