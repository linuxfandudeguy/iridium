// @ts-ignore
// Here you can modify this file in order to make your website.
// IMPORTANT: Please do not remove the `ts-ignore` comment.

import { renderComponent } from './iridium-js/src/framework';

// Define the App variable to hold a function that sets up the HTML structure
const App = () => {
  // Create and append the main app container
  const appContainer = document.createElement('div');
  appContainer.style.padding = '20px';
  appContainer.style.fontFamily = 'Arial, sans-serif';
  
  // Create and append the heading
  const heading = document.createElement('h1');
  heading.textContent = 'To-Do List';
  appContainer.appendChild(heading);

  // Create and append input and button elements
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.id = 'todoInput';
  inputElement.placeholder = 'Add a new task';
  inputElement.style.padding = '10px';
  inputElement.style.width = '300px';
  appContainer.appendChild(inputElement);

  const addButton = document.createElement('button');
  addButton.id = 'addTodo';
  addButton.textContent = 'Add';
  addButton.style.padding = '10px';
  addButton.style.marginLeft = '10px';
  appContainer.appendChild(addButton);

  // Create and append the to-do list container
  const todoListElement = document.createElement('ul');
  todoListElement.id = 'todoList';
  todoListElement.style.marginTop = '20px';
  todoListElement.style.listStyleType = 'none';
  todoListElement.style.padding = '0';
  appContainer.appendChild(todoListElement);

  // Append the app container to the root element
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.appendChild(appContainer);
  } else {
    console.error("Root element not found");
    return;
  }

  // Define the logic to handle the to-do list
  let todos: string[] = [];

  const updateTodoList = () => {
    const todoListElement = document.getElementById('todoList');
    if (todoListElement) {
      todoListElement.innerHTML = ''; // Clear existing items

      todos.forEach((todo, index) => {
        // Create list item
        const li = document.createElement('li');
        li.style.marginBottom = '10px';

        // Create span for the todo text
        const span = document.createElement('span');
        span.textContent = todo;
        li.appendChild(span);

        // Create remove button
        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.style.marginLeft = '10px';
        button.style.color = 'red';
        button.onclick = () => removeTodo(index);

        // Append button to the list item
        li.appendChild(button);

        // Append list item to the list
        todoListElement.appendChild(li);
      });
    }
  };

  const addTodo = () => {
    const inputElement = document.getElementById('todoInput') as HTMLInputElement;
    const inputValue = inputElement.value.trim();
    if (inputValue !== '') {
      todos.push(inputValue);
      inputElement.value = '';
      updateTodoList();
    }
  };

  const removeTodo = (index: number) => {
    todos = todos.filter((_, i) => i !== index);
    updateTodoList();
  };

  // Attach event listener to the add button
  const addButtonElement = document.getElementById('addTodo');
  if (addButtonElement) {
    addButtonElement.addEventListener('click', addTodo);
  }

  // Initial call to render the empty list
  updateTodoList();
};

// Render the App variable into the 'root' container using the renderComponent function
renderComponent('root', App);
