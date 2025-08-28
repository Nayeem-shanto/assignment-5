/* heart icon related functionality */

const allHeartValue = document.getElementsByClassName('heart-icon');
for(const singleValue of allHeartValue){
    singleValue.addEventListener('click', function(){
        let count = parseInt(document.getElementById('initial-heart-value').innerText);
        count++;
        document.getElementById('initial-heart-value').innerText= count;
    })
}

