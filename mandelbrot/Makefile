CC = gcc
CFLAGS = -Werror -Wall

unittest: mandelbrot pixelColor
	$(CC) $(CFLAGS) -o main Unittest.c mandelbrot.o pixelColor.o -lm 


pixelColor: pixelColor.c
	$(CC) $(CFLAGS) -c pixelColor.c -o pixelColor.o 


mandelbrot: mandelbrot.c
	$(CC) $(CFLAGS) -c mandelbrot.c -o mandelbrot.o






clean:
	rm mandelbrot.o
	
