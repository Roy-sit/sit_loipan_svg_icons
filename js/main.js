console.log("JS file connected");

document.addEventListener('DOMContentLoaded', function () {
  const svgElement = document.getElementById('burple_x5F_1');
  svgElement.addEventListener('click', function (event) {
    const clickedElementId = event.currentTarget.id;
    console.log(`Clicked on element with ID: ${clickedElementId}`);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const svgElement = document.getElementById('burple2');
  svgElement.addEventListener('click', function (event) {
    const clickedElementId = event.currentTarget.id;
    console.log(`Clicked on element with ID: ${clickedElementId}`);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const svgElement = document.getElementById('burple_x5F_3');
  svgElement.addEventListener('click', function (event) {
    const clickedElementId = event.currentTarget.id;
    console.log(`Clicked on element with ID: ${clickedElementId}`);
  });
});