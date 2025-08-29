/* heart icon related functionality */

const allHeartValue = document.getElementsByClassName("heart-icon");
for (const singleValue of allHeartValue) {
  singleValue.addEventListener("click", function () {
    let count = parseInt(
      document.getElementById("initial-heart-value").innerText
    );
    count++;
    document.getElementById("initial-heart-value").innerText = count;
  });
}


/* copy count related functionality */
const allCopyValue = document.getElementsByClassName("copy-button");
for (const singleCopyValue of allCopyValue) {
  singleCopyValue.addEventListener("click", function () {
    let copyCount = Number(document.getElementById("initial-copy-count").innerText);
    copyCount++;
    document.getElementById("initial-copy-count").innerText = copyCount;

    const copiedNumber = singleCopyValue.parentNode.parentNode.children[3].innerText;
    console.log(copiedNumber);
    alert(`${copiedNumber} copied to the clipboard`);
    navigator.clipboard.writeText(`${copiedNumber}`);
  })
};



/* const allCallButton = document.getElementsByClassName("call-btn-features");
console.log(allCallButton);
for (const singleCallBtn of allCallButton) {
  console.log(singleCallBtn);
  singleCallBtn.addEventListener("click", function () {
    // alert("calling this helpline");
    let coinRemove = parseInt(
      document.getElementById("initial-coin").innerText
    );
    coinRemove = coinRemove - 20;
    if (coinRemove < 0) {
      alert("You don't have enough coin to call");
      return;
    }
    document.getElementById("initial-coin").innerText = coinRemove;
  });
} */



/* call button features */
/* 
document.getElementById("brac-helpline").addEventListener("click", function () {
  alert("📞 calling BRAC NGO Helpline 106");
});
document
  .getElementById("railway-helpline")
  .addEventListener("click", function () {
    alert("📞 calling Bangladesh Railway Helpline 106");
  }); */


  /* call button features for transaction section */
  const allCallButton = document.getElementsByClassName("call-btn-features");
  console.log(allCallButton);
  for(let singleButton of allCallButton){
    console.log(singleButton);
    singleButton.addEventListener('click', function(){
      // console.log("button clicked");
      const allCardTitle = singleButton.parentNode.parentNode.children[1].innerText;
      console.log(allCardTitle);
     const allCardNumber = singleButton.parentNode.parentNode.children[3].innerText;
      console.log(allCardNumber);
      const date = new Date().toLocaleString();
      console.log(date);

      const callHistoryContainer = document.getElementById('call-history-container');
      const newCard = document.createElement('div');
      newCard.innerHTML=`
        <div  class="flex justify-between items-center p-4">
                  <div>
                    <h3 class="font-bold">${allCardTitle}</h3>
                    <p class="font-semibold">${allCardNumber}</p>
                  </div>
                  <div>
                    <p class="font-semibold">${date}</p>
                  </div>
            </div>
      `
      /* for alert */
      
      let coinRemove = parseInt(
      document.getElementById("initial-coin").innerText
    );
    coinRemove = coinRemove - 20;
    if (coinRemove < 0) {
      alert("❌❌ For Calling you need at least 20 coins ❌❌");
      return;
    }

      alert(`📞 Calling ${allCardTitle} ${allCardNumber}`);
      
      
    document.getElementById("initial-coin").innerText = coinRemove;


      callHistoryContainer.appendChild(newCard);


      document.getElementById('clear-all').addEventListener('click', function(){
        callHistoryContainer.innerHTML='';
      })

    })
  }


