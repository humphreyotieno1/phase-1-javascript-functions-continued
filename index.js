function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
const output = saturdayFun('bathe my dog');
console.log(saturdayFun(output));

function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}
const override = mondayWork('work from home.');
console.log(mondayWork(override));

function wrapAdjective (flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
const encourage = wrapAdjective("!!!");
const myWord = encourage();
console.log(myWord);

const customized = encourage("awesome");
console.log(customized);

const wrapWithAsterisk = wrapAdjective('*');
const result = wrapWithAsterisk('a hard worker');
console.log(result);

const wrapWithDouble = wrapAdjective('||');
const wrap = wrapWithDouble('a dedicated programmer');
console.log(wrap);