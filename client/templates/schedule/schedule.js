var testEvents = function() {
  return [{
      title:'TESTE',
      start: moment()._d,
      end: moment().add(1,'hours')._d
    }, {
        title:'TESTE2',
        start: moment().add(1,'day')._d,
        end: moment().add(1,'day').add(1,'hours')._d
      }]
};

Template.schedule.helpers({
  options: function () {
    Meteor.subscribe('sessions.public');
    var sessions = PSessions.find().fetch();
    console.log(sessions);
    console.log(testEvents());
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
      events: testEvents(),
      lang: 'pt-br',
      slotEventOverlap: false,
      weekends: false,
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
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

Template.schedule.events({
    'click add-event' : function () {
      Modal.show('modalAddEvent');
      $('body').data('datetime', e);
    }
})
