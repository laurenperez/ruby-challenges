### Challenge 1 - Calculator

Create a simple calculator that first asks the user what method
they would like to use (addition, subtraction, multiplication, division)
and then asks the user for two numbers, returning the result of the method
with the two numbers. Here is a sample prompt:

```
What calculation would you like to do? (add, sub, mult, div)
add
What is number 1?
3
What is number 2?
6
Your result is 9
```
///////////// DONE in JAVASCRIPT /////////////

function calculator(type, num1, num2){
  if (type === "addition"){
    return "Your result is " + (num1 + num2);
  } else if (type === "subtraction"){
    return "Your result is " + (num1 - num2);
  } else if (type === "multiplication"){
    return "Your result is " + (num1 * num2);
  } else if (type === "division"){
    return "Your result is " + (num1 / num2);
  } else {
    return "That is not a valid function!"
  }
}


calculator("division", 5, 3) //1.666666666666
