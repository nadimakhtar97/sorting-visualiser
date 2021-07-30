// SWAP FUNCTION TO SWAP TWO DOM ELEMENTS
function swap(element1,element2)
{
    console.log("in swap function");
    const temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp.style.height;
}


// CREATE NEW RANDOM ARRAY FOR BARS
function createNewArray(numberOfBars=150){

    clearPrevBars();
    let arr = [];
    for(let i = 0;i<numberOfBars;i++)
    arr.push(Math.round(Math.random()*500));
    // console.log(arr);

    const bars = document.querySelector(".bars");

    arr.forEach(addBarToBars);

    function addBarToBars(height,index,arr)
    {
        const bar = document.createElement("div");
        bar.style.height = `${height}px`;
        bar.classList.add('bar');
        bars.appendChild(bar);
    }
}


// CREATE BARS RIGHT AFTER YOU ENTER THE WEBSITE
createNewArray();


// SELECTING SIZE SLIDER FROM DOM
const arraySize = document.querySelector(".array-size");
arraySize.addEventListener('input',(e)=>{
    arraySize.value = e.target.value;
    createNewArray(arraySize.value);
})


// SELECTING NEW ARRAY BUTTON AND ADDING EVENTLISTNER
const newArrayBtn = document.querySelector(".new-array-btn");
newArrayBtn.addEventListener('click',()=>{
    clearPrevBars();
    createNewArray(arraySize.value);
});



// SELECTING SPEED SLIDER FROM DOM
const speed = document.querySelector(".animation-speed");
speed.addEventListener('input',(e)=>{
    speed.value = e.target.value;
    // console.log(speed.value);

})

// HELPER FUNCTION TO CLEAR PREVIOUS BARS SO THAT NEW BARS CAN BE ADDED INTO DOM
function clearPrevBars()
{
    const bars = document.querySelector(".bars");
    bars.innerHTML = '';
}

// HELPER FUNCITON TO CREATE DELAY USING PROMISE.

const passTime = (speed) => { 
    return new Promise((resolve,reject) => {
        const delay = 300 - speed.value;
        setTimeout(() => {resolve('')}, delay);
        
    }) 
}
