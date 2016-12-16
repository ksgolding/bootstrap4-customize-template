var fs = require('fs-extra');
const exec = require('child_process').exec;

try {
    //fs.ensureDirSync('./build');
    console.log('copying ./src files ./bootstrap_src/scss');
    //init, copy the node_modules/bootstrap files to a project directory    
    fs.copySync('./src', './bootstrap_src/scss');
    //copy the bootstrap scss customize file to the local source directy, which will be source controlled.
    console.log('building bootstrap4');
    //installing npm componets for bootstrap_src
    run_grunt('./bootstrap_src', 'dist -f');
} catch(err) {
    console.log('Error copying boostrap files to bootstrap source directory.', err);
}

function run_grunt(path, params) {
    exec('grunt ' + params, {cwd:path}, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    console.log('copying dist');
    fs.copySync('./bootstrap_src/dist', './dist');
});
}