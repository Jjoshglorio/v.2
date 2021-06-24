function getCardId(event){
  selectedCard = event.currentTarget.id;
  angkaId = selectedCard.charAt(5);
  let elementBiner = document.getElementById("dropbiner" + angkaId);
  console.log(elementBiner.childNodes[0]);
  elementCard = document.getElementById(selectedCard);
  flip(elementCard, elementBiner);
}

function flip(kartu, elementBiner) {
  let element = kartu;
  
  // console.log(document.getElementById(event.currentTarget));
  if (element.style.transform == "rotateY(180deg)") { //tutup
    element.style.transform = "rotateY(0deg)";
  } else {
    element.style.transform = "rotateY(180deg)"; //buka
    jumlahBiner = getCount(elementBiner);
    console.log(jumlahBiner)
  }
}

$(document).ready(function () {
  $(".dragable").draggable({
    revert: true,
  });

  $(".dropable").droppable({
    drop: function (event, ui) {
      let nilaiBenar = $(this).attr("tittle");
      var nilaiAwal = 0;
      var score = document.getElementById("score").innerText;
      var nilai = parseInt(score);
      let kotakYangDibawa = ui.draggable.text();

      if (kotakYangDibawa == nilaiBenar) {
        ui.draggable.animate({ opacity: "0" }, 100);
        console.log(event);

        $(this).removeClass("error");

        $(this).addClass("active");

        nilaiAwal = nilai + 10;

        countBenar+= 1;
        console.log('as')
        console.log(countBenar)
        console.log(jumlahBiner)

        document.getElementById("score").innerText = nilaiAwal;

        console.log(nilaiAwal);

        $(this).text(nilaiBenar);

        var a = $("#binerKonverter").find("div .active").length;

        if (a == 52) {
          alert("Selamat Anda Menang! Score anda = " + nilaiAwal);
          window.location.href = "/Scriptsii/v.2/index.html";
        }

        if (countBenar == jumlahBiner){
          console.log("benar")
          elementCard.childNodes[3].classList.remove("belakang");
          elementCard.childNodes[3].classList.add("belakang-benar");
          toggle_visibility('biner'+angkaId);
          elementCard = {};
          selectedCard = '';
          jumlahBiner = 0;
          countBenar = 0;
        }
      } else {
        $(this).addClass("error");

        nilaiAwal = nilai - 5;

        document.getElementById("score").innerText = nilaiAwal;

        console.log(nilaiAwal);
      }
    },
  });
});

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.style.display == "block") {
    setTimeout(function () {
      e.style.display = "none";
    }, 0);
  } else {
    setTimeout(function () {
      e.style.display = "block";
    }, 2000);
  }
}

function getCount(parent){
  let count = parent.getElementsByClassName('isibiner').length;
  return count
}

var isWaiting = false;
var isRunning = false;
var seconds = 450;
var countdownTimer;
var finalCountdown = false; 
let selectedCard = '';
let elementCard = {};
let jumlahBiner = 0;
let countBenar = 0;
let angkaId = 0;

var x = function GameTimer() {
  var minutes = Math.round((seconds - 30) / 60);
  var remainingSeconds = seconds % 60;
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }
  document.getElementById("test").innerHTML = minutes + ":" + remainingSeconds;
  if (seconds == 0) {
    isRunning = false;

    if (document.getElementById("test").innerText == "0:00") {
      alert("Maaf waktu anda telah habis");
      window.location.href = "/Scriptsii/v.2/index.html";
    }
  } else {
    isWaiting = true;
    seconds--;
  }
};
countdownTimer = setInterval(x, 1000);
