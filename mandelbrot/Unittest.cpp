// for printf, fopen, FILE
#include <stdio.h>
// for atoi, atof
#include <stdlib.h>

#include "mandelbrot.h"

static void unittest(void) {

}

int main(int argc, char* argv[]){
	unittest();
	//printf("escape(0, 0) = %d", escapeSteps(0, 0));
	//exit(1);
	if (argc > 1) {
		char* filename = argv[1];
		FILE* file = fopen(filename, "w");
		double x = 0;
		double y = 0;
		int zoom = 0;
		if (argc > 4) {
			x = atof(argv[2]);
			y = atof(argv[3]);
			zoom = atoi(argv[4]);
		}
		printf("Creating image at x:%lf, y:%lf, zoom:%d as %s\n", x, y, zoom, filename);
		uint8_t* image = mandelbrot::mandleBrotByteArray(x, y, zoom);

		// write the file
		fwrite(image, sizeof(uint8_t), mandelbrot::BMP_BYTES_SIZE, file);
		fclose(file);
	}
}

