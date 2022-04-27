$(document).ready(function (){

    console.log('The document is ready!');
    // display current date
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    // save tasks when button is clicked
    $('.saveBtn').on('click', function() {
    
        // get the time associated with the div as well as the value associated with the text area
        var time = $(this).parent().attr('id')
        var description = $(this).siblings('textarea').val()
    
        console.log(description, time);
    
        // save the task into local storage
        localStorage.setItem(time, description)
    })

    // get items from local storage
    $('#hour9 textarea').val(localStorage.getItem('hour9'))
    $('#hour10 textarea').val(localStorage.getItem('hour10'))
    $('#hour11 textarea').val(localStorage.getItem('hour11'))
    $('#hour12 textarea').val(localStorage.getItem('hour12'))
    $('#hour13 textarea').val(localStorage.getItem('hour13'))
    $('#hour14 textarea').val(localStorage.getItem('hour14'))
    $('#hour15 textarea').val(localStorage.getItem('hour15'))
    $('#hour16 textarea').val(localStorage.getItem('hour16'))
    $('#hour17 textarea').val(localStorage.getItem('hour17'))

    // color time blocks past, present, future
    function colorHour() {
        var currentHour = moment().hours()
    
        console.log(currentHour)

        $('.row').each(function() {
            var hour = $(this).attr('id')
            hour = hour.split("r");
            hour = hour[1];

            if(hour < currentHour) {
                $(this).addClass('past')
            } else if(hour == currentHour) {
                $(this).addClass('present')
            } else {
                $(this).addClass('future')
            }
        })
    }
    // call the function
    colorHour()






}) 