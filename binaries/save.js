const os = require('os');
const fs = require('fs');
const path = require('path');
const platform = os.platform();

// thx- https://stackoverflow.com/questions/31645738/how-to-create-full-path-with-nodes-fs-mkdirsync
function mkdir(location) {
    let normalizedPath = path.normalize(location);
    let parsedPathObj = path.parse(normalizedPath);
    let curDir = parsedPathObj.root;
    let folders = parsedPathObj.dir.split(path.sep);
    folders.push(parsedPathObj.base);
    for(let part of folders) {
        curDir = path.join(curDir, part);
        if (!fs.existsSync(curDir)) {
            fs.mkdirSync(curDir);
        }
    }
}

// check if the built module exists, and save it in binaries/${platform}/mandelbrot.node
if (fs.existsSync("./build/Release/mandelbrot.node")){
	// run from root folder
	mkdir(`./binaries/${platform}/`)
	fs.createReadStream('./build/Release/mandelbrot.node').pipe(fs.createWriteStream(`./binaries/${platform}/mandelbrot.node`));

} else if (fs.existSync("../build/Release/mandelbrot.node")){
	// run from binaries folder
	mkdir('../binaries/${platform}/')
	fs.createReadStream('../build/Release/mandelbrot.node').pipe(fs.createWriteStream(`../binaries/${platform}/mandelbrot.node`));

} else {
	throw new Error("can't find file");
}