let hours: number = 0;
let minutes: number = 0;
const arrayOfTimes: Array<number[]> = [[0, 33], [1, 34], [2, 1], [1, 25], [1, 3], [0, 37], [0, 54], [0, 57], [0, 27], [0, 39]];

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
