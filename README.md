## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn start`

Runs the app in the production mode.<br />
The app is served from the `build` folder, open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Deployment

Pushing to the `master` branch will automatically trigger the deployment pipeline which first builds the app using the `yarn build` command, and then deploys it to GitHub Pages using GitHub Actions.<br />
The app will soon be available at [https://mdoury.github.io/docavenue](https://mdoury.github.io/docavenue).
