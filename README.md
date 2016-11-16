# clndr.js-with-only-clicked-date-event-listing
Calendar JS which includes clndr.js and underscore.js and show the clicked date events which we can't find in clndr.js example.

For showing the clicked date events I have worked on few code change in clndr.js plugin setup you don't need to change anything in clndr.js file you just need to work around in site.js to change the click event function a bit to get the result and along with the JS we need to change few lines in the HTML template as well.

Changes we have done in site.js to get the result:
```html
clickEvents: {
       click: function (target ) {
           if (target.events.length) {
               var daysContainer = $('#mini-clndr').find('.days-container');
               daysContainer.toggleClass('show-events', true);
               var selectedClass = target.date.format('YYYY-MM-DD');
               $('.events-list .eventday').hide();<br>
			   $('.events-list #event-' + selectedClass).show();
               $('#mini-clndr').find('.x-button').click(function () {
                   daysContainer.toggleClass('show-events', false);
               });
           }
       }
   },
 ```
   
Changes we have made in HTML template to get the result:

```html
   <div class="events-list">
        {{ _.each(eventsThisMonth, function(event) { }}
           <div class="event eventday" id="event-{{=moment(event.date).format('YYYY-MM-DD')}}">
                <a href="{{= event.url }}">{{= moment(event.date).format('Do MMMM') }} - {{= event.title }}</a>
           </div>
        {{ }); }}
   </div>
```  
And nothing we need to change for showing the clicked date events. But if you need to show the monthly event then you don't need to do any changes on clndr.js

And for modifying the date format you just need to add few lines in site.js:
```html
    $('#mini-clndr').clndr({
    template: $('#mini-clndr-template').html(),
	daysOfTheWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // New added line for short days of the week
    events: events,
```
   
