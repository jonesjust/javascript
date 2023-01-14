let hours: number = 0;
let minutes: number = 0;
const arrayOfTimes: Array<number[]> = [[1, 0], [2, 40], [3, 20], [0, 60], [0, 120], [0, 120], [1, 726]];

function addTime(addHours: number, addMinutes: number): void {
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

function totalTime(): string {
    for (let i = 0; i < arrayOfTimes.length; i++) {
        addTime(arrayOfTimes[i][0], arrayOfTimes[i][1]);
    }
    return `${hours} hours and ${minutes} minutes`;
}

console.log(totalTime());
