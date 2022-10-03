const counterDisplay = document.getElementById('counter');
const counterMinus = document.getElementById('minus');
const counterPlus = document.getElementById('plus');
const clickLike = document.getElementById('heart');
const makeList = document.querySelector('.likes');

let count = parseInt(counterDisplay.textContent);

let intervalID = setInterval(myCallback, 1000);

function myCallback() {
    counterDisplay.innerHTML = count++;

}

counterPlus.addEventListener("click",() => {
    counterDisplay.innerHTML = count++;
    console.log(count);
    })
    counterMinus.addEventListener("click",() => {
        counterDisplay.innerHTML = count--;
        console.log(count);
        })

const arrayOfObjects = [];
const arrayOfNumbers = [];
const incrementCounter = () => {
for (value of arrayOfObjects) {
arrayOfNumbers.push(value.number);
};
if (arrayOfNumbers.includes(count)) {
const valueMatch = arrayOfObjects.find((object) => object.number === count);
valueMatch.likes++;

const likedElement = document.getElementById(`${count}`);
likedElement.textContent = `${count} has been clicked ${valueMatch.likes} times.`
} else {arrayOfObjects.push({number: count, likes: 1});
const likeElement = document.createElement('li');
likeElement.setAttribute('id', count);
likeElement.textContent = `${count} has been clicked 1 times.`
makeList.appendChild(likeElement);
console.log(likeElement);
}
console.log(arrayOfNumbers);
console.log(arrayOfObjects);
}
clickLike.addEventListener("click",incrementCounter);



