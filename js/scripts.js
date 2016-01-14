$(function() {
    $('#promptExampleButton').on('click', function() {
        var userName = prompt('What is your name?');
        $('.contentGoesHere').text("Hello " + userName + "!");
    });












});
