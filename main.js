// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0
//-----------------------------------------------

const root = document.querySelector('#root')
const btnAdd = document.querySelector('.btn-add')
const sumInfo = document.querySelector('.show-sum')

let total = 0

function Counter() {
  let countNum = 0

  const makeElement =(tag, attr_n, attr_v, content) => {
    let output = document.createElement(tag)
    output.setAttribute(attr_n, attr_v)
    output.textContent = content
    return output
  }
  
  // render
  const updateCounter = (n) => {
    if(countNum + n < 0) {
      return
    }
    countNum += n
    total += n
    number.textContent = countNum
    sumInfo.textContent = `Sum = ${total}`
  }

  const delCounter = (e) => {
    updateCounter(-countNum)
    e.target.closest('.counter').remove()
  }

const counter = makeElement('div', 'class', 'counter', '')
const btnInc = makeElement('button', 'class', 'btn-inc', '+')
const number = makeElement('h3', 'class', 'number', '0')
const btnDec = makeElement('button', 'class', 'btn-dec', '-')
const btnClr = makeElement('button', 'class', 'btn-clr', '0')
const btnDel = makeElement('button', 'class', 'btn-del', 'X')

btnInc.addEventListener('click', () => updateCounter(1) )
btnDec.addEventListener('click', () => updateCounter(-1))
btnClr.addEventListener('click', () => updateCounter(-countNum))
btnDel.addEventListener('click', delCounter)

// counter.append(btnInc, number,btnDec, btnClr, btnDel)
counter.append(btnInc)
counter.append(number)
counter.append(btnDec)
counter.append(btnClr)
counter.append(btnDel)

return counter
}

const hdlAddCounter = () => {
  root.append(Counter())
}

btnAdd.addEventListener('click', hdlAddCounter)

//----------------------------------------------
// let counterId = 1;

// function addCounter() {
//   counterId++;
//   const container = document.getElementById("counter");

//   const counterDiv = document.createElement("div");
//   counterDiv.classList.add("counter");
//   counterDiv.id = "counter" + counterId;

//   counterDiv.innerHTML = `
//         <span class="counter">Counter ${counterId}</span>
//         <div class="counter">
//             <button class="decrement" onclick="decrementCounter('counter${counterId}')">-</button>
//             <span class="count" id="count${counterId}">0</span>
//             <button class="increment" onclick="incrementCounter('counter${counterId}')">+</button>
//             <button class="reset" onclick="resetCounter('counter${counterId}')">Reset</button>
//             <button class="delete" onclick="deleteCounter('counter${counterId}')">Delete</button>
//         </div>
//     `;

//   container.appendChild(counterDiv);
// }

// function incrementCounter(counterId) {
//   var counterElement = document.getElementById(counterId);
//   var countElement = counterElement.querySelector(".count");
//   var currentCount = parseInt(countElement.textContent);
//   countElement.textContent = currentCount + 1;
// }

// function decrementCounter(counterId) {
//   var counterElement = document.getElementById(counterId);
//   var countElement = counterElement.querySelector(".count");
//   var currentCount = parseInt(countElement.textContent);
//   countElement.textContent = currentCount - 1;
// }

// function resetCounter(counterId) {
//   var counterElement = document.getElementById(counterId);
//   var countElement = counterElement.querySelector(".count");
//   countElement.textContent = "0";
// }

// function deleteCounter(counterId) {
//   const counterDiv = document.getElementById(counterId);
//   counterDiv.parentNode.removeChild(counterDiv);
// }