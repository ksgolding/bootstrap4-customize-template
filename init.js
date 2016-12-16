var fs = require('fs-extra');
const exec = require('child_process').exec;

try {
    //fs.ensureDirSync('./bootstrap_src');
    //fs.ensureDirSync('./src');
    console.log('copying npm boostrap folder to bootstrap_src');
    //init, copy the node_modules/bootstrap files to a project directory    
    fs.copySync('./node_modules/bootstrap', './bootstrap_src');
    //copy the bootstrap scss customize file to the local source directy, which will be source controlled.
    console.log('copying scss/_custom.scss boostrap folder to ./src');
    fs.copySync('./bootstrap_src/scss/_custom.scss','./src/_custom.scss');
    //installing npm componets for bootstrap_src
    run_npm('./bootstrap_src', 'install');
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