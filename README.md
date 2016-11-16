<h1># clndr.js-with-only-clicked-date-event-listing</h1>
<p>Calendar JS which includes clndr.js and underscore.js and show the clicked date events which we can't find in clndr.js example.</p>

<p>For showing the clicked date events I have worked on few code change in clndr.js plugin setup you don't need to change anything in clndr.js file you just need to work around in site.js to change the click event function a bit to get the result and along with the JS we need to change few lines in the HTML template as well.</p>

<p>Changes we have done in site.js to get the result:<br><br>

clickEvents: {<br>
       click: function (target ) {<br>
           if (target.events.length) {<br>
               var daysContainer = $('#mini-clndr').find('.days-container');<br>
               daysContainer.toggleClass('show-events', true);<br>
               var selectedClass = target.date.format('YYYY-MM-DD');<br>
               $('.events-list .eventday').hide();<br>
			   $('.events-list #event-' + selectedClass).show();<br>
               $('#mini-clndr').find('.x-button').click(function () {<br>
                   daysContainer.toggleClass('show-events', false);<br>
               });<br>
           }<br>
       }<br>
   },<br>
</p>
   
<p>Changes we have made in HTML template to get the result:<br><br>
  
   <div class="events-list">
        {{ _.each(eventsThisMonth, function(event) { }}
           <div class="event eventday" id="event-{{=moment(event.date).format('YYYY-MM-DD')}}">
                <a href="{{= event.url }}">{{= moment(event.date).format('Do MMMM') }} - {{= event.title }}</a>
           </div>
        {{ }); }}
   </div>
  
</p>

<p>And nothing we need to change for showing the clicked date events. But if you need to show the monthly event then you don't need to do any changes on clndr.js</p>

<p>And for modifying the date format you just need to add few lines in site.js:<br><br>
    $('#mini-clndr').clndr({<br>
    template: $('#mini-clndr-template').html(),<br>
	daysOfTheWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // New added line for short days of the week<br> 
    events: events,<br>
</p>
   
