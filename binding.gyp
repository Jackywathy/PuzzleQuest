{

	"targets" :[
		{
			"target_name" : "mandelbrot",
			"sources": [
				"mandelbrot/nodeInterface.cpp",
				"mandelbrot/mandelbrot.cpp",
				"mandelbrot/pixelColor.cpp"
			],
			 "include_dirs": [
        		"<!(node -e \"require('nan')\")"
      		]
		}
	],

}