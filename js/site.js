var clndr = {};

$( function() {

  // PARDON ME while I do a little magic to keep these events relevant for the rest of time...
  var currentMonth = moment().format('YYYY-MM');
  var nextMonth    = moment().add('month', 1).format('YYYY-MM');

  var events = [
  	{ date: "2016-01-22", title: 'anything else', url: 'http://google.ae', },
    { date: currentMonth + '-' + '10', title: 'Persian Kitten Auction', url: 'http://google.com' },
    { date: currentMonth + '-' + '19', title: 'Cat Frisbee', location: 'Jefferson Park' },
    { date: currentMonth + '-' + '23', title: 'Kitten Demonstration', location: 'Center for Beautiful Cats' },
    { date: currentMonth + '-' + '27', title: 'Kitten', location: 'test' },
    { date: currentMonth + '-' + '27', title: 'test1', location: 'test' },
    { date: currentMonth + '-' + '27', title: 'test2', location: 'test' },
    { date: currentMonth + '-' + '27', title: 'test3', location: 'test' },
    { date: currentMonth + '-' + '27', title: 'test4', location: 'test' },
	{ date: currentMonth + '-' + '30', title: 'Kitten', location: 'test' },
    { date: nextMonth + '-' + '07',    title: 'Small Cat Photo Session', location: 'Center for Cat Photography' },
	{ date: "2016-07-22", title: 'anything else', url: 'http://google.ae' }
  ];


  $('#mini-clndr').clndr({
    template: $('#mini-clndr-template').html(),
	daysOfTheWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    events: events,
	
	
	//clickEvents: {
//      click: function(target) {
//       if(target.events.length) {
//       var daysContainer = $('#mini-clndr').find('.days-container');
//        daysContainer.toggleClass('show-events', true);
//         $('#mini-clndr').find('.x-button').click( function() {
//           daysContainer.toggleClass('show-events', false);
//         });
//        }
//      }
//   },
	
   

   clickEvents: {
       click: function (target ) {
           if (target.events.length) {
               var daysContainer = $('#mini-clndr').find('.days-container');
               daysContainer.toggleClass('show-events', true);
               var selectedClass = target.date.format('YYYY-MM-DD');
               $('.events-list .eventday').hide();
			   $('.events-list #event-' + selectedClass).show();
               $('#mini-clndr').find('.x-button').click(function () {
                   daysContainer.toggleClass('show-events', false);
               });
           }
       }
   },

    adjacentDaysChangeMonth: false,
    forceSixRows: false
  });



});