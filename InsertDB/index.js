const dbConnect = require('../InsertDB/mongodb');


const insert = async ()=>{

    const db = await dbConnect();
    console.log("Insert Function ");
    const result = await db.insertMany([{
        name:'poco x5',
        brand:'xiaomi',
        price:300,
        category:'Mobile'
    },{
            name:'poco x6',
            brand:'xiaomi',
            price:304,
            category:'Mobile'
        },
        {
            name:'poco x7',
            brand:'xiaomi',
            price:300,
            category:'Mobile'
        }]

        );
    if(result.acknowledged ){
        console.log(result);
    }
}

insert();

//For insert one we can pass insertOne , For insert many -> we can user insertMany