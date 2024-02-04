const dbConnect = require('../DeleteDB/mongodb');

const deleteData = async()=>{
    let data = await  dbConnect();

    let result = await data.deleteMany({
        name:'poco x7'
    });
    if(result.acknowledged){
        console.log(result);
    }
}

deleteData();