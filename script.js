let count = 0;

document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};

const audioFileUrl = "audio/rain.mp3";

const audio = new Audio(audioFileUrl);

const button = document.querySelector("#playButton");
const icon = document.querySelector(".play-pause");



let isPlaying = false;

button.addEventListener("click", () => {

  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    icon.classList.remove("bi-play-fill");
    icon.classList.add("bi-pause");
  } else {

    audio.pause();
    isPlaying = false;
    icon.classList.remove("bi-pause");
    icon.classList.add("bi-play-fill");
  }
});  




 






const audioFileUrl2 = "audio/fire.mp3";

const audio2 = new Audio(audioFileUrl2);

const button2 = document.querySelector("#playButton2");
const icon2 = document.querySelector(".play-pause2");


// Ses dosyasının oynatma durumunu takip eden bir değişken oluşturun
let isPlaying2 = false;

button2.addEventListener("click", () => {
  // Düğmeye ilk tıkladığınızda, ses dosyasını oynatın ve değişkeni true olarak ayarlayın
  if (!isPlaying2) {
    audio2.play();
    isPlaying2 = true;
    icon2.classList.remove("bi-play-fill");
    icon2.classList.add("bi-pause"); 
  } else {
    // Düğmeye tekrar tıkladığınızda, değişkeni false olarak ayarlayın ve ses dosyasını durdurun
    audio2.pause();
    isPlaying2 = false;
    icon2.classList.remove("bi-pause");
    icon2.classList.add("bi-play-fill");
  }
});


const audioFileUrl3 = "audio/bird.mp3";

const audio3 = new Audio(audioFileUrl3);

const button3 = document.querySelector("#playButton3");
const icon3 = document.querySelector(".play-pause3");


// Ses dosyasının oynatma durumunu takip eden bir değişken oluşturun
let isPlaying3 = false;

button3.addEventListener("click", () => {
  // Düğmeye ilk tıkladığınızda, ses dosyasını oynatın ve değişkeni true olarak ayarlayın
  if (!isPlaying3) {
    audio3.play();
    isPlaying3 = true;
    icon3.classList.remove("bi-play-fill");
    icon3.classList.add("bi-pause"); 
  } else {
    // Düğmeye tekrar tıkladığınızda, değişkeni false olarak ayarlayın ve ses dosyasını durdurun
    audio3.pause();
    isPlaying3 = false;
    icon3.classList.remove("bi-pause");
    icon3.classList.add("bi-play-fill");
  }
});


const audioFileUrl4 = "audio/wind.mp3";

const audio4 = new Audio(audioFileUrl4);

const button4 = document.querySelector("#playButton4");
const icon4 = document.querySelector(".play-pause4");


// Ses dosyasının oynatma durumunu takip eden bir değişken oluşturun
let isPlaying4 = false;

button4.addEventListener("click", () => {
  // Düğmeye ilk tıkladığınızda, ses dosyasını oynatın ve değişkeni true olarak ayarlayın
  if (!isPlaying4) {
    audio4.play();
    isPlaying4 = true;
    icon4.classList.remove("bi-play-fill");
    icon4.classList.add("bi-pause");
  } else {
    // Düğmeye tekrar tıkladığınızda, değişkeni false olarak ayarlayın ve ses dosyasını durdurun
    audio4.pause();
    isPlaying4 = false;
    icon4.classList.remove("bi-pause");
    icon4.classList.add("bi-play-fill");
  }
});

