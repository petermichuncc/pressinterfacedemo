Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))


// console.log("This is your cavitation" +Parts.findOne().cavitation);

Template.shift3.helpers({
  calculateTime: function () {
         
 num= Machines.find().fetch().pop();
     num=num.machinenumber
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         
          totaltime= Number(Parts.find({reactive: false}).fetch().pop().quantity)/Number(Parts.find({reactive: false}).fetch().pop().cavitation)
          totaltime = totaltime*10;
         totaltime= parseInt(totaltime/60);
if (estimatedminutes <=0)
{

  estimatedminutes=0;
}         
         
         
          //The way this logic is setup I may need to just have a completion time setup
          //I could also list the number of cycles to go
          //Then list the minutes left??
         
       estimatedhours = estimatedminutes/60;
       estimatedhours = parseInt(estimatedhours)
       estimatedminutes=estimatedminutes%60;

         
         
       if (estimatedhours===1)
         {
         return estimatedhours.toString().concat(" hour left and ",estimatedminutes," minutes left");

}
else 
{
  return estimatedhours.toString().concat(" hours left and ",estimatedminutes," minutes left");
}


         // }

         
        

     },
  
  parts: function() {
    return Parts.find();
   },
   
   earnedHours: function () {
    
    
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
       num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"),$lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne({hour: '08'}).cavitation / Parts.findOne({hour: '08'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles: function () {
        //grab all cycles from today
      
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.findOne().cavitation;
  
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
     earnedHours17: function () {

    // Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
    
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '23'}) === 'object')
     {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"), $lt: moment().format("YYYY-MM-DD 00:00:00.000")}}).count() * (Parts.findOne({hour: '23'}).cavitation / Parts.findOne({hour: '23'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
      else
      {
var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"),$lt: moment().format("YYYY-MM-DD 00:00:00.000")}}).count()* (Parts.findOne().cavitation / Parts.findOne().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

      }
            },
     incomingCycles17: function () {
        //grab all cycles from today
      
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    if (typeof Parts.findOne({hour: '14'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"), $lt: moment().format("YYYY-MM-DD 00:00:00.000")}}).count() * Parts.findOne({hour: '23'}).cavitation;
  }
  else
      {

 return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"), $lt: moment().format("YYYY-MM-DD 00:00:00.000")}}).count()* Parts.findOne().cavitation;

      }
  
        
      },
      earnedHours18: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '00'}) === 'object')
        {var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 00:00:00.000"), $lt: moment().format("YYYY-MM-DD 01:00:00.000")}}).count() * (Parts.findOne({hour: '00'}).cavitation / Parts.findOne({hour: '00'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
}
      else
      {
var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 00:00:00.000"),$lt: moment().format("YYYY-MM-DD 01:00:00.000")}}).count()* (Parts.findOne().cavitation / Parts.findOne().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

      }
            },
     incomingCycles18: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 00:00:00.000"),$lt: moment().format("YYYY-MM-DD 01:00:00.000")}}).count() * Parts.findOne({hour:'00'}).cavitation;
  
        
        
      },
      earnedHours19: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 01:00:00.000"), $lt: moment().format("YYYY-MM-DD 02:00:00.000")}}).count() * (Parts.findOne({hour:'01'}).cavitation / Parts.findOne({hour:'01'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles19: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 01:00:00.000"), $lt: moment().format("YYYY-MM-DD 02:00:00.000")}}).count() * Parts.findOne({hour:'01'}).cavitation;
  
        
        
      },
      earnedHours20: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 02:00:00.000"), $lt: moment().format("YYYY-MM-DD 03:00:00.000")}}).count() * (Parts.findOne({hour:'02'}).cavitation / Parts.findOne({hour:'02'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles20: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 02:00:00.000"), $lt: moment().format("YYYY-MM-DD 03:00:00.000")}}).count() * Parts.findOne({hour:'02'}).cavitation;
  
        
        
      },
      earnedHours21: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 03:00:00.000"), $lt: moment().format("YYYY-MM-DD 04:00:00.000")}}).count() * (Parts.findOne({hour:'03'}).cavitation / Parts.findOne({hour:'03'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles21: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 03:00:00.000"), $lt: moment().format("YYYY-MM-DD 04:00:00.000")}}).count() * Parts.findOne({hour:'03'}).cavitation;
  
        
        
      },
      earnedHours22: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 04:00:00.000"), $lt: moment().format("YYYY-MM-DD 05:00:00.000")}}).count() * (Parts.findOne({hour:'04'}).cavitation / Parts.findOne({hour:'04'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles22: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 04:00:00.000"), $lt: moment().format("YYYY-MM-DD 05:00:00.000")}}).count() * Parts.findOne({hour:'04'}).cavitation;
  
        
        
      },
      earnedHours23: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 05:00:00.000"), $lt: moment().format("YYYY-MM-DD 06:00:00.000")}}).count() * (Parts.findOne({hour:'05'}).cavitation / Parts.findOne({hour:'05'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles23: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 05:00:00.000"), $lt: moment().format("YYYY-MM-DD 06:00:00.000")}}).count() * Parts.findOne({hour:'05'}).cavitation;
  
        
        
      },
      earnedHours24: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 06:00:00.000"), $lt: moment().format("YYYY-MM-DD 07:00:00.000")}}).count() * (Parts.findOne({hour:'06'}).cavitation / Parts.findOne({hour:'06'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles24: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 06:00:00.000"), $lt: moment().format("YYYY-MM-DD 07:00:00.000")}}).count() * Parts.findOne({hour:'06'}).cavitation;
  
        
        
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
    
     changeStatus: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne({hour: '08'}).cavitation / Parts.findOne({hour: '08'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '08'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '08'}))
      {

        return "Yellow"
      }



    },

    changeStatus17: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"), $lt: moment().format("YYYY-MM-DD 00:00:00.000")}}).count() * (Parts.findOne({hour: '23'}).cavitation / Parts.findOne({hour: '23'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&&Parts.findOne({hour: '23'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '23'}))
      {

        return "Yellow"
      }



    },

    changeStatus18: function() {
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 00:00:00.000"), $lt: moment().format("YYYY-MM-DD 01:00:00.000")}}).count() * (Parts.findOne({hour: '00'}).cavitation / Parts.findOne({hour: '00'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&&Parts.findOne({hour: '00'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '00'}))
      {

        return "Yellow"
      }



    },

    changeStatus19: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 01:00:00.000"), $lt: moment().format("YYYY-MM-DD 02:00:00.000")}}).count() * (Parts.findOne({hour: '01'}).cavitation / Parts.findOne({hour: '01'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '01'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '01'}))
      {

        return "Yellow"
      }



    },

    changeStatus20: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 02:00:00.000"), $lt: moment().format("YYYY-MM-DD 03:00:00.000")}}).count() * (Parts.findOne({hour: '02'}).cavitation / Parts.findOne({hour: '02'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '02'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '02'}))
      {

        return "Yellow"
      }



    },

    changeStatus21: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 03:00:00.000"), $lt: moment().format("YYYY-MM-DD 04:00:00.000")}}).count() * (Parts.findOne({hour: '03'}).cavitation / Parts.findOne({hour: '03'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&&Parts.findOne({hour: '03'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '03'}))
      {

        return "Yellow"
      }
      


    },

    changeStatus22: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 04:00:00.000"), $lt: moment().format("YYYY-MM-DD 05:00:00.000")}}).count() * (Parts.findOne({hour: '04'}).cavitation / Parts.findOne({hour: '04'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&&Parts.findOne({hour: '04'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '04'}))
      {

        return "Yellow"
      }
      


    },

    changeStatus23: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 05:00:00.000"), $lt: moment().format("YYYY-MM-DD 06:00:00.000")}}).count() * (Parts.findOne({hour: '05'}).cavitation / Parts.findOne({hour: '05'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
if (earnedHoursCalc >=1&&Parts.findOne({hour: '05'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '05'}))
      {

        return "Yellow"
      }
      



    },

    changeStatus24: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 06:00:00.000"), $lt: moment().format("YYYY-MM-DD 07:00:00.000")}}).count() * (Parts.findOne({hour: '06'}).cavitation / Parts.findOne({hour: '06'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
     if (earnedHoursCalc >=1&&Parts.findOne({hour: '06'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '06'}))
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
   
   part1: function ()
   {

var part =Parts.findOne({hour: '23'})


if(Number(part.partnumber) >=0)
{
   


    return part.partnumber
}



   },
   quantity1: function() {
   var part =Parts.findOne({hour: '23'})
   

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }

   },
    part2: function ()
   {

  var part =Parts.findOne({hour: '00'})
  

if(Number(part.partnumber) >=0)
{
   


    return part.partnumber
}


 

   },
   quantity2: function() {
   var part =Parts.findOne({hour: '00'})
   

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
   },part3: function ()
   {

  var part =Parts.findOne({hour: '01'})
  

if(Number(part.partnumber) >=0)
{
   


    return part.partnumber
}




   },
   quantity3: function() {
  var part =Parts.findOne({hour: '01'})
 

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }

   },part4: function ()
   {

    var part =Parts.findOne({hour: '02'})
    

if(Number(part.quantity) >=0)
{
   


    return part.partnumber
}

else {

return "0"

  }

   },
   quantity4: function() {
  var part =Parts.findOne({hour: '02'})
 

   if(Number(part.quantity)>=0)
   {
   


   return part.quantity
 }
 
   },part5: function ()
   {

        var part =Parts.findOne({hour: '03'})
        

if(Number(part.quantity) >0)
{
   


    return part.partnumber
}



   },
   quantity5: function() {
    var part =Parts.findOne({hour: '03'})
    

   if(Number(part.quantity)>0)
   {
   


   return part.quantity
 }
 
   },part6: function ()
   {

   var part =Parts.findOne({hour: '04'})
   

if(Number(part.quantity) >0)
{
   


    return part.partnumber
}



   },
   quantity6: function() {
    var part =Parts.findOne({hour: '04'})
    

   if(Number(part.quantity)>0)
   {
   


   return part.quantity
 }
 
   },part7: function ()
   {

    var part =Parts.findOne({hour: '05'})
    

if(Number(part.quantity) >0)
{
   


    return part.partnumber
}




   },
   quantity7: function() {
  var part =Parts.findOne({hour: '05'})
  

   if(Number(part.quantity)>0)
   {
   


   return part.quantity
 }

   },part8: function ()
   {
    var part =Parts.findOne({hour: '06'})
    

if(Number(part.quantity) >0)
{
   


    return part.partnumber
}



   },
   quantity8: function() {
  var part =Parts.findOne({hour: '06'})
 

   if(Number(part.quantity)>0)
   {
   


   return part.quantity
 }
 
   }

   
      

 
});





















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