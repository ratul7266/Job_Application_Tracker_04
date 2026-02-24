1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

                --------------ANSWER-----------
Using getElementById("id") we get only one unique element identified by its id. It always returns a single element. And with

getElementsByClassName('class') we get multiple elements that have the same class. The elements obtained through this method are updated as the DOM changes.

querySelector('selector') is more flexible, because it uses CSS selectors and returns only one unique element. In it, we can select any element by id, class, tag, or attribute.

Using querySelectorAll('selector') returns a NodeList, which holds multiple elements, but it does not update itself with DOM changes.


2. How do you create and insert a new element into the DOM?
                --------------ANSWER-----------
//create element
const div = document.createElement('div');
div.textContent = "hello world!";
div.className = "my-class";

// DOM-add
const container = document.getElementById('container');
container.appendChild(div); //end-add


3. What is Event Bubbling? And how does it work?
                --------------ANSWER-----------
The event starts from the target element and moves step by step to the parent.

html-5<div id="parent">
  <button id="child">Click me</button>
</div>

js-document.getElementById('parent').addEventListener('click', () => console.log('Parent clicked'));
document.getElementById('child').addEventListener('click', () => console.log('Child clicked'));
Clicking the button will show the log:
Child clicked
Parent clicked

4. What is Event Delegation in JavaScript? Why is it useful?
                --------------ANSWER-----------
Instead of giving each child a separate listener, place a single listener on the parent.
Work by detecting the child.
Good when-There are many child elements
New elements will be added dynamically

document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log('Button clicked:', e.target.textContent);
  }
});
5. What is the difference between preventDefault() and stopPropagation() methods?
                --------------ANSWER-----------
Difference between preventDefault() and stopPropagation() -

preventDefault() is used to stop the browser's default behavior. For example, clicking on a link can prevent navigation from stopping or form submission.

stopPropagation() is used to stop bubbling or capturing events. That is, clicking on a child element will not trigger the parent's listener. Sometimes we need to use both methods together, so that both the default behavior and bubbling can be stopped at the same time.