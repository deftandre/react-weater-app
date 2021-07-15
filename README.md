# Weather App

A weather app with google maps, you can mark map where you want to see the weather in nearby cities.

Available in https://deftweatherapp.netlify.app/

## Techinical choices

I like to work with this stack: ReactJs with Material UI and Styled Components.

Material UI has amazing components and the documentation is so good with styled components I can styled components in code, I think it's so good in development time and the ReactJs component code stay clean.
Another advantage about Material UI is the Mobile first methodology, you can build web apps for almost all devices.

I used the React Router DOM library for navigation using components like (Link, Redirect, Route, Switch, useLocation) to build this SPA.

For the best user experience when loading pages I used imports dynamics from ReactJs.

For data manipulation I used hooks useState and useEffect, between the Home page to city-info page I only send the data in state location and get in city-info with hook useLocation.

For GoogleMaps I used google-maps-react because I compare with others dependencies, then, I think google-maps-react is more simple than others and I liked more his documentation.

## Default settings for environment variables

Create a '.env.local' file at the root of your application, with the following variables:

```
BROWSER=none

REACT_APP_API_KEY_GOOGLEMAPS=
REACT_APP_API_OPEN_WEATHER=
```

# Initial config

First you need to install dependencies with command `yarn`
After that follow available scripts.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

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

### `yarn docs`

Create and update the documentation to the `docs` folder.\
You can find html doc file in: `docs\index.html`

## License

[MIT](https://github.com/deftandre/licenses/blob/master/MIT-LICENSE) &copy; André Almeida
