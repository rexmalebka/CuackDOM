export interface PT {
	dom: Element
	s: string
}

/*

export class pt implements pt{
	constructor(pt: Element){
		this.dom = pt
		this.s = pt.getAttribute('s')!
		this.id = pt.id
		this._class = pt.classList
	}
}

 */

export interface pt{
	init: Function
	destroy: Function
	parentDom?: Element
	observer: MutationObserver
	errors: {
		[name: string] : Error
	}
	[name: string]: any
}


class PT implements PT{
	private parse(){
		console.debug(this.s)
	}

	constructor(dom:Element){
		this.dom = dom
		let trap = new Proxy(this, {
			get: function(target, key){
				switch(key){
					case "s":
						break
				}
			},
			set: function(target, key, value){
				switch(key){
					case "s":
						break
				}
				return true
			}
		})
		
		this.s = dom.getAttribute('s')
	}
}

export const pt:pt = {
	parse: function(){
		let pts = (this.parentDom as HTMLElement).querySelectorAll('pt')

		console.debug(pts)
	},
	init: function(parentDom:Element){
		console.debug("initdom", parentDom)
		this.parentDom = parentDom
		this.parse()
		this.observer.observe(this.parentDom,{
			childList: true,
			attributes: true, 
			subtree: true
		})
	},
	destroy: function(){
	
	},
	observer: new MutationObserver(function(mutations){
		mutations.forEach(function(mutation){
			switch(mutation.type){
				case "attributes":
					break
				case "childList":
					break
			}
		})
		
	}),
	errors: {

	}
}
