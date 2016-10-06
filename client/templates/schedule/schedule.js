Template.schedule.onCreated( function () {
  this.subscribe('sessions.public');
  source = PSessions.find().fetch();
});

Template.schedule.events({
  'click add-event': function () {
    Modal.show('modalAddEvent');
    $('body').data('datetime', e);
  }
});

Template.schedule.onRendered( function () {
  $('#events-calendar').fullCalendar( {
    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
    id: 'calendar-events',
    editable: false,
    events: source,
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
    dayClick: function (e) {
      var date = e._d,
        $calendar = $('#events-calendar');
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
    });
});
