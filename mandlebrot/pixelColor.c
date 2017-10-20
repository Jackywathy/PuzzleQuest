// pixelColor.c
// These are the colours I am suggesting to use. If you do not agree with it, please tell me. - Callum
// Programmed by Callum Koh, Jack Jiang, Evan Lee

#include <stdio.h>
#include <stdlib.h>
#include "pixelColor.h"

// Help, I think I use too much Python3 and I don't ever use #defines...
static unsigned char shade(int steps);

unsigned char stepsToRed (int steps) {
    unsigned char k = 0;
    // 2nd nner color
    if (steps < 256 && steps > 172) {
        k = shade(steps);
    }

    if (steps >= 255) {
        k = 253;
    }
    return k;
}

unsigned char stepsToBlue (int steps) {
    unsigned char k = 0;
    // 2nd outer color
    if (steps < 86) {
        k = shade(steps);
    }

    if (steps >= 255) {
        k = 23;
    }
    return k;
}
unsigned char stepsToGreen (int steps) {
    unsigned char k = 0;
    // Middle color
    if (steps > 85 && steps < 173) {
        k = shade(steps);
    }
    if (steps >= 255) {
        k = 208;
    }
    return k;
}

static unsigned char shade(int steps) {
    unsigned char k = steps;
    if (steps == 256) {
        k = 0;
    }
    return k;
}