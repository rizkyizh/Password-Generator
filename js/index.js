const passEl = document.getElementById('pass-area')
const resEl2 = document.querySelector('#pass-2')
const btnAreaEl = document.getElementById('btn-area')
const btnAllowEl = document.querySelector('.btn-allow')
const btnGen = document.getElementById('gen-btn')
function myFunction(x) {
    if (x.matches) { // If media query matches
        btnAreaEl.classList.remove('flex-row')
        passEl.classList.remove('flex-row')
        passEl.classList.add('flex-column')
        resEl2.classList.add('mt-4')
        document.body.classList.add('text-center')
        btnAreaEl.classList.add('flex-column')
        btnGen.classList.add('mx-auto')
        btnAllowEl.classList.add('mt-3')
        btnAllowEl.classList.add('justify-content-center')
    } else {
        btnAllowEl.classList.remove('justify-content-center')
        btnAllowEl.classList.remove('mt-3')
        btnGen.classList.remove('mx-auto')
        btnAreaEl.classList.remove('flex-column')
        passEl.classList.remove('flex-column')
        resEl2.classList.remove('mt-4')
        document.body.classList.remove('text-center')
        passEl.classList.add('flex-row')
        btnAreaEl.classList.add('flex-row')
    }
}
  
var x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/* ------------------------RESPONSIVE BREAKPOINT END -------------------------- */

/*----------------------- GENERATE PASSWORD START-------------------------------*/
const passGenFirst = document.getElementById('pass-1') //area el pass 1 (left)
const passGenSecond = document.getElementById('pass-2') //area el pass 2 (right)
const btnSymbol = document.getElementById('btn-symbol')// store symbol checkbox button
const btnNumber = document.getElementById('btn-number')//store number checkbox button

const PassContain = {
    characters : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numbers : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbols : ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]
};
// store new array
const arrayAllContain = PassContain.characters.concat(PassContain.numbers,PassContain.symbols)
const arrayCharNum = PassContain.characters.concat(PassContain.numbers)
const arrayCharSym = PassContain.characters.concat(PassContain.symbols)


//   functions generate passwords
function passwordGenerate() {
    passGenFirst.innerText = null
    passGenSecond.innerText = null
    if(btnSymbol.checked == true && btnNumber.checked == true){
        for(let i = 0; i < valueContain(); i++){
            let passFirst = arrayAllContain[Math.floor(Math.random()*arrayAllContain.length)]
            let passSecond = arrayAllContain[Math.floor(Math.random()*arrayAllContain.length)]
            passGenFirst.textContent += passFirst
            passGenSecond.textContent += passSecond
        }
    }else if(btnNumber.checked == true && btnSymbol.checked == false){
        for(let i = 0; i < valueContain(); i++){
            let passFirst = arrayCharNum[Math.floor(Math.random()*arrayCharNum.length)]
            let passSecond = arrayCharNum[Math.floor(Math.random()*arrayCharNum.length)]
            passGenFirst.textContent += passFirst
            passGenSecond.textContent += passSecond
        }
    }else if(btnNumber.checked == false && btnSymbol.checked == true){
        for(let i = 0; i < valueContain(); i++){
            let passFirst = arrayCharSym[Math.floor(Math.random()*arrayCharSym.length)]
            let passSecond = arrayCharSym[Math.floor(Math.random()*arrayCharSym.length)]
            passGenFirst.textContent += passFirst
            passGenSecond.textContent += passSecond
        }
    }else{
        for(let i = 0; i < valueContain(); i++){
            let passFirst = PassContain.characters[Math.floor(Math.random()*PassContain.characters.length)]
            let passSecond = PassContain.characters[Math.floor(Math.random()*PassContain.characters.length)]
            passGenFirst.textContent += passFirst
            passGenSecond.textContent += passSecond
        }
    }
}

/*----------------------- GENERATE PASSWORD END -------------------------------*/

/*----------------------- COPY TEXT START -------------------------------*/
// Get the text field
const copyTxt = document.querySelectorAll("#pass-area div");
/* copy text to clipboard */
copyTxt.forEach(element => {
    element.addEventListener('dblclick', function(){
        navigator.clipboard.writeText(element.innerHTML)
        
    })
});
/*----------------------- COPY TEXT END -------------------------------*/

/* ======================  == RANGE CUSTOM VALUE START == ============================= */
const valueRange = document.getElementById('customRange2')
const labelRange = document.getElementById('label')
function valueContain() {
    return valueRange.value
}

labelRange.textContent = valueRange.value
valueRange.addEventListener('input', function () {
    labelRange.textContent = valueRange.value
})
/* =======================  == RANGE CUSTOM VALUE END == ============================= */
    
/*========================  == NIGHT AND LIGHT MODE START ==  ============================== */
const toggleMode = document.getElementById('flexSwitchCheckDefault')
const cardBody = document.querySelector('.card-body')//bg card
const cardTxt = document.querySelector('.card-text')
const titleH5 = document.querySelector('h5')//h5 title
toggleMode.checked = true
if(toggleMode.checked == false){
    cardBody.style.backgroundColor = "whitesmoke"
    labelRange.style.color = '#6B7280'
    cardTxt.style.color = '#6B7280'
    titleH5.style.color = '#2B283A'
}
function darklightMode(){
    toggleMode.addEventListener('input', function () {
        if(toggleMode.checked == false){
            cardBody.style.backgroundColor = "whitesmoke"
            labelRange.style.color = '#6B7280'
            cardTxt.style.color = '#6B7280'
            titleH5.style.color = '#2B283A'
        }else if(toggleMode.checked == true){
            cardBody.style.backgroundColor = "#1F2937"
            labelRange.style.color = 'whitesmoke'
            cardTxt.style.color = '#D5D4D8'
            titleH5.style.color = 'whitesmoke'
        }
        
    })
}




/*========================  == NIGHT AND LIGHT MODE START ==  ============================== */