
  Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');

 Meteor.subscribe('hours');

 Template.part3.helpers({

hour1p: function () {
      num= "1"
    
     now="13"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "4"
   }
   },
   
   hour2p: function () {
    num= "1"
     now="14"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
     if (count>1)
    {
     return "5"
   }
   },
   

planned1: function (){
          //planned will be multiplier by the time the actual actually runs
          num= "1"
          now="13"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 13:00:00.000")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH

            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
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
                
   						
                      planned1=1000/Number(cycletime)
          				planned1=parseInt(planned1)
              
             return planned1
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
     	
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
     	
          cycletimeH=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeH
          
          cycletimeP=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeP
         
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeQ
          
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
                	
   					
					if (typeof Hours.find({timestamp: {$lt: timestamp},press:num}).timestamp === 'undefined')
					{
                      planned1=1000/Number(cycletime)
                      planned1=parseInt(planned1)
					}
   					
          
              
             return planned1
           
       }
          
           },
       planned1p: function (){
           
      
     
               num= "1"
          now="13"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 13:00:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
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
                
   
                      planne1p=1000/Number(cycletime)
                      planned1p=parseInt(planned1p)
              
             return planned1p
           }
          
          
           },    
       planned2: function (){
          //planned will be multiplier by the time the actual actually runs
          num= "1"
          now="14"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH

            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
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
     
  
     	
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
     	
          cycletimeH=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeH
          
          cycletimeP=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeP
         
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeQ
          
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
                	
   					
					if (typeof Hours.find({timestamp: {$lt: timestamp},press:num}).timestamp === 'undefined')
					{
                      planned=1000/Number(cycletime)
                      planned=parseInt(planned)
					}
   					
          
              
             return planned
           
       }
          
           },
       planned2p: function (){
           
      
     
         num= "1"
          now="14"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
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


plannedc1: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= "1"
          now="13"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 13:00:00.000")

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
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to multiply the day of TS by 24 and multiply the day of now by 24
            //Then I need to add the hours of TS to 24 and add the hours of now to current day hours
            //Then subtract the two from each other then use this as the multiplier
              timeDays=Number(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().day)
            timeHour=Number(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().hour)  + (Number(timeDays)*24)
             nowDays=Number(moment().format("DD"))
             nowHours=Number(now) + (Number(nowDays)*24)
             
            multiplier=nowHours - timeHour
            multiplier = multiplier +1
          cycletimeH=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeQ
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
               
   if (typeof Hours.find({timestamp: {$lt: timestamp},press:num}).timestamp === 'undefined')
					{
                      planned=1000/Number(cycletime)
					}
          
              
             return parseInt(planned)*multiplier
           }
          
           },
 plannedc1p: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= "1"
          now="13"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 13:00:00.000")

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
      plannedc2: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= "1"
          now="14"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 14:00:00.000")

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
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to multiply the day of TS by 24 and multiply the day of now by 24
            //Then I need to add the hours of TS to 24 and add the hours of now to current day hours
            //Then subtract the two from each other then use this as the multiplier
              timeDays=Number(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().day)
            timeHour=Number(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().hour)  + (Number(timeDays)*24)
             nowDays=Number(moment().format("DD"))
             nowHours=Number(now) + (Number(nowDays)*24)
             
            multiplier=nowHours - timeHour
            multiplier = multiplier +1
          cycletimeH=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeQ
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
               
   if (typeof Hours.find({timestamp: {$lt: timestamp},press:num}).timestamp === 'undefined')
					{
                      planned=1000/Number(cycletime)
					}
          
              
             return parseInt(planned)*multiplier
           }
          
           },
 plannedc2p: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= "1"
          now="14"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 14:00:00.000")

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

incomingcycles1: function () {
        //grab all cycles from today
     num= "1"
    
      
    month=moment().format("MM")
    day=moment().format("DD")
    start=moment().format("YYYY-MM-DD 13:00:00.000")
    end=moment().format("YYYY-MM-DD 14:00:00.000")
    now=moment(start).format("HH")
      timestamp= moment().format("YYYY-MM-DD 13:00:00.000")
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
    

if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
//all of this when there is a job still running from the previous hour
    
 //I will need to show the cycles from the beginning of the hour until the end of the hour if no job is submitted this hour 
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles1=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt: end}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  
    }
     if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=1)
      { //show all the data from the previous job until the first job is submitted
    incomingcycles1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() *Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }

    return incomingcycles1 
}
 //These conditions assume that there is a job still running

 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' &&moment().format("HH")>=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
 {

 	//in these conditions there was an end job submitted this hour and there was a previous job running into this hour

	//
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1&& Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp>Parts.find({press:num, month:month}).fetch().pop().timestamp)
      {
      	//Do this if the end job TS if greater than part TS
    incomingcycles1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }

  
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1&& Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp<Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp)
      {
        //the start time is same.  end at end job time stamp

    incomingcycles1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&& moment().format("HH") >=now)
{
  //There has to be a job running for this to happen
     incomingcycles1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  
    }
   
    return incomingcycles1 
    } 

   //This code will run if there was not a previous job running
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&Hours.find({press:num,timestamp:{$lt: timestamp}, month:month}).fetch().pop().timestamp>Parts.find({press:num,timestamp:{$lt: timestamp}, month:month}).fetch().pop().timestamp)
 { 
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1)
      {
      	//Do this if the end job TS if greater than part TS
    incomingcycles1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  
  }

  
	return incomingcycles1 
}

      },

     incomingcycles1p: function () {
       num= "1"
     
    month=moment().format("MM")
    day=moment().format("DD")
    start=moment().format("YYYY-MM-DD 13:00:00.000")
    end=moment().format("YYYY-MM-DD 14:00:00.000")
    now=moment(start).format("HH")
      timestamp= moment().format("YYYY-MM-DD 13:00:00.000")
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()

     //a job is still running
     //
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&&moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count >=2)
      {
         //no end job submitted     
       
        incomingcycles1p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
      }
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===1)
      {//only want to run this if there was not an end job submitted after that last submitted job
         //start from submitted job, go until end job 
       
        incomingcycles1p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
         
      }  
     
      	return incomingcycles1p
     }

//There was not a job running into this hour
     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' &&moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
     {
     	//if end job submitted and count is >=1, start from first time stamp and go until end job
		if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count >=2)
      {
               
        incomingcycles1p=  Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
                
      }
            
     return incomingcycles1p
     }
      },
          
    
     incomingcycles2: function () {
        //grab all cycles from today
     num= "1"
    
      
    month=moment().format("MM")
    day=moment().format("DD")
    start=moment().format("YYYY-MM-DD 14:00:00.000")
    end=moment().format("YYYY-MM-DD 15:00:00.000")
    now=moment(start).format("HH")
      timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
    

if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
//all of this when there is a job still running from the previous hour
    
 //I will need to show the cycles from the beginning of the hour until the end of the hour if no job is submitted this hour 
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles2=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt: end}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  
    }
     if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=1)
      { //show all the data from the previous job until the first job is submitted
    incomingcycles2= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() *Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }

    return incomingcycles2 
}
 //These conditions assume that there is a job still running

 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' &&moment().format("HH")>=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
 {

 	//in these conditions there was an end job submitted this hour and there was a previous job running into this hour

	//
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1&& Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp>Parts.find({press:num, month:month}).fetch().pop().timestamp)
      {
      	//Do this if the end job TS if greater than part TS
    incomingcycles2= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }

  
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1&& Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp<Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp)
      {
        //the start time is same.  end at end job time stamp

    incomingcycles2= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&& moment().format("HH") >=now)
{
  //There has to be a job running for this to happen
     incomingcycles2= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  
    }
   
    return incomingcycles2 
    } 

   //This code will run if there was not a previous job running
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&Hours.find({press:num,timestamp:{$lt: timestamp}, month:month}).fetch().pop().timestamp>Parts.find({press:num,timestamp:{$lt: timestamp}, month:month}).fetch().pop().timestamp)
 { 
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1)
      {
      	//Do this if the end job TS if greater than part TS
    incomingcycles2= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  
  }

  
	return incomingcycles2 
}

      },

     incomingcycles2p: function () {
       num= "1"
     
    month=moment().format("MM")
    day=moment().format("DD")
    start=moment().format("YYYY-MM-DD 14:00:00.000")
    end=moment().format("YYYY-MM-DD 15:00:00.000")
    now=moment(start).format("HH")
      timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()

     //a job is still running
     //
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&&moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count >=2)
      {
         //no end job submitted     
       
        incomingcycles2p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
      }
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===1)
      {//only want to run this if there was not an end job submitted after that last submitted job
         //start from submitted job, go until end job 
       
        incomingcycles2p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
         
      }  
     
      	return incomingcycles2p
     }

//There was not a job running into this hour
     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' &&moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
     {
     	//if end job submitted and count is >=1, start from first time stamp and go until end job
		if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count >=2)
      {
               
        incomingcycles2p=  Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
                
      }
            
     return incomingcycles2p
     }
      },
     



        incomingc1:function(){
//basically start from the previous job 
		num= "1"
    
      start=moment().format("YYYY-MM-DD 13:00:00.000")
    end=moment().format("YYYY-MM-DD 14:00:00.000")
     now=moment(start).format("HH")
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 14:00:00.000")  
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  //If ther was a job submitted this hour then
  
 //redone code below

if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
//all of this when there is a job still running from the previous hour
    
 //I will need to show the cycles from the beginning of the hour until the end of the hour if no job is submitted this hour 
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //multiply it by the cavitation of the the job less than the current hour
     total1=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  
    }
     if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=1)
      { //show all the data from the previous job until the first job is submitted
    total1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() *Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }

    return total1 
}
 //These conditions assume that there is a job still running

 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' &&moment().format("HH")>=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
 {

 	//in these conditions there was an end job submitted this hour and there was a previous job running into this hour

	//
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1&& Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp>Parts.find({press:num, month:month}).fetch().pop().timestamp)
      {
      	//Do this if the end job TS if greater than part TS
    total1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }

  
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1&& Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp<Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp)
      {
        //the start time is same.  end at end job time stamp

    total1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&& moment().format("HH") >=now)
{
  //There has to be a job running for this to happen
     total1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  
    }
   
    return total1 
    } 

   //This code will run if there was not a previous job running
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&Hours.find({press:num,timestamp:{$lt: timestamp}, month:month}).fetch().pop().timestamp>Parts.find({press:num,timestamp:{$lt: timestamp}, month:month}).fetch().pop().timestamp)
 { 
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1)
      {
      	//Do this if the end job TS if greater than part TS
    total1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  
  }

  
	return total1 
}


},

incomingc1p:function()
{
//copy over incoming cycles 1p and change the start time to 
num= "1"
     
    month=moment().format("MM")
    day=moment().format("DD")
    start=moment().format("YYYY-MM-DD 13:00:00.000")
    end=moment().format("YYYY-MM-DD 14:00:00.000")
     now=moment(start).format("HH")
      timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()

     //basically reformat this to have everything start from the last submitted job
     
//redone code
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&&moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count >=2)
      {
         //no end job submitted     
       
        total1p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
      }
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===1)
      {//only want to run this if there was not an end job submitted after that last submitted job
         //start from submitted job, go until end job 
       
        total1p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
         
      }  
     
      	return total1p
     }

//There was not a job running into this hour
     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' &&moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
     {
     	//if end job submitted and count is >=1, start from first time stamp and go until end job
		if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count >=2)
      {
               
        total1p=  Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
                
      }
            
     return total1p
     }
},

   incomingc2:function(){
//basically start from the previous job 
		num= "1"
    
      start=moment().format("YYYY-MM-DD 14:00:00.000")
    end=moment().format("YYYY-MM-DD 15:00:00.000")
     now=moment(start).format("HH")
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 14:00:00.000")  
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  //If ther was a job submitted this hour then
  
 //redone code below

if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
//all of this when there is a job still running from the previous hour
    
 //I will need to show the cycles from the beginning of the hour until the end of the hour if no job is submitted this hour 
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //multiply it by the cavitation of the the job less than the current hour
     total1=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  
    }
     if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=1)
      { //show all the data from the previous job until the first job is submitted
    total1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() *Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }

    return total1 
}
 //These conditions assume that there is a job still running

 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' &&moment().format("HH")>=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
 {

 	//in these conditions there was an end job submitted this hour and there was a previous job running into this hour

	//
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1&& Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp>Parts.find({press:num, month:month}).fetch().pop().timestamp)
      {
      	//Do this if the end job TS if greater than part TS
    total1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }

  
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1&& Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp<Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp)
      {
        //the start time is same.  end at end job time stamp

    total1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&& moment().format("HH") >=now)
{
  //There has to be a job running for this to happen
     total1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cavitation;
  
    }
   
    return total1 
    } 

   //This code will run if there was not a previous job running
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&Hours.find({press:num,timestamp:{$lt: timestamp}, month:month}).fetch().pop().timestamp>Parts.find({press:num,timestamp:{$lt: timestamp}, month:month}).fetch().pop().timestamp)
 { 
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=1)
      {
      	//Do this if the end job TS if greater than part TS
    total1= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  
  }

  
	return total1 
}


},

incomingc2p:function()
{
//copy over incoming cycles 1p and change the start time to 
num= "1"
     
    month=moment().format("MM")
    day=moment().format("DD")
    start=moment().format("YYYY-MM-DD 14:00:00.000")
    end=moment().format("YYYY-MM-DD 15:00:00.000")
     now=moment(start).format("HH")
      timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()

     //basically reformat this to have everything start from the last submitted job
     
//redone code
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&&moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count >=2)
      {
         //no end job submitted     
       
        total1p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
      }
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===1)
      {//only want to run this if there was not an end job submitted after that last submitted job
         //start from submitted job, go until end job 
       
        total1p= Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: end}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
         
      }  
     
      	return total1p
     }

//There was not a job running into this hour
     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' &&moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
     {
     	//if end job submitted and count is >=1, start from first time stamp and go until end job
		if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count >=2)
      {
               
        total1p=  Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
                
      }
            
     return total1p
     }
},



earnedhours1: function() {
        //I will need to put planned in here and incoming cycles
       num= "1"
          now="13"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH

            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
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
                
   						
                      planned1=1000/Number(cycletime)
          				planned1=parseInt(planned1)
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
     	
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
     	
          cycletimeH=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeH
          
          cycletimeP=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeP
         
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeQ
          
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
                	
   					
					if (typeof Hours.find({timestamp: {$lt: timestamp},press:num}).timestamp === 'undefined')
					{
                      planned1=1000/Number(cycletime)
                      planned1=parseInt(planned1)
					}
   					
                  
           
       }

    
  
    earnedhours1 = Number(incomingcycles1)/planned1
           earnedhours1 = earnedhours1.toFixed(2)
             return earnedhours1 
   
    
     
            },
earnedhours1p: function() {
     			
    num= "1"
          now="13"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
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
                
   
                      planned1p=1000/Number(cycletime)
          				planned1p=parseInt(planned1p)
              
       
           }
      	



      	earnedhours1p = Number(incomingcycles1p)/planned1p
              earnedhours1p = earnedhours1p.toFixed(2)
            return earnedhours1p
    
         
            },


  earnedhours2: function(){
         num= "1"
          now="14"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 15:00:00.000")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH

            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
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
                
   						
                      planned2=1000/Number(cycletime)
          				planned2=parseInt(planned2)
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
     	
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
     	
          cycletimeH=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeH
          
          cycletimeP=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeP
         
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeQ
          
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
                	
   					
					if (typeof Hours.find({timestamp: {$lt: timestamp},press:num}).timestamp === 'undefined')
					{
                      planned2=1000/Number(cycletime)
                      planned2=parseInt(planned2)
					}
   					
          
              
             
           
       }
         
    




    earnedhours2 = Number(incomingcycles2)/planned2
              earnedhours2 = earnedhours2.toFixed(2)
            return earnedhours2 
    
   
   

           
},      
              
     
earnedhours2p: function() {
     
         num= "1"
          now="14"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
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
                
   
                      planned2p=1000/Number(cycletime)
                      planned2p=parseInt(planned2p)
          
              
             
           }
      
     earnedhours2p = Number(incomingcycles2p)/planned2p
             earnedhours2p = earnedhours2p.toFixed(2) 
            return earnedhours2p
     
     
     
            },
earnedhourstotal: function(){
        //I will need to copy all incoming cycles and planned into here then total them


},
changeStatus1: function() {
        //I will need to put planned in here and incoming cycles
        
       num= "1"
          now="14"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH

            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
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
                
   						
                      planned1=1000/Number(cycletime)
          				planned1=parseInt(planned1)
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
     	
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
     	
          cycletimeH=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeH
          
          cycletimeP=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeP
         
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeQ
          
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
                	
   					
					if (typeof Hours.find({timestamp: {$lt: timestamp},press:num}).timestamp === 'undefined')
					{
                      planned1=1000/Number(cycletime)
                      planned1=parseInt(planned1)
					}
   					
                  
           
       }

    
  
    earnedhours1 = Number(incomingcycles1)/planned1
           earnedhours1 = earnedhours1.toFixed(2)
           
      if (earnedhours1>=1)
       {
         return "Green"
      }
      else if (earnedhours1<1)
       {

        return "Yellow"
       }
   
    
     
            },
changeStatus1p: function() {
     			
     num= "1"
          now="14"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
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
                
   
                      planned1p=1000/Number(cycletime)
          				planned1p=parseInt(planned1p)
              
       
           }
      	



      	earnedhours1p = Number(incomingcycles1p)/planned1p
              earnedhours1p = earnedhours1p.toFixed(2)
            
            if (earnedhours1p>=1)
       {
         return "Green"
      }
      else if (earnedhours1p<1)
       {

        return "Yellow"
       }
    
         
            },


 changeStatus2: function(){
         num= "1"
          now="14"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          { 
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH

            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
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
                
   						
                      planned2=1000/Number(cycletime)
          				planned2=parseInt(planned2)
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
     	
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now&&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
     	
          cycletimeH=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeH
          
          cycletimeP=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeP
         
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().cycletimeQ
          
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
                	
   					
					if (typeof Hours.find({timestamp: {$lt: timestamp},press:num}).timestamp === 'undefined')
					{
                      planned2=1000/Number(cycletime)
                      planned2=parseInt(planned2)
					}
   					
          
              
             
           
       }
         
    




    earnedhours2 = Number(incomingcycles2)/planned2
              earnedhours2 = earnedhours2.toFixed(2)
           
     if (earnedhours2>=1)
       {
         return "Green"
      }
      else if (earnedhours2<1)
       {

        return "Yellow"
       }
   
   

           
},      
              
     
changeStatus2p: function() {
     
          num= "1"
          now="14"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num,sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
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
                
   
                      planned2p=1000/Number(cycletime)
                      planned2p=parseInt(planned2p)
          
              
             
           }
      
     earnedhours2p = Number(incomingcycles2p)/planned2p
             earnedhours2p = earnedhours2p.toFixed(2) 
            
      if (earnedhours2p>=1)
       {
         return "Green"
      }
      else if (earnedhours2p<1)
       {

        return "Yellow"
       }
     
     
            },


    part1: function ()
   {
   num= "1"
    now = "14"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
 //find the current day
 
var part =Parts.findOne({hour: now, month:month, day:day,press:num})


 if(typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
    return part.partnumber
 }
   //set this up to only list if there was not an end job submitted
   //after the job submitted before this hour 

// if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
// {
//   //so find  $lte than the entire time stamp!
//   //basically find a Part with a timestamp $lt the  current month day and now

  
//                       part=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop()
		
//   return part.partnumber

//    }
     },
   part1p: function ()
   {
   num= "1"
     now= "13"
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

    part2: function ()
   {
  num= "1"
     now = "14"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 14:00:00.000")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
// if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
// {
//   //fetch the latest part from the job that happened before this month day and hour
//   //CycleTimeStamp: {$gte: startTime}
 
//                       part=Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop()
	
    
     
     
//   return part.partnumber

//    }
   },
   part2p: function ()
   {
  num= "1"
     now= "14"
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
   
   
 

   hour1second: function()
 {//if the part count for this hour is <=2 then return true
   num= "1"
    month=moment().format("MM")
    day=moment().format("DD")
    start=moment().format("YYYY-MM-DD 13:00:00.000")
    end=moment().format("YYYY-MM-DD 14:00:00.000")
    now=moment(start).format("HH")
      timestamp= moment().format("YYYY-MM-DD 13:00:00.000")
  if (Parts.find({hour:now, month:month, day:day,press:num}).count() >=2)
  {
    return true
  }
// if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&&moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lt: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
//       {
//       //There is an end job running into this hour
//       if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===1)
//       {
         
       
//        return true
//       }  
 },
 hour2second: function()
 { num= "1"
    
      
    month=moment().format("MM")
    day=moment().format("DD")
    start=moment().format("YYYY-MM-DD 13:00:00.000")
    end=moment().format("YYYY-MM-DD 14:00:00.000")
    now=moment(start).format("HH")
      timestamp= moment().format("YYYY-MM-DD 13:00:00.000")
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  if (Parts.find({hour:now, month:month, day:day,press:num}).count() >=2)
  {
    return true
  }


   // if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&&moment().format("HH")>=now &&(Hours.find({press:num,timestamp:{$lt: timestamp}, month:month}).fetch().pop().timestamp<Parts.find({press:num,timestamp:{$lte: timestamp}, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
   //    {
   //    //There is an end job running into this hour
   //    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===1)
   //    {
         
       
   //     return true
   //    }  
     
      	
   //   }


    
 } 
 
 	})