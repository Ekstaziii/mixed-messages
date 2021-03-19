//Possible words/phrases stored in arrays.
const greetings = ["Hello there,", "Howdy,", "Seems like", "Woah,", "Hewwo,", "Hola,", "Yo,", "Waddapp", "Wazzap", "EYYY,"];
const looking = ["pretty fabilous", "astonishing", "like LinuxTechTips", "sleepy", "exhausted", "like someone who codes a lot (cool)", "happy"];
const question = ["Wanna hit the gym?", "Wanna go to the cinema?", "Wanna go eat some enchiladas?", "Wanna play LoL?", "Wanna watch YouTube?", "Wanna invest in Dogecoin?", "Wanna go skydiving?"];

//Function which returns message.
function mixMessage() {
    //Generating three random numbers to use when forming the message.
    let rand1 = Math.floor(Math.random() * greetings.length);
    let rand2 = Math.floor(Math.random() * looking.length);
    let rand3 = Math.floor(Math.random() * question.length);

    return `${greetings[rand1]} you look ${looking[rand2]}. ${question[rand3]}`;
}

console.log(mixMessage());
console.log(mixMessage());
console.log(mixMessage());