import ClockWorker from 'worker-loader!./workers/clock.worker';

export interface Clock{
	dom: Element
	bpm: number
	start: Function
	stop: Function
	now: Function
	worker: Worker
	observer: MutationObserver
}

export class Clock implements Clock{

	constructor(clkElem:Element){

		this.start = function(){

			this.dom.setAttribute('bpm', String(this.bpm))

			this.observer.observe(this.dom,  { attributes: true })
			
			this.worker = new ClockWorker()
			this.worker.postMessage({
				bpm: this.bpm
			})
			this.worker.addEventListener("message", function(event){
				console.debug("relojito : ",event.data)
			})
			this.worker.postMessage("start")
			console.debug(this.worker)

		}

		this.stop = function(){
		}

		this.now = function(){
		}
		this.dom = clkElem
		this.observer =  new MutationObserver(function(mutationList){
			console.debug(mutationList[0])
		})

		let traps = new Proxy(this, {
			get: function(target:any, key:string){
				switch(key){
					case "bpm":
						return target.bpm
						break
					case "start":
						return target.start.bind(target)
						break
				}
			},
			set: function( target:any, key:string, value: any){
				switch(key){
					case "bpm":
						target.bpm = value === null || value ==="" ? 120 : Number(value)
						break
				}
				return true
			},
		
		
		})
		traps.bpm = clkElem.getAttribute("bpm")

		return traps
	}
}
