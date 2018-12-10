// NOTES FOR MYSELF:  This lets me call jquery library to my html, all code // for website needs to be inside this

// I had a basic idea of what I wanted to do for this and used w3schools
// to get the info I needed on the date object and the basic info for jquery

$(document).ready(function() {

    // Code that goes inside

    function itBeTime() {
      var theTime = new Date();
      var hours = theTime.getHours();
      var minutes = theTime.getMinutes();
      var seconds = theTime.getSeconds();
      
      // Gives me an extra 0 in front of the seconds, minutes, and hours
      // so that it looks like a proper clock

      if (seconds < 10) {              
        seconds = '0' + seconds;
      }
  
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
  
      if (hours < 10) {
        hours = '0' + hours;
      }

      var myClockDiv = document.getElementById('myClock');

      myClockDiv.innerText = hours + ':' + minutes + ':' + seconds;
    
    }

    itBeTime();
    
// This makes sure that my clock isn't frozen on just one time by refreshing 
// every second, I found this solution using StackOverflow

    setInterval(itBeTime, 1000);
  
});