function randomNumber1() {
    var num1 = Math.floor(Math.random() * 6) + 1;
    return num1;
}

function randomNumber2() {
    var num2 = Math.floor(Math.random() * 6) + 1;
    return num2;
}

function randomDice1(number) {
    switch(number) {
        case 1:
          document.querySelector(".img1").src = "./images/dice1.png";
          break;
        case 2:
            document.querySelector(".img1").src = "./images/dice2.png";
            break;
        case 3:
          document.querySelector(".img1").src = "./images/dice3.png";
          break;
        case 4:
            document.querySelector(".img1").src = "./images/dice4.png";
            break;
        case 5:
          document.querySelector(".img1").src = "./images/dice5.png";
          break;
        case 6:
          document.querySelector(".img1").src = "./images/dice6.png";
          break;
      }
}

function randomDice2(number) {
    switch(number) {
        case 1:
          document.querySelector(".img2").src = "./images/dice1.png";
          break;
        case 2:
            document.querySelector(".img2").src = "./images/dice2.png";
            break;
        case 3:
          document.querySelector(".img2").src = "./images/dice3.png";
          break;
        case 4:
            document.querySelector(".img2").src = "./images/dice4.png";
            break;
        case 5:
          document.querySelector(".img2").src = "./images/dice5.png";
          break;
        case 6:
          document.querySelector(".img2").src = "./images/dice6.png";
          break;
      }
}

randomDice1(randomNumber1());
randomDice2(randomNumber2());