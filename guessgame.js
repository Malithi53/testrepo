const counter =  document.getElementById("counter");
const alert = document.getElementById("alert");
const submit =  document.getElementById("submit");
const reset = document.getElementById("reset");
const numberLabel = document.getElementById("numberLabel");
const submit1 = document.getElementById("submit1");
const alert1 = document.getElementById("alert1");
const answer = document.getElementById("answer");
let min,max,guessNumber,ranNumber,attempt = 0;


submit1.onclick = function enterRange()
{
    resetPlay();
    min = document.getElementById("minNumber").value;
    max = document.getElementById("maxNumber").value;
    min = Number(min);
    max = Number(max);
    if(isNaN(min) || isNaN(max))
    {
        alert1.textContent = "Please Enter a valid Integer for maximum and minimum numbers!";
        resetRange();
    }
    else if(min>max)
    {
        alert1.textContent = "The minimum value should be less than maximum value."
        resetRange();
    }
    else
    {
        numberLabel.textContent = `Please Enter a number between ${min} and ${max}`;
        alert1.textContent = "";
        ranNumber = Math.floor(Math.random()*(max-min+1)) + min ;
    }
}

submit.onclick = function play()
{
    if(ranNumber==undefined)
    {
        alert.textContent = "Please enter the value range first."
        resetGuess();
        return;
    }
    if(document.getElementById("guessNumber").value === "")
    {
        alert.textContent = "Please enter a value!"
        return;
    }
    guessNumber = Number(document.getElementById("guessNumber").value);
    if(isNaN(guessNumber))
    {
        alert.textContent = "Please Enter a Valid Number."
        resetGuess();
    }
    else if(guessNumber<min || guessNumber>max)
    {
        alert.textContent = `Please Enter a number between ${min} and ${max}!`;
        resetGuess();
    }
    else 
    {
        attempt++;
        counter.textContent = attempt;
            if(guessNumber<ranNumber)
                {
                    alert.textContent = `Too Low! Try again!`;
                    resetGuess();
                }
                else if(guessNumber>ranNumber)
                {
                    alert.textContent = `Too High! Try again!`;
                    resetGuess();
                }
                else
                {
                    alert.textContent = "";
                    answer.textContent = `Congratulations! The answer is ${ranNumber}`;
                    submit.disabled = true;
                }
                if(attempt >= 10 && guessNumber != ranNumber)
                    {
                        answer.textContent = `You have exceeded the no. of attempts! The correct answer is ${ranNumber}.`;
                        submit.disabled = true;
                    }
    }
}

reset.onclick = function reset()
{
    submit.disabled = false;
    resetRange();
    resetPlay();
    answer.textContent = "";
}

function resetRange()
{
    document.getElementById("minNumber").value = "";
    document.getElementById("maxNumber").value = "";
}

function resetPlay()
{
    alert.textContent = "";
    document.getElementById("guessNumber").value = "";
}
function resetGuess()
{
    document.getElementById("guessNumber").value = "";
}
