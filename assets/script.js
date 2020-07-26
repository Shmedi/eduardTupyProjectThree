// Create a namespace object
const friesApp = {};

// Create an event listener
friesApp.eventListener = function() {
  // When the user clicks, bring them to the canvas
  $('#start').on('click', function() {
    $('html, body').animate({
      scrollTop: $('main').offset().top,
    });
  })

  // Create an event listener for the topping button
  $('#randomize').on('click', function() {

    // Cache the images
    const imgArray = $('.imgContainer');

    // randomize the image to be selected on click
    const randomImg = Math.floor(Math.random() * imgArray.length) + 1;

    // Keep the images hidden
    $('.imgContainer').hide();

    // Reveal the randomly chosen image on the canvas
    // Populate the <p> tag with the corresponding text??
    for (let i = 0; i < imgArray.length; i++) {
      
      if (randomImg === 1) {
        imgArray[0].style.display = 'block';
      } else if (randomImg === 2) {
        imgArray[1].style.display = 'block';
      } else if (randomImg === 3) {
        imgArray[2].style.display = 'block';
      } else if (randomImg === 4) {
        imgArray[3].style.display = 'block';
      } else if (randomImg === 5) {
        imgArray[4].style.display = 'block';
      } else if (randomImg === 6) {
        imgArray[5].style.display = 'block';
      } else if (randomImg === 7) {
        imgArray[6].style.display = 'block';
      } else if (randomImg === 8) {
        imgArray[7].style.display = 'block';
      } else if (randomImg === 9) {
        imgArray[8].style.display = 'block';
      } else {
        imgArray[9].style.display = 'block';
      }  
    }
  });
}

// Initialize the function on start
friesApp.init = function(){
  // Call the function to listen for user input
  friesApp.eventListener();
}


$(function() {
  // Call the initializing function once the document is ready
 friesApp.init();
});