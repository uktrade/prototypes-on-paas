var trace1 = {

  x: ['Advanced engineering', 'Aerospace', 'Agriculture, horticulture, fisheries and pets', 'Airports', 'Automotive','Chemicals','Construction','Consumer and retail','Creative industries','Defence','Education and training','Energy','Environment','Financial and professional services','Food and drink','Healthcare services','Maritime','Medical devices and equipment','Mining','Pharmaceuticals and biotechnology','Railways','Security','Space','Sports economy','Technology and smart cities','Water'],

  close: [32500,40000,40000,32500,40000,37500,32500,32500,45000,25000,25000,47500,37500,55000,27500,40000,40000,40000,47500,37500,32500,25000,40000,25000,45000,37500],

  decreasing: {line: {color: '#7F7F7F'}},

  high: [32500,40000,40000,32500,40000,37500,32500,32500,45000,25000,25000,47500,37500,55000,27500,40000,40000,40000,47500,37500,32500,25000,40000,25000,45000,37500],

  increasing: {line: {color: '#3D9970'}},

  line: {color: 'rgba(31,119,180,1)'},

  low: [32500,40000,22500,32500,40000,37500,32500,22500,45000,25000,25000,37500,37500,25000,27500,40000,25000,40000,47500,37500,32500,25000,37500,25000,25000,37500],

  open: [32500,40000,22500,32500,40000,37500,32500,22500,45000,25000,25000,37500,37500,25000,27500,40000,25000,40000,47500,37500,32500,25000,37500,25000,25000,37500],

  type: 'candlestick',
  xaxis: 'x',
  yaxis: 'y'
};

var data = [trace1];

var layout = {
  dragmode: false,
  margin: {
    r: 0,
    t: 0,
    b: 200,
    l: 60,
    autoexpand: true
  },
  showlegend: false,
  xaxis: {
    autorange: true,
    rangeslider: { visible: false },
    type: 'category',
    showline: false,
    showgrid: true,
    ticklabelposition: 'outside',
    tickangle: 60,
    linecolor: '#ebf0f8'
  },
  yaxis: {
    title: {
      text: 'Range of salaries (£)',
      font: {
        color: '#7c7c7c',
        size: 10
      }
    },
    autotypenumbers: 'convert types',
    type: 'linear',
    visible: true,
    ticklabelposition: 'outside',
    color: '#444444',
    tickmode: 'auto',
    nticks: 0,
    showticklabels: true,
    showgrid: true,
    automargin: true,
    showline: true,
  },
  font: {
    family: '\"Open Sans\", verdana, arial, sans-serif',
    size: 10,
    color: '#2a3f5f'
  }
};

Plotly.newPlot('myDiv', data, layout);

/*

function linspace(a,b,n) {
  return Plotly.d3.range(n).map(function(i){return a+i*(b-a)/(n-1);});
}
var boxNumber = 30;
var boxColor = [];
var allColors = linspace(0, 360, boxNumber);
var data = [];
var yValues = [];

//Colors

for( var i = 0; i < boxNumber;  i++ ){
  var result = 'hsl('+ allColors[i] +',50%'+',50%)';
  boxColor.push(result);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

//Create Y Values

for( var i = 0; i < boxNumber;  i++ ){
  var ySingleArray = [];
    for( var j = 0; j < 10;  j++ ){
      var randomNum = getRandomArbitrary(0, 1);
      var yIndValue = 3.5*Math.sin(Math.PI * i/boxNumber) + i/boxNumber+(1.5+0.5*Math.cos(Math.PI*i/boxNumber))*randomNum;
      ySingleArray.push(yIndValue);
    }
  yValues.push(ySingleArray);
}

//Create Traces

for( var i = 0; i < boxNumber;  i++ ){
  var result = {
    y: yValues[i],
    type:'box',
    marker:{
      color: boxColor[i]
    }
  };
  data.push(result);
};

//Format the layout

var layout = {
  xaxis: {
    showgrid: false,
    zeroline: false,
    tickangle: 60,
    showticklabels: false
  },
  yaxis: {
    zeroline: false,
    gridcolor: 'white'
  },
  paper_bgcolor: 'rgb(233,233,233)',
  plot_bgcolor: 'rgb(233,233,233)',
  showlegend:false
};


Plotly.newPlot('myDiv', data, layout);
*/
