// function currentTime() {
//     let date = new Date();
//     let hrs = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     let session = "AM";

// if(hrs == 0) {
//     hrs = 12
// }

// if(hrs > 12) {  
//     hrs = hrs - 12;
//     session = "PM";
// }

// hrs = (hrs < 10) ? "0" + hrs : hrs;
// min = (min < 10) ? "0" +min : min;
// sec = (sec < 10) ? "0" + sec : sec;

// let time = `${hrs} + ":" + ${min} + ":" + ${sec} + ":" + session`;

// console.log(`${date.hrs} + ":" + ${date.min} + ":" + ${date.sec} + ":" + session`);

// document.getElementById("clock").innerText = time;
// let t = setTimeout(function(){ currentTime() }, 1000)
// }
// currentTime();



// let myDate = new Date();
// const currentDateFormatted = formatDate(myDate);

// function formatDate(dateObject) {
//     const date = {
//         weekday: dateObject.getDay(),
//         date: dateObject.getDate(),
//         month: dateObject.getMonth(),
//         year: dateObject.getFullYear()
//        };

//     let monthNames = [
//         "January", 
//         "February", 
//         "March", 
//         "April", 
//         "May", 
//         "June", 
//         "July", 
//         "August", 
//         "September", 
//         "October", 
//         "November", 
//         "December"
//     ];

//     let dayNames = [
//         "Sunday", 
//         "Monday", 
//         "Tuesday", 
//         "Wednesday", 
//         "Thursday", 
//         "Friday", 
//         "Saturday"
//     ];

// currentMonth = monthNames[myDate.getMonth()];
// currentDay = dayNames[myDate.getDate()]; 
// }

// var parentElement = document.getElementById("date-container");
// parentElement.innerHTML = currentDateFormatted;
