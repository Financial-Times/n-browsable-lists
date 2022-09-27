# n-browsable-lists

Client side component to show a panel with browsable lists for a topic

This component will be imported on the article page and shown on the right-hand rail below the concept list component.

## How to use in a consuming app


```
import { BrowsableLists } from '@financial-times/n-browsable-lists';

<>
	...
	<BrowsableLists />
	...
</>
```

Import the styles into main.scss, as set the min width for desktop styling (to match the rest of the app):
```
@import '@financial-times/n-myft-dropdown/main';
```

## Developing

To run it locally using its demo page:
```
git clone git@github.com:Financial-Times/n-browsable-lists.git
cd n-browsable-lists
npm install
npm run demo
```

When you run the last command command, it starts two processes: one with Node running an express server to serve the demo page on `http://localhost:3000`, and the other one with the `WebpackWatch` task to watch for changes on the `css`, `js` files.

To run it locally in the consuming app, run these first:

```
git clone git@github.com:Financial-Times/n-browsable-lists.git
cd n-browsable-lists
npm install
npm link
```

And then, in the consuming app, ensure that the code described in "How to use in a consuming app" is present, and run `npm link @financial-times/n-browsable lists`. 
