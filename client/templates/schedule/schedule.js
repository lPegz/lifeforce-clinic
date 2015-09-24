Template.schedule.helpers({
    options: function() {
        return {
          header: {
      				left: 'prev,next today',
      				center: 'title',
      				right: 'month,agendaWeek,agendaDay'
    			},
          id: 'myCalendar',
    			editable: true,
          defaultView: 'agendaWeek',
          header : {center: 'month,agendaWeek,agendaDay'},
          weekends:false,
          schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
          eventClick : function () {
            console.log('clickei no evento!!');
            //Open Event Edit Mode
          },
          dayClick: function (e) {
            var date = e._d,
                $calendar = $('#myCalendar');
            if($calendar.fullCalendar('getView').name != 'agendaDay') {
              if(e.hour() === 0 && e.minute() === 0) {
                date = e.add(1,'hours');
              }
              $calendar.fullCalendar( 'changeView', 'agendaDay');
              $calendar.fullCalendar('gotoDate', date);
            } else {
              //go to add event
            }
          }
        };
    }
});
