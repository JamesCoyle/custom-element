# custom-element
A basic helper for creating webcomponents
# Usage
CustomElement is a class which extends HTMLElement and sets up shadow dom and element registration automatically.

## Create a New Webcomponent
The following is the minimum required code to create a webcomponent using CustomElement:

```js
import CustomElement from '../custom-element.js';

export default class MyElement extends CustomElement
{

}

MyElement.define('custom-element');
```
	
## Add a Template
A template can be added easily by adding a static template getter which returns the template as a string. In the following example I'm using Webpack to import the HTML file as a string so I don't need to inline the HTML in the JavaScript file. You could also fetch this file via `XMLHttpRequest` or `fetch` if desired, import a javascript file which exports the string, or can just use an inline string if you prefer.

```js
import CustomElement from '../custom-element.js';
import dom from './my-element.html'; // must be packaged with build tools if you do this

export default class MyElement extends CustomElement
{
	static get template()
	{
		return dom;
	}
}

MyElement.define('custom-element');
```
