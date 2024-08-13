let selected_equation=document.getElementById('selected_equation');
let solution=document.getElementById('solution');
const calculator=`
<div class="base" style="margin-top:50px;">
<a href="calc_norm.html"><button>Standard</button></a>
<a href="calc_sci.html"><button>Scientific</button></a>

</div>
`;
const more=`
<h2>CONVERSIONS</h2>
<div id="more_c">
<button onclick="change_content('temperature')">°C</button>
<button onclick="change_content('length')">mm</button>
<button onclick="change_content('mass')">kg</button>
</div><br>

<div id="more_c">
<button onclick="change_content('pressure')">atm</button>
<button onclick="change_content('area')">sq.m</button>
<button onclick="change_content('volume')">l<sup>3</sup></button>
</div>

<h2>TOOLS</h2>
<div id="more_t">
<button onclick="change_content('geometry')">l x b</button>
<button onclick="change_content('base')">010</button>
<button onclick="change_content('formulas')">formulas</button>

</div>
`;
const geometry=`
  <h2>Geometry</h2>
  <h3>Two Dimensions Shapes</h3>
  <p>Two-dimensional (2D) shapes are flat figures that 
  exist on a plane and have only two dimensions: length and width. 
  They lack any thickness or depth. Here are some examples of 2D shapes:</p>
  <ol>
    <li><b>Circle:</b> A curved shape with no corners or edges.</li>
    <li><b>Triangle:</b> It has three straight sides, three angles, and three vertices.</li>
    <li><b>Square:</b> Four equal sides, each measuring 90°, and four vertices.</li>
    <li><b>Rectangle:</b> Four sides, four vertices, and opposite sides parallel.</li>
    <li><b>Parallelogram:</b> Two pairs of parallel sides.</li>
    <li><b>Rhombus:</b> All sides are equal in length.</li>
    <li><b>Trapezoid:</b> Four sides with one pair of opposite sides parallel.</li>
    <li><b>Kite:</b> Four sides grouped into two pairs of equal adjacent sides.</li>
    <li><b>Semi-Circle:</b> Half of a circle formed by a diameter.</li>
  </ol>
  <h3>below are the properties and formulas for calculating the perimeters and areas of the shapes listed above</h3>
 <ol>
    <li><b>Circle:</b>
      <ul><li>Radius (r): The distance from the center to any point on the circle.</li><br><br>
         <li>Diameter (d): Twice the radius (i.e., (d = 2r)).<br><br>
         <li>Circumference (C): The total length around the circle. 
                            (C = 2 x π x r = 2πr) (where (π) is approximately 3.14159).</li><br><br>
         <li>Area (A): The space enclosed by the circle. 
                                (A = π x r<sup>2</sup> = πr<sup>2</sup>)</li>.<br></ul> </li>
    <li><b>Triangle:</b> </li>
    <li><b>Square:</b> Four equal sides, each measuring 90°, and four vertices.</li>
    <li><b>Rectangle:</b> Four sides, four vertices, and opposite sides parallel.</li>
    <li><b>Parallelogram:</b> Two pairs of parallel sides.</li>
    <li><b>Rhombus:</b> All sides are equal in length.</li>
    <li><b>Trapezoid:</b> Four sides with one pair of opposite sides parallel.</li>
    <li><b>Kite:</b> Four sides grouped into two pairs of equal adjacent sides.</li>
    <li><b>Semi-Circle:</b> Half of a circle formed by a diameter.</li>
  </ol>

`;
const base=`
<div class="base"><br>
<span style="color:red; text-decoration:underline;">BASE</span>
<br>
Select action:<br><br>
<button onclick="change_content('base_operations')">operations +-÷×^</button><br>
<button onclick="change_content('base_equation')">equations</button>
</div>
`;
const base_equation=`
<div class="base"><br>
<span style="color:red; text-decoration:underline;">
BASE EQUATIONS
</span><br>
Select missing variable:<br><br>
n<sub>b</sub>=N<sub>B</sub><br><br>
<strong onclick="change_content('base_equation_n')">n</strong><br><br>
<strong onclick="change_content('base_equation_b')">b</strong><br><br>

</div>

`;
const base_equation_n=`
<p onclick="change_content('base_equation')" style="text-align:center;">←←←←</p>

<div class="base"><br>
<h3>binary equation with missing variable n</h3>
n<sub><input type="number" id="b"></sub>=<input type="text" id="N"><sub ><input type="number" id="B"></sub><br><br>
<button onclick="s_base_equation('n')">solve</button><br><br>

n=<span id="n"></span>

</div>

`;
const base_equation_b=`
<p onclick="change_content('base_equation')" style="text-align:center;">←←←←</p>
<div class="base"><br>
<h3>binary equation with missing variable b</h3>
<input type="text" id="n"><sub>b</sub>=<input type="text" id="N"><sub> <input type="number" id="B"></sub><br><br>
<button onclick="s_base_equation('b')">solve</button><br><br>
b=<span id="b"></span>
</div>
`;
const mass = `
<div id="sel">
<input type="number" id="input1" placeholder="enter value here" class="input" oninput="convm(this.value)" onchange="convm(this.value)">
<select id="inpu1" class="select">
<option>gram</option>
<option>milligram</option>
<option>centigram</option>
<option>kilogram</option>
<option>pounds</option>
<option>ounce</option>
</select><br>

<input type="number" id="input2" class="input" disabled>
<select id="inpu2" class="select">
<option>gram</option>
<option>milligram</option>
<option>centigram</option>
<option>kilogram</option>
<option>pounds</option> 
<option>ounce</option>
</select>
<br>
<button onclick="convm(document.getElementById('input1').value)" id="t_c">Convert</button>
  <h2> SOLUTION <br> ↓↓</h2> 
  <div id = "solution"> </div>
</div>

`;
const pressure = `
<div id="sel">
  <input type="number" id="input1" placeholder="enter value here" class="input" oninput="convp(this.value)" onchange="convp(this.value)">
    <select id="inpu1" class="select">
    <option>atm</option>
    <option>pascal</option>
    <option>mmHg</option>

    </select>
  <input type="number" id="input2" class="input" disabled>
  <select id="inpu2" class="select">
   <option>atm</option>
    <option>pascal</option>
    <option>mmHg</option>
  </select><br>
  <button onclick="convp(document.getElementById('input1').value)" id="t_c">Convert</button>
  <h2>SOLUTION<br>↓↓</h2>
  <div id="solution"></div>
</div>
`;
const volume = `
<div id="sel">
  <input type="number" id="input1" placeholder="enter value here" class="input" oninput="convv(this.value)" onchange="convv(this.value)">
    <select id="inpu1" class="select">
    <option>litre</option>
    <option>millilitre</option>
    <option>US_gallon</option>
    <option>UK_gallon</option>
    <option>cubic_metre</option>
    <option>cubic_foot</option>

    </select>
  <input type="number" id="input2" class="input" disabled>
  <select id="inpu2" class="select">
    <option>litre</option>
    <option>millilitre</option>
    <option>US_gallon</option>
    <option>UK_gallon</option>
    <option>cubic_metre</option>
    <option>cubic_foot</option>
  </select><br>
  <button onclick="convv(document.getElementById('input1').value)" id="t_c">Convert</button>
  <h2>SOLUTION<br>↓↓</h2>
  <div id="solution"></div>
</div>
`;
const area = `
<div id="sel">
  <input type="number" id="input1" placeholder="enter value here" class="input" oninput="conva(this.value)" onchange="conva(this.value)">
    <select id="inpu1" class="select">
    <option>squareMeter</option>
    <option>squareFoot</option>
    <option>squareYard</option>
    <option>acre</option>
    <option>hectare</option>

    </select>
  <input type="number" id="input2" class="input" disabled>
  <select id="inpu2" class="select">
 <option>squareMeter</option>
  <option>squareFoot</option>
  <option>squareYard</option>
  <option>acre</option>
  <option>hectare</option>
  </select><br>
  <button onclick="conva(document.getElementById('input1').value)" id="t_c">Convert</button>
  <h2>SOLUTION<br>↓↓</h2>
  <div id="solution"></div>
</div>
`;
const length = `
<div id="sel">
  <input type="number" id="input1" placeholder="enter value here" class="input" oninput="convl(this.value)" onchange="convl(this.value)">
    <select id="inpu1" class="select">
    <option>meter</option>
    <option>centimeter</option>
    <option>millimeter</option>
    <option>kilometer</option>
    <option>feet</option>
    <option>inches</option>
    <option>yard</option>
    <option>mile</option>

    </select>
  <input type="number" id="input2" class="input" disabled>
  <select id="inpu2" class="select">
   <option>meter</option>
    <option>centimeter</option>
    <option>millimeter</option>
    <option>kilometer</option>
    <option>feet</option>
    <option>inches</option>
    <option>yard</option>
    <option>mile</option>

  </select><br>
  <button onclick="convl(document.getElementById('input1').value)" id="t_c">Convert</button>
  <h2>SOLUTION<br>↓↓</h2>
  <div id="solution"></div>
</div>
`;
const temperature = `
  <div id="sel">
    <input type="number" id="input1" placeholder="  enter value here" class="input">
    <select id="inpu1" class="select">
      <option selected>Celsius</option>
      <option>Fahrenheit</option>
      <option>Kelvin</option>
      <option>Réaumur</option>
      <option>Rankine</option>

    </select><br>
    <input type="number" id="input2" class="input" disabled>
     <select id="inpu2" class="select">
       <option>Celsius</option>
       <option selected>Fahrenheit</option>
       <option>Kelvin</option>
       <option>Réaumur</option>
       <option>Rankine</option>
    
     </select><br>
<button onclick="convt(document.getElementById('input1').value)" id="t_c">Convert</button>
  <h2>SOLUTION<br>↓↓</h2>
  <div id="solution"></div>
    </div>

`
const c_equation=`
    <h2>Equation Solver</h2>
    <p>Solve different kinds of <b>equations</b> and view <b>solutions</b> for each answer gotten</p>
  <b class="buttonb" onclick="document.getElementById('select_equation').style.display='block'">Select Equation Type</b>
<div id="select_equation" onclick="document.getElementById('select_equation').style.display='none'">
    <input type="button" value="Simple Linear Equations" onclick="select_equation('simple')"><br>
    <input type="button" value="Quadratic Equations" onclick="select_equation('quadratic')"><br>
    <input type="button" value="Simultaneous Linear Equations" onclick="select_equation('simultaneous')"><br>
    <input type="button" value="Simultaneous Linear Triples" onclick="select_equation('triple')"><br>
    <input type="button" value="Polynomials" onclick="select_equation('polynomials')"><br>
</div>


    <!--Selected Equation-->
<div id="selected_equation">
      <p>ax+b=c</p>
<p><input type="number" id="a">x+<input type="number" id="b">=<input type="number" id="c"></p>
<button onclick="solve('simple')" id="solve">Solve</button>
<hr>
<p>x=<span id="x"></span></p><hr></div>
<p>Solution</p><hr>
<div id="solution">
    </div>
`;
const simple = `
      <p>ax+b=c</p>
<p><input type="number" id="a" value="0">x+<input type="number" id="b" value="0">=<input type="number" id="c" value="0"></p>
<button onclick="solve('simple')" id="solve">Solve</button>
<hr>
<p>x=<span id="x"></span></p><hr>
  `;
const quadratic = `
<p>ax<sup>2</sup>+bx+c=0</p>

<p>a=<input type="number" id="aq">,
b=<input type="number" id="bq">,
c=<input type="number" id="cq"></p>
<button onclick="solve('quadratic')">Solve</button>
<hr>

<p>X<sub>1</sub>=<span id="x1"></span></p>
<p>X<sub>2</sub>=<span id="x2"></span></p><hr>
<p>SOLUTION</p><hr>
<span>select method</span><br>
<input type="button" value="formula" style="width:30%;" onclick="solve('quadratic')">
<input type="button" value="factorization" onclick="factorization()" style="width:40%;"><hr>
`;
const simultaneous = `
<p>a<sub>1</sub>x+b<sub>1</sub>y=c<sub>2</sub>
<br>a<sub>2</sub>x+b<sub>2</sub>y=c<sub>2</sub></p>

<p><input type="number" value="" id="a1s"><sub>1</sub>x+<input type="number" value="" id="b1s"><sub>1</sub>y=<input type="number" value="" id="c1s"><sub>1</sub><br>

<input type="number" value="" id="a2s"><sub>2</sub>x+<input type="number" value="" id="b2s"><sub>2</sub>y=<input type="number" value="" id="c2s"><sub>2</sub></p>

<button onclick="solve('simultaneous')">Solve</button><br><hr>
<p>X=<span id="x"></span></p>
<p>Y=<span id="y"></span></p>
<hr>
<p>Select Method</p><br>
<button onclick="solve('simultaneous')" style="width:40%; background:gray;">Elimination</button>
<button onclick="substitution()" style="width:40%; background:gray;">Substitution</button>

`;
const triple=`
<p>a<sub>1</sub>x+b<sub>1</sub>y+c<sub>1</sub>z=d<sub>1</sub><br>
a<sub>2</sub>x+b<sub>2</sub>y+c<sub>2</sub>z=d<sub>2</sub><br>
a<sub>3</sub>x+b<sub>3</sub>y+c<sub>3</sub>z=d<sub>3</sub></p><br><br>
<p><input type="number" id="a1">x+<input type="number" id="b1">y+<input type="number" id="c1">z=<input type="number" id="d1"><br>

<input type="number" id="a2">x+<input type="number" id="b2">y+<input type="number" id="c2">z=<input type="number" id="d2"><br>

<input type="number" id="a3">x+<input type="number" id="b3">y+<input type="number" id="c3">z=<input type="number" id="d3"></p><br><br>
<button onclick="solve('triple')">Solve</button><br><hr>
<p>X=<span id="x"></span></p>
<p>Y=<span id="y"></span></p>
<p>Z=<span id="z"></span></p>

`;
const polynomial=`
ax<sup>3</sup>+bx<sup>2</sup>+cx+d=0<br><br>
ax<sup>3</sup>+bx<sup>2</sup>+cx+d=0<br><br>

`;
function select_equation(equation){
  switch (equation) {
    case 'simple':
      selected_equation.innerHTML=simple;
      break;
    case 'quadratic':
      selected_equation.innerHTML=quadratic;
      break;
    case 'simultaneous':
      selected_equation.innerHTML=simultaneous;
      break;
    case 'triple':
      selected_equation.innerHTML=triple;
      break;
    case 'polynomial':
      selected_equation.innerHTML=polynomial;
      break;
    
  }
}
function solve(equation){
  switch (equation) {
    case 'simple':
let a = document.getElementById('a').value;
let b = document.getElementById('b').value;
let c = document.getElementById('c').value;
solve_simple(a,b,c)
      break;
    case 'triple':
let a1 = parseFloat(document.getElementById('a1').value);
let b1 = parseFloat(document.getElementById('b1').value);
let c1 = parseFloat(document.getElementById('c1').value);
let d1 = parseFloat(document.getElementById('d1').value);
let a2 = parseFloat(document.getElementById('a2').value);
let b2 = parseFloat(document.getElementById('b2').value);
let c2 = parseFloat(document.getElementById('c2').value);
let d2 = parseFloat(document.getElementById('d2').value);
let a3 = parseFloat(document.getElementById('a3').value);
let b3 = parseFloat(document.getElementById('b3').value);
let c3 = parseFloat(document.getElementById('c3').value);
let d3 = parseFloat(document.getElementById('d3').value);
let resultArr=
solve_triples(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3);
let x=(resultArr=='N')?'No Unique Solution':appr(resultArr[0]);
let y=(resultArr=='N')?'No Unique Solution':appr(resultArr[1]);
let z=(resultArr=='N')?'No Unique Solution':appr(resultArr[2]);

document.getElementById('x').innerText=x;
document.getElementById('y').innerText=y;
document.getElementById('z').innerText=z;
a1=appr(a1);
b1=appr(b1);
c1=appr(c1);
d1=appr(d1);
a2=appr(a2);
b2=appr(b2);
c2=appr(c2);
d2=appr(d2);
a3=appr(a3);
b3=appr(b3);
c3=appr(c3);
d3=appr(d3);

solution.innerHTML=`
a<sub>1</sub>x+b<sub>1</sub>y+c<sub>1</sub>z=d<sub>1</sub><br>
a<sub>2</sub>x+b<sub>2</sub>y+c<sub>2</sub>z=d<sub>2</sub><br>
a<sub>3</sub>x+b<sub>3</sub>y+c<sub>3</sub>z=d<sub>3</sub><br><br>
${a1}x${defSign(b1)}y${defSign(c1)}z=${d1}<br>
${a2}x${defSign(b2)}y${defSign(c2)}z=${d2}<br>
${a3}x${defSign(b3)}y${defSign(c3)}z=${d3}<br><br>
from the first equation<br>

`
;
      break;
    case 'quadratic':
let aq = document.getElementById('aq').value;
let bq = document.getElementById('bq').value;
let cq = document.getElementById('cq').value;
solve_quadratic(aq,bq,cq);
      break;
    case 'simultaneous':
let a1s=document.getElementById('a1s').value;
let b1s=document.getElementById('b1s').value;
let c1s=document.getElementById('c1s').value;
let a2s=document.getElementById('a2s'). value;
let b2s=document.getElementById('b2s').value;
let c2s=document.getElementById('c2s').value;
;
r=solve_simultaneous(a1s,b1s,c1s,a2s,b2s,c2s);
if (r=='N'){
  document.getElementById('x').innerText='Please Enter the values in an appropriate way';
  document.getElementById('y').innerText='Please Enter the values in an appropriate way';
}else if(r=='∞'){
  document.getElementById('x').innerText='∞';
  document.getElementById('y').innerText='∞';

}else{
  document.getElementById('x').innerText=r[0];
  document.getElementById('y').innerText=r[1];

}
      break;
    
  }
}
function solve_simple(a,b,c){
  var r = (c-b)/a;
  solution.innerHTML=`
  ${a}x${defSign(b)}=${c}<br>
  ${a}x=${c}-(${b})<br>
  ${a}x=${c-b}<br>
  x=${c-b}÷${a}<br>
  x=${(c-b)/a}
  `;
  document.getElementById('x').innerText=r
;
  
}

function solve_triples(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3){
    let determinant = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);
    
    if (determinant === 0) {
        return "N";
    }
    
    let x = ((d1) * (b2 * c3 - b3 * c2) - b1 * (d2 * c3 - d3 * c2) + c1 * (d2 * b3 - d3 * b2)) / determinant;
    let y = (a1 * (d2 * c3 - d3 * c2) - (d1) * (a2 * c3 - a3 * c2) + c1 * (a2 * d3 - a3 * d2)) / determinant;
    let z = (a1 * (b2 * d3 - b3 * d2) - b1 * (a2 * d3 - a3 * d2) + (d1) * (a2* b3 - a3 * b2)) / determinant;

    return [x,y,z];
}

function solve_quadratic(a,b,c) {
  var d = (b**2)-4*a*c;
if (d > 0) {
  var x1 = (-b + Math.sqrt(d)) / (2 * a);
  var x2 = (-b - Math.sqrt(d)) / (2 * a);
} else if (d == 0) {
  var x1 = -b / (2 * a);
  var x2 = -b / (2 * a);
} else {
  var rp = (-b / (2 * a));
  var ip = (Math.sqrt(-d) / (2 * a));
  var x1 = appr(rp + ip) + 'i';
  var x2 = appr(rp - ip) + 'i';
}
document.getElementById('x1').innerText=x1;
document.getElementById('x2').innerText=x2;
formula(a,b,c,rp,ip);
;
}

function defSign(num){
  return (num>0)?`+${num}`:num;
}
function formula(a,b,c,rp,ip){
  var d = (b**2)-4*a*c;
  document.getElementById('solution').innerHTML=`
  recall the formula<br>
  <u>-b<u>+</u>√(b</u><sup>2</sup><u>-4ac</u>)<br>2a<br><br>
  
  a=${a}<br>
  b=${b}<br>
  c=${c}<br><br>
  
  check for discriminant:
  discriminant=b<sup>2</sup>-4ac<br>
  d=${b}<sup>2</sup>-4×(${a})×(${c})<br>
  d=${b**2}-(${4*a*c})<br>
  d=${(b**2)-(4*a*c)}<br>
  `;
  if(d>0){
    document.getElementById('solution').innerHTML+=`<br>
  since the discriminant is greater than 0, then the formula to use is<br>
  <u>-b±√d</u><br>2a<br><br>
  therefore<br>
  
  <u>-(${b})±√${d}</u><br>2×${a}<br><br>
  <u>${-b}±${appr(Math.sqrt(d))}</u><br>${2*a}<br><br>
  
  ${-b}+${appr(Math.sqrt(d))}/${2*a} or ${-b}-${appr(Math.sqrt(d))}/${2*a} <br><br>
  
  ${appr(-b+Math.sqrt(d))}/${2*a} or ${appr(-b-Math.sqrt(d))}/${2*a}
  <br>X<sub>1</sub>=
  ${appr((-b+Math.sqrt(d))/(2*a))}  or X<sub>2</sub>=${appr((-b-Math.sqrt(d))/(2*a))} 
  `
  }else if(d==0){
    document.getElementById('solution').innerHTML+=`<br>
    since the discriminant is equal to zero, then the formula to use is<br>
    <u>-b</u><br>2a<br><br>
  <u>-(${b})</u><br>2×${a}<br><br>
  <u>${-b}</u><br>${2*a}<br><br>
  <u>${-b/(2*a)}<br><br>

    `
  }else{
    document.getElementById('solution').innerHTML+=`<br>
  since the discriminant is negative, then<br><br>
  Real_part(RP)=-b/2a<br>
  Imaginary_part(IP)=√|d|i/2a<br><br>
  RP=-(${b})i/2×${a}<br>
  RP=-(${b})i/${2*a}<br>
  RP=${-b}i/${2*a}<br>
  RP=${-b/(2*a)}i<br>
  and
IP=√|${d}|i/2×${a}<br>
IP=√|${d}|i/${2*a}<br>
IP=√${-d}i/${2*a}<br>
IP=${appr(Math.sqrt(-d))}i/${2*a}<br>
IP=${appr(Math.sqrt(-d)/(2*a))}i<br>
<br>
  X<sub>1</sub>=RP+IP<br>
   X<sub>1</sub>=${appr(rp)}+${appr(ip)}i<br>
   X<sub>1</sub>=${appr(rp+ip)}i<br>
<br>
  X<sub>2</sub>=RP-IP<br>
  X<sub>2</sub>=${appr(rp)}-${appr(ip)}i<br>
  X<sub>2</sub>=${appr(rp-ip)}i<br>

  `
  }

}
function factorization(){
  let a = document.getElementById('aq').value;
  let b = document.getElementById('bq').value;
  let c = document.getElementById('cq').value;
  var d = (b ** 2) - 4 * a * c;
  var dd = Math.sqrt(Math.abs(d));
  var bb=document.getElementById('bq').value;
  var f = (b/2) + (dd/2);
  var g = (b - dd)/2;
  var hcf1=Hcf(a,f);
  var hcf2=Hcf(g,c);

  document.getElementById('solution').innerHTML=`
  check for the discriminant<br>
  d=b<sup>2</sup>-4ac<br>
  d=${b}<sup>2</sup>-4(${a})(${c})<br>
  d=${b**2}-(${4*a*c})<br>
  d=${(b**2)-(4*a*c)}<br>
  `;
  var dif=dd-Math.round(dd);
if(d<0){
  document.getElementById('solution').innerHTML+=`<br>the discriminant is negative therefore it cannot be factorised<br>`
}else if(dif!=0){
  document.getElementById('solution').innerHTML+=`<br>the discriminant is not a perfect square therefore it cannot  be
 factorised<br>`
}else{
  document.getElementById('solution').innerHTML+=`
  since the discriminant is a perfect square, it can be factorised<br><br>
  ax<sup>2</sup>+bx+c<br>
  ${a}x<sup>2</sup>${defSign(b)}x${defSign(c)}<br>
  
  ${a}x<sup>2</sup>${defSign(f)}x${defSign(g)}x${defSign(c)}<br>
  `;
  document.getElementById('solution').innerHTML+=`
  ${hcf1}x(${a/hcf1+'x'+defSign(f/hcf1)})${defSign(hcf2)}(${g/hcf2}x${defSign(c/hcf2)})<br>
  (${hcf1+'x'+defSign(hcf2)})(${a/hcf1+'x'+defSign(f/hcf1)})<br><br>
  
  ${hcf1+'x'+defSign(hcf2)}=0<br>or<br>
  ${a/hcf1+'x'+defSign(f/hcf1)}=0
  <br><br>
  
  ${hcf1}x = ${-hcf2}<br>or<br>
  ${a/hcf1}x = ${-f/hcf1}<br><br>
  
  x = ${-hcf2/hcf1}<br>or<br>
  x = ${(-f/hcf1)/(a/hcf1)}<br><br>
  
  `
}
  
}
function Hcf(v1, v2) {
  return v2 === 0 ? v1 : Hcf(v2, v1 % v2);
  document.write(v1);
}
function solve_simultaneous(a1,b1,c1,a2,b2,c2){
var d = (a1*b2)-(a2*b1);
var dx = (b2*c1)-(b1*c2);
var dy = (a1*c2)-(a2*c1);
var x = appr(dx/d);
var y = appr(dy/d);

solution.innerHTML=`
${a1}x${defSign(b1)}y=${c1}<br>
${a2}x${defSign(b2)}y=${c2}<br><br>

[${a1}x${defSign(b1)}y=${c1}]×${a2/Hcf(a1,a2)}<br>
[${a2}x${defSign(b2)}y=${c2}]×${a1/Hcf(a1,a2)}<br>
to eliminate x<br>
`;
let _a=a2/Hcf(a1,a2);
let a_=a1/Hcf(a1,a2);
var a_1=a1*_a;
var b_1=b1*_a;
var c_1=c1*_a;
var a_2=a2*a_;
var b_2=b2*a_;
var c_2=c2*a_;
solution.innerHTML+=`
${a_1}x${defSign(b_1)}y=${c_1}  …equation(1)<br>
${a_2}x${defSign(b_2)}y=${c_2}  …equation(2)<br>
subtract equation(2) from equation(1)<br>
(${a_1}x-(${a_2}x))+(${b_1}y-(${b_2}y))=(${c_1}-(${c_2}))<br>
0x+${b_1-b_2}y=${c_1-c_2}<br>
${b_1-b_2}y=${c_1-c_2}<br>
y=${c_1-c_2}÷${b_1-b_2}<br>
y=${((c_1-c_2)/(b_1-b_2)).toFixed(3)}<br>
 substitute the value of y into equation(1)<br>
equation(1)→${a_1}x${defSign(b_1)}y=${c_1}<br>
 while y = ${y}<br>
 ${a_1}x${defSign(b_1)}(${y})=${c_1}<br>
 ${a_1}x${defSign(b_1*y)}=${c_1}<br>
 ${a_1}x=${c_1}-(${b_1*y})<br>
 ${a_1}x=${appr(c_1-(b_1*y))}<br>
 x=${appr(c_1-(b_1*y))}÷${a_1}<br>
 x=${appr((c_1-(b_1*y))/a_1)}<br><br>
 
 therefore x=${x} and y=${y}<br>

`;
if (x == 'NaN' || y == 'NaN') {
  return 'N';
} else if (x == 'Infinity' || y == 'Infinity') {
  return '∞';
} else {
  return [x, y];
}
}
function substitution(){
  let a1s = parseFloat(document.getElementById('a1s').value);
  let b1s = parseFloat(document.getElementById('b1s').value);
  let c1s = parseFloat(document.getElementById('c1s').value);
  let a2s = parseFloat(document.getElementById('a2s').value);
  let b2s = parseFloat(document.getElementById('b2s').value);
  let c2s = parseFloat(document.getElementById('c2s').value);
  let y = parseFloat(document.getElementById('y').innerText);
  solution.innerHTML=`
${a1s}x${defSign(b1s)}y=${c1s}<br>
${a2s}x${defSign(b2s)}y=${c2s}<br><br>

${a1s}x${defSign(b1s)}y=${c1s} →equ(1)<br>
${a2s}x${defSign(b2s)}y=${c2s} →equ(2)<br><br>
from equ(1), ${a1s}x${defSign(b1s)}y=${c1s}<br>
${a1s}x=${c1s}-(${b1s}y)<br>
x=(${c1s}${defSign(-b1s)}y)÷${a1s}<br>
x=${appr(c1s/a1s)}${defSign(appr(-b1s/a1s))}y<br>


substitute the solution of x into equ(2)<br>
${a2s}(${appr(c1s/a1s)}${defSign(appr(-b1s/a1s))}y)${defSign(b2s)}y=${c2s}<br>
${appr(a2s*c1s/a1s)}${defSign(appr(a2s*-b1s/a1s))}y${defSign(b2s)}y=${c2s}<br>
${appr(a2s*-b1s/a1s)}y${defSign(b2s)}y=${c2s}-(${appr(a2s*c1s/a1s)})<br>
${appr(a2s*-b1s/a1s)}y${defSign(b2s)}y=${c2s}${defSign(appr(-a2s*c1s/a1s))}<br>

${appr(a2s*-b1s/a1s)}y${defSign(b2s)}y=${c2s-appr(a2s*c1s/a1s)}<br>
${appr(a2s*-b1s/a1s)-(-b2s)}y=${c2s-appr(a2s*c1s/a1s)}<br>
y=${c2s-appr(a2s*c1s/a1s)}÷${appr(a2s*-b1s/a1s)-(-b2s)}<br>
y=${((c2s-appr(a2s*c1s/a1s))/appr((a2s*-b1s/a1s)+b2s))}<br>
to get x, substitute the value of y into equ(1)<br>
equ(1)→${a1s}x${defSign(b1s)}y=${c1s}<br>
and y = ${y}<br><br>

${a1s}x${defSign(b1s)}y=${c1s}<br>
${a1s}x${defSign(b1s)}(${y})=${c1s}<br>
${a1s}x${defSign(b1s*y)}=${c1s}<br>
${a1s}x=${c1s}-(${b1s*y})<br>
${a1s}x=${c1s}${defSign(-b1s*y)}<br>
${a1s}x=${c1s-b1s*y}<br>
x=${c1s-b1s*y}÷${a1s}<br>
x=${appr((c1s-b1s*y)/(a1s))}<br>


  `;
}
function appr(val,l=4){
  if(val==val.toFixed(1)){
    return val;
  }else if (val==val.toFixed(2)) {
    return val;
  }else if(val!=val.toFixed(0)){return val.toFixed(l);}
}
function change_content(n_content){
  let content=document.getElementById('content');
  switch (n_content) {
    case 'c_equation':
      content.innerHTML=c_equation;
      break;
    case 'more':
      content.innerHTML=more;
      break;
    case 'temperature':
      content.innerHTML=temperature;
      break;
    case 'length':
      content.innerHTML=length;
      break;
    case 'mass':
      content.innerHTML=mass;
      break;
    case 'pressure':
      content.innerHTML=pressure;
      break;
    case 'area':
       content.innerHTML=area;
      break;
    case 'volume':
      content.innerHTML=volume;
      break;
    case 'base':
      content.innerHTML=base;
      break;
    case 'base_equation':
      content.innerHTML=base_equation;
      break;
    case 'base_equation_b':
      content.innerHTML=base_equation_b;
      break;
    case 'base_equation_n':
      content.innerHTML=base_equation_n;
      break;
    case 'geometry':
      content.innerHTML=geometry;
      break;
  }
  content.innerHTML+=`<br>`;
}

function convt(val){
  var input1=document.getElementById('input1');
  var input2=document.getElementById('input2');
  var pu1=document.getElementById('inpu1').value;
  var pu2=document.getElementById('inpu2'). value;
  var solution=document.getElementById('solution');
  val = parseFloat(val);
  
  if(pu1=='Celsius'){
      if(pu2=='Celsius'){
        input2.value=val;
        solution.innerHTML=`
        From °C → °C<br>
        Formula: °C = °C<br>
             °C = ${val}°C<br>
        `
      }else if(pu2=='Fahrenheit'){
        input2.value=(val*9/5)+32;
        solution.innerHTML=`
  From °C → °F<br>
 Formula: °F = (°C×9/5)+32<br>
      °F = (${val}×9/5)+32<br>
      °F = ${val*9/5}+32<br>
      °F = ${(val*9/5)+32}°F<br>
        `
      }else if(pu2=='Kelvin'){
        input2.value=val+273.15;
        solution.innerHTML=`
  From °C → K<br>
  Formula: K = °C + 273.15<br>
       K = ${val} + 273.15<br>
       K = ${val + 273.15}K<br>
       
        `
      }else if(pu2=='Réaumur'){
        input2.value=val*4/5;;
        solution.innerText=`
  From °C → °Re 
  Formula: °Re = °C × 4/5 
  °Re = ${val} × 4/5 
  °Re = ${val * 4/5}°Re
     `}else{
       input2.value=(val+273.15)*9/5;
       solution.innerHTML=`
  From °C → °R<br>
  Formula: °R = (°C + 273.15)×9/5<br>
  °R = (${val}+273.15)×9/5<br>
  °R = ${val + 273.15}×9/5<br>
  °R = ${(val+273.15)*9/5}°R<br>
       `
     }
      }
    
  else if(pu1=='Fahrenheit'){
      if (pu2=='Celsius'){
        input2.value=(val-32)*5/9;
        solution.innerHTML=`
  From °F → °C<br>
  Formula: °C = (°F-32)×5/9<br>
       °C = (${val}-32)×5/9<br>
       °C = ${val-32}×5/9<br>
       °C = ${(val-32)*5/9}°C<br>
        `
      }else if(pu2=='Fahrenheit'){
        input2.value=val;
        solution.innerHTML=`
  From °F → °F<br>
  Formula: °F = °F<br>
  °F = ${val}°F<br>
        `
      }else if(pu2=='Kelvin'){
        input2.value=((val-32)*5/9)+273.15;
        solution.innerHTML=`
  From °F → K<br>
Formula: K = °C + 273.15<br>
  while °C = (°F-32)×5/9<br>
therefore the formula is <br>
K = ((°F-32)×5/9)+273.15<br>
K = ((${val}-32)×5/9)+273.15<br>
K = (${val-32}×5/9)+273.15<br>
K = ${(val-32)*5/9}+273.15<br>
K = ${((val-32)*5/9)+273.15}K<br>
        `  
      }else if(pu2=='Réaumur'){
       input2.value=((val-32)*5/9)*4/5;
    solution.innerHTML=`
  From °F → °Re<br>
  Formula: °Re = °C×4/5<br>
  while °C = (°F-32)×5/9<br>
  therefore °Re = ((°F-32)×5/9)×4/5<br>
  °Re = (°Fe-32)×4/9<br>
  °Re = (${val}-32)×4/9<br>
  °Re = ${val-32}×4/9<br>
  °Re = ${(val-32)*4/9}°Re<br>
    `
      }else{
  input2.value=val+459.67;
  solution.innerHTML=`
  From °F → °R<br>
  Formula: °R = °F + 459.67<br>
  °R = ${val}+459.67<br>
  °R = ${val + 459.67}°R<br>
  `
      }}
    
  else if(pu1=='Kelvin'){
      if (pu2=='Kelvin') {
       input2.value=val;
       solution.innerHTML=`
  From K → K<br>
  Formula: K = K<br>
  K = ${val}K<br>
       `
      }else if(pu2=='Celsius'){
     input2.value=val-273.15;
     solution.innerHTML=`
  From K → °C<br>
  °C = K - 273.15<br>
  °C = ${val} - 273.15<br>
  °C = ${val - 273.15}°C<br>
     `
      }else if(pu2=='Fahrenheit'){
  input2.value=((val-273.15)*9/5)+32;
  solution.innerHTML=`
  From K → °F<br>
  while °F = (°C×9/5)+32<br> 
  and °C = K-273.15<br>
  therefore the Formula is <br>
  °F = ((K-273.15)×9/5)+32<br>
  °F = ((${val}-273.15)×9/5)+32<br>
  °F = (${val-273.15}×9/5)+32<br>
  °F = ${(val-273.15)*9/5}+32<br>
  °F = ${((val-273.15)*9/5)+32}°F<br>

  `
      }else if(pu2=='Rankine'){
    input2.value=val*9/5;
    solution.innerHTML=`
    From K → °R<br>
    Formula: °R = K × 9/5<br>
    °R = ${val}×9/5<br>
    °R = ${val*9/5}°R<br>
    `
      }else{
        input2.value=(val-273.15)*4/5;
    solution.innerHTML=`
    From K → °Re<br>
    Formula: °Re = °C×4/5<br>
    While °C = K-273.15<br>
    therefore the formula will be<br>
    °Re = (K-273.15)×4/5<bt>
    °Re = (${val}-273.15)×4/5<br>
    °Re = ${val-273.15}×4/5<br>
    °Re = ${(val-273.15)*4/5}°Re<br>

    `
      }
    }
    
  else if(pu1=='Réaumur'){
      if(pu2=='Réaumur'){
        input2.value=val;
        solution.innerHTML=`
  From °Re → °Re<br>
  Formula: °Re = °Re<br>
  °R = ${val}°R;
        `
      }else if(pu2=='Celsius'){
        input2.value=val*5/4;
     solution.innerHTML=`
    From °Re → °C<br>
    Formula: °C = °R×5/4<br>
    °C = ${val}×5/4<br>
    °C = ${val*5/4}°C<br>
     `
      }else if(pu2=='Kelvin'){
        input2.value=(val*5/4)+273.15;
        solution.innerHTML=`
  From °Re → K<br>
  Given that K = °C +273.15<br>
  while °C = °Re×5/4<br>
  therefore the formula will be<br>
  K = (°Re × 5/4) + 273.15<br>
  K = (${val} × 5/4) + 273.15<br>
  K = ${val * 5/4} + 273.15<br>
  K = ${(val * 5/4) + 273.15}K<br>

        `
      }else if(pu2=='Fahrenheit'){
        input2.value=((val*5/4)*9/5)+32;
      solution.innerHTML=`
    From °Re → °F<br>
    Given that °F = (°C×9/5)+32<br>
    while °C = °Re × 5/4<br>
    therefore °F = ((°Re × 5/4) × 9/5) + 32<br>
    °F = (°Re × 9/4)+32<br>

   °F = ((${val} × 9/4)+32<br>
   °F = ${val*9/4} + 32<br>
   °F = ${(val*9/4)+32}°F<br>

      `
      }else{
        input2.value=((val*5/4)+273.15)*9/5;
        solution.innerHTML=`
   From °Re → °R<br>   
   Given that °R = (°C + 273.15)×9/5<br>
   and °C = °Re × 5/4<br>
   therefore °R = ((°C × 5/4) + 273.15) × 9/5<br>
  °R = ((${val} × 5/4) + 273.15) × 9/5<br>
  °R = (${val * 5/4} + 273.15) × 9/5<br>
  °R = ${(val * 5/4) + 273.15} × 9/5<br>
  °R = ${((val * 5/4) + 273.15) * 9/5}°R<br>

        `
      }}
    
    else{
      if (pu2=='Rankine') {
        input2.value=val;
        solution.innerHTML=`
        From °R → °R<br>
        Formula: °R = °R<br>
        °R = ${val}°R<br>
        `
      }else if(pu=2=='Fahrenheit'){
        input2.value=val-459.67;
        solution.innerHTML=`
  From °R → °F<br>
  Formula: °F = °R - 459.67<br>
  therefore °F = ${val} - 459.67<br>
  °F = ${val - 459.67}°F<br>


        `
      }else if(pu2=='Celsius'){
        input2.value=((val-459.67)-32)*5/9;
       solution.innerHTML=`
  From °R → °C<br>
  Given that: °C = (°F - 32)×5/9<br>
  and °F = °R - 459.67<br>
  therefore °C = ((°R - 459.67)-32)×5/9<br>
  °C = ((${val} - 459.67)-32)×5/9<br>
  °C = (${val - 459.67}-32)×5/9<br>
  °C = ${(val - 459.67)-32}×5/9<br>
  °C = ${((val - 459.67)-32)*5/9}°C<br>

       `
      }else if (pu2=='Kelvin'){
        input2.value=(((val-459.67)-32)*5/9)+273.15;
        solution.innerHTML=`
  From °R → K<br>
  Given that K = °C + 273.15<br>
  and °C = (°F - 32)×5/9<br>
  also °F = °R - 459.67<br>
  adding all this together will give the formula:<br>
  K = (((°R - 459.67)-32)×5/9)+273.15<br>
  K = (((${val} - 459.67)-32)×5/9)+273.15<br>
  K = ((${val - 459.67}-32)×5/9)+273.15<br>
  K = (${(val - 459.67)-32}×5/9)+273.15<br>
  K = ${((val - 459.67)-32)*5/9}+273.15<br>
  K = ${(((val - 459.67)-32)*5/9)+273.15}K<br>

        `
      }else{
        input2.value=(((val-459.67)-32)*5/9)*4/5;
        solution.innerHTML=`
  From °R → °Re<br>
  Given that °Re = °C × 4/5<br>
  and °C = (°F -32)×5/9<br>
  also °F = °R - 459.67;
  by adding all these, we have the formula:<br>
  °Re = (((°R-459)-32)×5/9)×4/5<br>
  °Re = (((${val}-459)-32)×5/9)×4/5<br>
  °Re = ((${val-459}-32)×5/9)×4/5<br>
  °Re = ((${(val-459)-32})×5/9)×4/5<br>
  °Re = (${((val-459)-32)*5/9})×4/5<br>
  °Re = ${(((val-459)-32)*5/9)*4/5}°Re<br>
        `
      }
    }
    

}
function convl(val) {
var fromUnit=document.getElementById('inpu1').value;
var toUnit=document.getElementById('inpu2').value;
const convToM={
  meter:1,
  millimeter:0.001,
  centimeter:0.01,
  kilometer:1000,
  feet:0.3048,
  yard:0.9144,
  inches:0.0254,
  mile:1609.344
}
const convB={
  meter:1,
  millimeter:1000,
  centimeter:100,
  kilometer:0.001,
  feet:3.280839895,
  yard:1.0936132983,
  inches:39.37007874,
  mile:(1/1609.344)
}
document.getElementById('input2').value=appr(val*(convToM[fromUnit]*convB[toUnit]));

document.getElementById("solution").innerHTML=`
To convert from ${fromUnit} to ${toUnit}<br>
we multiply the "${fromUnit}" value with ${appr(convToM[fromUnit]*convB[toUnit])}<br>
${val}×${appr(convToM[fromUnit]*convB[toUnit])}<br>
${appr(val*convToM[fromUnit]*convB[toUnit])}${toUnit}<br>

`;
}
function convm(val) {
var fromUnit=document.getElementById('inpu1').value;
var toUnit=document.getElementById('inpu2').value;
const convToG={
  gram:1,
  milligram:0.001,
  centigram:0.01,
  kilogram:1000,
  pounds:453.592,
  ounce:28.3495
}
const convB={
  gram:1,
  milligram:1000,
  centigram:100,
  kilogram:0.001,
  pounds:0.0022046244,
  ounce:0.0352739907
}
document.getElementById('input2').value=appr(val*(convToG[fromUnit]*convB[toUnit]));

document.getElementById("solution").innerHTML=`
To convert from ${fromUnit} to ${toUnit}<br>
we multiply the "${fromUnit}" value with ${appr(convToG[fromUnit]*convB[toUnit])}<br>
${val}×${appr(convToG[fromUnit]*convB[toUnit])}<br>
${appr(val*convToG[fromUnit]*convB[toUnit])}${toUnit}<br>

`;
}
function convp(val) {
var fromUnit=document.getElementById('inpu1').value;
var toUnit=document.getElementById('inpu2').value;
const convTo={
  atm:1,
  pascal:(1/101325),
  mmHg:(1/760)
}
const convB={
  atm:1,
  pascal:101325,
  mmHg:760
}
document.getElementById('input2').value=appr(val*(convTo[fromUnit]*convB[toUnit]));

document.getElementById("solution").innerHTML=`
To convert from ${fromUnit} to ${toUnit}<br>
we multiply the "${fromUnit}" value with ${appr(convTo[fromUnit]*convB[toUnit])}<br>
${val}×${appr(convTo[fromUnit]*convB[toUnit])}<br>
${appr(val*convTo[fromUnit]*convB[toUnit])}${toUnit}<br>

`;
}
function conva(val) {
var fromUnit=document.getElementById('inpu1').value;
var toUnit=document.getElementById('inpu2').value;
const convB={
  squareMeter:1,
  squareFoot:10.7639,
  squareYard:1.1960,
  acre:(1/4046.8564),
  hectare:0.0001
}
const convTo={
  squareMeter:1,
  squareFoot:(1/10.7639),
  squareYard:(1/1.1960),
  acre:4046.8564,
  hectare:10000
}
document.getElementById('input2').value=appr(val*(convTo[fromUnit]*convB[toUnit]));

document.getElementById("solution").innerHTML=`
To convert from ${fromUnit} to ${toUnit}<br>
we multiply the "${fromUnit}" value with ${appr(convTo[fromUnit]*convB[toUnit])}<br>
${val}×${appr(convTo[fromUnit]*convB[toUnit])}<br>
${appr(val*convTo[fromUnit]*convB[toUnit])}${toUnit}<br>

`;
}
function convv(val) {
var fromUnit=document.getElementById('inpu1').value;
var toUnit=document.getElementById('inpu2').value;
const convTo={
  litre:1,
  millilitre:(1/1000),
  UK_gallon:4.54609,
  US_gallon:3.785412,
  cubic_metre:1000,
  cubic_foot:28.316847
}
const convB={
  litre:1,
  millilitre:1000,
  UK_gallon:0.219969,
  US_gallon:0.264172,
  cubic_metre:0.001,
  cubic_foot:0.035315
}
document.getElementById('input2').value=appr(val*(convTo[fromUnit]*convB[toUnit]));

document.getElementById("solution").innerHTML=`
To convert from ${fromUnit} to ${toUnit}<br>
we multiply the "${fromUnit}" value with ${appr(convTo[fromUnit]*convB[toUnit])}<br>
${val}×${appr(convTo[fromUnit]*convB[toUnit])}<br>
${appr(val*convTo[fromUnit]*convB[toUnit])}${toUnit}<br>

`;
}

function s_base_equation(mV) {
  let n=document.getElementById('n');
  let b=document.getElementById('b');
  let N=document.getElementById('N');
  let B=document.getElementById('B');

  switch (mV) {
    case 'n':
      try {
   n.innerText='';
  let nn=parseInt(N.value,B.value).toString(b.value);
  n.innerText=nn;

      } catch (e) {
  n.innerText='error';
      }
      break;
    case 'b':
      try {
        b.innerText='';
  let bTa=parseInt(N.value,B.value);
  let i=0;
  while (i!=16) {
   if (parseInt(n.value,i)==bTa) {
     b.innerText+=i+'; ';
   }
   i++;
  }

      } catch (e) {
    b.innerText='error';
      }
      break;
    
  }
}
function Lcm(v1,v2){
  return (v1*v2)/Hcf(v1,v2);
}
//I'm Finally ALMOST Done  margin-top: 50pt;
