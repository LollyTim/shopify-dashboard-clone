



let close = document.getElementById("toclose");
function closAble() {
     if (close.style.display !== 'none'){
        close.style.display = 'none'
     }
};
let closing = document.getElementById("closeProfile");
function closAbleOne() {
    if (closure.style.display !== 'none'){
        closure.style.display = 'none'}
     if (closing.style.display !== 'none'){
        closing.style.display = 'none'
     }else {
        closing.style.display = 'flex'
     }
}
let closure = document.getElementById("closeAlert");
function closAbletwo() {
      if (closing.style.display !== 'none'){
        closing.style.display = 'none'}
      if (closure.style.display !== 'none'){
        closure.style.display = 'none' 
     }else {
        closure.style.display = 'flex'
     }
}










let closeAllMain = document.getElementById("contenttentt");
let bortin1 = document.getElementById("bortin1");
let bortin2 = document.getElementById("bortin2");

function closFabletwo() {
  if (closeAllMain.style.display === 'none' ) {
    closeAllMain.style.display = 'block';
    bortin1.style.transform = 'rotate(180deg)'
  
   
  } else {
    closeAllMain.style.display = 'none';
    bortin1.style.transform = 'rotate(360deg)'
  }
}




let closecont = document.querySelector("#oContent");
let toChangeBg = document.querySelector("#toChangeBg");
let imageToClose = document.querySelector("#oImage");

let closecont2 = document.querySelector("#oContent2");
let toChangeBg2 = document.querySelector("#toChangeBg2");
let imageToClose2 = document.querySelector("#oImage2");

let closecont3 = document.getElementById("oContent3");
let toChangeBg3 = document.getElementById("toChangeBg3");
let imageToClose3 = document.getElementById("oImage3");

let closecont4 = document.getElementById("oContent4");
let toChangeBg4 = document.getElementById("toChangeBg4");
let imageToClose4 = document.getElementById("oImage4");

let closecont5 = document.getElementById("oContent5");
let toChangeBg5 = document.getElementById("toChangeBg5");
let imageToClose5 = document.getElementById("oImage5");

function closeToOpen() {
  const isCloseContHidden = closecont.style.display === "none";

  closecont.style.display = isCloseContHidden ? "block" : "none";
  imageToClose.style.display = isCloseContHidden ? "block" : "none";
  toChangeBg.style.backgroundColor = isCloseContHidden ? "#F3F3F3" : "white";
  
  if (!isCloseContHidden) {
    toChangeBg.style.backgroundColor = "white";
  }

  onnClick = !onnClick;
  closecont3.style.display = "none";
  toChangeBg3.style.backgroundColor = "white";
  imageToClose3.style.display = "none";
  imageToClose2.style.display = "none";
  closecont2.style.display = "none";
  toChangeBg2.style.backgroundColor = "white";
  imageToClose4.style.display = "none";
  closecont4.style.display = "none";
  toChangeBg4.style.backgroundColor = "white";
  imageToClose5.style.display = "none";
  closecont5.style.display = "none";
  toChangeBg5.style.backgroundColor = "white";
}

   let onnClick = false;


function closeToOpen2() {
  const isCloseContHidden1 = closecont2.style.display === "none";

  closecont2.style.display = isCloseContHidden1 ? "block" : "none";
  imageToClose2.style.display = isCloseContHidden1 ? "block" : "none";
  toChangeBg2.style.backgroundColor = isCloseContHidden1 ? "#F3F3F3" : "white";
  
  if (!isCloseContHidden1) {
    toChangeBg2.style.backgroundColor = "white";
  }

  onnClick = !onnClick;
  closecont.style.display = "none";
  imageToClose.style.display = "none";
  toChangeBg.style.backgroundColor = "white";
  closecont3.style.display = "none";
  imageToClose3.style.display = "none";
  toChangeBg3.style.backgroundColor = "white";
  closecont4.style.display = "none";
  imageToClose4.style.display = "none";
  toChangeBg4.style.backgroundColor = "white";
  closecont5.style.display = "none";
  imageToClose5.style.display = "none";
  toChangeBg5.style.backgroundColor = "white";
}

function closeToOpen3() {
  const isCloseContHidden2 = closecont3.style.display === "none";

  closecont3.style.display = isCloseContHidden2 ? "block" : "none";
  imageToClose3.style.display = isCloseContHidden2 ? "block" : "none";
  toChangeBg3.style.backgroundColor = isCloseContHidden2 ? "#F3F3F3" : "white";
  
  if (!isCloseContHidden2) {
    toChangeBg3.style.backgroundColor = "white";
  }

  onnClick = !onnClick;
  closecont.style.display = "none";
  imageToClose.style.display = "none";
  toChangeBg.style.backgroundColor = "white";
  closecont2.style.display = "none";
  imageToClose2.style.display = "none";
  toChangeBg2.style.backgroundColor = "white";
  closecont4.style.display = "none";
  imageToClose4.style.display = "none";
  toChangeBg4.style.backgroundColor = "white";
  closecont5.style.display = "none";
  imageToClose5.style.display = "none";
  toChangeBg5.style.backgroundColor = "white";
}
function closeToOpen4() {
  const isCloseContHidden4 = closecont4.style.display === "none";

  closecont4.style.display = isCloseContHidden4 ? "block" : "none";
  imageToClose4.style.display = isCloseContHidden4 ? "block" : "none";
  toChangeBg4.style.backgroundColor = isCloseContHidden4 ? "#F3F3F3" : "white";
  
  if (!isCloseContHidden4) {
    toChangeBg4.style.backgroundColor = "white";
  }

  onnClick = !onnClick;
  closecont.style.display = "none";
  imageToClose.style.display = "none";
  toChangeBg.style.backgroundColor = "white";
  closecont2.style.display = "none";
  imageToClose2.style.display = "none";
  toChangeBg2.style.backgroundColor = "white";
  closecont3.style.display = "none";
  imageToClose3.style.display = "none";
  toChangeBg3.style.backgroundColor = "white";
  closecont5.style.display = "none";
  imageToClose5.style.display = "none";
  toChangeBg5.style.backgroundColor = "white";
}
function closeToOpen5() {
  const isCloseContHidden5 = closecont5.style.display === "none";

  closecont5.style.display = isCloseContHidden5 ? "block" : "none";
  imageToClose5.style.display = isCloseContHidden5 ? "block" : "none";
  toChangeBg5.style.backgroundColor = isCloseContHidden5 ? "#F3F3F3" : "white";
  
  if (!isCloseContHidden5) {
    toChangeBg5.style.backgroundColor = "white";
  }

  onnClick = !onnClick;
  closecont.style.display = "none";
  imageToClose.style.display = "none";
  toChangeBg.style.backgroundColor = "white";
  closecont2.style.display = "none";
  imageToClose2.style.display = "none";
  toChangeBg2.style.backgroundColor = "white";
  closecont3.style.display = "none";
  imageToClose3.style.display = "none";
  toChangeBg3.style.backgroundColor = "white";
  closecont4.style.display = "none";
  imageToClose4.style.display = "none";
  toChangeBg4.style.backgroundColor = "white";
}





// function closeToOpen3() {
//   if (closecont2.style.display === "none") {
//     closecont2.style.display = "block";
//     if (imageToClose2.style.display === "none") {
//       imageToClose2.style.display = "block";
//     }
//     if (imageToClose3.style.display === "none") {
//       imageToClose3.style.display = "block";
//     }
//     if(toChangeBg.style.backgroundColor === '#F3F3F3'){
//       toChangeBg.style.backgroundColor = 'white';
//     }
//    if(toChangeBg2.style.backgroundColor === 'white'){
//       toChangeBg2.style.backgroundColor = '#F3F3F3';
//     }
//    if(toChangeBg3.style.backgroundColor === 'white'){
//       toChangeBg3.style.backgroundColor = '#F3F3F3';
//     }
//   } else {
//     closecont2.style.display = "none";
//     if (imageToClose3.style.display !== "none") {
//       imageToClose3.style.display = "none";
//     }
//      if(toChangeBg3.style.backgroundColor = '#F3F3F3'){
//       toChangeBg3.style.backgroundColor = 'white';
//     }
//   }
//    closecont.style.display = "none";
//    imageToClose.style.display = "none";
//    toChangeBg2.style.backgroundColor = 'white';
//   toChangeBg.style.backgroundColor = 'white';
//    //    closecont1.style.display = "none";
//    // imageToClose2.style.display = "none";
//    // toChangeBg2.style.backgroundColor = 'white';
// }
onnClick = !onnClick;
toChangeBg2.style.backgroundColor = onnClick ? 'white' : '#F3F3F3';



document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.getElementById('progressBar');
  const checkboxes = document.querySelectorAll('.inputt');
  const selectedCount = document.getElementById('selectedCount');

  const totalCheckboxes = checkboxes.length;

  function updateProgressBar() {
    const selectedItems = document.querySelectorAll('.inputt:checked').length;
    const progress = (selectedItems / totalCheckboxes) * 100;
    progressBar.style.width = progress + '%';

    selectedCount.textContent = ` ${selectedItems} / ${totalCheckboxes}  completed`;

    if (selectedItems === totalCheckboxes) {
      progressBar.style.width = '100%';
    }
  }

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', updateProgressBar);
  });

  updateProgressBar(); // Call initially to set the progress bar if some items are already checked
});








// const mediaQuery = window.matchMedia('(max-width: 600px)');

// function handleScreenChange(event) {
//   const imageToClose = document.getElementById('oImage');
//   const imageToClose2 = document.getElementById('oImage2');
//   const imageToClose3 = document.getElementById('oImage3');
//   const imageToClose4 = document.getElementById('oImage4');
//   const imageToClose5 = document.getElementById('oImage5');

//   if (event.matches) {
//     imageToClose.style.display = "none";
//     imageToClose2.style.display = "none";
//     imageToClose3.style.display = "none";
//     imageToClose4.style.display = "none";
//     imageToClose5.style.display = "none";
//   } else {
//     imageToClose2.style.display = "flex";
//     imageToClose3.style.display = "flex";
//     imageToClose4.style.display = "flex";
//     imageToClose5.style.display = "flex";
//     imageToClose.style.display = "flex";
//   }
// }

// Add listener for changes in media query status
// mediaQuery.addEventListener(handleScreenChange);

// Initial check to run code based on current screen size
// handleScreenChange(mediaQuery);

