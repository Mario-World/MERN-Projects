const colorPanel = document.getElementById("colorPanel");
const addColorBtn = document.getElementById("addColorBtn");
const colorInput = document.getElementById("customColorInput");

colorPanel.addEventListener("click" ,function(e) {
    if(e.target.classList.contains("color-btn")){
        const color = e.target.getAttribute("data-color");
        document.body.style.backgroundColor = color;


    }
});

// add Cusotm color 
addColorBtn.addEventListener("click",function(){
   const color = colorInput.value.trim();
   
   if(!color) {
     alert("Please enter a valid color.");
     return;
   }

   const newBtn = document.createElement("button");
   newBtn.className = "color-btn";
   newBtn.setAttribute("data-color", color);
   newBtn.style.backgroundColor = color;

colorPanel.appendChild(newBtn);
colorInput.value = "";

});