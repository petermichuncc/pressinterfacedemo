
  Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 10:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');
 Meteor.subscribe('hours');

 Template.part5.helpers({

hour4p: function () {
      num= Machines.find().fetch().pop().cellnum;
    
     now="18"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "18"
   }
   },
   
   hour5p: function () {
    num= Machines.find().fetch().pop().cellnum;
     now="19"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
     if (count>1)
    {
     return "19"
   }
   },
   hour6p: function () {
      num= Machines.find().fetch().pop().cellnum;
     now="20"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
     if (count>1)
    {
     return "20"
   }
   },

planned4: function (){
          
          num= Machines.find().fetch().pop().cellnum;
          now="18"
          month=moment().format("MM")
          day=moment().format("DD")

         timestamp= moment().format("YYYY-MM-DD 18:59:00.000")
         
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
     
  
      //I need Hours.find ts to be < Parts.find ts
          //show the data if the last submitted EJ was before the last submitted Job or if the last submitted end job occured after the time stamp
          // Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp
        if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now && (Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
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
       planned4p: function (){
           
      
     
                num= Machines.find().fetch().pop().cellnum;
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
          
              
             return parseInt(planned)
           }
          
          
           },    
       planned5: function(){
        num= Machines.find().fetch().pop().cellnum;
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
          
              
             return parseInt(planned)
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
             if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
          {
                      planned=1000/Number(cycletime)
          }
          
              
             return parseInt(planned)
           }
          
},

planned5p: function (){
           
                num= Machines.find().fetch().pop().cellnum;
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
          
              
             return parseInt(planned)
           }
          
          
           },    
planned6: function(){
   num= Machines.find().fetch().pop().cellnum;
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
          
              
             return parseInt(planned)
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
             
                     if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
          {
                      planned=1000/Number(cycletime)
          }
          
              
             return parseInt(planned)
           }
          
},
planned6p: function (){
           
      
     
                num= Machines.find().fetch().pop().cellnum;
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
          
              
             return parseInt(planned)
           }
          
          
           },    

plannedc4: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= Machines.find().fetch().pop().cellnum;
          now="18"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 18:59:00.000")

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
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now &&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
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
 plannedc4p: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= Machines.find().fetch().pop().cellnum;
          now="18"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 18:59:00.000")

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
       plannedc5: function(){
   num= Machines.find().fetch().pop().cellnum;
   now="19"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 19:59:00.000")
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
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now &&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
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

 plannedc5p: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= Machines.find().fetch().pop().cellnum;
          now="19"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 19:59:00.000")

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
plannedc6: function(){
   num= Machines.find().fetch().pop().cellnum;
   now="20"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 20:59:00.000")
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
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now &&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
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
 plannedc6p: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= Machines.find().fetch().pop().cellnum;
          now="20"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 20:59:00.000")

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
incomingcycles4: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop().cellnum;
    
      now="18"
    month=moment().format("MM")
    day=moment().format("DD")
      timestamp= moment().format("YYYY-MM-DD 18:59:00.000")
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
    return incomingcycles4 
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
   return incomingcycles4 
    }   
       
      },

     incomingcycles4p: function () {
        num= Machines.find().fetch().pop().cellnum;
     now="18"
    month=moment().format("MM")
    day=moment().format("DD")
      
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
     
      return incomingcycles4p
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
     return incomingcycles4p
     }
      },
          
    
      incomingcycles5: function () {
        //grab all cycles from today
        num= Machines.find().fetch().pop().cellnum;
     now="19"
    month=moment().format("MM")
    day=moment().format("DD")
      timestamp= moment().format("YYYY-MM-DD 19:59:00.000")
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
    return incomingcycles5
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
    return incomingcycles5
    }   
        
      },
      
     incomingcycles5p: function () {
        num= Machines.find().fetch().pop().cellnum;
     now="19"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' )
     {
      //go until the job was submitted basically for all the if statements
    if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"),  $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     
     }
    
      },

    incomingcycles6: function () {
         //grab all cycles from today
       num= Machines.find().fetch().pop().cellnum;
     now="20";
    month=moment().format("MM")
    day=moment().format("DD")
      timestamp= moment().format("YYYY-MM-DD 20:59:00.000")
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

return incomingcycles6  
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
 return incomingcycles6  
    }  
      

      },
      
      incomingcycles6p: function () {
          num= Machines.find().fetch().pop().cellnum;
     now="20"
    month=moment().format("MM")
    day=moment().format("DD")
      
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
     return incomingcycles6p

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
     return incomingcycles6p
     }
     
       },

        incomingc4:function(){

num= Machines.find().fetch().pop().cellnum;
    
      now="18"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 18:59:00.000")  
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  //If ther was a job submitted this hour then

  if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
 {
//all this is activated whenever a job is submitted in this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
       {
    total4= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 19:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

    total4= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 

//This bit of code is different
//so there is no job this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' )
 {
   //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     total4= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 19:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
     }
     return total4
     }
//This code is run if there is an end job sent
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is a job started in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    total4= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    total4= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//if there is not a job submitted this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
    total4= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    return total4
    }  
  

},
 incomingc5:function(){


num= Machines.find().fetch().pop().cellnum;
    
      now="19"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 19:59:00.000")  
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  //If ther was a job submitted this hour then
  if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
 {
//all this is activated whenever a job is submitted in this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
       {
    total5= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

    total5= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 

//This bit of code is different
//so there is no job this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' )
 {
   //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     total5= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
     }
     return total5
     }
//This code is run if there is an end job sent
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object' )
 {
//run this code when there is a job started in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    total5= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    total5= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//if there is not a job submitted this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
    total5= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    return total5
    }  
  


},
 incomingc6:function(){

now="20"
//Hours.find({hour: now, month:month, day:day}).fetch().pop().timestamp //this will find the time stamp of when the latest job was ended

//basically show all the count since the job began this hour
num= Machines.find().fetch().pop().cellnum;
    
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 20:59:00.000")  
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  //If ther was a job submitted this hour then
  if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' &&moment().format("HH")>=now&&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
 {
//all this is activated whenever a job is submitted in this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
       {
    total6= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 21:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

    total6= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 

//This bit of code is different
//so there is no job this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
 {
   //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     total6= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 21:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
     }
     return total6
     }
//This code is run if there is an end job sent
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is a job started in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    total6= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    total6= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//if there is not a job submitted this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm")>=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
      total6 =Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
     
    }
    return total6
    }  
  



  
},

earnedhours4: function() {
        //I will need to put planned in here and incoming cycles
        num= Machines.find().fetch().pop().cellnum;
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
            return earnedhours4
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
            return earnedhours4
    }   

           
               
          
     
     
            },
earnedhours4p: function() {
       num= Machines.find().fetch().pop().cellnum;
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
            return earnedhours4p
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
            return earnedhours4p
     }
         
            },


  earnedhours5: function(){
        num= Machines.find().fetch().pop().cellnum;
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
            return earnedhours5
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
            return earnedhours5
    }   
  
    

           
},      
              
     
earnedhours5p: function() {
          num= Machines.find().fetch().pop().cellnum;
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
            return earnedhours5p

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
            return earnedhours5p
     }
     
     
            },
earnedhours6: function() {
        num= Machines.find().fetch().pop().cellnum;
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
            return earnedhours6  
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
            return earnedhours6
    }  

    

           
          
           
            },
earnedhours6p: function() {
       
         
                  num= Machines.find().fetch().pop().cellnum;
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
            return earnedhours6p

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
            return earnedhours6p
     }
     
            },

 changeStatus4: function() {
        num= Machines.find().fetch().pop().cellnum;
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
          
     
            
        if (earnedhours4 >=1)
       {
         return "Green"
      }
      else if (earnedhours4 <1)
       {

        return "Yellow"
       }



     },

     changeStatus4p: function() {
//get EH4p
num= Machines.find().fetch().pop().cellnum;
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

      if (earnedhours4p >=1)
      {
        return "Green"
      }

      else if (earnedhours4p <1)
       {

         return "Yellow"
       }


},
    

    changeStatus5: function() {
    num= Machines.find().fetch().pop().cellnum;
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

           
          
            
        if (earnedhours5 >=1)
      {
        return "Green"
      }

      else if (earnedhours5 <1)
       {

         return "Yellow"
       }




     },
changeStatus5p: function() {
  num= Machines.find().fetch().pop().cellnum;
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
 if (earnedhours5p >=1)
      {
         return "Green"
       }

      else if (earnedhours5p <1)
       {

        return "Yellow"
      }
},
changeStatus6: function() {
         num= Machines.find().fetch().pop().cellnum;
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


          
           
            
       if (earnedhours6 >=1)
      {
         return "Green"
       }

      else if (earnedhours6 <1)
       {

        return "Yellow"
      }

},

changeStatus6p: function() {

                  num= Machines.find().fetch().pop().cellnum;
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
 if (earnedhours6p >=1)
      {
         return "Green"
       }

      else if (earnedhours6p <1)
       {

        return "Yellow"
      }

},

    part4: function ()
   {
   num= Machines.find().fetch().pop().cellnum;
     now = "18"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 18:59:00.000")
 //find the current day
 
var part =Parts.findOne({hour: now, month:month, day:day,press:num})


 if(typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
    return part.partnumber
 }
   //set this up to only list if there was not an end job submitted
   //after the job submitted before this hour 

if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' & moment().format("HH")>=now &&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
  //so find  $lte than the entire time stamp!
  //basically find a Part with a timestamp $lt the  current month day and now

  
                      part=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()
    
    
     
  return part.partnumber

   }
     },
   part4p: function ()
   {
   num= Machines.find().fetch().pop().cellnum;
     now= "18"
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

    part5: function ()
   {
  num= Machines.find().fetch().pop().cellnum;
     now = "19"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 19:59:00.000")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && moment().format("HH")>=now &&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
 
                      part=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()
  
    
     
     
  return part.partnumber

   }
   },
   part5p: function ()
   {
  num= Machines.find().fetch().pop().cellnum;
     now= "19"
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
   
   
  part6: function ()
   {
      num= Machines.find().fetch().pop().cellnum;
     now = "20"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 20:59:00.000")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH")>=now &&(Hours.find({press:num, month:month}).fetch().pop().timestamp<Parts.find({press:num, month:month}).fetch().pop().timestamp||Hours.find({press:num, month:month}).fetch().pop().timestamp >timestamp))
{
  
                      part=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()
  
    
     
  return part.partnumber

   }

   },
   part6p: function ()
   {
 num= Machines.find().fetch().pop().cellnum;
     now= "20"
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

   hour4second: function()
 {//if the part count for this hour is <=2 then return true
   num= Machines.find().fetch().pop().cellnum;
   now="18"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day,press:num}).count() >=2)
  {
    return true
  }

 },
 hour5second: function()
 {num= Machines.find().fetch().pop().cellnum;
now="19"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day,press:num}).count() >=2)
  {
    return true
  }
 } , 
 hour6second: function()
 {num= Machines.find().fetch().pop().cellnum;
now="20"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day,press:num}).count() >=2)
  {
    return true
  }
 }  
  })