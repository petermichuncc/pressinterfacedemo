// register event on form, not submit button
Meteor.subscribe('machines');
Meteor.subscribe('entries');


Template.table.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;

var text = $( "#someId" ).val();

var post = {
      partnumber: $( "#partnumber" ).val(),
       quantity: $( "#quantity" ).val(),
       initials: $( "#initials" ).val(),
       cavitation: $( "#cavitation" ).val(),
       workcenter: Machines.find().fetch().pop().machinenumber,
        timestamp: moment().format("YYYY-MM-DD HH:mm:ss.SSS"),
         month: moment().format("MM"),
         day: moment().format("DD"),
         hour: moment().format("HH"),
         minute: moment().format("mm"),
         press: Machines.find().fetch().pop().cellnum,
         //add all the cycle times for this part number
         cycletimeH:Entries.find({partnumber:$( "#partnumber" ).val()}).fetch().pop().cycletimeH,
         cycletimeP:Entries.find({partnumber:$( "#partnumber" ).val()}).fetch().pop().cycletimeP,
         cycletimeQ:Entries.find({partnumber:$( "#partnumber" ).val()}).fetch().pop().cycletimeQ
         
     };
// var hour = {
//       hour: moment().format("HH")
//      };

// Meteor.subscribe('hours');
//      Meteor.call('hoursInsert', hour)

Meteor.subscribe('parts');
     Meteor.call('partsInsert', post)
//Here is the logic to determine the page to go to based on the time of day

if (moment().format("HH")>=15 && moment().format("HH") <23)
{
 Router.go('shift2');
}
else if (moment().format("HH")>=7 && moment().format("HH") <15)
{
 Router.go('shift1');
}
else 
{
	Router.go('shift3');
} 

return false;

}
});
