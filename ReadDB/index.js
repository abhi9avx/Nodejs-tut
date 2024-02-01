const dbConnect =require('../ReadDB/mongodb')

//Process1 DB connect and Read
// dbConnect().then((resp)=>{
//     resp.find({name:"M40"}).toArray().then((data)=>{
//         console.warn(data)
//     })
// })


//Process2  DB connect and Read

const main = async  ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data)
}

main();
