# Cuack DOM

attempt at making DOM music based

## Features

- Looper
- injection of data dynamically
- DOM Conditionals vue.js style
- jiinja templating as vue.js
- synthesis, maybe

## suggested syntax:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<cuack class="stack">
		<pt s="sn sn sn drum drum" amp="0.4" speed="1 2 2 2 " id="d1" class="stack "></pt>
		<pt s="drum piano piano" amp="2" pan="0 1" id="d2"></pt>
		<pt s="drum piano {{ instrumento }}" amp="2" pan="0 1" class="once" ></pt>
	</cuack>
	<script src="/cuack.js"></script>
</body>
```

## How

- DOM Mutation Observers
- some webaudio framework
- web workers maybe
- Codemirror

For the moment I'm writiing this in typescript, using webpack for building to a bundle file for web.


1.- For install all the necessary:

`npm install`  

2.- to run this

`npm run dev` 

3.-  to build

`npm run build`


- `src/` it's intended for sources
- `src/lib` it's intended for libraries
- `app/` it's intended for web app
- `build/` for webserver built stuff

