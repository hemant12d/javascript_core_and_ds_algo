const fs = require('fs');
// function createfileName(file, createExtensionFn) {
//     fileName = createExtensionFn(file);

//     fs.readFile(fileName, 'utf-8', (err, res) => {
//         if (err) console.log("Can't find file ", err.message);

//         fs.writeFile('file2.txt', res, (err) => {
//             if (err) console.log("Can't saved to file2.txt");
//             console.log("File Successfully saved");

//             fs.readFile('file3.txt', 'utf-8', (err, res) => {
//                 if (err) console.log("Can't find file3.txt data");
//                 console.log("File 3 also read successfully");
//             })

//         });
//     })
// // };

// function createfileName(file, createExtensionFn) {
//     fileName = createExtensionFn(file);
//     return new Promise((resolve, reject) => {
//         resolve(fileName);
//     });
// };


createExtension = file => {
    return file + '.txt';
}

// createfileName('file1', createExtension).then(fileName => {
//     return fs.readFile(fileName, 'utf-8', (err, res) => {
//         return new Promise((resolve, reject) => {
//             resolve(res);
//         })
//     })
// })
//     .then((res) => {
//         return fs.writeFile('file2.txt', res, (err) => {
//             console.log("File Successfully saved");
//             return new Promise((resolve, reject) => {
//                 resolve();
//             });
//         })
//             .then(() => {
//                 fs.readFile('file3.txt', 'utf-8', (err, res) => {
//                     console.log(res);
//                     console.log("File 3 also read successfully");
//                 })
//             })
//             .catch(err => {
//                 console.log(err.message);
//             })

//     });

console.log("Hello");

setTimeout(() => {
    console.log("Hey");
}, 0);

console.log("Namaste");