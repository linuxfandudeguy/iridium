// @ts-ignore
// Here you can modify this file in order to make your website.
// IMPORTANT: Please do not remove the `ts-ignore` comment.

import { renderComponent } from './iridium-js/src/framework';

const App = () => {
  return <div>Hello, Iridium without importing React!</div>;
};

renderComponent('root', <App />);
