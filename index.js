const picture = document.getElementById('picture');
const pic_btn = document.getElementById('pic_btn');
pic_btn.addEventListener('click', fetchPic)

const fact = document.getElementById('fact');
const fact_btn = document.getElementById('fact_btn');
fact_btn.addEventListener('click', fetchFact)


function fetchPic(){
    fetch('https://random.dog/woof.json')
        .then(resp => resp.json())
        .then(data => { randomDogPic(data)
            //console.log(data);
        //picture.innerHTML = `<img src = "${data.url}"/>`
    })
    .catch(err => console.log(error))

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
            //console.log(data.text);
            fact.textContent = data.text;
    })
    .catch(err => console.log(error))

}

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartBtn = document.querySelectorAll(".like-glyph");

//every heart event that was clicked, invoke likeCallBack Function
for (const glyph of heartBtn) {
  glyph.addEventListener("click", likeCallBack)
}

function likeCallBack(e) {
  const heart = e.target
  mimicServerCall("bogusUrl")
  .then(function(){
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = "activated-heart"
    } else {
      heart.innerText = EMPTY_HEART
      heart.className = ""
    }
  })
  .catch(function(error) {
    const modal = document.getElementById("modal")
    modal.className = ""
    modal.innerText = error;
    setTimeout(() => modal.className = "hidden", 3000)

  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

