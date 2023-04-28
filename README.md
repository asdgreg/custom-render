### Generate a website from a json

We  define a renderHtml() function that recursively renders the HTML tree structure as a series of React elements using React.createElement(). 
The renderHtml() function takes a single node object as its argument, and creates a React element for that node by mapping over its children array (if it exists) and recursively calling itself for each child node.

we render the HTML tree structure by calling renderHtml() with the top-level HTML node, which in this case is the div with an ID of "root".

# Demo
https://asdgreg.github.io/custom-render/



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
