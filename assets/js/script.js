// Displays right now!
var now = moment().format('dddd, h a');
$('#currentDay').append(now);
// hardcoded array for military time
hardCode = [9, 10, 11, 12, 13, 14, 15, 16, 17];
saveTask = JSON.parse(localStorage.getItem('taskarr')) || ['', '', '', '', '', '', '', '', ''];


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
    colTime.addClass('col-2 hour')
    $(row).append(colTime);

    // makes the input column to put stuff in 
    var colInput = $('<div>');
    colInput.addClass('col-8')
    colInput.attr('id', 'input' + i);
    $(row).append(colInput);
    
    // makes the button column
    var colButton = $('<div>');
    colButton.addClass('col-2 saveBtn')
    $(row).append(colButton);
    
    // makes a text box could use improvement but the css specifies textarea
    // mostly formatting stuff
    var textArea = $('<textarea>');
    textArea.addClass('col-12')
    textArea.attr('id', 'task' + i);
    textArea.attr('type', 'text')
    textArea.text(saveTask[i]);
    
    $('#input' + i).append(textArea);
    // makes the button icon could use improvement
    // mostly formatting stuff
    var buttonSave = $('<i>');
    buttonSave.addClass('fas fa-save');
    buttonSave.attr('id', 'btn' + i)
    $(colButton).append(buttonSave);
    
    //the following is absolute wizardry 
    
    // this is the 'moment' I blame David Lovett 
    var then = moment().hour(time);
    // this kept me reading arcane moment.js documentation up past midnight
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

// the following 9 blocks could be in a for loop but it's sketchy
$("#btn0").on('click', function (event) {
    event.preventDefault()
    var getTask = $('#task0').val();
    saveTask.splice(0, 1, getTask);
    $('#task0').val('');
    var writeTask = saveTask[0];
    $('#task0').val(writeTask);
    localStorage.setItem('taskarr', JSON.stringify(saveTask));
});

$("#btn1").on('click', function (event) {
    event.preventDefault()
    var getTask = $('#task1').val();
    saveTask.splice(1, 1, getTask);
    $('#task1').val('');
    var writeTask = saveTask[1];
    $('#task1').val(writeTask);
    localStorage.setItem('taskarr', JSON.stringify(saveTask));

});

$("#btn2").on('click', function (event) {
    event.preventDefault()
    var getTask = $('#task2').val();
    saveTask.splice(2, 1, getTask);
    $('#task2').val('');
    var writeTask = saveTask[2];
    $('#task2').val(writeTask);
    localStorage.setItem('taskarr', JSON.stringify(saveTask));

});

$("#btn3").on('click', function (event) {
    event.preventDefault()
    var getTask = $('#task3').val();
    saveTask.splice(3, 1, getTask);
    $('#task3').val('');
    var writeTask = saveTask[3];
    $('#task3').val(writeTask);
    localStorage.setItem('taskarr', JSON.stringify(saveTask));

});

$("#btn4").on('click', function (event) {
    event.preventDefault()
    var getTask = $('#task4').val();
    saveTask.splice(4, 1, getTask);
    $('#task4').val('');
    var writeTask = saveTask[4];
    $('#task4').val(writeTask);
    localStorage.setItem('taskarr', JSON.stringify(saveTask));

});

$("#btn5").on('click', function (event) {
    event.preventDefault()
    var getTask = $('#task5').val();
    saveTask.splice(5, 1, getTask);
    $('#task5').val('');
    var writeTask = saveTask[5];
    $('#task5').val(writeTask);
    localStorage.setItem('taskarr', JSON.stringify(saveTask));

});

$("#btn6").on('click', function (event) {
    event.preventDefault()
    var getTask = $('#task6').val();
    saveTask.splice(6, 1, getTask);
    $('#task6').val('');
    var writeTask = saveTask[6];
    $('#task6').val(writeTask);
    localStorage.setItem('taskarr', JSON.stringify(saveTask));

});

$("#btn7").on('click', function (event) {
    event.preventDefault()
    var getTask = $('#task7').val();
    saveTask.splice(7, 1, getTask);
    $('#task7').val('');
    var writeTask = saveTask[7];
    $('#task7').val(writeTask);
    localStorage.setItem('taskarr', JSON.stringify(saveTask));

});

$("#btn8").on('click', function (event) {
    event.preventDefault()
    var getTask = $('#task8').val();
    saveTask.splice(8, 1, getTask);
    $('#task8').val('');
    var writeTask = saveTask[8];
    $('#task8').val(writeTask);
    localStorage.setItem('taskarr', JSON.stringify(saveTask));

});