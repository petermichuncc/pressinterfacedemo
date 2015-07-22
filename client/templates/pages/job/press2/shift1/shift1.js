Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');

 Meteor.subscribe('hours');

Template.shift1.helpers({
    
   
 endjob: function ()
 {
  //basically show the end job button if there was a submit job button pressed more recently
  //than an end job button
   num= Machines.find().fetch().pop().cellnum;

  if (typeof Hours.find({}).fetch().pop()=== 'object')
  {
  if (Hours.find().fetch().pop().timestamp<Parts.find({press:num}).fetch().pop().timestamp)
{
  return true
}
}
if (typeof Hours.find().fetch().pop()==='undefined')
{
  return true

}
 } ,
 submitjob: function ()
 {
   num= Machines.find().fetch().pop().cellnum;

  //show the submit job button if there was an end job button clicked more recently than
  //a submit job button , or show it by default.
  if (typeof Hours.find().fetch().pop()=== 'object')
  {
if (Hours.find().fetch().pop().timestamp>Parts.find({press:num}).fetch().pop().timestamp)
{
  return true
}
}
}
  

});
