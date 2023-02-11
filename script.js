

   
//    if (hrs > 12) {
//        hrs = hrs - 12;
//        session = "PM";
//    }
   
//     hrs = (hrs < 10) ? "0" + hrs : hrs;
//     min = (min < 10) ? "0" +min : min;
//     sec = (sec < 10) ? "0" + sec : sec;

// let time = `${hrs} + ":" + ${min} + ":" + ${sec} + ":" + session`;

// console.log(`${date.hrs} + ":" + ${date.min} + ":" + ${date.sec} + ":" + session`);

     
// var parentElement = document.getElementById("time-container");
// parentElement.innerHTML = (`${hour} + ":" ${minute} + ":" ${second}`);
   
// }


const myDate = new Date();
const myDateFormatted = formatDate(myDate);

function formatDate(dateObject) {
    const parts = {
        day: dateObject.getDay(),
        date: dateObject.getDate(),
        month: dateObject.getMonth(),
        year: dateObject.getFullYear()
    };

    let monthName = [
                "January", 
                "February", 
                "March", 
                "April", 
                "May", 
                "June", 
                "July", 
                "August", 
                "September", 
                "October", 
                "November", 
                "December"
            ];
        
    let dayName = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
        ];
        
            const currentMonth = monthName[myDate.getMonth()];
            const currentDay = dayName[myDate.getDay()]; 

    return `${currentDay}  ${currentMonth} ${parts.date}, ${parts.year}`;
}

var parentElement = document.getElementById("date-container");
parentElement.innerHTML = myDateFormatted;