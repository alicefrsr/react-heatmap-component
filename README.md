# React heatmap component

## What's this?

As a frontend challenge I had a go at making the github contribution graph with
React so I could possibly do something with it in an app, without having to use
a third-party library. At the moment different shades (opacities) of green are
randomly generated on each render. Work in porgress.

Things to fix:

- looking at the last cell, the day of the week doesn't fall where it should
  visually, revisit the layout

Features to implement:

- finish the UI: build the legend, 'x contributions in 2024', 'how we count
  contributions' etc
- horizontal scrollbar for responsive
- replace the range of opacities (from 0.01 to 0.9) to the exact 5 shades of
  green on github (from L1 to L4) depending of the opacity value (ex: 0-0.25 =>
  L1, 0.25-0.5 => L2 etc ). L0 being the 'no color' state
- create popups of relevant dates on hover
- configure to be able to associate an event with each cell, not necessarily a
  commit. At the moment a cell is just a date in the last year with an
  associated random shade of green.

- play around with a version where we 'paint' the cells on click event to draw
  or write what we fancy. Just have some fun with it.

## Colors

Just for reference. Default greens from github contribution graph:

--cell-color-border: #1b1f230f;

--cell-color-L0-bg: #ebedf0;

--cell-color-L1-bg: #9be9a8;

--cell-color-L2-bg: #40c463;

--cell-color-L3-bg: #30a14e;

--cell-color-L4-bg: #216e39; }

## Live demo

Here: [heatmap-a-la-github](https://heatmap-a-la-github.netlify.app/)
