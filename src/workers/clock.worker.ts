const ctx: Worker = self as any;

interface clk{
	bpm:number
	count: number
	current: number
	startTime: number
	status:string
	timeoutId?:number
	delta: number
}

const Clock:clk = {
	bpm:120,
	count:0,
	delta:0,
	status:"stopped",
	startTime:0,
	current:0
}

function start(){
	Clock.startTime = Date.now()
	Clock.status = "started"

	function tick(){
		Clock.current =  Date.now() - Clock.startTime
		Clock.count += 1
		let delta = Clock.current - (Clock.count * (60*1000) / (Clock.bpm + Number.EPSILON)) 
		Clock.delta = delta

		ctx.postMessage(Clock);
		Clock.timeoutId = setTimeout(tick, Math.max(0,  ((60*1000) / (Clock.bpm + Number.EPSILON) ) - delta ) )
	}

	Clock.timeoutId = setTimeout(tick, (60 * 1000 ) / (Clock.bpm + Number.EPSILON))
}

ctx.addEventListener('message', function(event){
	let data:any = event.data
	switch(typeof data){
		case "string":
			switch(data){
				case "start":
					start()
					break
				case "stop":
					break
				case "pause":
					break
			}
			break
		case "object":
			// {bpm: 122}
			// {sched: }
			if(data.hasOwnProperty('bpm')){
				Clock.bpm = data.bpm
			}
			break
	}
});
