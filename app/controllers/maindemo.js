/**
 * Đồng bộ: top -> bottom line by line
 */
// var a = 1;
// var b = 2;

// setTimeout(function(){
//     console.log('Asynchronous')
// }, 1000);

// console.log('Synchronous');
// console.log(a);
// console.log(b);

function readFile(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Reading file...');
            if(mangNgon){
                resolve('file')
            }else{
                reject('file!');
            }
        }, 3000);
    })
}

function downloadFile(file){
    console.log('Download' + file);
}

function quangCao(){
    console.log('Quảng cáo...');
}

readFile().then(function(res){
    downloadFile(file);
}).catch(function(err){
    console.log(err);
});
quangCao();
downloadFile();

String, Number, Boolean, Array, Object

var arr = ['A','B', 'C'];
var json = JSON.stringify(arr);
console.log(typeof JSON.parse(json));