/*
 *  mandelbrot.h
 *  mandelbrot server
 *
 *  Created by Richard Buckland on 13/04/13.
 *  Licensed under Creative Commons BY 3.0.  
 *
 */
// calcuates the number of steps required 

// for bits8
#include <stdint.h>

#define BYTES_PER_PIXEL 3


namespace mandelbrot {
	int escapeSteps(double x, double y);

	// Generates a mandelBrot bitmpa array.
	// Has size bmpSize
	uint8_t *mandleBrotByteArray(double x, double y, int zoom);

	const int PIXELS_HEIGHT = 512;
	const int PIXELS_WIDTH = 512;
	const int MAX_ITERATION = 256;

	const uint8_t bmpHeader[] = {
      0x42, 0x4D, 0x36, 0x00, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x36, 0x00, 0x00, 0x00, 0x28, 0x00,
      0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x01, 0x00, 0x18, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x0C, 0x00, 0x13, 0x0B, 0x00, 0x00, 0x13, 0x0B, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00
	};

	// size of header
	const int bmpHeaderSize = sizeof(bmpHeader);
	// size of whole BMP
	const int BMP_BYTES_SIZE = (PIXELS_WIDTH * PIXELS_HEIGHT * BYTES_PER_PIXEL) + sizeof(bmpHeader);
}
