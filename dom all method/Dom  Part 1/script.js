const input = document.getElementById("todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.getElementsByTagName("ul")[0];
const infoPara = document.querySelector("#info");
const heading = document.getElementsByClassName("heading")[0];

// Set attribute and style
heading.setAttribute("title", "DOM Power!");
heading.style.color = "green";

// Event Listener
addBtn.addEventListener("click", addTask);

function addTask() {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;
  li.setAttribute("data-task", input.value.toLowerCase());

  // Clone node example
  const clonedLi = li.cloneNode(true);
  clonedLi.style.display = "none"; // Just to demo cloneNode
  todoList.appendChild(clonedLi);

  // Button to remove
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "X";
  removeBtn.classList.add("remove-btn");
  removeBtn.setAttribute("title", "Remove this task");

  li.appendChild(removeBtn);
  todoList.appendChild(li);

  input.value = "";

  // Toggle class
  li.addEventListener("click", function (e) {
    if (e.target !== removeBtn) {
      li.classList.toggle("done");

      // classList.contains
      if (li.classList.contains("done")) {
        infoPara.textContent = "Task marked done!";
      } else {
        infoPara.textContent = "Task unmarked!";
      }
    }
  });

  // Remove with removeChild and parentNode
  removeBtn.addEventListener("click", function (e) {
    const parent = e.target.parentNode;
    parent.parentNode.removeChild(parent);
  });

  // Node Traversal
  logStructure();
}

// QuerySelectorAll
const allHeadings = document.querySelectorAll(".heading");
console.log("All Headings:", allHeadings);

// insertBefore example (put one item at the top)
function insertSampleItem() {
  const sample = document.createElement("li");
  sample.textContent = "🔥 Inserted at top";
  todoList.insertBefore(sample, todoList.firstChild);
}

// replaceChild example
function replaceLastItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "💥 Replaced Item";

  const lastItem = todoList.lastElementChild;
  if (lastItem) {
    todoList.replaceChild(newItem, lastItem);
  }
}

// removeEventListener example
function tempListener() {
  alert("Click me before I go away!");
  addBtn.removeEventListener("click", tempListener);
}
addBtn.addEventListener("click", tempListener); // Will run only once

// Log structure
function logStructure() {
  console.log("Child Nodes:", todoList.childNodes);
  console.log("Children:", todoList.children);
  console.log("First Child:", todoList.firstElementChild?.textContent);
  console.log("Last Child:", todoList.lastElementChild?.textContent);
  console.log("Next Sibling:", todoList.nextElementSibling);
  console.log("Previous Sibling:", todoList.previousElementSibling);
  console.log("Input value:", input.value);
  console.log("Input getAttribute('placeholder'):", input.getAttribute("placeholder"));
}
/*1. getElementById:
Use: Kisi element ko uske id ke zariye select karta hai.

Project Example:

javascript
Copy
Edit
const input = document.getElementById("todo-input");
input variable mein, aapne id="todo-input" wale input field ko select kiya hai jahan user task enter karega.

2. querySelector:
Use: CSS selector ke zariye pehla matching element select karta hai.

Project Example:

javascript
Copy
Edit
const addBtn = document.querySelector("#add-btn");
const infoPara = document.querySelector("#info");
addBtn mein id="add-btn" wale button ko select kiya gaya hai jo task add karne ka kaam karta hai.

infoPara mein id="info" wale paragraph ko select kiya gaya hai jo task ki state ko display karta hai (e.g., "Task marked done!").

3. getElementsByTagName:
Use: Tag name ke basis par elements ko select karta hai (ye live HTMLCollection return karta hai).

Project Example:

javascript
Copy
Edit
const todoList = document.getElementsByTagName("ul")[0];
Yahan, todoList variable mein pehla <ul> element select kiya gaya hai, jahan tasks ko append kiya jayega.

4. setAttribute:
Use: Kisi element ka attribute set karne ke liye.

Project Example:

javascript
Copy
Edit
heading.setAttribute("title", "DOM Power!");
li.setAttribute("data-task", input.value.toLowerCase());
Heading ko title attribute diya gaya hai, jisse mouse hover karte waqt "DOM Power!" dikhai dega.

Har task (li) ko data-task attribute diya gaya hai, jo task ka value store karta hai (lowercase mein).

5. style:
Use: Directly element ke inline styles ko set karne ke liye.

Project Example:

javascript
Copy
Edit
heading.style.color = "green";
Heading ka text color green set kiya gaya hai inline CSS ke zariye.

6. createElement:
Use: Naya element create karne ke liye.

Project Example:

javascript
Copy
Edit
const li = document.createElement("li");
const removeBtn = document.createElement("button");
Ek naya <li> element banaya gaya hai jo task ka text rakhega.

Ek naya button create kiya gaya hai jo task ko remove karega.

7. cloneNode:
Use: Kisi node ka copy (clone) banane ke liye.

Project Example:

javascript
Copy
Edit
const clonedLi = li.cloneNode(true);
clonedLi.style.display = "none";
todoList.appendChild(clonedLi);
Yahan, task (li) ka clone banaya gaya hai (pure node ko clone kiya gaya hai, true means with children), aur uska display none set karke usse list mein add kiya gaya hai (just to show how cloning works).

8. appendChild:
Use: Ek child element ko parent element ke andar append karne ke liye.

Project Example:

javascript
Copy
Edit
todoList.appendChild(li);
todoList.appendChild(clonedLi);
li.appendChild(removeBtn);
Sabse pehle, task (li) ko list mein add kiya gaya hai.

Cloned task ko bhi list mein add kiya gaya hai.

Remove button ko task (li) ke andar append kiya gaya hai.

9. classList.toggle:
Use: Kisi class ko toggle karne ke liye (add ya remove).

Project Example:

javascript
Copy
Edit
li.addEventListener("click", function (e) {
  if (e.target !== removeBtn) {
    li.classList.toggle("done");
  }
});
Jab task (li) par click hota hai, to done class toggle hoti hai, jo task ko complete mark karti hai (e.g., strike-through).

10. classList.contains:
Use: Check karta hai ki element ke paas koi specific class hai ya nahi.

Project Example:

javascript
Copy
Edit
if (li.classList.contains("done")) {
  infoPara.textContent = "Task marked done!";
} else {
  infoPara.textContent = "Task unmarked!";
}
Agar task par done class hai (i.e., task completed hai), to information paragraph mein "Task marked done!" text show hoga, warna "Task unmarked!" text show hoga.

11. removeChild:
Use: Ek child element ko parent element se remove karne ke liye.

Project Example:

javascript
Copy
Edit
removeBtn.addEventListener("click", function (e) {
  const parent = e.target.parentNode;
  parent.parentNode.removeChild(parent);
});
Jab remove button click hota hai, to task ko list se remove kiya jata hai.

12. querySelectorAll:
Use: CSS selector ke zariye sabhi matching elements ko select karta hai.

Project Example:

javascript
Copy
Edit
const allHeadings = document.querySelectorAll(".heading");
console.log("All Headings:", allHeadings);
allHeadings mein sabhi elements jo class="heading" se match karte hain, unko select kiya gaya hai.

13. insertBefore:
Use: Ek item ko parent element ke top par insert karne ke liye.

Project Example:

javascript
Copy
Edit
todoList.insertBefore(sample, todoList.firstChild);
sample item ko list ke sabse upar insert kiya gaya hai.

14. replaceChild:
Use: Ek existing child element ko replace karne ke liye.

Project Example:

javascript
Copy
Edit
todoList.replaceChild(newItem, lastItem);
Yahan, last item ko replace kar diya gaya hai ek naye item se.

15. removeEventListener:
Use: Event listener ko remove karne ke liye.

Project Example:

javascript
Copy
Edit
addBtn.removeEventListener("click", tempListener);
Pehle click hone par, tempListener function ko ek baar execute karne ke baad remove kar diya jata hai.

16. childNodes, children, firstElementChild, etc.:
Use: Parent element ke nodes ko traverse karne ke liye.

Project Example:

javascript
Copy
Edit
console.log("Child Nodes:", todoList.childNodes);
console.log("Children:", todoList.children);
console.log("First Child:", todoList.firstElementChild?.textContent);
console.log("Last Child:", todoList.lastElementChild?.textContent);
console.log("Next Sibling:", todoList.nextElementSibling);
console.log("Previous Sibling:", todoList.previousElementSibling);
console.log("Input value:", input.value);
console.log("Input getAttribute('placeholder'):", input.getAttribute("placeholder"));
Yahan, todoList ke chi*/