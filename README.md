## ToDoApp

### Introduction

This is my first project using React. The idea was to built a to do list app where a user could add/remove items from a list.

### Steps to achieve this so far

#### Using the Context API

I recently finished learning about the Context API from the **course I'm taking on Udemy (add link here)** and wanted to practice using this. 

Context API: From my current understanding, it is used to avoid the dreaded passing of props down multiple layers of an application. I understand that this must be great tool to utilise.

However, my app is very simple so I could have done without the Context API in this instance. I am happy to have implemented it here as it forced me to read a lot of ReactJS documentation.

#### Thought process as I built the basics of the app

##### Component 1: MyContext (Context API)

I started with getting the Context API setup in a new class based component: **MyProvider.** In here I do the following things:

- Set up context using the **createContext()** method
- Set up state in this class with an **items** array, holding each to do list item in an object.

Once I reach the **render()** method, the following things are done:

- I instantiate the context object (MyContext) with the **Provider** component. This takes a **value** attribute, containing all of the props that you want to pass to **descending** components (called consumers).

##### Component 2: ToDoList (Generation of the to do list)

In the ToDoList component, I make use of the **Consumer** component instantiated on the MyContext object. Inside this component, you must call a function which provides you with access to all of the context values in an argument - I call this context.

**InputElement() method - component:**

Inside this component, I have two inputs: one is not linked to the context, whereas the other one is. This last input makes use of a method held in the context, allowing for the **currentItem** to be stored.

To store the current item when the user submits an item, I make use of **refs**. This allows for me to save a reference to the input button where the submission was fired from, so I can pull out the value of this and save it in my context.

**render() method:**

This is where the InputElement is instantiated followed by another **Consumer**. Here I access the items inside my context which make up the to do list, and use the **map** method to output these in a list.

##### Component 3: App (Main Component)

This merges the context component and ToDoList component together to create the desired output.

### Future areas to work on

This app is no where near 'done'. It was mocked together to quickly practice a few React basics (state, props, context API, use of refs) so I don't forget them. This README will serve as a way for me to see how I used these concepts later down the line too. However below I have a list of things to add:

- Ability to remove items
- Styling: virtually no styles applied!
- Have a user account to store To Do List items
- Linked to above: add a backend to handle to do items 
- Split out components into separare files for when I add on to the app: maintainability