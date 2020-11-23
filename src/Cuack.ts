import { Clock } from "./Clock"
//import { Play } from "./Play"
import { Lib } from "./Lib"

declare global {
	interface Window { 
		Cuack: Cuack
	}
}

interface Cuack {
	init: Function
	dom: Element
	clock: Clock
	observer?:  MutationObserver
	squawk: Function
}

class ErrorCuackDomNotFound extends Error{
	constructor(message:any){
		super(message)
		this.name = "CuackDomNotFound"
	}
}

class Cuack implements Cuack{

	private createClock(){
		console.info('\tquering Clock Dom')
		const clock: Element | null = document.querySelector("clock")

		if(clock === null){
			console.info('\tClock Dom not found, creating default clock.')
			let clkElem: Element = document.createElement("clock")
			this.clock = new Clock(clkElem)
			this.dom.prepend(clkElem)
		}else{
			console.info('\tClock found.')
			this.clock = new Clock(clock)
		}
	}
	
	private createPlayer(){
		console.info('\tquerying Players.')
		let players = document.querySelectorAll("play")
		if(players.length == 0){
			let player = document.createElement("play")
			while (this.dom.childNodes.length > 0) {
				let fc = this.dom.firstChild!
				player.appendChild(fc)
			}
			this.dom.appendChild(player)
		}
	
	}

	private initLibs(){
		for(let k in Lib){
			Lib[k].init(this.dom)
		}
	}

	constructor(){
		this.init  = function(){
			console.group('[Cuack]')
			console.info("\tstarting 🦆🦆🦆")
			const cuack: Element | null = document.querySelector("cuack")
			if(cuack === null){
				throw new ErrorCuackDomNotFound("Dom Element not found in body")
			}
			this.dom = cuack

			//this.createClock()
			//this.createPlayer()
			console.groupEnd()

			this.squawk = function(){
				Array.from(this.dom.children).forEach(function(node: Element){
					console.debug("cuack",node)
				})
			}

			this.initLibs()
		}
	
	}
}


let cuack = new Cuack()
cuack.init()
window.Cuack = cuack

