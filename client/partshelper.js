// Helper for the parts template that feeds it data





Template.job.helpers({
  parts: function() {
    return Parts.find();
   },
   columns: function() {
     // the context is a part
     var result = _.values(this.data);
     result.unshift(this.text);
     return result;
   },
   earnedHours: function () {
        var earnedHoursCalc = (1 * Parts.findOne().cavitation) / Parts.findOne().quantity;
        return earnedHoursCalc;
    },
     incomingCycles: function () {
        //grab all cycles from today
        
        return (100 * Parts.findOne().cavitation);
    }

});
console.log ("example is" + Parts.find());

// var partStats = {
//     workcenterName: Machines.findOne().machinenumber,
//      partNumber: Parts.findOne().partnumber,
//      partCycleTime: "23",
//      partsPlanned: Parts.findOne().quantity,
//      cavities: Parts.findOne().cavitation,
//      tech: Parts.findOne().initials,
//      startTime: start_time
//  };
