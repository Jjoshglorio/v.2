function flip(event) {
  var element = event.currentTarget;
  if (element.className === "kartu") {
    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    } else {
      element.style.transform = "rotateY(180deg)";
    }
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

        $(this).removeClass("error");

        $(this).addClass("active");

        nilaiAwal = nilai + 10;

        document.getElementById("score").innerText = nilaiAwal;

        console.log(nilaiAwal);

        $(this).text(nilaiBenar);

        var a = $("#binerKonverter").find("div .active").length;

        if (a == 40) {
          alert("Selamat/n Score anda = " + nilaiAwal);
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

var isWaiting = false;
var isRunning = false;
var seconds = 100;
var countdownTimer;
var finalCountdown = false;

var x = function GameTimer() {
  var minutes = Math.round((seconds - 30) / 60);
  var remainingSeconds = seconds % 60;
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }
  document.getElementById("test").innerHTML = minutes + ":" + remainingSeconds;
  if (seconds == 0) {
    isRunning = true;
    seconds += 2;

    if (finalCountdown) {
      clearInterval(countdownTimer);
    } else {
      finalCountdown = true;
    }
  } else {
    isWaiting = true;
    seconds--;
  }
};
countdownTimer = setInterval(x, 1000);

if (document.getElementById("test").innerText == "0:00") {
  alert("Maaf waktu anda telah habis");
}
