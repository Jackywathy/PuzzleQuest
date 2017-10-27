// pixelColor.c
// These are the colours I am suggesting to use. If you do not agree with it, please tell me. - Callum
// Programmed by Callum Koh, Jack Jiang, Evan Lee

// pixelColor.c
// These are the colours I am suggesting to use. If you do not agree with it, please tell me. - Callum
// Programmed by Callum Koh, Jack Jiang, Evan Lee

#include <stdio.h>
#include <stdlib.h>
#include "pixelColor.h"
#include <math.h>

// Help, I think I use too much Python3 and I don't ever use #defines...

unsigned static char toZero (int num) {
    if (num < 0) {
        num = 0;
    }
    return num;
}

unsigned char stepsToRed (int steps) {
    return toZero((steps*2)%256);
}

unsigned char stepsToBlue (int steps) {
    return toZero((steps*steps)%256);
}
unsigned char stepsToGreen (int steps) {
    return toZero(steps-20)%256;
}


