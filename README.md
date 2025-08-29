question-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer: getElementById- select a unique item from dom and then manipulate it.
        getElementsByClassName- select and get several classes from dom. (It provides Htlm collection)
        querySelector- from several classes, it provides the first one.
        querySelectorAll- select the targeted class from several classes. (It provides nodelist)

question-2: How do you create and insert a new element into the DOM?
answer: to create an element - document.createElement =('element name');
        and then append to the parent where we want to add the element--
        parent.appendChild(newElement).

question-3: What is Event Bubbling and how does it work?
answer: when a button is clicked it can not find the target element. then it start to traverse the dom tree and this process is called bubbling.

question-4: What is Event Delegation in JavaScript? Why is it useful?
answer: add a event listener on parent node and then handle the child by using dom traversal. 

question-5: What is the difference between preventDefault() and stopPropagation() methods?
answer: preventDefault() for stopping the auto reload of a form.
        stopPropagation() for stopping the bubbling.


