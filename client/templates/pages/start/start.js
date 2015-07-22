 Meteor.subscribe('workcenters');

 Template.start.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;

var post = {
      machinenumber: $( "#someId" ).val(),
      cellnum: Workcenters.find({CellID:$( "#someId" ).val()}).fetch().pop().CellNum
     };

Meteor.subscribe('machines');
     Meteor.call('machinesInsert', post)

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

 

Template.start.helpers({

workcenters: function () {
    var machine = Cycles.find();
    // console.log(machine);

    return Workcenters.find()


  }





})