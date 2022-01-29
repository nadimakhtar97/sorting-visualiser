import {swap,passTime,speed} from '../index.js';

async function merge(elements, left, mid, right) {
    const nL = mid - left + 1;
    const nR = right - mid;
    let leftPart = [];
    let rightPart = [];
    let k = left;
    let i = 0;
    let j = 0;

    for (let i = 0; i < nL; i++) {
        await passTime(speed);
        elements[left + i].style.backgroundColor = "orange";
        leftPart.push(parseInt(elements[left + i].style.height));
    }


    for (let j = 0; j < nR; j++) {
        elements[mid + 1 + i].style.backgroundColor = "yellow";
        await passTime(speed);
        rightPart.push(parseInt(elements[mid + 1 + j].style.height));
    }

    await passTime(speed);
    while (i < nL && j < nR) {
        await passTime(speed);
        if (leftPart[i] < rightPart[j]) {
            (nR + nL === elements.length) ?
                elements[k].style.backgroundColor = "green" : elements[k].style.backgroundColor = "lightgreen";
            elements[k++].style.height = `${leftPart[i++]}px`;
        }
        else {
            (nR + nL === elements.length) ?
                elements[k].style.backgroundColor = "green" : elements[k].style.backgroundColor = "lightgreen";
            elements[k++].style.height = `${rightPart[j++]}px`;
        }
    }

    while (i < nL) {
        await passTime(speed);
        (nR + nL === elements.length) ?
        elements[k].style.backgroundColor = "green" : elements[k].style.backgroundColor = "lightgreen";
        elements[k++].style.height = `${leftPart[i++]}px`;
    }

    while (j < nR) {
        await passTime(speed);
        (nR + nL === elements.length) ?
        elements[k].style.backgroundColor = "green" : elements[k].style.backgroundColor = "lightgreen";
        elements[k++].style.height = `${rightPart[j++]}px`;
    }
}

async function mergeSort(elements, left, right) {
    if (left >= right)
        return;

    const mid = Math.floor(left + (right - left) / 2);

    await mergeSort(elements, left, mid);
    await mergeSort(elements, mid + 1, right);
    await merge(elements, left, mid, right);
}




const mergesort = document.querySelector(".merge-sort");
mergesort.addEventListener('click', async () => {
    const bars = document.querySelectorAll(".bar");
    await mergeSort(bars, 0, bars.length - 1);

})


