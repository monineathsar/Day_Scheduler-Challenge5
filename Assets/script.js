//hours in array object format
const businessHour = [
    {
        id: "8",
        txt: "8 AM"
    },
    {
        id: "9",
        txt: "9 AM"
    },
    {
        id: "10",
        txt: "10 AM"
    },
    {
        id: "11",
        txt: "11 AM"
    },
    {
        id: "12",
        txt: "12 PM"
    },
    {
        id: "13",
        txt: "1 PM"
    },
    {
        id: "14",
        txt: "2 PM"
    },
    {
        id: "15",
        txt: "3 PM"
    },
    {
        id: "16",
        txt: "4 PM"
    },
    {
        id: "17",
        txt: "5 PM"
    }
];



//creates timeblock div elements inside container div
document.addEventListener('DOMContentLoaded', function() {
    var timeBlocksDiv = document.getElementById("timeBlocks");
    businessHour.forEach(function(x){
        var outerDiv = document.createElement('div');
        outerDiv.id = x.id;
        outerDiv.classList.add("time-block");
        outerDiv.classList.add("row");
        
        var innerDiv = document.createElement('div');
        innerDiv.innerHTML = x.txt
        innerDiv.classList.add("hour");
        outerDiv.appendChild(innerDiv);

        var textArea = document.createElement("textarea");
        textArea.classList.add("description");
        outerDiv.appendChild(textArea);

        var button = document.createElement('button');
        var img = document.createElement("img");
        img.src = "./Assets/saveIcon.png"
        button.appendChild(img);
        button.classList.add("saveBtn");

        outerDiv.appendChild(button);

        timeBlocksDiv.appendChild(outerDiv);
    });

}, false);

// formats the date at top of page
var todayDate = moment().format('dddd, MMMM Do YYYY, h:mm a');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var id = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        localStorage.setItem(id, text);
    })

    function timeTracker() {
        var currentHour = 10;

        $(".time-block").each(function() {
            var currentTimeblock = parseInt($(this).attr("id"));

            if (currentTimeblock < currentHour) {
                $(this).addClass("past");
            }
            else if (currentTimeblock === currentHour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        })
    }

    businessHour.forEach(function(x) {
        $("#" + x.id + " .description").val(localStorage.getItem(x.id));
    });

    timeTracker();
})