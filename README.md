NB: as of 26th April 2023 we are archiving this repo as it was used for the MVP in a feature test that has now completed. See [our epic](https://financialtimes.atlassian.net/browse/UG-794) for further details.

# n-browsable-lists

Component to show a panel with browsable lists for a concept. It should be imported on the article page and shown on the right-hand rail below the concept list component.

This component has been designed as part of the Browsable Lists A/B test. Therefore, our approach was to have a self-contained component. This means that we expect this component to receive a list of concepts and return the server-side markup, its stylesheets and a client-side module that'll determine which list to show, fetch its data, and re-render the markup with this data. 

## How to use in a consuming app

Import the component and add it to the consumer's markup, passing it `concepts` and `variant` props:
```
import { BrowsableLists } from '@financial-times/n-browsable-lists';

<>
	...
	<BrowsableLists concepts={concepts} variant={variant} />
	...
</>
```

Import the styles into consumer's `main.scss`
```
@import '@financial-times/n-browsable-lists/main';
```

Import the client-side code into the consumer's `main.js` and initialised it, passing it the parent's selector as argument

```
import { init as browsableListsInit } from '@financial-times/n-browsable-lists';

browsableListsInit({
	parentSelector: '.rhr'
});

```

## Developing

To run it locally using its demo page:
```
git clone git@github.com:Financial-Times/n-browsable-lists.git
cd n-browsable-lists
npm install
npm run demo
```

When you run the last command command, it starts two processes: one with Node running an express server to serve the demo page on `https://local.ft.com:5005`, and the other one with the `WebpackWatch` task to watch for changes on the `css`, `js` files.

To run it locally in the consuming app, run these first:

```
git clone git@github.com:Financial-Times/n-browsable-lists.git
cd n-browsable-lists
npm install
npm link
```

And then, in the consuming app, ensure that the code described in "How to use in a consuming app" is present, and run `npm link @financial-times/n-browsable lists`. 
