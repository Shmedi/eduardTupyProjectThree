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

    // Create an array for the comments
    const comments = [
      'Don\'t stare into his eyes please',
      'I would say something cheesy, but that\'s lame',
      'Almost as spicy as your attitude',
      'That does look rather ravishing',
      'It\'s almost like a funnel cake except, no it\'s not',
      'Wow, how exciting',
      'At least it\'s not \"essential oils\"',
      '...You\'re sick in the head',
      'Disgusting',
      'I mean sure? A little odd but okay'
    ];

    // Keep the images hidden
    $('.imgContainer').hide();

    // randomize the image to be selected on click
    const randomImg = Math.floor(Math.random() * imgArray.length);

    // Match the image array number to the random number
    $('.number-check').html(randomImg);

    // Display the matched image
    imgArray[randomImg].style.display = 'block';

    // Add a comment to the DOM
    $('.comment').html( function() {
      // Match comment to the image with the generated number
      return comments[randomImg];
    });
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