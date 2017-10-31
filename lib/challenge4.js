### Challenge 4 - Guessing Game

Create a program that asks the user to guess a number between 1 and 100.
Once the user guesses a number, the program should say, higher, lower,
or tell the user that he got the number correct.  The user should continue to
make guesses until he guesses correctly. Also, once the user guesses correctly,
the program should print the number of guesses needed to arrive at the correct answer.
Below is sample output:

```
Guess a number between 1 and 100
50
The number is lower than 50.  Guess again
25
The number is lower than 25.  Guess again
13
The number is higher than 13.  Guess again
20
The number is lower than 20.  Guess again
17
The number is higher than 17.  Guess again
18
The number is higher than 18.  Guess again
19
You got it in 7 tries
```

/////////////// Solution! ///////////////


var arr = [];

for (var i = 1; i <= 100; i++) {
   arr.push(i);
}

function findNum(arr, num){
  var min = 0
  var max = arr.length - 1;
  var guess;
  var temp;
  var counter = 0;
  while (min<=max){
    guess = Math.floor((min+max)/2);
    temp = arr[guess];
    if (temp < num){
      min = guess + 1;
      console.log("The number is higher than " + temp + " Guess again.")
      counter++
    } else if(temp > num){
      max = guess - 1;
      console.log("The number is lower than " + temp + " Guess again.")
      counter++
    }
    else {
      console.log("You got it in " + counter + " tries")
      return temp;
    }
  }
  return -1;
}


findNum(arr, 22)
