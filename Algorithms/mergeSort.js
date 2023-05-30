

async function merge(bars , start, mid , end)
{
  
    let start2 = mid + 1;
  
    // Two pointers to maintain start
    // of both arrays to merge
    while (start <= mid && start2 <= end)
    {
        var val1 = parseInt(bars[start].childNodes[0].innerHTML);
        var val2 = parseInt(bars[start2].childNodes[0].innerHTML);
        bars[start].style.backgroundColor = "darkblue";
        bars[start2].style.backgroundColor = "red";
        // If element 1 is in right place
        if (val1 <= val2)
        {
            bars[start].style.backgroundColor = "rgb(146, 235, 182)";
            bars[start2].style.backgroundColor = "rgb(0, 183, 255)";
            start++;
        }
        else 
        {
            let value = parseInt(bars[start2].childNodes[0].innerHTML);
            let ht = bars[start2].style.height;
            bars[start].style.backgroundColor = "pink";
            
            let index = start2;
  
            // Shift all the elements between element 1
            // element 2, right by 1.
            while (index != start) 
            {   
                bars[index].style.backgroundColor = "red";
                bars[index-1].style.backgroundColor = "darkblue";

                bars[index].childNodes[0].innerText = bars[index-1].childNodes[0].innerText;
                bars[index].style.height = bars[index-1].style.height;

                await new Promise((resolve) =>
                        setTimeout(() => {
                         resolve();
                         }, 200)
                         );

                bars[index].style.backgroundColor = "rgb(0, 183, 255)";
                bars[index-1].style.backgroundColor = "rgb(0, 183, 255)";
                index--;
            }
            //arr[start] = value;
            bars[start].childNodes[0].innerText = value;
            bars[start].style.height = ht;
            bars[start].style.backgroundColor = "rgb(146, 235, 182)";

  
            // Update all the pointers
            start++;
            mid++;
            start2++;
        }
        await new Promise((resolve) =>
            setTimeout(() => {
               resolve();
             }, 200)
             );
    }
}
  
async function recursion(bars , l , r){
    if(l>=r) return;
    
    var m =l+ parseInt((r-l)/2);
    await recursion(bars ,l,m);
    await recursion(bars ,m+1,r);
    await merge(bars ,l,m,r);
}

async function mergeSort(){
    let bars = document.querySelectorAll(".bar");
    let L = bars.length - 1;

     await recursion(bars , 0 , L);

     for(var i = 0 ; i <= L ; i++){
        bars[i].style.backgroundColor = "rgb(49, 226, 13)";
        await new Promise((resolve) =>
            setTimeout(() => {
               resolve();
             }, 50)
             );
     }

     document.getElementById("Button1").disabled = false;
     document.getElementById("Button1").style.backgroundColor = "#6f459e";
 
     document.getElementById("Button2").disabled = false;
     document.getElementById("Button2").style.backgroundColor = "#6f459e";

}