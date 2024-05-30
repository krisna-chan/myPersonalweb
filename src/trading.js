const buttons = document.querySelectorAll('#iphone, #iwatch, #mac, #ipad, #android, #refund');

const contents = document.querySelectorAll('#iphone-content, #iwatch-content, #mac-content, #ipad-content, #android-content, #refund-content');

// */-------------------| Switching card function |----------------/ *//
buttons.forEach(button => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.classList.add('hidden')); 
// */-----------------since id name is the same as the container name use it to remove and add class name -------------/ *//
    const clickedContentId = button.id + '-content';
    document.getElementById(clickedContentId).classList.remove('hidden'); 
  });
});






// */ ---------------| Pill switching button | ---------------/*//
const buttonStore = document.querySelectorAll('#instore, #online');
const instoreGroup = document.querySelector('.instore-group'); 
const onlineGroup = document.querySelector('.online-group');

function buttonClick(clickedButton) {
  instoreGroup.classList.add('hidden');
  onlineGroup.classList.add('hidden');


  if (clickedButton.id === 'instore') {
    instoreGroup.classList.remove('hidden');
  } else {
    onlineGroup.classList.remove('hidden');
  }
}

buttonStore.forEach(button => button.addEventListener('click', () => buttonClick(button)));

