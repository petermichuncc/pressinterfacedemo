
  Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');

 Meteor.subscribe('hours');


 Template.part6.helpers({

hour7p: function () {
      num= Machines.find().fetch().pop().cellnum;
    
     now="21"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "21"
   }
   },
   
   hour8p: function () {
    num= Machines.find().fetch().pop().cellnum;
     now="22"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
     if (count>1)
    {
     return "22"
   }
   },
   

planned7: function (){
          
          num= Machines.find().fetch().pop().cellnum;
          now="21"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 21:59:00.000")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
              
                      planned=1000/Number(cycletime)
                  planned=parseInt(planned)
              
             return planned
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
      
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
      
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                  
            
          if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
          {
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
          }
            
          
              
             return planned
           
       }
          
           },
       planned7p: function (){
           
                num= Machines.find().fetch().pop().cellnum;
          now="21"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 21:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()

          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
          
          
           },    
       planned8: function(){
        num= Machines.find().fetch().pop().cellnum;
        now="22"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 22:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
            
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
          

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now && (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
           cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cearnedycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
             if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
          {
                      planned=1000/Number(cycletime)
          }
          
              
             return parseInt(planned)
           }
          
},

planned8p: function (){
           
                num= Machines.find().fetch().pop().cellnum;
          now="22"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 22:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
                 
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
          
          
           },    
   

plannedc7: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= Machines.find().fetch().pop().cellnum;
          now="21"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 21:59:00.000")

          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
               
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now  && (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to multiply the day of TS by 24 and multiply the day of now by 24
            //Then I need to add the hours of TS to 24 and add the hours of now to current day hours
            //Then subtract the two from each other then use this as the multiplier
              timeDays=Number(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().day)
            timeHour=Number(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().hour)  + (Number(timeDays)*24)
             nowDays=Number(moment().format("DD"))
             nowHours=Number(now) + (Number(nowDays)*24)
             
            multiplier=nowHours - timeHour
            multiplier = multiplier +1
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
               
   if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
          {
                      planned=1000/Number(cycletime)
          }
          
              
             return parseInt(planned)*multiplier
           }
          
           },
 plannedc7p: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= Machines.find().fetch().pop().cellnum;
          now="21"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 21:59:00.000")

          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
               
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            
           },
       plannedc8: function(){
   num= Machines.find().fetch().pop().cellnum;
   now="22"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 22:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
             
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
         

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now && (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
              timeDays=Number(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().day)
            timeHour=Number(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().hour)  + (Number(timeDays)*24)
             nowDays=Number(moment().format("DD"))
             nowHours=Number(now) + (Number(nowDays)*24)
             
            multiplier=nowHours - timeHour
            multiplier = multiplier +1
           cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
             if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
          {
                      planned=1000/Number(cycletime)
          }
          
              
             return parseInt(planned)*multiplier
           }
          
},

 plannedc8p: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= Machines.find().fetch().pop().cellnum;
          now="22"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 22:59:00.000")

          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
               
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            
           },

incomingcycles7: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop().cellnum;
    
      now="21"
    month=moment().format("MM")
    day=moment().format("DD")
      timestamp= moment().format("YYYY-MM-DD 21:59:00.000")
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles7=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 21:00:00.000"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    return incomingcycles7 
}
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&& moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    return incomingcycles7 
    }   
       
      },

     incomingcycles7p: function () {
        num= Machines.find().fetch().pop().cellnum;
     now="21"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now && (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp)&& moment().format("HH")>=now)
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
              //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 21:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     
        return incomingcycles7p
     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     return incomingcycles7p
     }
      },
          
    
      incomingcycles8: function () {
        //grab all cycles from today
        num= Machines.find().fetch().pop().cellnum;
     now="22"
    month=moment().format("MM")
    day=moment().format("DD")
      timestamp= moment().format("YYYY-MM-DD 22:59:00.000")
     count= Parts.find({hour: now, month:month, day:day}).count()
     
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp) && moment().format("HH")>=now)
{ 
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles8=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' &&  moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles8=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 22:00:00.000"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    return incomingcycles8
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    incomingcycles8=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles8=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now )
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles8=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 22:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    return incomingcycles8
    }   
        
      },
      
     incomingcycles8p: function () {
        num= Machines.find().fetch().pop().cellnum;
     now="22"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp) && moment().format("HH")>=now)
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 15:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     
      return incomingcycles8p
     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"),  $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     return incomingcycles8p
     }
    
      },

    
     

        incomingc7:function(){

now="22"
//Hours.find({hour: now, month:month, day:day}).fetch().pop().timestamp //this will find the time stamp of when the latest job was ended

//basically show all the count since the job began this hour
num= Machines.find().fetch().pop().cellnum;
    
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 22:59:00.000")  
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  //If ther was a job submitted this hour then
  if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp) && moment().format("HH")>=now)
 {
//all this is activated whenever a job is submitted in this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
       {
    total7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

    total7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 

//This bit of code is different
//so there is no job this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm") >=now)
 {
   //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     total7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
     }
     return total7
     }
//This code is run if there is an end job sent
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is a job started in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    total7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    total7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//if there is not a job submitted this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
    total7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    return total7
    }  
  

},
 incomingc8:function(){


num= Machines.find().fetch().pop().cellnum;
    
      now="22"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 22:59:00.000")  
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  //If ther was a job submitted this hour then
  if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp)&& moment().format("HH")>=now)
 {
//all this is activated whenever a job is submitted in this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
       {
    total8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

    total8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 

//This bit of code is different
//so there is no job this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm") >=now)
 {
   //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     total8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
     }
     return total8
     }
//This code is run if there is an end job sent
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is a job started in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    total8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    total8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//if there is not a job submitted this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
    total8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    return total8
    }  
  


},

earnedhours7: function() {
        //I will need to put planned in here and incoming cycles
        num= Machines.find().fetch().pop().cellnum;
          now="22"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 22:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()

         if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
              
                      planned=1000/Number(cycletime)
                  planned=parseInt(planned)
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
      
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now  )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
      
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                  
            
          if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
          {
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
          }
            
          
              
             
           
       }
           
    count= Parts.find({hour: now, month:month, day:day,press:num}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles7=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 21:00:00.000"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    earnedhours7 = Number(incomingcycles7)/planned
           earnedhours7 = earnedhours7.toFixed(2)
           return earnedhours7
}
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&& moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    earnedhours7 = Number(incomingcycles7)/planned
           earnedhours7 = earnedhours7.toFixed(2)
           return earnedhours7
    }   
    
 

             
            
               
          
     
     
            },
earnedhours7p: function() {
         num= Machines.find().fetch().pop().cellnum;
          now="21"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 21:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()

          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
              
           }

           count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now && (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp)&& moment().format("HH")>=now)
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
              //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 21:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     
       earnedhours7p = Number(incomingcycles7p)/planned
              earnedhours7p = earnedhours7p.toFixed(2)
            return earnedhours7p
     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours7p = Number(incomingcycles7p)/planned
              earnedhours7p = earnedhours7p.toFixed(2)
            return earnedhours7p
     }
            },


  earnedhours8: function(){
        num= Machines.find().fetch().pop().cellnum;

        now="14"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 14:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
             
            }
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
          //incoming cycles

 
           
     //grab all cycles from today
     
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp)&& moment().format("HH")>=now)
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
   incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm") >=now)
{
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
     earnedhours8 = Number(incomingcycles8)/planned
              earnedhours8 = earnedhours8.toFixed(2)
            return earnedhours8
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
     earnedhours8 = Number(incomingcycles8)/planned
              earnedhours8 = earnedhours8.toFixed(2)
            return earnedhours8
    } 

          
},      
              
     
earnedhours8p: function() {
         num= Machines.find().fetch().pop().cellnum;
          now="22"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 22:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
                 
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned= parseInt(planned)
              
            
           }
          
          
           count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp) && moment().format("HH")>=now)
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 15:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours8p = Number(incomingcycles8p)/planned
              earnedhours8p = earnedhours8p.toFixed(2)
            return earnedhours8p

     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"),  $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours8p = Number(incomingcycles8p)/planned
              earnedhours8p = earnedhours8p.toFixed(2)
            return earnedhours8p
     }
          
            },

earnedhourstotal: function(){
//I'll need to put all of the earned hours into this function and total them or find a more clever way to total the earned hours.

//EH1
        num= Machines.find().fetch().pop().cellnum;
          now="15"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 15:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()

         if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
              
                      planned=1000/Number(cycletime)
                  planned=parseInt(planned)
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
      
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
      
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                  
            
          if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
          {
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
          }
            
          
              
             
           
       }
           
   
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 16:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles1=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 15:00:00.000"), $lt: moment().format("YYYY-MM-DD 16:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    earnedhours1 = Number(incomingcycles1)/planned
              earnedhours1 = earnedhours1.toFixed(2)
            
}
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    incomingcycles1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&& moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 15:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
   earnedhours1 = Number(incomingcycles1)/planned
              earnedhours1 = earnedhours1.toFixed(2)
            
    }

           
             
    

  //EH1p
  num= Machines.find().fetch().pop().cellnum;
          now="15"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 15:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
              
            
           }
     




      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
              //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles1p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 16:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles1p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
      earnedhours1p = Number(incomingcycles1p)/planned
              earnedhours1p = earnedhours1p.toFixed(2)
            

     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles1p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles1p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours1p = Number(incomingcycles1p)/planned
              earnedhours1p = earnedhours1p.toFixed(2)
            
     }


  //EH2
        num= Machines.find().fetch().pop().cellnum;

        now="16"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 16:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
             
            }
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
          //incoming cycles

 
           
     //grab all cycles from today
     
      count= Parts.find({hour: now, month:month, day:day}).count()

 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles2= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 17:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles2=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' &&  moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles2=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 16:00:00.000"), $lt: moment().format("YYYY-MM-DD 17:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
     earnedhours2 = Number(incomingcycles2)/planned
              earnedhours2 = earnedhours2.toFixed(2)
            
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    incomingcycles2=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles2=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now )
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles2=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 16:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
     earnedhours2 = Number(incomingcycles2)/planned
              earnedhours2 = earnedhours2.toFixed(2)
            
    }   

     //EH2p      

     num= Machines.find().fetch().pop().cellnum;
          now="16"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 16:59:00.000")
         
         if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
            
           }
          
          

          count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
         incomingcycles2p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 17:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles2p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours2p = Number(incomingcycles2p)/planned
             earnedhours2p = earnedhours2p.toFixed(2) 
           

     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles2p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"),  $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles2p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours2p = Number(incomingcycles2p)/planned
             earnedhours2p = earnedhours2p.toFixed(2) 
            
     }

//EH3
         num= Machines.find().fetch().pop().cellnum;
            now="17"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 17:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
             
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
  

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
           cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
             
         
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
          
           }
        

     count= Parts.find({hour: now, month:month, day:day}).count()


     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles3= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 18:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles3= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles3= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 17:00:00.000"), $lt: moment().format("YYYY-MM-DD 18:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
 earnedhours3 = Number(incomingcycles3)/planned
             earnedhours3 = earnedhours3.toFixed(2) 
           
          

    }

 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles3= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles3= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 //basically at this point there is not a job submitted this hour therefore I should retrieve all data from previous
 //jobs being submitted. 
 earnedhours3 = Number(incomingcycles3)/planned
             earnedhours3 = earnedhours3.toFixed(2) 
            
          
    }    
      //EH3p
      num= Machines.find().fetch().pop().cellnum;
          now="17"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 17:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
                     
           }
          count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles3p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 18:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles3p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     
      earnedhours3p = Number(incomingcycles3p)/planned
             earnedhours3p = earnedhours3p.toFixed(2) 
            
     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles3p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"),$lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles3p=Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours3p = Number(incomingcycles3p)/planned
             earnedhours3p = earnedhours3p.toFixed(2) 
            
     }

           
            
//EH4
        //I will need to put planned in here and incoming cycles
        now="18"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 18:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()

         if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
              
                      planned=1000/Number(cycletime)
                  planned=parseInt(planned)
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
      
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now)
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
      
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                  
            
          if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
          {
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
          }
            
          
              
             
           
       }
           
  count= Parts.find({hour: now, month:month, day:day,press:num}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles4= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 19:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles4= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles4=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 18:00:00.000"), $lt: moment().format("YYYY-MM-DD 19:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    earnedhours4 = Number(incomingcycles4)/planned
              earnedhours4 = earnedhours4.toFixed(2)
            
}
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    incomingcycles4= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles4= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&& moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles4= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 18:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
   earnedhours4 = Number(incomingcycles4)/planned
              earnedhours4 = earnedhours4.toFixed(2)
            
    }   

   //EH4p        
    now="18"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 18:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
              
             
           }
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
              //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles4p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 19:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
         incomingcycles4p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     
      earnedhours4p = Number(incomingcycles4p)/planned
              earnedhours4p = earnedhours4p.toFixed(2)
           
     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles4p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
         incomingcycles4p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours4p = Number(incomingcycles4p)/planned
              earnedhours4p = earnedhours4p.toFixed(2)
            
     }

 //EH5
        now="19"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 19:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
            
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
          
            
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
          

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now &&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
           cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
            
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
          
              
             
           }

 
           
     //grab all cycles from today
     
     count= Parts.find({hour: now, month:month, day:day}).count()
     
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles5= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles5=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' &&  moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles5=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 19:00:00.000"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    earnedhours5 = Number(incomingcycles5)/planned
              earnedhours5 = earnedhours5.toFixed(2)
            
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object' )
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    incomingcycles5=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles5=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now )
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles5=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 19:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    earnedhours5 = Number(incomingcycles5)/planned
              earnedhours5 = earnedhours5.toFixed(2)
            
    } 

     //EH5p
     now="19"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 19:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
              
             
           }
           count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles5p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles5p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours5p = Number(incomingcycles5p)/planned
              earnedhours5p = earnedhours5p.toFixed(2)
           

     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' )
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles5p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"),  $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles5p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours5p = Number(incomingcycles5p)/planned
              earnedhours5p = earnedhours5p.toFixed(2)
            
     }    
            
     

//EH6
          now="20"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 20:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
             
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
            
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now &&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
           cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
             
          
                      planned=1000/Number(cycletime)
                      planned =parseInt(planned)
                      
             
           }
     count= Parts.find({hour: now, month:month, day:day}).count()


     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles6= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 21:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles6= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles6= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 20:00:00.000"), $lt: moment().format("YYYY-MM-DD 21:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }

          earnedhours6 = Number(incomingcycles6)/planned
             earnedhours6 = earnedhours6.toFixed(2) 
             
    }

 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles6= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles6= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
            earnedhours6 = Number(incomingcycles6)/planned
             earnedhours6 = earnedhours6.toFixed(2) 
            
    }    
    //EH6p
      now="20"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 20:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
          
           }
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
          
           }
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles6p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 21:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
         incomingcycles6p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours6p = Number(incomingcycles6p)/planned
             earnedhours6p = earnedhours6p.toFixed(2) 
           

     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' )
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
         incomingcycles6p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"),$lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
         incomingcycles6p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours6p = Number(incomingcycles6p)/planned
             earnedhours6p = earnedhours6p.toFixed(2) 
            
     }     
           

//EH7
        //I will need to put planned in here and incoming cycles
        now="22"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 22:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()

         if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
              
                      planned=1000/Number(cycletime)
                  planned=parseInt(planned)
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
      
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now  )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
      
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                  
            
          if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
          {
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
          }
            
          
              
             
           
       }
           
    count= Parts.find({hour: now, month:month, day:day,press:num}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles7=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 21:00:00.000"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    earnedhours7 = Number(incomingcycles7)/planned
           earnedhours7 = earnedhours7.toFixed(2)
           
}
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&& moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    earnedhours7 = Number(incomingcycles7)/planned
           earnedhours7 = earnedhours7.toFixed(2)
           
    }   

 //EH7p          
             
         
 now="21"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 21:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()

          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
              
           }

           count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now && (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp)&& moment().format("HH")>=now)
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
              //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 21:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     
       earnedhours7p = Number(incomingcycles7p)/planned
              earnedhours7p = earnedhours7p.toFixed(2)
            
     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours7p = Number(incomingcycles7p)/planned
              earnedhours7p = earnedhours7p.toFixed(2)
            
     }


  //EH8
        num= Machines.find().fetch().pop().cellnum;

        now="14"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 14:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
             
            }
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
          //incoming cycles

 
           
     //grab all cycles from today
     
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp)&& moment().format("HH")>=now)
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
   incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm") >=now)
{
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    earnedhours8 = Number(incomingcycles8)/planned
              earnedhours8 = earnedhours8.toFixed(2)
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
   earnedhours8 = Number(incomingcycles8)/planned
              earnedhours8 = earnedhours8.toFixed(2)
    } 

    //EH8p
now="22"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 22:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
                 
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned= parseInt(planned)
              
            
           }
          
          
           count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp) && moment().format("HH")>=now)
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 15:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours8p = Number(incomingcycles8p)/planned
              earnedhours8p = earnedhours8p.toFixed(2)
            

     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"),  $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours8p = Number(incomingcycles8p)/planned
              earnedhours8p = earnedhours8p.toFixed(2)
            
     }
    if (typeof earnedhours1 === 'undefined' || earnedhours1 === null)
       {
        earnedhours1=0
      }    
      if (typeof earnedhours1p === 'undefined' || earnedhours1p === null)
       {
        earnedhours1p=0
      }  
      if (typeof earnedhours2 === 'undefined'|| earnedhours2 === null)
       {
        earnedhours2=0
      }
       if (typeof earnedhours2p === 'undefined'|| earnedhours2p === null)
       {
        earnedhours2p=0
      }      
      if (typeof earnedhours3 === 'undefined'|| earnedhours3 === null)
       {
        earnedhours3=0
      }
      if (typeof earnedhours3p === 'undefined'|| earnedhours3p === null)
       {
        earnedhours3p=0
      }      
      if (typeof earnedhours4 === 'undefined'|| earnedhours4 === null)
       {
        earnedhours4=0
      } 
       if (typeof earnedhours4p === 'undefined'|| earnedhours4p === null)
       {
        earnedhours4p=0
      }   
      if (typeof earnedhours5 === 'undefined'|| earnedhours5 === null)
       {
        earnedhours5=0
      }
      if (typeof earnedhours5p === 'undefined'|| earnedhours5p === null)
       {
        earnedhours5p=0
      }    
      if (typeof earnedhours6 === 'undefined'|| earnedhours6 === null)
       {
        earnedhours6=0
      }
      if (typeof earnedhours6p === 'undefined'|| earnedhours6p === null)
       {
        earnedhours6p=0
      }    
      if (typeof earnedhours7 === 'undefined'|| earnedhours7 === null)
       {
        earnedhours7=0
      }
      if (typeof earnedhours7p === 'undefined'|| earnedhours7p === null)
       {
        earnedhours7p=0
      }    
      if (typeof earnedhours8 === 'undefined'|| earnedhours8 === null)
       {
        earnedhours8=0
      } 
      if (typeof earnedhours8p === 'undefined'|| earnedhours8p === null)
       {
        earnedhours8p=0
      }   
     
     earnedhourstotal=Number(earnedhours1)+Number(earnedhours1p)+Number(earnedhours2)+Number(earnedhours2p)+Number(earnedhours3)+Number(earnedhours3p)+Number(earnedhours4)+Number(earnedhours4p)+Number(earnedhours5)+Number(earnedhours5p)+Number(earnedhours6)+Number(earnedhours6p)+Number(earnedhours7)+Number(earnedhours7p)+Number(earnedhours8)+Number(earnedhours8p)
    earnedhourstotal = earnedhourstotal.toFixed(2)
     return earnedhourstotal
// earnedhours8p: function() {
     
          
//             },
},

 changeStatus7: function() {
       num= Machines.find().fetch().pop().cellnum;
          now="22"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 22:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()

         if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
              
                      planned=1000/Number(cycletime)
                  planned=parseInt(planned)
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
      
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now  )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
      
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                  
            
          if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
          {
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
          }
            
          
              
             
           
       }
           
    count= Parts.find({hour: now, month:month, day:day,press:num}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles7=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 21:00:00.000"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    earnedhours7 = Number(incomingcycles7)/planned
           earnedhours7 = earnedhours7.toFixed(2)
         
}
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&& moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles7= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    earnedhours7 = Number(incomingcycles7)/planned
           earnedhours7 = earnedhours7.toFixed(2)
          
    }
               
          
     
            
        if (earnedhours7 >=1)
       {
         return "Green"
      }
      else if (earnedhours7 <1)
       {

        return "Yellow"
       }



     },
     changeStatus7p: function() {
     
       num= Machines.find().fetch().pop().cellnum;
          now="21"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 21:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()

          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
              
           }

           count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now && (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp)&& moment().format("HH")>=now)
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
              //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 21:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     
        earnedhours7p = Number(incomingcycles7p)/planned
              earnedhours7p = earnedhours7p.toFixed(2)
          
     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles7p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours7p = Number(incomingcycles7p)/planned
              earnedhours7p = earnedhours7p.toFixed(2)
            
     }
        if (earnedhours7p >=1 && count>1)
       { 
         
     return "Green"
    
       }

       else if (earnedhours7p <1&& count>1)
   {
 
     return "Yellow"
   
  }
     
     },
    

    changeStatus8: function() {
    num= Machines.find().fetch().pop().cellnum;

        now="14"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 14:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
             
            }
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
          //incoming cycles

 
           
     //grab all cycles from today
     
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp)&& moment().format("HH")>=now)
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
   incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm") >=now)
{
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
     earnedhours8 = Number(incomingcycles8)/planned
              earnedhours8 = earnedhours8.toFixed(2)
           
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles8= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
     earnedhours8 = Number(incomingcycles8)/planned
              earnedhours8 = earnedhours8.toFixed(2)
           
    } 
           
          
            
        if (earnedhours8 >=1)
      {
        return "Green"
      }

      else if (earnedhours8 <1)
       {

         return "Yellow"
       }




     },
 changeStatus8p: function() {
  now="22"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 22:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
                 
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
                
   
                      planned=1000/Number(cycletime)
                      planned= parseInt(planned)
              
            
           }
          
          
           count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&& (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp) && moment().format("HH")>=now)
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 15:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours8p = Number(incomingcycles8)/planned
              earnedhours8p = earnedhours8p.toFixed(2)
            

     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"),  $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        incomingcycles8p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     earnedhours8p = Number(incomingcycles8p)/planned
              earnedhours8p = earnedhours8.toFixed(2)
            
     
       
        if (earnedhours8p >=1 && count>1)
       { 
         
     return "Green"
    
       }

       else if (earnedhours8p <1&& count>1)
   {
 
     return "Yellow"
   
  }
    
     }
   },


    part7: function ()
   {
   num= Machines.find().fetch().pop().cellnum;
     now = "13"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 13:59:00.000")
 //find the current day
 
var part =Parts.findOne({hour: now, month:month, day:day,press:num})


 if(typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
    return part.partnumber
 }
   //set this up to only list if there was not an end job submitted
   //after the job submitted before this hour 

if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH")>=now && (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
  //so find  $lte than the entire time stamp!
  //basically find a Part with a timestamp $lt the  current month day and now

  
                      part=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()
    
    
     
  return part.partnumber

   }
     },
   part7p: function ()
   {
   num= Machines.find().fetch().pop().cellnum;
     now= "21"
    month=moment().format("MM")
    day=moment().format("DD")

count= Parts.find({hour: now, month:month, day:day,press:num}).count()
 var part =Parts.find({hour: now, month:month, day:day,press:num}).fetch().pop()

if(typeof Parts.find({hour: now, month:month, day:day,press:num}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }
},

    part8: function ()
   {
  num= Machines.find().fetch().pop().cellnum;
     now = "22"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 22:59:00.000")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && moment().format("HH")>=now && (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
 
                      part=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()
  
    
     
     
  return part.partnumber

   }
   },
   part8p: function ()
   {
  num= Machines.find().fetch().pop().cellnum;
     now= "22"
     month=moment().format("MM")
    day=moment().format("DD")
    
      count= Parts.find({hour: now, month:month, day:day,press:num}).count()


 var part =Parts.find({hour: now, month:month, day:day,press:num}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now, month:month, day:day,press:num}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }

},
   
   
  

   hour7second: function()
 {//if the part count for this hour is <=2 then return true
   num= Machines.find().fetch().pop().cellnum;
   now="21"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day,press:num}).count() >=2)
  {
    return true
  }

 },
 hour8second: function()
 {num= Machines.find().fetch().pop().cellnum;
now="22"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day,press:num}).count() >=2)
  {
    return true
  }
 } , 
  
  })