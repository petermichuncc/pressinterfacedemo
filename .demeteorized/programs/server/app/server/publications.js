(function(){//File that publishes all the databases used
Meteor.publish('entries', function() {
  return Entries.find();
});
Meteor.publish('workcenters', function() {
  return Workcenters.find();
});
Meteor.publish('hours', function() {
  return Hours.find();
});
Meteor.publish('machines', function() {
  return Machines.find();
});
Meteor.publish('parts', function() {
  return Parts.find();
});
// Meteor.publish('Presscycles', function() {
//   return Cycles.find();
// });

Meteor.publish('submissions', function() {
  return Submissions.find();
});

// Meteor.publish('cycles-recent', function (startTime) {

// return Cycles.find({CycleTimeStamp: {$gte: startTime}});
// });

Meteor.publish('cycles-recent', function (startTime, pressnumber) {
Cycles.remove({CycleTimeStamp: {$lt: moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")}})

return Cycles.find({CycleTimeStamp: {$gte: startTime},AutoStatus: '1' });
});

// Meteor.publish('cycles-recent', function (startTime, endTime) {

// return Cycles.find({CycleTimeStamp: { $lt: startTime, $gte: endTime}});
// });

//{submitted: {$gte: new Date('2015-02-23'), $lt: new Date('2015-02-04')}}

})();
