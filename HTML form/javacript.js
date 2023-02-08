const app = require("../app");

const form = document.getElementById("customer-form");
form.addEventListener("submit",function(event){let isValid =true;
const requiredFields =form.querySelector("[required]");
requiredFields.forEach(function(field)
{if (!field.value){isValid=false;
field.style.border='1px solid red';}
else{field.style.border = '1px solid black'}});
if (!isValid){event.preventDefault();
alert("All fields are required");}});








//to render temporal graph using chart.js
var ctx =document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type:'line',
date:{
    label:[],
datasets:[{
    label:'Income',
data:[],
backgroundColor:'rgba(75, 192, 192, 0.2)',
borderColor:'rgba(75, 192, 192, 1)',
borderWidth: 1
},
{label: 'Expenditure',
data: [],
backgroundColor:'rgba(225, 99, 132, 0.2)',
borderColor:'rgba(255,99,132,1)',
borderWidth:1}],
},
options:{      
          scales:{
                   yAxes:[{
                            ticks:{beginAtZero:true}
                   }]
          }
}
});