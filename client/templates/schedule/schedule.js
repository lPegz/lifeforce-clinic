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
            console.log(e);
            $('#myCalendar').fullCalendar( 'changeView', 'agendaDay');
            $('#myCalendar').fullCalendar('gotoDate', e._d);
          }
        };
    }
});
