# JQuery and More

<img width="500px" src="https://user-images.githubusercontent.com/11337548/142347860-3ff9d807-8282-49d3-b99e-9f384480d541.png" />

The goal of this assignment is to practice using external libraries. 

We'll start with a library that once was the most popular JS library there was, JQuery. To this day, JQuery is a preferred tool of many to build small web applications. Larger applications scale more gracefully with React which we'll get into more later (mostly in Term 2).

One of the major challenges with this assignment will be reading programming documentation. In order to discover how an external library works, we'll need to read through that libraries documentation or browse StackOverflow for answers. For better or for worse, this is a major part of building software.

## JQuery

For any questions check out the [JQuery documentation](https://api.jquery.com/), [StackOverflow](https://stackoverflow.com/questions/tagged/jquery?tab=Votes), or just Google it.

All changes in this assignment should be done using JQuery. Don't use `document`, `.innerText`, or `.innerHTML` in this assignment.

Begin by creating an `index.html` and a `main.js` file. Add a script tag to your HTML file that imports JQuery from a CDN (Content Delivery Network).

In your `main.js`...

* Start out by creating a `<div>` with JQuery
* Add the `<div>` to the body of your document
* Set the text of the `<div>` to be Hello World
* Add a click listener on the `<div>` that makes it so that the browser displays an `alert()` with the text `Hello world`

## Chart.js

In the next part of this assignment, your goal is to display a chart on the webpage using an external library, Chart.js.

## Challenge 1

Follow the [Chart.js `getting-started` guide](https://www.chartjs.org/docs/latest/getting-started/) to do the following:
* Add a `<div>` and `<canvas>` element to your HTML
* Add a `<script>` tag to your HTML that imports Chart.js from a CDN
* In your JS, define a `config`, `labels`, and `data` object
* Finally, again in your JS write code to render a chart (Note: in the guide this is shown inside of a `<script>` tag. You can disregard this and instead put the code inside the `<script>` tag at the bottom of your JS)

## Challenge 2

Your final challenge is to create one additional chart on the page that is not of the same type as the one youu just added. To do this, go to the [Chart.js documentation](https://www.chartjs.org/docs/latest/) and browse the Chart Types section on the left

## Stretch Goals

Experiment with more external libraries. Here are a few of the most popular ones:
* [Bootstrap](https://getbootstrap.com/) - gives you a nice CSS theme and layout helpers
* [Moment.js](https://momentjs.com/docs/#/use-it/) - used for working with and formatting dates
* [Lodash.js](https://lodash.com/) - every helper function you could possibly dream of
