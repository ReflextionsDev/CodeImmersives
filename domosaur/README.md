# DOMosaur

## Introduction

We'll be writing code that will turn [this page with no JavaScript](https://domosaur.surge.sh) into [this page with lots of interactivity](https://domosaur-solution.surge.sh).

## Guidelines

* You will be working with JavaScript ONLY for this project. You can refer to the CSS and HTML files, but you will do all of your work in `main.js`.

## And Now, Some Warmup Challenges

No need for event listeners for this one. Just flex those querySelectors muscles!

1. Change the span with the class `mess-with-me` to have a font size of 40px.

2. Change the paragraph with the class `mess-with-me` to have a background color of green.

3. Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!

4. Change the first dinosaur image so that the image's dimensions are 324 pixels wide.

## Event Listener Challenges

1. Add an event listener to the span with the class `mess-with-me` so that when it is clicked, the font color changes to orange.

2. Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.

3. Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.

4. Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.

5. Add an event listener to the dinosaur with the id `biggify` that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be `click`!

## Stretch Goals

1. Make it so that when you click the "Switch Background Color" button, you switch it back and forth from white to whatever color you chose. This doesn't require another event listener, but, rather, a rewrite of the function you made into your event listener. **Hint:** when you haven't explicitly set the background color **through JavaScript** yet, its value will always be an empty string, no matter what you've set it to in other sources (like the browser's default white background, or through your own CSS file).

2. Add a new event listener so that when the `biggify` dinosaur is no longer hovered, they change back to their original size.  **Hint:** same as the above one, but for its width! **Hint 2:** You'll have to use a different kind of event than you did before, but... it's a related event with a similar name.
