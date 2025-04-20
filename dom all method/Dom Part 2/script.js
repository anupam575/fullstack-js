// Get elements
const input = document.getElementById('todo-input'); // getElementById
const addBtn = document.querySelector('#add-btn'); // querySelector
const todoList = document.getElementsByTagName('ul')[0]; // getElementsByTagName

// Add event
addBtn.addEventListener('click', function () {
  if (input.value.trim() === '') return;

  // Create element
  const li = document.createElement('li'); // createElement
  li.textContent = input.value; // textContent

  // Set attribute & style
  li.setAttribute('data-id', Date.now());
  li.style.cursor = 'pointer';

  // Create remove button
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'X';
  removeBtn.classList.add('remove-btn'); // classList.add
  removeBtn.setAttribute('title', 'Remove this task');

  // Append child
  li.appendChild(removeBtn); // appendChild
  todoList.appendChild(li); // appendChild

  // Clear input
  input.value = '';

  // Event to remove task
  removeBtn.addEventListener('click', function () {
    todoList.removeChild(li); // removeChild
  });

  // Toggle done class on click
  li.addEventListener('click', function (e) {
    if (e.target !== removeBtn) {
      li.classList.toggle('done'); // classList.toggle
    }
  });
});

// Node traversal example
setTimeout(() => {
  const firstTask = todoList.firstElementChild; // firstElementChild
  if (firstTask) {
    console.log('First Task:', firstTask.textContent);
  }
}, 2000);
/*
getElementById:
Use: Kisi element ko uske id ke zariye select karne ke liye.

Project Example:

javascript
Copy
Edit
const input = document.getElementById('todo-input');
Yahan, input variable mein aapke HTML mein id="todo-input" wale element ko select kiya gaya hai, jo ki task input field hai.

2. querySelector:
Use: CSS selector ke zariye pehla matching element select karta hai.

Project Example:

javascript
Copy
Edit
const addBtn = document.querySelector('#add-btn');
Yahan, addBtn variable mein id="add-btn" wale element ko select kiya gaya hai, jo ki "Add" button hai.

3. getElementsByTagName:
Use: Tag name ke basis par elements ko select karta hai (ye live HTMLCollection return karta hai).

Project Example:

javascript
Copy
Edit
const todoList = document.getElementsByTagName('ul')[0];
Yahan, todoList mein pehla <ul> element select kiya gaya hai, jo ki task list container hai. getElementsByTagName se ye live collection milti hai, isliye [0] ke through pehla <ul> liya gaya hai.

4. createElement:
Use: Ek naya element create karne ke liye.

Project Example:

javascript
Copy
Edit
const li = document.createElement('li');
Yahan, ek naya <li> (list item) element banaya gaya hai jisme task ka text rakha jaayega.

5. textContent:
Use: Element ka text set ya get karne ke liye.

Project Example:

javascript
Copy
Edit
li.textContent = input.value;
Yahan, input field mein jo bhi value type ki gayi hai, use task ke <li> element mein text ke roop mein set kiya gaya hai.

6. setAttribute:
Use: Kisi element ka attribute set karne ke liye.

Project Example:

javascript
Copy
Edit
li.setAttribute('data-id', Date.now());
Yahan, har task item (<li>) ko ek data-id attribute diya gaya hai, jisme current timestamp Date.now() ke through store hota hai, jisse har task ka unique identifier milta hai.

7. classList.add:
Use: Kisi element ko ek class add karne ke liye.

Project Example:

javascript
Copy
Edit
removeBtn.classList.add('remove-btn');
Yahan, task ke remove button ko remove-btn class add ki gayi hai, jisse button ko style diya ja sake.

8. appendChild:
Use: Ek child element ko parent element ke andar append karne ke liye.

Project Example:

javascript
Copy
Edit
li.appendChild(removeBtn);
todoList.appendChild(li);
Pehle, remove button ko task (<li>) ke andar append kiya gaya hai.

Phir, pura task (<li>) list (<ul>) ke andar append kiya gaya hai, taaki wo list mein dikh sake.

9. removeChild:
Use: Ek child element ko parent element se remove karne ke liye.

Project Example:

javascript
Copy
Edit
todoList.removeChild(li);
Yahan, jab task ko remove karna hota hai (remove button click hone par), to task (<li>) ko list (<ul>) se remove kiya jata hai.

10. classList.toggle:
Use: Kisi class ko toggle (add ya remove) karne ke liye.

Project Example:

javascript
Copy
Edit
li.classList.toggle('done');
Yahan, task (<li>) ko click karne par, usme done class toggle hoti hai. Agar class pehle se hai, to wo remove ho jaati hai, aur agar nahi hai, to wo add ho jaati hai. Ye class typically CSS ke liye hoti hai, jisme task ko complete dikhane ke liye (e.g., strike-through).

11. firstElementChild:
Use: Parent element ka pehla child element (text nodes ke bina) return karta hai.

Project Example:

javascript
Copy
Edit
const firstTask = todoList.firstElementChild;
Yahan, list (<ul>) ka pehla child element, jo ki pehla task (<li>) hai, usse select kiya gaya hai. Agar pehla task hai, to uska text content console me print karenge.

Summary in the Context of Your Project:
Elements Select Karna: Aapne getElementById, querySelector, aur getElementsByTagName ka use kiya hai tasks ko add karne, button ko select karne, aur list ko target karne ke liye.

Element Create Karna: createElement ka use naya task aur remove button create karne ke liye kiya gaya hai.

Text Aur Attributes Set Karna: textContent se task ka text set kiya gaya, aur setAttribute se har task ko unique data-id diya gaya hai.

Class Add/Remove Karna: classList.add aur classList.toggle ka use button ko style dene aur tasks ko complete mark karne ke liye kiya gaya hai.

Append aur Remove Karna: appendChild se tasks ko list mein add kiya gaya aur removeChild se tasks ko list se remove kiya gaya.*/