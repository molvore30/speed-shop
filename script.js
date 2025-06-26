document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.1)';
      item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
    });
  });
});

function changeText() {
    var replaceText = document.    
    getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "croll untuk melihat";
 
    document.getElementId("icon-up").style.display = "none";
 
    document.getElementId("icon-down").style.display = "block";
}
<div>
  <button id="icon-up" onclick="changeText()"> <i class="far fa-hand-point-up"></i></button> 
  <button id="icon-down" onclick="changeText()"> <i class="far fa-hand-point-down"></i></button>
</div>