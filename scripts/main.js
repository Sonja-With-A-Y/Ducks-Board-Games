let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/freyja-patchwork.jpg') {
      myImage.setAttribute('src','images/inis.jpg');
    } else {
      myImage.setAttribute('src','images/freyja-patchwork.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to Ducks Board Games, ' + myName;
    }
  }
  
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Ducks Board Games, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  