/* heart icon related functionality */

const allHeartValue = document.getElementsByClassName('heart-icon');
for(const singleValue of allHeartValue){
    singleValue.addEventListener('click', function(){
        let count = parseInt(document.getElementById('initial-heart-value').innerText);
        count++;
        document.getElementById('initial-heart-value').innerText= count;
    })
}

/* call button features */
document.getElementById('national-emergency-call-btn').addEventListener('click', function(){
    alert("📞 calling National Emergency Services 999");
})
document.getElementById('police-helpline').addEventListener('click', function(){
    alert("📞 calling Police Helpline 999");
})
document.getElementById('fire-service-helpline').addEventListener('click', function(){
    alert("📞 calling Fire Service Helpline 999");
})
document.getElementById('ambulance-helpline').addEventListener('click', function(){
    alert("📞 calling Ambulance Helpline 1994-999999 ");
})
document.getElementById('women-helpline').addEventListener('click', function(){
    alert("📞 calling Women and Child Helpline 109");
})
document.getElementById('anti-corruption-helpline').addEventListener('click', function(){
    alert("📞 calling Anti Corruption Helpline 106");
})
document.getElementById('electricity-helpline').addEventListener('click', function(){
    alert("📞 calling Electricity Helpline 16216");
})
document.getElementById('brac-helpline').addEventListener('click', function(){
    alert("📞 calling BRAC NGO Helpline 106");
})
document.getElementById('railway-helpline').addEventListener('click', function(){
    alert("📞 calling Bangladesh Railway Helpline 106");
})

    


    const allCallButton = document.getElementsByClassName('call-btn-features');
    console.log(allCallButton);
    for(const singleCallBtn of allCallButton){
        console.log(singleCallBtn);
        singleCallBtn.addEventListener('click', function(){
            let coinRemove = parseInt(document.getElementById('initial-coin').innerText);
            coinRemove = coinRemove - 20;
            if(coinRemove < 20){
            alert("You don't have enough coin to call");
            return;
        }
        
            document.getElementById('initial-coin').innerText = coinRemove;
            
        })
        
    }

