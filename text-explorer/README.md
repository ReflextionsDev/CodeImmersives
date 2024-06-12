# `text-explorer` 🧗

In this assignment, we'll create a text-based game that allows the user to move on a 2D plane and interact with their surroundings.

## Step 1: Movement 💨

The first step is to create a way for the user to move around a coordinate system that has an x and y axis.

<img src="https://useruploads.socratic.org/pggnBV61SlmzODptJp3V_49288_graph_0505b_lg.gif" width="300px" />

The result should look something like this:

```
Your coordinates are (0, 0). Would you like to go "up", "right", "down", or "left"?
> left

Your coordinates are (-1, 0). Would you like to go "up", "right", "down", or "left"?
> up

Your coordinates are (-1, 1). Would you like to go "up", "right", "down", or "left"?
> right

Your coordinates are (0, 1). Would you like to go "up", "right", "down", or "left"?
> down

Your coordinates are (0, 0). Would you like to go "up", "right", "down", or "left"?
```

To do this, you'll want to create variables to contain the user's `x` and `y` positions. 

Below these definitions, you'll need a `while` loop that loops endlessly. Each iteration, prompt the user for an action. If that action is `"left"`, subtract one from the user's `x` position. Update the user's position appropriately for "right", "up", and "down" as well.

After getting this working, make a commit in git!

## Step 2: Creating a map 🏰

Now that we have a working coordinate system, it's time to add some descriptions to each location. Either in comments in your code or just with a pencil and paper, create a 4x4 grid of 16 locations starting from (-2, -2) to (2, 2). These could be rooms in house, different biomes, or anything you come up with!

Once you have that created, it's time to code. Add code so that when a user navigates to specific locations, you log out a description of that location. To do this, you'll need a series of if statements nested in your while loop. Each iteration of the loop, you'll first check the user's coordinates, then log out the corresponding location.

This might look something like the following:

```
You find yourself in a forest. Trees tower around you.
Your coordinates are (0, 0). 
Would you like to go "up", "right", "down", or "left"?
> left

You emerge into a meadow with tall grass.
Your coordinates are (-1, 0). 
Would you like to go "up", "right", "down", or "left"?
>
```

Once again, make a commit in git after completing this step.

## Step 3: Purpose 🚀

Finally, make your game endable. Update your while condition so that when the user arrives at a particular location, the game is ended. Add messaging before and after the
game to add some clarity as to what's happening for the user. An example can be seen below:

```
Welcome to the world of Terminal. Your goal is to find the Golden Keyboard.

You find yourself in a forest. Trees tower around you.
Your coordinates are (0, 0). 
Would you like to go "up", "right", "down", or "left"?
> left

You emerge into a meadow with tall grass.
Your coordinates are (-1, 0). 
In the meadow lies a Golden Keyboard. Game over, you win!
```

And finally, make another commit in git!

## Stretch goals 🔭

If you finish the previous requirements, consider trying to implement one or more of the following stretch goals.

### Movement Validation

Add validation so that the user is unable to navigate themself past the boundaries off the map.

### Improved Ending Condition

Complciate your game-over condition. 

Maybe make it so that the user can either win or lose depending on where they go. 

Alternatively, or in addition, make the ending condition more complex by requiring that the user acquires an item from one location before ending the game at a different location. You could keep track of wheter or not the user has this item with a boolean variable.

### A Bigger Map

Make the map size bigger than 4x4!

### ASCII Art

In addition to showing the user a description of the location, add a text-based image! This is sometimes called ASCII art. Check out https://www.asciiart.eu/ some copy-pastable pieces of ASCII art.

```
          /\
         /**\
        /****\   /\
       /      \ /**\
      /  /\    /    \        /\    /\  /\      /\            /\/\/\  /\
     /  /  \  /      \      /  \/\/  \/  \  /\/  \/\  /\  /\/ / /  \/  \
    /  /    \/ /\     \    /    \ \  /    \/ /   /  \/  \/  \  /    \   \
   /  /      \/  \/\   \  /      \    /   /    \
__/__/_______/___/__\___\__________________________________________________
```
