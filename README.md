# Frontend developer assessment
This project was done as an assessment for the Frontend developer position in the Cursor Engineering Team. This project was built using React, TailwindCSS, Vite and D3.js.
Here is a link to the demo.

## Live Demo
There is an online demo [here](https://cursor-assessment.vercel.app)

You can see the docs [here](https://assessment-docs.vercel.app/)

## Local developemnt

Simply execute the command `npm run dev` in the root.

## Stacked Bar chart

This stacked bar had some very specific design requirements so I decided to not use any of the chart modules and used HTML, CSS and ingenuity to build the chart myself. 

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

<img src="./screenshots/Screenshot 2024-11-11 at 5.02.54 PM.png">

## Doughnut chart
Not many modules allow for custom adjustments to charts like D3.js. I also enjoy the fact that it uses svg elements for the chats which gives a greater amount of flexibility. I used D3.js to build the chart and made my adjustments to the svg element using CSS.

<img src="./screenshots/Screenshot 2024-11-11 at 5.03.23 PM.png">