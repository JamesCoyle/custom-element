export default class CustomElement extends HTMLElement
{
	static registerAs(name)
	{
		customElements.define(name, this);
	}

	connectedCallback()
	{
		// build shadow dom
		this.attachShadow(
		{
			mode: 'open'
		});

		// check if template defined
		if (typeof this.constructor.template !== 'undefined')
		{
			// append template
			this.shadowRoot.innerHTML = this.constructor.template;

			// get default slot
			this.defaultSlot = this.shadowRoot.querySelector('slot:not([name])');
		}
		else
		{
			this.defaultSlot = null;
		}
	}
}
