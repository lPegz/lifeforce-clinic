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
