const picture = document.getElementById('picture');
const pic_btn = document.getElementById('pic_btn');
pic_btn.addEventListener('click', fetchPic)

const fact = document.getElementById('fact');
const fact_btn = document.getElementById('fact_btn');
fact_btn.addEventListener('click', fetchFact)


function fetchPic(){
    fetch('https://random.dog/woof.json')
        .then(resp => resp.json())
        .then(data => {
            if (data.url.includes('.mp4')){
                fetchPic()
            } else{
                randomDogPic(data)
            }        
    })
    //.catch(err => console.log(error))
}

function randomDogPic(pictureData){
    // clear picture element
    picture.innerHTML = ""
    // create img tag
    let img = document.createElement('img')
    img.src = pictureData.url
    picture.appendChild(img)
    
}

function fetchFact(){
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1')
        .then(resp => resp.json())
        .then(data => { 
            //console.log(data.fact);
            fact.textContent = data.text;})
    .catch(err => console.log(error))
}

const likeBtn = document.querySelector('.heart');

likeBtn.addEventListener('click', function() {
     likeBtn.classList.toggle('liked');
});
