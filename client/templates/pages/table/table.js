// register event on form, not submit button
Meteor.subscribe('machines');
Meteor.subscribe('entries');

// Template.table.events({
//   'submit form': function () {
//     Router.go('/main.html');
//   }
// });

Template.table.events({
"submit .workcenterSelection": function(event){
event.preventDefault();
console.log(event);
var text = $( "#someId" ).val();
var post = {
      partnumber: $( "#partnumber" ).val(),
       quantity: $( "#quantity" ).val(),
       initials: $( "#initials" ).val(),
       cavitation: $( "#cavitation" ).val(),
       workcenter: Machines.findOne().machinenumber
     };
console.log("example test for parts" + post);
console.log(text);
Meteor.subscribe('parts');
     Meteor.call('partsInsert', post)
console.log("second hi");
Router.go('main'); 
return false;

}
});



 // var post = {
      
 //       partnumber: $(e.target).find('[type=partnumber]').val(),

 //       quantity: $(e.target).find('[type=quantity]').val(),
 //       initials: $(e.target).find('[type=initials]').val(),
 //       cavitation: $(e.target).find('[type=cavitation]').val(),

 //       workcenter: Machines.findOne().machinenumber
 //     };
 //     console.log("example test for parts" + post);
 //    Meteor.subscribe('parts');
 //     Meteor.call('partsInsert', post) //function(error, result) {
 //     //   // display the error to the user and abort
 //     //   if (error)
 //     //     return alert(error.reason);

 //     //   // show this result but route anyway
 //     //   // if (result.postExists)
 //     //   //   alert('This link has already been posted');

 //       Router.go('main');  
     
 //   }
 // });













// Template.table.events({
//   'click .go': function(e) {
//     e.preventDefault();


//  console.log(Machines.findOne().machinenumber);
//     var post = {
      
//       partnumber: $(e.target).find('[type=partnumber]').val(),

//       quantity: $(e.target).find('[type=quantity]').val(),
//       initials: $(e.target).find('[type=initials]').val(),
//       cavitation: $(e.target).find('[type=cavitation]').val(),

//       workcenter: Machines.findOne().machinenumber
//     };
//     console.log("example test for parts" + post);
// Meteor.subscribe('parts');
//     Meteor.call('partsInsert', post) //function(error, result) {
//     //   // display the error to the user and abort
//     //   if (error)
//     //     return alert(error.reason);

//     //   // show this result but route anyway
//     //   // if (result.postExists)
//     //   //   alert('This link has already been posted');

//       Router.go('main');  
     
//   }
// });