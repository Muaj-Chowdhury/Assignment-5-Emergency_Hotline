// heart number update function
const hearts = document.getElementsByClassName('heart');
let heartNumberSection = document.getElementById('heart-number')
let heartNumber = parseInt(document.getElementById('heart-number').innerText);
for(const heart of hearts){
    heart.addEventListener('click',function(){
         heartNumber ++;
        heartNumberSection.innerText = heartNumber
    })
}

// call button and history update function

const callBtns = document.getElementsByClassName('call-btn');
for(const callBtn of callBtns){
    callBtn.addEventListener('click',function(){
        let coinNumberSection = document.getElementById('coin-section');
        let coinNumber = parseInt(document.getElementById('coin-section').innerText);
        if(coinNumber < 20){
            alert("❌ You don't have enough coins.You need at least 20 coins to make a call. ")
            return;
        }
        alert(  ' 📞 Calling' + ' ' +  callBtn.parentNode.parentNode.children[1].innerText + ' '+callBtn.parentNode.parentNode.children[3].innerText)
        

        coinCount = coinNumber - 20;
        
        coinNumberSection.innerText = coinCount;

        const callHistory = document.getElementById('call-history');
        const historyDetails = document.createElement('div')
        historyDetails.innerHTML =`
        <div class="flex justify-between items-center p-3 bg-gray-100 rounded-xl mb-3">
                <div>
                    <h1 class="font-semibold">${callBtn.parentNode.parentNode.children[1].innerText}</h1>
                    <p class="text-gray-500">${callBtn.parentNode.parentNode.children[3].innerText}</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
            </div>`
                callHistory.appendChild(historyDetails)
    })
}

// history clear function
document.getElementById('clear-btn')
.addEventListener('click',function(){
   let historyContainer = document.getElementById('call-history');
   historyContainer.innerHTML = ""
})

// number copy function
const copyBtns = document.getElementsByClassName('copy-btn');
let copiedNumber =  document.getElementById('copied-number');
let copiedConvertedNumber = parseInt(copiedNumber.innerText);
for(const copyBtn of copyBtns ){
copyBtn.addEventListener('click',function(){
    const textToCopy = copyBtn.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(textToCopy)
    .then(function(){
        alert('Number is Copied : '+ textToCopy)
    })
    .catch(function(error){
        alert("Could not copy. Error: " + error)
    })
})
}
