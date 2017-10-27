#include <node.h>
#include <v8.h>
#include <nan.h>

#include "mandelbrot.h"


void GetMandelbrotBuffer(const Nan::FunctionCallbackInfo<v8::Value>& info) {
	//v8::Isolate* isolate = args.GetIsolate();
	// gets a v8 engine isolated state	
	if (info.Length() < 3){
		Nan::ThrowTypeError("Incorrect arguments, 3 expected");
		return;
	}
	if (!info[0]->IsNumber() || !info[1]->IsNumber() || !info[2]->IsNumber()){
		Nan::ThrowTypeError("Arguments are not numbers :(");
    	return;
	}

	double x = info[0]->NumberValue();
	double y = info[1]->NumberValue();
	int zoom = info[2]->NumberValue();

	bits8* image = mandleBrotByteArray(x, y, zoom);

	Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer((char*)image, bmpSize);
	v8::Local<v8::Object> obj = buffer.ToLocalChecked();
	info.GetReturnValue().Set(obj);

	free(image);
}


void Init(v8::Local<v8::Object> exports, v8::Local<v8::Object> module) {
  exports->Set(Nan::New("GetMandelbrotBuffer").ToLocalChecked(),
      Nan::New<v8::FunctionTemplate>(GetMandelbrotBuffer)->GetFunction());
}

NODE_MODULE(mandelbrot, Init)