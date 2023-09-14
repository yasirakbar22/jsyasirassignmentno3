// (Chapter 14 /to 16 ) Aeeys

// (Q1)
// const studentNames = [];

// console.log(studentNames);


// (Q2)
// const studentNames = new Array();

// console.log(studentNames);

// (Q3)
// const stringsArray = ["apple", "banana", "cherry", "date"];

// console.log(stringsArray);

// (Q4)
// const numbersArray = [1, 2, 3, 4, 5];

// console.log(numbersArray);

// (Q5)
// const booleanArray = [true, false, true, true, false];

// console.log(booleanArray);

// (Q6)
// const mixedArray = ["apple", 42, true, "banana", 17, false];

// console.log(mixedArray);

// (Q7)
// const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// let qualificationsList = "<ul>";

// for (let i = 0; i < qualifications.length; i++) {
//   qualificationsList += "<li>" + qualifications[i] + "</li>";
// }
// qualificationsList += "</ul>";

// document.write(qualificationsList);

// (Q8)
// const studentNames = ["Alice", "Bob", "Charlie"];
// const scores = [420, 360, 480];

// const percentages = [];
// for (let i = 0; i < studentNames.length; i++) {
//   const percentage = (scores[i] / 500) * 100;
//   percentages.push(percentage);
// }
// for (let i = 0; i < studentNames.length; i++) {
//   console.log(
//     studentNames[i] + " scored " + scores[i] + " out of 500, " + percentages[i] + "%"
//   );
// }

// (Q9)
// const colors = ["red", "green", "blue"];

// console.log("Initial array:", colors);

// // a.
// const colorToAddToBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddToBeginning);

// console.log("After adding to the beginning:", colors);

// // b.
// const colorToAddToEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddToEnd);

// console.log("After adding to the end:", colors);

// // c.
// colors.unshift("orange", "yellow");

// console.log("After adding two more colors to the beginning:", colors);

// // d.
// colors.shift();

// console.log("After deleting the first color:", colors);

// // e.
// colors.pop();

// console.log("After deleting the last color:", colors);

// // f.
// const indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
// const colorToAddAtIndex = prompt("Enter the color to add at the index:");
// colors.splice(indexToAddColor, 0, colorToAddAtIndex);

// console.log("After adding a color at the specified index:", colors);

// // g.
// const indexToDelete = parseInt(prompt("Enter the index to start deletion:"));
// const countToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, countToDelete);

// console.log("After deleting colors at the specified index:", colors);

// (Q10)
// const studentScores = [88, 72, 95, 64, 81];

// studentScores.sort(function (a, b) {
//   return a - b;
// });
// console.log("Sorted student scores (ascending order):", studentScores);

// (Q11)
// const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
// const selectedCities = [];
// selectedCities.push(cities[0]);
// selectedCities.push(cities[1]);
// selectedCities.push(cities[2]);

// console.log("Selected cities:", selectedCities);

// (Q12)
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");

// console.log(singleString);

// (Q13)
// const fifoArray = [];
// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");

// console.log(fifoArray.shift()); 
// console.log(fifoArray.shift()); 
// console.log(fifoArray.shift()); 

// (Q14)
// const lifoArray = [];
// lifoArray.push("Value 1");
// lifoArray.push("Value 2");
// lifoArray.push("Value 3");

// console.log(lifoArray.pop()); 
// console.log(lifoArray.pop()); 
// console.log(lifoArray.pop()); 

// (Q15)
// const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// let dropdownHTML = '<select>';
// for (let i = 0; i < manufacturers.length; i++) {
//   dropdownHTML += `<option value="${manufacturers[i]}">${manufacturers[i]}</option>`;
// }
// dropdownHTML += '</select>';

// document.write(dropdownHTML);
























































