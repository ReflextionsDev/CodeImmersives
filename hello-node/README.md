# Hello Node!

Tradition in programming is that the first program you write with a new language is a program that simply logs out the message "Hello world."

We'll follow tradition in this assignment and write the Hello World program in Javascript. We'll then run this program using Node.js, a program that we'll run using the command line.

## Step 1: Install Node.js

First things first, we need to install Node. The best way to do this is to first install NVM (Node Version Manager). This is a command line utility that lets you easily manage and change your Node version, which is something you'll likely need to do at some point due to compatability restraints with external libraries.

Go ahead and install NVM. You can view the installation instructions here: https://github.com/nvm-sh/nvm

Once you're done installing, you can verify that the installation worked by restarting your command line, then entering the command `nvm --version`. If a version code is printed out, NVM has been installed successfully.

Finally, now that you have NVM, install the latest stable version of Node.js. You can do this by running `nvm install stable`.

## Step 2: Writing Hello World

Now, fork this repository and clone it to your computer. Open up the folder in VSCode and create a javascript file called `main.js`. Write a line of code that logs out "hello world".

Finally, lets run the program. In the command line, navigate to the directory containing `main.js`. Run it with the command `node main.js`. If you see "hello world" logged out in the terminal, you've succeeded! 

## Step 3: Mega Hello World

Now, see if you can log out the following text (you'll need multiple `console.log` statements).
```
HH   HH        lll lll                                  lll      dd !!! 
HH   HH   eee  lll lll  oooo   ww      ww  oooo  rr rr  lll      dd !!! 
HHHHHHH ee   e lll lll oo  oo  ww      ww oo  oo rrr  r lll  dddddd !!! 
HH   HH eeeee  lll lll oo  oo   ww ww ww  oo  oo rr     lll dd   dd     
HH   HH  eeeee lll lll  oooo     ww  ww    oooo  rr     lll  dddddd !!!                                                                         
```

## Stretch Goals

Print out additional big text of your choice, feel free to use https://www.messletters.com/en/big-text/ for help. 
