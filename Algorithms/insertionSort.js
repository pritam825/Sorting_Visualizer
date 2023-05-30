
async function insertionSort() {

    let bars = document.querySelectorAll(".bar");

    var j;
    for (let i = 1 ; i < bars.length ; i++)
    {   
        bars[i].style.backgroundColor = "red";
        var ht = bars[i].style.height
        var val = bars[i].childNodes[0].innerText
        var key = parseInt(bars[i].childNodes[0].innerHTML);

        await new Promise((resolve) =>
             setTimeout(() => {
                resolve();
                }, 200)
                 );
    
        j = i - 1;
        bars[j].style.backgroundColor = "darkblue";
        var temp = parseInt(bars[j].childNodes[0].innerHTML);
        
        while (j >= 0 && temp > key)
        {
            bars[j+1].style.height = bars[j].style.height
            bars[j+1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
            bars[j+1].style.backgroundColor = "rgb(49, 226, 13)";
            bars[j].style.backgroundColor = "red";

            j--;
            if(j >= 0){
                temp = parseInt(bars[j].childNodes[0].innerHTML);
                bars[j].style.backgroundColor = "darkblue";
            }

            await new Promise((resolve) =>
             setTimeout(() => {
                resolve();
                }, 300)
                 );
        }
        
        bars[j+1].style.height = ht
        bars[j+1].childNodes[0].innerText = val
        bars[j+1].style.backgroundColor = "rgb(49, 226, 13)";
        if(key >= temp) bars[j].style.backgroundColor = "rgb(49, 226, 13)";
        bars[0].style.backgroundColor = "rgb(49, 226, 13)";
    }

    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";
    
    // To enable the button "Selection Sort" after final(sorted)
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";
}