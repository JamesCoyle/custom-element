# Custom Element
A basic, lightweight helper for creating webcomponents

## Usage
CustomElement is a class which extends HTMLElement and sets up shadow dom and element registration automatically.

### Create a New Webcomponent
The following is the minimum required code to create a webcomponent using CustomElement:

```js
import CustomElement from '../../custom-element/custom-element.js';

customElements.define('my-element',
    class extends CustomElement
    {
    
    });
```

### Add a Template
A template can be added easily by adding a static template getter which returns the template as a string. In the following example I'm using Webpack to import the HTML file as a string so I don't need to inline the HTML in the JavaScript file. You could also fetch this file via `XMLHttpRequest` or `fetch`, import a javascript file which exports the string, or can just use an inline string if you prefer.

```js
import CustomElement from '../../custom-element/custom-element.js';
import dom from './my-element.html.js';

customElements.define('my-element',
    class extends CustomElement
    {
    	static get template()
    	{
    		return dom;
    	}
    });
```

## Properties
The following properties are available to classes which inherit custom element. Note: these properties are undefined within the constructor as they depend on DOM content of the element instance to be loaded and as such must be inititalized within the connectedCallback.

### Shadow Root
Provides access to DOM content added by the template.

#### Syntax
```js
this.shadowRoot;
```

### Default Slot
Returns the default slot element if defined, otherwise null.

#### Syntax
```js
this.defaultSlot;
```

#### Parameters
Parameter | Description
--- | ---
elementName | The tag name to use for the element. eg. 'my-element'
