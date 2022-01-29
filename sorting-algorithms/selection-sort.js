import {swap,passTime,speed} from '../index.js';



async function selectionSort(bars){
    let n = bars.length;

    for(let i=0;i<n-1;i++){
        await passTime(speed);
        bars[i].style.backgroundColor = "orange";
        for(let j=i+1;j<n;j++){
            await passTime(speed);
            bars[j].style.backgroundColor = "red";
            await passTime(speed);
            if(parseInt(bars[j].style.height) < parseInt(bars[i].style.height)){
                
                bars[j].style.backgroundColor = "yellow";
                bars[i].style.backgroundColor = "yellow";
                await passTime(speed);
                await passTime(speed);
                swap(bars[i],bars[j]);
            }
            bars[j].style.backgroundColor = "cyan";
            bars[i].style.backgroundColor = "orange";
            await passTime(speed);

        }
        await passTime(speed);
        bars[i].style.backgroundColor = "green";
        await passTime(speed);

    }

    await passTime(speed);
    bars[n-1].style.backgroundColor = "green";
}

const selection_sort = document.querySelector(".selection-sort");
selection_sort.addEventListener('click', async ()=>{

    const bars = document.querySelectorAll(".bar");
    await selectionSort(bars);
});