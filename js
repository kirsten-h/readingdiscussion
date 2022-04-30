<script src="myScript.js">
 
 <h1>Furniture List</h1>

 <p>list of housewares in my room in Animal Crossing: New Horizons.</p>

 <p id="demo"></p>

<script>
let furnitureName1 = "Log Bed";  
let furnitureName2 = 'Fan Palm';  
let furnitureName3 = 'Fireplace'; 
let furnitureName4 = 'Floor Lamp'; 


document.getElementById("demo").innerHTML =
furnitureName1 + " " + furnitureName2 + " " + furnitureName3 + " " + furnitureName4;
</script>

<h2>Furniture List</h2>

<p>list of housewares in my room in Animal Crossing: New Horizons</p>

<p id="demo"></p>

<script>
const furniture = ["Log Bed", "Fan Palm", "Fireplace", "Floor Lamp","Wooden End Table"];
document.getElementById("demo").innerHTML = furniture;
</script>


 <h3>WANT TO EXPLORE MORE?</h3>
 <p id="demo">A room tour...</p>
 <button type="button" onclick="document.getElementById('demo').style.fontSize='40px'">Explore More!</button>



<script>  
function msg(){  
alert("hello! Let's go to the first floor.");  
}  
</script>  
<input type="button" onclick="msg()" value="explore more"/>  


</script>
