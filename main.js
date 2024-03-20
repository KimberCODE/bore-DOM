

// 1. Alter the text color of the paragraph to a shade of aqua.
const myPara = document.getElementById("myPara");
// myPara.classList.add("aqua-text");
myPara.style.color = "aqua";


// 2. Adjust the font size of the heading to 42 pixels.
const  myHeading = document.querySelector("h1");
myHeading.style.fontSize = "42px";

// 3. Replace the text in the paragraph with the new Lorem Ipsum content.
myPara.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices.';

// 4. Reduce the opacity of the 13th item to 30% transparency.
const list13 = document.getElementById("item-13");
list13.style.opacity = "30%";

// 5. Modify the text of the 3rd item to read "Greetings!"
document.getElementById("item-3").innerHTML = "Greetings!";

// 6. Update the image below the list to display the new image.

// 7. Resize the new image to a height of 250 pixels.
const myImg = document.getElementsByName('img.src');
myImg.style.height = "25px";  

// 8. Integrate an additional image using innerHTML below the existing image.
const newPic = document.createElement('img');
newPic.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_finger&psig=AOvVaw0CPOoZRKg1JcS1fIFOF29Y&ust=1710987140933000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKinofjhgYUDFQAAAAAdAAAAABAY";
document.querySelector('.imgDiv').appendChild(newPic);


// 9. Adjust the height of the new image to 280 pixels programmatically.

// 10. Append a 16th <li> element to the list using innerHTML.
let newListItem = document.createElement('li');
newListItem.textContent = "Never gonna give you up."
const myUL = document.querySelector("ul");
myUL.appendChild(newListItem);

// 11. Assign the same class as the other list items to the new <li> element using JavaScript.
const item16 = document.getElementById("item-16");
item16.className = "item";

// 12. Populate the new <li> with the text "Never gonna give you up."
//SEE ABOVE
