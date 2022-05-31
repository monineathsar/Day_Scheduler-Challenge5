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

// formats the date at top of page
var todayDate = moment().format('dddd, MMMM Do YYYY, h:mm a');
$("#currentDay").html(todayDate);