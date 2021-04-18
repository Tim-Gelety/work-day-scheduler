// Displays right now!
var now = moment().format('dddd, h a');
$('#currentDay').append(now);
// hardcoded array for military time
hardCode = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//absolute wizardry 
// for loop that iterates 9 times 
for (var i = 0; i < hardCode.length; i++) {
    // time has to come first or else things break 
    var time = 9 + i
    // makes the row bootstrap style     
    var row = $('<div>');
    row.addClass('row');
    $('#timeBlock').append(row);
    // makes the first colum using the hardcoded array 
    var colTime = $('<div>');
    colTime.text(time + ':00')
    colTime.addClass('col-1 hour')
    $(row).append(colTime);
    // makes the input colum to put stuff in  
    var colInput = $('<div>');
    colInput.addClass('col-10')
    colInput.attr('id', 'input' + i);
    $(row).append(colInput);
    // makes a text box could use improvement but the css specifies textarea
    var textArea = $('<textarea>');
    textArea.attr('id', 'task' + i);
    $('#input' + i).append(textArea);
    // makes the button colum
    var colButton = $('<div>');
    colButton.addClass('col-1 saveBtn')
    $(row).append(colButton);
    // makes the button icon could use improvement
    var buttonSave = $('<i>');
    buttonSave.addClass('fas fa-save');
    $(colButton).append(buttonSave);
    // all the moment stuff goes here 
    var then = moment().hour(time);
    // this kept me reading arcane documentation up past midnight
    var future = moment().isBefore(then);
    var present = moment().isSame(then);
    var past = moment().isAfter(then);
    // this is the aha! moment that kept me working till 4 am 
    if (future === true) {
        $('#input' + i).addClass('future');
    }
    if (present === true) {
        $('#input' + i).addClass('present');
    }
    if (past === true) {
        $('#input' + i).addClass('past');
    }
};
// all this is borked and needs serious work 

var getData = JSON.parse(localStorage.getItem('storedData')) || [];

function displayTasks(getData) {

    var displayText = $('<p>');
    displayText.text(getData[0]);
    $('#task').append(displayText)
}

// returns the value at id task to console and sent to localStorage
$("#btn1").on('click', function (event) {
    event.preventDefault();
    var getTask = $('#task').val().trim();
    getData.push(getTask);
    displayTasks(getData);
    localStorage.setItem('task', JSON.stringify(getData));
    $('#task').val('');
});

displayTasks(getData);
