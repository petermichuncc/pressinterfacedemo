


// console.log("This is your cavitation" +Parts.findOne().cavitation);
console.log("This is yesterday at 11:00 " + moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))

console.log("This the start of today" +moment().format("YYYY-MM-DD 00:00:00.000") )
Template.shift2.helpers({
 calculateTime: function () {
         //calculate the amount of time needed for the job
         //I could find the current hour using moment
         //Then put that hour into the calculateTime function
         //I could create if else statements based on the current hour
         var now = moment().format("HH");
         // now=Number(now)

         // if (now === 14)
         // {
 count = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment(Parts.findOne({hour: now }).timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.findOne({hour: now }).quantity) - Number(count))  / Number(Parts.findOne({hour: now }).cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
if (estimatedminutes <=0)
{

  estimatedminutes=0;
}
         console.log("Estimated minutes" + estimatedminutes)
         

         
         
         displayHours = estimatedminutes.toString().concat(" minutes left")
         
         
         
         return displayHours;




         // }

         
        

     },
  
  parts: function() {
    return Parts.find();
   },
   
   earnedHours: function () {
    console.log ("this is the time im trying to subscribe to" +moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD 11:mm:ss.SSS"))
    Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-04 23:mm:ss.SSS"), $lt: moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles: function () {
        //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-03 23:mm:ss.SSS"), $lt: moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * Parts.findOne().cavitation;
  
        
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
      earnedHours9: function () {
     
    // Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 15:00:00.000"), $lt: moment().format("YYYY-MM-DD 16:00:00.000")}}).count() * (Parts.findOne({hour: '15'}).cavitation / Parts.findOne({hour: '15'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles9: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 15:00:00.000"), $lt: moment().format("YYYY-MM-DD 16:00:00.000")}}).count() * Parts.findOne({hour: '15'}).cavitation;
  
        
        
      },
      earnedHours10: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 16:00:00.000"), $lt: moment().format("YYYY-MM-DD 17:00:00.000")}}).count() * (Parts.findOne({hour: '16'}).cavitation / Parts.findOne({hour: '16'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles10: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 16:00:00.000"), $lt: moment().format("YYYY-MM-DD 17:00:00.000")}}).count() * Parts.findOne({hour: '16'}).cavitation;
  
        
        
      },
      earnedHours11: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 17:00:00.000"), $lt: moment().format("YYYY-MM-DD 18:00:00.000")}}).count() * (Parts.findOne({hour: '17'}).cavitation / Parts.findOne({hour: '17'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles11: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 17:00:00.000"), $lt: moment().format("YYYY-MM-DD 18:00:00.000")}}).count() * Parts.findOne({hour: '17'}).cavitation;
  
        
        
      },
      earnedHours12: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 18:00:00.000"), $lt: moment().format("YYYY-MM-DD 19:00:00.000")}}).count() * (Parts.findOne({hour: '18'}).cavitation / Parts.findOne({hour: '18'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles12: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 18:00:00.000"), $lt: moment().format("YYYY-MM-DD 19:00:00.000")}}).count() * Parts.findOne({hour: '18'}).cavitation;
  
        
        
      },
      earnedHours13: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 19:00:00.000"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * (Parts.findOne({hour: '19'}).cavitation / Parts.findOne({hour: '19'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles13: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 19:00:00.000"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * Parts.findOne({hour: '19'}).cavitation;
  
        
        
      },
      earnedHours14: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 20:00:00.000"), $lt: moment().format("YYYY-MM-DD 21:00:00.000")}}).count() * (Parts.findOne({hour: '20'}).cavitation / Parts.findOne({hour: '20'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles14: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 20:00:00.000"), $lt: moment().format("YYYY-MM-DD 21:00:00.000")}}).count() * Parts.findOne({hour: '20'}).cavitation;
  
        
        
      },
      earnedHours15: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 21:00:00.000"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * (Parts.findOne({hour: '21'}).cavitation / Parts.findOne({hour: '21'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles15: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 21:00:00.000"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.findOne({hour: '21'}).cavitation;
  
        
        
      },
      earnedHours16: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 22:00:00.000"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * (Parts.findOne({hour: '22'}).cavitation / Parts.findOne({hour: '22'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles16: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 22:00:00.000"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.findOne({hour: '22'}).cavitation;
  
        
        
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
    
    

    changeStatus9: function() {
      
     var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 15:00:00.000"), $lt: moment().format("YYYY-MM-DD 16:00:00.000")}}).count() * (Parts.findOne({hour: '15'}).cavitation / Parts.findOne({hour: '15'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '15'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '15'}))
      {

        return "Yellow"
      }



    },

    changeStatus10: function() {
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 16:00:00.000"), $lt: moment().format("YYYY-MM-DD 17:00:00.000")}}).count() * (Parts.findOne({hour: '16'}).cavitation / Parts.findOne({hour: '16'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
          earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '16'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '16'}))
      {

        return "Yellow"
      }



    },

    changeStatus11: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 17:00:00.000"), $lt: moment().format("YYYY-MM-DD 18:00:00.000")}}).count() * (Parts.findOne({hour: '17'}).cavitation / Parts.findOne({hour: '17'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&&Parts.findOne({hour: '17'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '17'}))
      {

        return "Yellow"
      }


    },

    changeStatus12: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 18:00:00.000"), $lt: moment().format("YYYY-MM-DD 19:00:00.000")}}).count() * (Parts.findOne({hour: '18'}).cavitation / Parts.findOne({hour: '18'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '18'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '18'}))
      {

        return "Yellow"
      }



    },

    changeStatus13: function() {
      
     var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 19:00:00.000"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * (Parts.findOne({hour: '19'}).cavitation / Parts.findOne({hour: '19'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '19'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '19'}))
      {

        return "Yellow"
      }


    },

    changeStatus14: function() {
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 20:00:00.000"), $lt: moment().format("YYYY-MM-DD 21:00:00.000")}}).count() * (Parts.findOne({hour: '20'}).cavitation / Parts.findOne({hour: '20'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&&Parts.findOne({hour: '20'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '20'}))
      {

        return "Yellow"
      }



    },

    changeStatus15: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 21:00:00.000"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * (Parts.findOne({hour: '21'}).cavitation / Parts.findOne({hour: '21'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '21'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '21'}))
      {

        return "Yellow"
      }



    },

    changeStatus16: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 22:00:00.000"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * (Parts.findOne({hour: '22'}).cavitation / Parts.findOne({hour: '22'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&&Parts.findOne({hour: '22'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '22'}))
      {

        return "Yellow"
      }

 },

   part: function() {
   
   var part =Parts.findOne({hour: '13'})
   part = Number(part)

   return part.partnumber
   },
   quantity: function() {
   var part =Parts.findOne({hour: '13'})


   return part.quantity
   },
   
   part9: function ()
   {

var part =Parts.findOne({hour: '15'})


if(Number(part.partnumber) >=0)
{
   


    return part.partnumber
}



   },
   quantity9: function() {
   var part =Parts.findOne({hour: '15'})
   

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
   },
    part10: function ()
   {

  var part =Parts.findOne({hour: '16'})
  part = Number(part)

if(part.partnumber >=0)
{
   


    return part.partnumber
}



   },
   quantity10: function() {
   var part =Parts.findOne({hour: '16'})
  

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
   },part11: function ()
   {

  var part =Parts.findOne({hour: '17'})
  

if(Number(part.partnumber) >=0)
{
   


    return part.partnumber
}




   },
   quantity11: function() {
  var part =Parts.findOne({hour: '17'})
 

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
 
   },part12: function ()
   {

    var part =Parts.findOne({hour: '18'})
    

if(Number(part.partnumber)>=0)
{
   


    return part.partnumber
}


  

   },
   quantity12: function() {
  var part =Parts.findOne({hour: '18'})
 

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
 
   },part13: function ()
   {

        var part =Parts.findOne({hour: '19'})
       

if(Number(part.partnumber) >0)
{
   


    return part.partnumber
}



   },
   quantity13: function() {
    var part =Parts.findOne({hour: '19'})
    

   if(Number(part.partnumber)>0)
   {
   


   return part.quantity
 }
 

   },part14: function ()
   {

   var part =Parts.findOne({hour: '20'})
   

if(Number(part.partnumber)>0)
{
   


    return part.partnumber
}



   },
   quantity14: function() {
    var part =Parts.findOne({hour: '20'})
    

   if(Number(part.partnumber)>0)
   {
   


   return part.quantity
 }

   },part15: function ()
   {

    var part =Parts.findOne({hour: '21'})
   

if(Number(part.partnumber) >0)
{
   


    return part.partnumber
}



   },
   quantity15: function() {
  var part =Parts.findOne({hour: '21'})
 

   if(Number(part.partnumber)>0)
   {
   


   return part.quantity
 }
 
   },part16: function ()
   {
    var part =Parts.findOne({hour: '22'})
    

if(Number(part.partnumber) >0)
{
   


    return part.partnumber
}



   },
   quantity16: function() {
  var part =Parts.findOne({hour: '22'})
  

   if(Number(part.partnumber)>0)
   {
   


   return part.quantity
 }
 
   }

   
      
   
});


//Figure out the logic for breaking up the job into 24 hours.
//after that only output 8 hour segments of the job





















// var partStats = {
//     workcenterName: Machines.findOne().machinenumber,
//      partNumber: Parts.findOne().partnumber,
//      partCycleTime: "23",
//      partsPlanned: Parts.findOne().quantity,
//      cavities: Parts.findOne().cavitation,
//      tech: Parts.findOne().initials,
//      startTime: start_time
//  };


























// Meteor.subscribe('parts-to-access', function () {
//     var test = Parts.find({workcenter: '304A'}).fetch();
//     console.log(test[0].cavitation);
// });
// Meteor.subscribe('PressCycles');
// //console.log("Getting a single entry: "+ Parts.find().count() );

// var start_time = moment().hour(7).format("YYYY-MM-DD hh:mm:ss.SSS");
// console.log(start_time);


// Template.job.helpers({
//     calculateTime: function () {
//         //calculate the amount of time needed for the job
//         var estimatedTime = (partStats.partsPlanned / partStats.cavities) * partStats.partCycleTime;
//         return displayHours = moment().startOf('day').seconds(estimatedTime).format('H:mm:ss');
//     },
//     currentTime: function () {
//         Meteor.call("getCurrentTime", {
//             onResultRecieved: function (err, result) {
//                 console.log("RESULT: " + result);
//             }
//         });
//     },
//     incomingCycles: function () {
//         //grab all cycles from today
//         Meteor.subscribe('cycles-recent', partStats.startTime);
//         return (100 * partStats.cavities);
//     },
//     partsPlanned: function () {
//         return partStats.partsPlanned;
//     },
//     partNumber: function () {
//          return partStats.partNumber;
//     },
//     earnedHours: function () {
//         var earnedHoursCalc = (1 * partStats.cavities) / partStats.partsPlanned;
//         return earnedHoursCalc;
//     },
//     parts: function() {
//     return Parts.find();
//    },
//    columns: function() {
//      // the context is a part
//      var result = _.values(this.data);
//      result.unshift(this.text);
//      return result;
// }
// });