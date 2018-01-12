export default class CustomElement extends HTMLElement
{
	static define(name)
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

		// append template if defined
		if (typeof this.constructor.template !== 'undefined')
			this.shadowRoot.innerHTML = this.constructor.template;
	}
}
