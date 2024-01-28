
const fs = require('fs');
const  path = require('path');
const dirPath= path.join(__dirname , 'files')
console.warn(dirPath)

// for(i= 0 ; i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","A simple file ")
// }


fs.readdir(dirPath,(err,files)=>{
    // console.log(files)
    files.forEach((item)=>{
        console.log("files name is--> ",item)
    })
})
