const dbConnect = require('../UpdateDB/mogodb');


const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        {name:'poco x5 pro'},
        {$set:{name:'poco x10 pro'}}
    );


    console.log(result);
}

updateData();