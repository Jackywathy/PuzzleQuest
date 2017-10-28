// CALLUM KOH IS HERE TO SAVE THE DAY! 
// PUZZLEE QUEST! ¯\_(ツ)_/¯
 
 // for sqrt
#include <math.h>

// for assert
#include <assert.h>

// for malloc
#include <stdlib.h>
#include <stdio.h>


#include "mandelbrot.h"
#include "pixelColor.h"
namespace mandelbrot {
  // Here's my "escapeSteps" function. It passes all the test cases on mandelbrotTest.c!
  int escapeSteps(double x, double y) {
    int steps = 1;
    double originalX = x;
    double originalY = y;

    double newY;
    double newX;
    
    while (steps < MAX_ITERATION && sqrt((x*x + y*y)) <= 2) { // make sure that steps < max and the modulus is <= 2
        newX = (x * x) - (y * y) + originalX; 

        newY = (2.0 * x * y) + originalY;

        x = newX;
        y = newY;
        steps++;
    }
    return steps;
  }

  // Generates a mandelbrot image, returning 
  uint8_t *mandleBrotByteArray(double x, double y, int zoom) {
    uint8_t *outputArray = (uint8_t*) malloc(BMP_BYTES_SIZE);
    
    int count = 0;
    while (count < bmpHeaderSize) {
      outputArray[count] = bmpHeader[count];
      count++;
    }
    
    double pixelSize = pow(2, -zoom);
    // set this to bottom left
    // x is the middle
    double pixelX = x - (((double)mandelbrot::PIXELS_WIDTH) /2 * pixelSize);
    double pixelY = y - (((double)mandelbrot::PIXELS_HEIGHT) /2 * pixelSize);
    
    int colsWritten = 0;
    int rowsWritten = 0;
    
    while (rowsWritten < mandelbrot::PIXELS_HEIGHT) {
      while (colsWritten < mandelbrot::PIXELS_WIDTH) {

  #ifdef DEBUG
        printf("x coordinate: %lf, y coordinate: %lf, excaped: %d \n", pixelX, pixelY, escapeSteps(pixelX, pixelY));
  #endif
        
        int stepsRequired = escapeSteps(pixelX, pixelY);

        outputArray[count] = color::stepsToBlue(stepsRequired);
        count++;
        outputArray[count] = color::stepsToGreen(stepsRequired);
        count++;
        outputArray[count] = color::stepsToRed(stepsRequired);
        count++;
        
        pixelX += pixelSize;
        colsWritten++;
      }
      rowsWritten++;
      colsWritten = 0;
      pixelX = x - (pixelSize/2 + 255 * pixelSize);
      pixelY += pixelSize;
    }
    return outputArray;
  } 
}