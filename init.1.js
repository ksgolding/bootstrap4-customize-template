var fs = require('fs-extra');
const exec = require('child_process').exec;

try {
    console.log('copying ./src to ./bootstrap_src/scss ');
    //init, copy the node_modules/bootstrap files to a project directory    
    fs.copySync('./bootstrap_src', './node_modules/bootstrap/scss');
    //copy the bootstrap scss customize file to the local source directy, which will be source controlled.
    run_grunt('./bootstrap_src', 'dist');
} catch(err) {
    console.log('Error copying boostrap files to bootstrap source directory.', err);
}

function run_npm(path, params) {
    exec('npm ' + params, {cwd:path}, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});
}