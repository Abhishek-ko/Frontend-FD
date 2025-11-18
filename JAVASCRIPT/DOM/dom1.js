/*const mainHeading = document.getElementById("title");
const triggerButton = document.getElementById("btn");
triggerButton.onClick = () =>{
mainHeading.textContent = "Hello World";
};*/

<div id="outer" style="padding:40px;background:#f88;">
  Outer
  <div id="inner" style="padding:40px;background:#8f8;">Inner</div>
</div>

<script>
document.getElementById('outer').addEventListener('click', () => console.log('Outer bubble'));
document.getElementById('inner').addEventListener('click', () => console.log('Inner bubble'));
document.getElementById('outer').addEventListener('click', () => console.log('Outer capture'), true);
</script>

