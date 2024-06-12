// JQuery

// JQuery equivalent of document.createElement
const div = $('<div>here is some text!</div>');

// JQuery equivalent of document.querySelector
const body = $('body');

// JQuery equivalent of .appendChild()
body.append(div);

// JQuery equivalent of .addEventListener()
div.on('click', () => console.log('hello world'));


// Chart.js

// Chart 1
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

// === include 'setup' then 'config' above ===

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// Chart 2
const labels2 = [
    'Strength',
    'Agility',
    'Defense',
    'Dexterity',
    'Intelligence',
    'Wisdom',
    'Perception',
];

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Warrior',
        backgroundColor: 'rgb(255, 59, 0,0.3)',
        borderColor: 'rgb(255, 59, 0)',
        data: [9, 4, 7, 2, 2, 2, 4],
    }, {
        label: 'Mage',
        backgroundColor: 'rgb(0, 182, 255,0.3)',
        borderColor: 'rgb(0, 182, 255)',
        data: [2, 4, 2, 3, 6, 9, 7],
    }, {
        label: 'Rogue',
        backgroundColor: 'rgb(0, 255, 46,0.3)',
        borderColor: 'rgb(0, 255, 46)',
        data: [3, 7, 4, 9, 3, 3, 6],
    }]
};

const config2 = {
    type: 'radar',
    data: data2,
    options: {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 1,
                suggestedMax: 10
            }
        }
    }
};


const ChartCanvas = ('<canvas id="newChart"></canvas>');

body.append(ChartCanvas)

const newChart = new Chart(
    ('newChart'),
    config2
);


// Chart 3 (CSV)
body.append('<canvas id="csv"></canvas>')

var chart = new Chart('csv', {
    type: 'line',
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [10, 20, 30]
        }
      ]
    }
  });

//   d3.csv('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2814973/atp_wta.csv')
//   .then(makeChart);
  

//   function makeChart(players) {

//   }