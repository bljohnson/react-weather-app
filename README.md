#Simple React App

* This is a simple React app built under the guidance of the Udemy course, "The Complete React Web App Developer Course." The purpose of this is to gain basic understanding of how a React app is structured, including components (purpose, different types, nested components, how to get them to communicate, etc.), JSX basics,  user events and callbacks, and props versus state.

* Install webpack globally
`sudo npm install -g webpack@1.12.13`
	* Allows you to bundle all third party dependencies along with your application code
	* Allows you to separate components into their own files and include them, which makes testing and scaling easier

* Keep webpack running to constantly watch for file changes
`webpack -w`

* Install third party dependencies locally
`npm install --save react@0.14.7 react-dom@0.14.7`
	* Updates package.json file, telling project which versions of modules you want to have installed, and adding them to node_modules folder

* Install development dependencies locally
	`npm install --save-dev webpack@1.12.13 babel-core@6.5.1 babel-loader@6.2.2 babel-preset-es2015@6.5.0 babel-preset-react@6.5.0`
