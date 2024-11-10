const randomTextElement = document.querySelector(".randomText");
const textBox = document.getElementById("textBox");
const startBtn = document.querySelector(".start");
const accuracyElement = document.getElementById("accuracy");
const timeElement = document.getElementById("time");
const wpmElement = document.getElementById("wpm");

texts = ["I may disagree with what you say, but I will defend to death your right to say it. (Evelyn Beatrice Hall)",
         "If men were perfectly virtuous, they wouldn’t have friends. (Montesquieu)",
         "People do what they hate for money and use the money to do what they love. (Jimmy O. Yang’s dad?)",
         "Small things make perfection, but perfection is no small thing. (Sir Henry Royce)",
         "No problem can be solved from the same level of consciousness that created it. We must see the world anew. (Albert Einstein)"
];

let testText = "";
let startTime = 0;
let isTestRunning = false;
let wordCount = 0;

function startTest(){
    testText = texts[Math.floor(Math.random()*texts.length)];
    randomTextElement.textContent = testText;
    textBox.disabled = false;
    textBox.value = "";
    textBox.focus();
    timeElement.textContent = "";
    wpmElement.textContent = "";
    accuracyElement.textContent = "";
    startTime = new Date().getTime();
    isTestRunning = true;
    start.style.display = "none";
}

function calculateSpeed(){
    if(isTestRunning){
        const elapsedTime = (new Date().getTime() - startTime) / 1000;
        const wordsTyped = textBox.value.trim().split(/\s+/).length;
        const wordsPerMinute = Math.round((wordsTyped / elapsedTime) * 60);
    

const typedText = textBox.value;
const targetText = testText;
let correctChars = 0;

for(let i = 0; i < Math.min(typedText.length, targetText.length); i++){
    if(typedText[i] === testText[i]){
        correctChars++;
    }
}

const accuracy = Math.round((correctChars / targetText.length) * 100);

timeElement.textContent = `time: ${Math.round(elapsedTime)} seconds`;
wpmElement.textContent = `WPM: ${wordsPerMinute}`;
accuracyElement.textContent = `Accuracy: ${accuracy}%`;

if(textBox.value === testText){
    isTestRunning = false;
}
    }
};

startBtn.addEventListener('click', startTest);
textBox.addEventListener('input', calculateSpeed);
