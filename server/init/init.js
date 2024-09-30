const mongoose = require("mongoose");
const Semester5 = require("../model/Sem5.js")
const Semester6 = require("../model/Sem6.js")
/////////////
const AI_5 = require("./Semester-5//AI_sem5.js");
const DataSci_5 = require("./Semester-5/DataScience_sem5.js");
const Android_5 = require("./Semester-5/android_sem5.js");
const AdvJava_5 = require("./Semester-5/AdvJava_sem5.js");
const SoftEng_5 = require("./Semester-5/SoftEng_sem5.js");
const DataM_5 = require("./Semester-5/DataMining_sem5.js");
/////////
const AdvDS_6 = require("./Semester-6/advancedatascience.js");
const AdvJava_6 = require("./Semester-6/advancejava.js");
const DataWare_6 = require("./Semester-6/datawarehoue.js");
const ML_6 = require("./Semester-6/machin_laening.js");
const SQA_6 = require("./Semester-6/software_q_ashorrence.js");


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
  await mongoose.connect(MongoUrl);
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