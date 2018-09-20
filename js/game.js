var title = document.getElementById('title');
var intro = document.getElementById('intro');
var picture = document.getElementById('picture');
var download = document.getElementById('Download');
var zombie = document.getElementById('DancingZombie');
var zombie1 = document.getElementById('WalkingZombie');
var zombie2 = document.getElementById('Zombie');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var brood = document.getElementById('brood');
var mars = document.getElementById('mars');
var audio = new Audio('snd/horrorbg.mp3');
var goAudio = new Audio('snd/gameOver.mp3');
var winAudio = new Audio('snd/Win.mp3');
var clickAudio = new Audio('snd/click.mp3');
var heeftBrood = false;
var heeftMars = false;


btn1.innerHTML = "START";
btn2.style.display = "none;"


  btn1.onclick = function(){
  clickAudio.play();
  audio.play();
  audio.loop = true;
  console.log("Start");
  download.style.display = "none";
  zombie.style.display = "none";
  zombie1.style.display = "none";
  zombie2.style.display = "none";
  title.innerHTML = "Je wordt wakker in een verlaten ziekenhuis...";
  intro.innerHTML = "Je besluit de gang op te gaan.";
  picture.src = "img/wakeup.jpg";
  btn1.innerHTML = "Ga de gang op";
  btn2.style.display = "none";
  btn1.onclick = function(){
    console.log('Je bent in level 1.');
    clickAudio.play();
    naarDeGang();
  }
}

function naarDeGang() {
  title.innerHTML = "Je staat in de gang. Je ziet dat het al donker wordt, maar er is nog genoeg tijd om te vluchten.";
  intro.innerHTML = "Je hoort plotseling rare geluiden achter je... ZOMBIES! Vlucht snel of verstop je!";
  picture.src = "img/level1.jpg";
  btn1.innerHTML = "Verstop je in de kamer";
  btn2.style.display = "inline";
  btn2.innerHTML = "Vlucht snel de gang uit";
  btn1.onclick = function(){
    console.log('Je bent in level 2.');
    clickAudio.play();
    verstop();
  }
  btn2.onclick = function(){
    console.log('Je bent in level 2.');
    clickAudio.play();
    vluchtgang();
  }
}

function verstop() {
  title.innerHTML = "Je hebt je eigen verstopt in de kamer.";
  intro.innerHTML = "Helaas hebben de zombies je te pakken...";
  picture.src = "img/level2.jpg";
  if (verstop) {
    dieOne();
  }
}

function dieOne(){
  console.log("Je bent dood gegaan op level 1.");
  audio.pause();
  goAudio.play();
  title.innerHTML = "Helaas hebben de zombies je gezien en kon je nergens meer heen...";
  intro.innerHTML = "Druk op F5 om opnieuw te beginnen.";
  picture.src = "img/gameover.gif";
  picture.style.border = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
}

function dieTwo(){
  console.log("Je bent doodgegaan op level 6.");
  audio.pause();
  goAudio.play();
  title.innerHTML = "Er zat nog een achtergebleven zombie in de hoek en die had je niet gezien...";
  intro.innerHTML = "Druk op F5 om opnieuw te beginnen.";
  picture.src = "img/gameover.gif";
  picture.style.border = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
}

function dieThree(){
  console.log("Je bent doodgegaan op level 7.");
  audio.pause();
  goAudio.play();
  title.innerHTML = "Je hebt geen eten... Je sterft helaas van de honger.";
  intro.innerHTML = "Druk op F5 om opnieuw te beginnen.";
  picture.src = "img/gameover.gif";
  picture.style.border = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
}

function dieFour(){
  console.log("Je bent doodgegaan op level 7.");
  audio.pause();
  goAudio.play();
  title.innerHTML = "Je hebt een schuilplaats gevonden.";
  intro.innerHTML = "Maar je hebt geen eten en dus ga je de volgende dag niet halen... Had nu maar even naar eten gezocht. Druk op F5 om opnieuw te spelen.";
  picture.src = "img/gameover.gif";
  picture.style.border = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
}

function dieFive(){
  console.log("Je bent doodgegaan op level 7.");
  audio.pause();
  goAudio.play();
  title.innerHTML = "Je hebt geen schuilplaats kunnen vinden.";
  intro.innerHTML = "Ook heb je geen eten en dus haal je de volgende dag niet... Druk op F5 om opnieuw te spelen.";
  picture.src = "img/gameover.gif";
  picture.style.border = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
}

function winOne(){
  console.log("Win");
  audio.pause();
  winAudio.play();
  title.innerHTML = "Gefeliciteerd, je hebt mijn minigame overleeft. Nu maar hopen dat je ook zo goed bent als er een echte apocalypse komt... Druk op F5 om opnieuw te spelen.";
  intro.style.display = "none";
  picture.src = "img/win.gif"
  btn1.style.display = "none";
  btn2.style.display = "none";
  download.style.display = "inline";
}

function winTwo(){
  console.log("Win");
  audio.pause();
  winAudio.play();
  title.innerHTML = "Gefeliciteerd, je hebt mijn minigame overleeft. Nu maar hopen dat je ook zo goed bent als er een echte apocalypse komt... Druk op F5 om opnieuw te spelen.";
  intro.style.display = "none";
  picture.src = "img/win.gif";
  btn1.style.display = "none";
  btn2.style.display = "none";
  download.style.display = "inline";
}

function winThree(){
  console.log("Win");
  audio.pause();
  winAudio.play();
  title.innerHTML = "Gefeliciteerd, je hebt mijn minigame overleeft. Nu maar hopen dat je ook zo goed bent als er een echte apocalypse komt... Druk op F5 om opnieuw te spelen.";
  intro.style.display = "none";
  picture.src = "img/win.gif";
  btn1.style.display = "none";
  btn2.style.display = "none";
  download.style.display = "inline";
}

function vluchtgang(){
  title.innerHTML = "Je bent aan het einde van de gang aangekomen.";
  intro.innerHTML = "Nu moet je een moeilijke keuze nemen, ga je naar boven of naar beneden?";
  picture.src = "img/level3.jpg";
  btn1.innerHTML = "Ga naar boven";
  btn2.innerHTML = "Ga naar beneden";
  btn1.onclick = function(){
    clickAudio.play();
    winThree();
  }
  btn2.onclick = function(){
    console.log('Je bent in level 3.');
    clickAudio.play();
    beneden();
  }
}

function beneden(){
  title.innerHTML = "Daar is de uitgang...";
  intro.innerHTML = "Ga naar buiten.";
  picture.src = "img/uitgang.jpg";
  btn1.innerHTML = "Ga door de deur";
  btn2.style.display = "none";
  btn1.style.display = "inline";
  btn1.onclick = function(){
    console.log('Je bent in level 4.');
    clickAudio.play();
    buiten();
  }
}

function buiten(){
  title.innerHTML = "Je bent eindelijk uit dat vreselijke ziekenhuis. Het is ondertussen al donker geworden dus je moet extra goed opletten wat je doet...";
  intro.innerHTML = "Maar je bent nog steeds niet ontsnapt.... De zombies zitten nog steeds achter je aan.";
  picture.src = "img/buiten.jpg";
  btn1.innerHTML = "Zoek een uitweg";
  btn2.innerHTML = "Ga de weg op";
  btn2.style.display = "inline";
  btn2.onclick = function(){
    console.log('Je bent in level 5.');
    clickAudio.play();
    snelweg();
   }
   btn1.onclick = function(){
    console.log('Je bent in level 5.');
    clickAudio.play();
    uitweg();
   }
}

function snelweg(){
  title.innerHTML = "Je bent de snelweg opgelopen.";
  intro.innerHTML = "Het is volkomen veilig maar toch wil je een schuilplaats zoeken.";
  picture.src = "img/snelweg.jpg";
  btn2.innerHTML = "Ga de stad in";
  btn1.innerHTML = "Ga het bos in";
  btn1.onclick = function(){
    console.log('Je bent in level 6.');
    clickAudio.play();
    bos();
  }
  btn2.onclick = function(){
    console.log('Je bent in level 6.');
    clickAudio.play();
    stadIn();
  }
}

function bos(){
  title.innerHTML = "Je hebt heel het bos doorgelopen en eindelijk een schuilplaats gevonden.";
  intro.innerHTML = "Je gaat het huisje in en je ziet dat het helemaal veilig is";
  picture.src = "img/shelter3.jpg";
  btn1.innerHTML = "Ga de schuilplaats in";
  btn2.innerHTML = "Ga terug naar de snelweg";
  btn1.onclick = function(){
    clickAudio.play();
    dieFour();
  }
  btn2.onclick = function(){
    console.log('Je bent in level 7.');
    clickAudio.play();
    gaTerug();
  }
}

function gaTerug(){
  title.innerHTML = "Je bent terug naar de snelweg gegaan.";
  intro.innerHTML = "Nu moet je toch maar snel een schuilplaatsje vinden.";
  picture.src = "img/snelweg.jpg";
  btn2.innerHTML = "Ga de stad in";
  btn1.innerHTML = "Ga het bos in";
  btn1.onclick = function(){
    console.log('Je bent in level 6.');
    clickAudio.play();
    bos();
  }
  btn2.onclick = function(){
    console.log('Je bent in level 6.');
    clickAudio.play();
    stadIn();
  }
}

function uitweg(){
  title.innerHTML = "Je hebt heel de nacht doorgelopen maar je bent wel in een stadje gekomen.";
  intro.innerHTML = "Je ziet een winkel staan en je hoopt dat er eten is anders sterf je van de honger.";
  picture.src = "img/winkeltje.jpg";
  btn1.innerHTML = "Zoek naar eten in de winkel";
  btn2.style.display = "none";
  btn1.onclick = function(){
    console.log('Je bent in level 6.');
    clickAudio.play();
    zoekEten();
  }
}

function uitwegTwo(){
  title.innerHTML = "Je hebt eindelijk een winkeltje gevonden.";
  intro.innerHTML = "Nu maar hopen dat er eten is anders sterf je van de honger.";
  picture.src = "img/winkeltje.jpg";
  btn1.innerHTML = "Zoek naar eten in de winkel";
  btn2.style.display = "inline";
  btn2.innerHTML = "Ga terug het stadje in";
  btn1.onclick = function(){
    console.log('Je bent in level 6.');
    clickAudio.play();
    zoekEten();
  }
  btn2.onclick = function(){
    clickAudio.play();
    stadIn();
   if (stadIn) {
     dieThree();
   }
 }
}

function zoekEten(){
  title.innerHTML = "In het winkeltje zie je een brood liggen.";
  intro.innerHTML = "Ook zie je een klein keldertje met misschien meer eten dat ook nog niet bedorven is...";
  picture.src = "img/winkel.jpg";
  brood.style.display = "block";
  btn1.innerHTML = "Ga weg";
  btn2.style.display = "inline";
  btn2.innerHTML = "Ga het keldertje in";
  btn1.onclick = function(){
    console.log('Je bent in level 8.');
    clickAudio.play();
    if (heeftBrood == true) {
      console.log("Brood")
      gaWeg();
    } else {
      alert("c`mon mate, go get that food.");
    }
  }
    brood.onclick = function(){
      clickAudio.play();
      brood.style.display = "none";
      heeftBrood = true;
    }
  btn2.onclick = function(){
    console.log('Je bent in level 8.');
    clickAudio.play();
    if (heeftBrood == true) {
      console.log("Brood")
      kelder();
    } else {
      alert("bring the heckin' fooooooooood!");
    }
  }
}

function gaWeg(){
  title.innerHTML = "Je hebt eindelijk kunnen eten en nu wil je op zoek naar een schuilplaats.";
  intro.innerHTML = "Wanneer je uit het winkeltje komt zie je dat de zombies voorbij zijn gelopen en dat je dus voorlopig veilig bent. Nu maar eens op zoek naar een schuilplaatsje om te slapen...";
  picture.src = "img/stad.jpg";
  btn1.innerHTML = "Loop de stad uit voor een schuilplaats";
  btn2.style.display = "inline";
  btn2.innerHTML = "Zoek in de stad naar een schuilplaats.";
  btn1.onclick = function(){
    clickAudio.play();
    winOne();
  }
  btn2.onclick = function(){
    clickAudio.play();
    winTwo();
  }
}

function stadIn(){
  title.innerHTML = "Je bent toch maar naar de stad gegaan.";
  intro.innerHTML = "Je zoekt een schuilplaats maar je hebt wel honger. Misschien moet je wat eten.";
  picture.src = "img/stad.jpg";
  btn1.innerHTML = "Ga eten zoeken";
  btn2.style.display = "inline";
  btn2.innerHTML = "Zoek in de stad naar een schuilplaats.";
  btn2.onclick = function(){
    clickAudio.play();
    dieFive();
  }
  btn1.onclick = function(){
    console.log('Je bent in level 7.');
    clickAudio.play();
    uitwegTwo();
  }
}

function kelder(){
  title.innerHTML = "In het keldertje zie je nog wat eten liggen.";
  intro.innerHTML = "Je moet kiezen of je het meeneemt of dat je het laat liggen en weggaat...";
  picture.src = "img/kelder.jpg";
  btn1.innerHTML = "Ga weg";
  btn2.style.display = "none";
  mars.style.display = "block";
  btn2.onclick = function(){
    clickAudio.play();
    if (heeftMars == true) {
      dieTwo();
    }
  }
   mars.onclick = function(){
    clickAudio.play();
    console.log('Je bent in level 8.');
     dieTwo();
   mars.style.display = "none";
   heeftMars = true;
  }
  btn1.onclick = function(){
    clickAudio.play();
    gaWeg();
    mars.style.display = "none";
  }
}
