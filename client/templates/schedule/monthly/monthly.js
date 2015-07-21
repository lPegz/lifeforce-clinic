Template.scheduleMonth.helpers({
  currentMonth: function() {
    switch (Date.now().getMonth()) {
      case 1:
        return 'Janeiro';
      case 2:
        return 'Feveiro';
      case 3:
        return 'Marco';
      case 4:
        return 'Abril';
      case 5:
        return 'Maio';
      case 6:
        return 'Junho';
      case 7:
        return 'Julho';
      case 8:
        return 'Agosto';
      case 9:
        return 'Setembro';
      case 10:
        return 'Outubro';
      case 11:
        return 'Novembro';
      case 12:
        return 'Dezembro';
    }
  },
  daysPt1: [{
    dayNumber: 1
  }, {
    dayNumber: 2
  }, {
    dayNumber: 3
  }, {
    dayNumber: 4
  }, {
    dayNumber: 5
  }, {
    dayNumber: 6
  }, {
    dayNumber: 7
  }, {
    dayNumber: 8
  }, {
    dayNumber: 9
  }, {
    dayNumber: 10
  }],
  daysPt2: [{
    dayNumber: 11
  }, {
    dayNumber: 12
  }, {
    dayNumber: 13
  }, {
    dayNumber: 14
  }, {
    dayNumber: 15
  }, {
    dayNumber: 16
  }, {
    dayNumber: 17
  }, {
    dayNumber: 18
  }, {
    dayNumber: 19
  }, {
    dayNumber: 20
  }],
  daysPt3: [{
    dayNumber: 21
  }, {
    dayNumber: 22
  }, {
    dayNumber: 23
  }, {
    dayNumber: 24
  }, {
    dayNumber: 25
  }, {
    dayNumber: 26
  }, {
    dayNumber: 27
  }, {
    dayNumber: 28
  }, {
    dayNumber: 29
  }, {
    dayNumber: 30
  }]
});
