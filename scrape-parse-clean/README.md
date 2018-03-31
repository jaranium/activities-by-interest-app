http://travel-with-interests.herokuapp.com/

This is the module responsible for scraping, parsing, and cleaning the data.

scrape <==> download data
parse <==> filter through (the often first scraped) raw data to extract desired parts of it
clean <==> save the (often first parsed) pieces of data in a form that we can use it in the rest of the app (ie with names that our app uses in our internal database).

Advice: Use google to search for how to do specific things with the EventBrite API. Figuring out how to do specific, simple queries are not very clear simply from looking at their documentation.

To get started, take a look at the package.json. Inside, type the relevant `npm run {script}` (the package.json contains a build command which transpiles the files in src to vanilla javascript files in lib, which can then be run via node or mocha, for example, but there are specific `npm run {script}` commands for each thing, so no need to ever type `node {filename}` or `mocha filename`, etc).