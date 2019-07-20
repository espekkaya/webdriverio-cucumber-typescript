# WebdriverIO v5 Typescript with Cucumber BDD Boilerplate Project

This is a boilerplate project which uses WebdriverIO v5, Cucumber and TypeScript v3. 

We also use below libraries;

	1. Allure Report
	2. Eslint
	3. Husky
	4. Chai



## Requirements

-   Node version 8 or higher
- `JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` on your local environment nothing else

## Installation

	$ cd e2e
	$ npm install

## How to use


### Run e2e Tests

	$ npm run test

### Generate Alllure Report and open the browser.

	$ npm run report:generate
	$ npm run report:open

## Using Linter for clean code

You can manage your clean code via eslint.

	$ npm run eslint

or you can fix automatically code fixed

	$ npm run eslint-fix

###  Pre-Commit checking code

Developers  posibble push dirty code. We check code via husky, adding to pre-commit section.

In package.json add commit hooks on your behalf automatically.

	"husky": {  
		"hooks": {  
			"pre-commit": "npm run eslint-fix"  
		} 
	},

## What is .editorconfig file?

EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. 

The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. 

EditorConfig files are easily readable and they work nicely with version control systems.