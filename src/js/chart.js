<script>
  var ctx = document.getElementById('myRadialChart').getContext('2d');
  var myRadialChart = new Chart(ctx, {
    type: 'doughnut', // or 'pie' for a pie chart
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        data: [30, 50, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    },
    options: {
      responsive: true
    }
  });
</script>
