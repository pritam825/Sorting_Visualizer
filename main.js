
const container = document.querySelector(".data_container");

  
 async function generate(){
    const num=30;

    for(let i=0;i<num;i++){

        const value = Math.floor(Math.random() * 100);

        const bar = document.createElement("div");

        bar.classList.add("bar");

        if(value == 0){
            bar.style.height = `${17}px`;
        }else{
            bar.style.height = `${value*4 + 17}px`;
        }

        bar.style.transform = `translateX(${i * 31}px)`;

        const barlabel = document.createElement("label");

        barlabel.classList.add("bar_id");

        barlabel.innerHTML = value;

        bar.appendChild(barlabel);
        container.appendChild(bar);
  }   
}   
     
 
 function disable()
{
  
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
  
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";  
}