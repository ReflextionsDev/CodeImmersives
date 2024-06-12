# What if...?

Fork and clone this assignment to get started. You'll need to create several javascript files (one for each file listed below) according to the instructions below.

## `what-can-you-do.js`

Write a program that prompts the user for their age using the `prompt-sync` Node dependency.

Then, using if statements, else if, and else statements, write code that displays a different message depending on the age given.

| age |	message |
| --- | --- |
| less than 16 |	"You can't drive." |
| 16 to 17	| "You can drive but not vote." |
| 18 to 24	| "You can vote but not rent a car." |
| 25 or older |	"You can do pretty much anything." |

## `weekday.js`

Write a program that prompts the user for a number, then displays the appropriate day of the week according to the table below.

| number | day |
| --- | --- |
| 1 | Monday |
| 2 | Tuesday |
| 3 | Wednesday |
| 4 | Thursday |
| 5 | Friday |
| 6 | Saturday |
| 7 | Sunday |
| anything else | "error" |

## `group-sizes.js`

Lets say we have a class of students that we want to separate into groups of three. Inevitably, if there are leftover students, we may need to have some groups of two. A group of one is not something that we want.

**Example 1:** if we have a class size of 15, we would create 5 groups of 3 and 0 groups of 2 
**Example 2:** if we have a class size of 16, we would create 4 groups of 3 and 2 groups of 2
**Example 3:** if we have a class size of 17, we would create 5 groups of 3 and 1 group of 2

Write a program that prompts the user for a class size, then logs out the number of groups of 3 the number of groups of 2 that the class would be divided into.

## `space-boxing.js`

Julio Cesar Chavez Mark VII is an interplanetary space boxer, who currently holds the championship belts for various weight categories on many different planets within our solar system. However, it is often difficult for him to recall what his "target weight" needs to be on earth in order to make the weight class on other planets. Write a program to help him keep track of this.

It should ask him what his earth weight is, and to enter a number for the planet he wants to fight on. It should then compute his weight on the destination planet based on the table below:

| # |	Planet	| Relative gravity |
| --- | --- | --- |
| 1 |	Venus |	0.78 |
| 2 |	Mars  | 0.39 |
| 3 |	Jupiter |	2.65 |
| 4 |	Saturn | 1.17 |
| 5 |	Uranus | 1.05 |
| 6 |	Neptune |	1.23 |

So, for example, if Julio weighs 128 lbs. on earth, then he would weigh just under 50 lbs. on Mars, since Mars' gravity is 0.39 times earth's gravity. (128 * 0.39 is 49.92).

## `fizzbuzz.js`

This is a classic interview question. Write a program that asks the user for a number. If the number is divisible by 3, the program logs "fizz". If the number is divisible by 5, log "buzz". If the number is divisible by 3 and 5, log "fizzbuzz".

##
