Please implement the simple application in React. Requirements are in the picture, but here are some more comments for clarity:

The template requests when creating a new widget, the value name should be entered (not the value). This way the value is bound to the widget.
There can be more than 1 value and more than 2 widgets to track
The template requests that every time the create widget button is clicked, a new widget should be created. We could see more than 1 widget of the same type, and each of them could track a different value or the same value.
For example:

User creates new widget (widget-name=’widget 1’, value-name=’value 1’, type=’input’)
User creates new widget (widget-name=’widget 2’, value-name=’value 1’, type=’buttons’)
User creates new widget (widget-name=’widget 3’, value-name=’value 1’, type=’input’)
User creates new widget (widget-name=’widget 4’, value-name=’value 2’, type=’input’)
Now, the page should render 4 widgets. When user clicks a button in widget 2, the value shown in widget 1 and 3 should also both change. The value in widget 4 will remain unchanged

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
