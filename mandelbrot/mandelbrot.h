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

#define bits8 uint8_t


int escapeSteps (double x, double y);

// Generates a mandelBrot bitmpa array.
// Has size bmpSize
bits8 *mandleBrotByteArray(double x, double y, int zoom);

// bmp header size in bytes
extern const int bmpHeaderSize;
// bmp size in bytes
extern const int bmpSize;

