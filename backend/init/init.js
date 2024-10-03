const mongoose = require("mongoose");
const CBCS = require("../model/CBCS")
/////////////

/////////



/////
const MongoUrl = "mongodb://127.0.0.1:27017/QBProject";
const DBURL = "mongodb+srv://sarthakchaudhari888:ETa3lafvpb9iVndM@cluster0.qmubn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



main().then(() => {
  console.log("connected to DB");
})
  .catch((e) => {
    console.log(e);
  });



async function main() {
  await mongoose.connect(DBURL);
}

///////////////////////////

initDB_sem5 = async () => {

  await Semester5.deleteMany({});

  // advance java
  await Semester5.findOneAndUpdate(
    {},
    { $push: { AdvanceJava: { $each: AdvJava_5 } } },
    { new: true, upsert: true }
  );


  // Android prog
  await Semester5.findOneAndUpdate(
    {},
    { $push: { AndroidProgramming: { $each: Android_5 } } },
    { new: true, upsert: true }
  );


  //ArtificialIntelligence
  await Semester5.findOneAndUpdate(
    {},
    { $push: { ArtificialIntelligence: { $each: AI_5 } } },
    { new: true, upsert: true }
  );


  //DataScience
  await Semester5.findOneAndUpdate(
    {},
    { $push: { DataScience: { $each: DataSci_5 } } },
    { new: true, upsert: true }
  );

  //SoftwareEngineering
  await Semester5.findOneAndUpdate(
    {},  
    { $push: { SoftwareEngineering: { $each: SoftEng_5 } } },  
    { new: true, upsert: true }  
  );


  //data mining 
  await Semester5.findOneAndUpdate(
    {},
    { $push: { DataMining: { $each: DataM_5 } } },
    { new: true, upsert: true }
  );


  console.log("insertion of Data successfull  for semester 5 . . .")
}

///////////////////////////

initDB_sem6 = async () => {

  await Semester6.deleteMany({});


  
  //Advance data science
  await Semester6.findOneAndUpdate(
    {},
    { $push: { AdvanceDataScience: { $each: AdvDS_6} } },
    { new: true, upsert: true }
  );

   //software quality assuarance
   await Semester6.findOneAndUpdate(
    {},
    { $push: { SoftwareQualityAssurance: { $each: SQA_6 } } },
    { new: true, upsert: true }
  );

   // Machine Learning 
   await Semester6.findOneAndUpdate(
    {},
    { $push: { MachineLearning : { $each: ML_6 } } },
    { new: true, upsert: true }
  );

   //Advance Java
   await Semester6.findOneAndUpdate(
    {},
    { $push: { AdvanceJava_sem6: { $each: AdvJava_6 } } },
    { new: true, upsert: true }
  );

   //data warehouse
   await Semester6.findOneAndUpdate(
    {},
    { $push: { DataWarehouse: { $each: DataWare_6 } } },
    { new: true, upsert: true }
  );
  
  console.log("insertion of Data successfull  for semester 6. . .")
}



// function calls

initDB_sem5();
initDB_sem6();