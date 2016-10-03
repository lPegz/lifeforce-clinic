var testEvents = function () {
  return [{
    title: 'TESTE',
    start: moment()._d,
    end: moment().add(1, 'hours')._d
  }, {
    title: 'TESTE2',
    start: moment().add(1, 'day')._d,
    end: moment().add(1, 'day').add(1, 'hours')._d
  }]
};
var actualEvents = function () {
  Meteor.subscribe('sessions.public');
  var sessions = PSessions.find().fetch();
  return _.map(sessions, function (session) {
    var sess = {
      title: session.title,
      start: moment(session.start)._d,
      end: moment(session.end)._d
    };
    return sess;
  }).filter(function (el) {
    return el.title != null;
  });
};

Template.schedule.helpers({
  options: function () {
    Meteor.subscribe('sessions.public');
    var sessions = PSessions.find().fetch();
    console.log(actualEvents());
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
      events: actualEvents(),
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
  'click add-event': function () {
    Modal.show('modalAddEvent');
    $('body').data('datetime', e);
  }
})
