Template.schedule.helpers({
  options: function () {
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      id: 'myCalendar',
      editable: true,
      defaultView: 'agendaWeek',
      header: {
        center: 'month,agendaWeek,agendaDay'
      },
      allDaySlot: false,
      minTime: '07:00:00',
      maxTime: '21:00:00',
      lang: 'pt-br',
      slotEventOverlap: false,
      weekends: false,
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      eventClick: function () {
        //Open Event Edit Mode
        console.log('clickei no evento!!');
      },
      dayClick: function (e) {
        var date = e._d,
          $calendar = $('#myCalendar');
        if ($calendar.fullCalendar('getView').name != 'agendaDay') {
          if (e.hour() === 0 && e.minute() === 0) {
            date = e.add(1, 'hours');
          }
          $calendar.fullCalendar('changeView', 'agendaDay');
          $calendar.fullCalendar('gotoDate', date);
        } else {
          //popup modal
          Modal.show('modalAddEvent');
          $('body').data('datetime', e);
        }
      }
    };
  }
});

Template.schedule.onRendered(function () {
  Meteor.subscribe('sessions.public');
  var $calendar = $('#myCalendar'),
      session;
  Meteor.call('getSessions', function (error, result) {
      if(error) {
        console.log('WHAT ', error);
      } else {
        session = result;
        Session.set("data", result);
      }
  });

  console.log(PSessions.find().fetch());
  _(PSessions.find({}).fetch()).forEach(function (item) {
    console.log(item);
    var startDate = new Date(item["startDate"]),
        endDate = startDate.setTime(startDate.getTime() + (60*60*1000));
    $calendar.fullCalendar('renderEvent', {
      title: item["treatment_id"] + ": " + item["patient_id"],
      start: startDate,
      end: endDate
    }, true);
  })

});
