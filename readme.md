1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans : #.getElementById("id")
1.find one element with ID name. 
2.always returns a single element. 
3.fastest way to find with a unique ID. 

#.getElementsByClassName("class")
1.find all elements with the given class name. 
2.returns a live HTML collection (updates automatically if the DOM changes)
3.excess elements with index like an array.

#.querySelector("css-selector")
find the first element matching scss selector (id, class, take, attributes etc)

#.querySelectorAll("css-selector")
1.find all elements matching a CSS selector.
2.returns and node list which doesn't update automatically if DOM changes. 

2. How do you **create and insert a new element into the DOM**?
Ans:To create element we use document.createElement() and to insert we use document.element.appendChild()

3. What is **Event Bubbling** and how does it work?
Ans: Event Bubbling is a way to travel/propagate in the DOM.when we click or trigger an event on an element the event doesn't stop there. It bubbles up/goes up through its parent elements up to the document. 
 example 
HTML code...........
```<div>
  <button id="child">Click </button>
</div>```


<!-- js -->
document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
});

document.body.addEventListener("click", function() {
  console.log("Body clicked");
});

When the button is clicked,
The event runs on child button first.
Then it bubbles up to its parent <div>.
Then to <body>.
Then up to <html> and finally to document and window.

Console output will be:
Child clicked
Parent clicked
Body clicked


4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: Event delegation is a technique in JavaScript where instead of adding an event listener to multiple child elements, you add a single listener to their parent.
That parent can then detect which child triggered the event using event bubbling.
<!-- html -->
<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
<!-- js -->
document.getElementById("menu").addEventListener("click", function(event) {
  if (event.target.tagName === "li") {
    console.log("You clicked:", event.target.innertext);
  }
});


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: #...preventDefault() => stops the default browser behavior (like navigation, form submission, right-click menu).
Example
<!-- html -->
<button >Copy</button>

document.querySelector("button").addEventListener("click", function(event) {
  event.preventDefault();   
  console.log("Link clicked but not submitting and reloading");
});



#...stopPropagation() => stops the event from bubbling/capturing to other elements.

Example,
<!-- js -->
document.getElementById("child").addEventListener("click", function(event) {
  event.stopPropagation();  
  console.log("Child clicked only");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
});
