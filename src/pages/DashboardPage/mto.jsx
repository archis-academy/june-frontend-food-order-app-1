$(document).ready(function() {
  // Initialize progress rings
  $("#progress-bar-1").progressRing({
      value: 50, // 50% progress
      max: 100,
      thickness: 10,
      fillColor: '#FF6384',
      emptyFillColor: '#e0e0e0'
  });

  $("#progress-bar-2").progressRing({
      value: 75, // 75% progress
      max: 100,
      thickness: 10,
      fillColor: '#36A2EB',
      emptyFillColor: '#e0e0e0'
  });

  // Initialize clock
  function updateClock() {
      var now = new Date();
      var seconds = now.getSeconds();
      var minutes = now.getMinutes();
      var hours = now.getHours();

      // Calculate the progress for hours, minutes, and seconds
      var hoursProgress = (hours % 12) / 12 * 100;
      var minutesProgress = minutes / 60 * 100;
      var secondsProgress = seconds / 60 * 100;

      $("#clock").progressRing({
          value: hoursProgress,
          max: 100,
          thickness: 10,
          fillColor: '#FFCD56',
          emptyFillColor: '#e0e0e0'
      });

      $("#clock").progressRing({
          value: minutesProgress,
          max: 100,
          thickness: 5,
          fillColor: '#4BC0C0',
          emptyFillColor: 'transparent'
      });

      $("#clock").progressRing({
          value: secondsProgress,
          max: 100,
          thickness: 2,
          fillColor: '#FF6384',
          emptyFillColor: 'transparent'
      });
  }

  setInterval(updateClock, 1000);
});
