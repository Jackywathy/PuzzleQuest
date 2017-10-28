{

	"targets" :[
		{
			"target_name" : "mandelbrot",
			"sources": [
				"mandelbrot/mandelbrot.cpp",
				"mandelbrot/pixelColor.cpp",
				"mandelbrot/nodeInterface.cpp"
			],
			 "include_dirs": [
        		"<!(node -e \"require('nan')\")"
      		]
		}
	],

}