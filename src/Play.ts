export interface Play{
	parent: Node | ParentNode
	id: number
	src: string
	loop: boolean
	tag: Element
}

export class Play implements Play{
	constructor(playElem:Element){
		let src:string = playElem.getAttribute("src")!
		src = (src !== null) ? playElem.getAttribute("src") +"" : ""

		let loop:string | boolean = playElem.getAttribute("loop")!
		loop = loop === null || loop.toLowerCase() == "false"  ?  false : true

		this.loop = loop
		this.src = src
		this.id = Array.prototype.indexOf.call((playElem.parentNode!).children, playElem)
		this.tag = playElem
		this.parent = playElem.parentNode!

	}
}
