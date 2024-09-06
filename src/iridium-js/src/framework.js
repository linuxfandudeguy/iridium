import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18

export function renderComponent(id, content) {
  const container = document.getElementById(id);

  if (container) {
    // Create a root and render the content
    const root = ReactDOM.createRoot(container);
    root.render(content);
  } else {
    console.error(`Target container with id '${id}' not found.`);
  }
}
