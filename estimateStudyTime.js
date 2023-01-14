let hours = 0;
let minutes = 0;
const arrayOfTimes = [[1, 10], [2, 40], [3, 20], [0, 60], [0, 120], [0, 120], [1, 726]];

function addTime(addHours, addMinutes) {
    minutes += addMinutes;
    hours += addHours;
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    while (minutes > 60) {
        minutes -= 60;
        hours++;
    }
}

function totalTime() {
    for (let i = 0; i < arrayOfTimes.length; i++) {
        addTime(arrayOfTimes[i][0], arrayOfTimes[i][1]);
    }
    return `${hours} hours and ${minutes} minutes`;
}

console.log(totalTime());
