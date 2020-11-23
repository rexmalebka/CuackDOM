import { pt } from "./lib/pt"

export interface Lib{
	[name: string]: { 
		init: Function
		observer: MutationObserver
		errors: {
			[name: string]: Error
		} 
		[name:string]: any
	}
}

export const Lib:Lib = {
	pt: pt,
}
