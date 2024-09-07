
# iridium

Iridium is a simple and flexible framework for creating websites using TypeScript and JSX syntax. Follow the steps below to set up, customize, and deploy your project.

## Setup

1. **Install Iridium Globally**

   ```bash
   npm install -g iridium
   ```

2. **Initialize Your Project**

   ```bash
   iridium init
   ```

3. **Navigate to Your Project Directory**

   ```bash
   cd package
   ```

4. **Install TypeScript Types for React and ReactDOM**

   ```bash
   npm install @types/react @types/react-dom --force
   ```

5. **Edit `src/index.tsx`**

   Customize the `src/index.tsx` file to change the content of your website. Here's an example of what this file might look like:

   ```tsx
   // @ts-ignore
   // Here you can modify this file in order to make your website.
   // IMPORTANT: Please do not remove the `ts-ignore` comment.

   import { renderComponent } from './iridium-js/src/framework';

   const App = () => {
     return <div>Hello, Iridium without importing React!</div>;
   };

   renderComponent('root', <App />);
   ```

6. **Edit `src/styles.css`**

   Modify the `src/styles.css` file to adjust the look and feel of your website. Here’s an example of some basic CSS:

   ```css
   body {
     font-family: Arial, sans-serif;
   }

   h1 {
     color: #333;
   }

   p {
     color: #666;
   }
   ```

## Running the App

To preview your app, run:

```bash
npm run dev
```

This command will start a development server and allow you to see the changes in real-time.

## Building the App

To build the website for production, run:

```bash
npm run build
```

After building, publish the `dist` directory to any web hosting service of your choice. You have now officially created and deployed your first website with Iridium!

## Credits

- **React**: Provides JSX syntax and rendering capabilities in the application.
- **Webpack**: Bundles the website's files and assets.
- **Terser**: Optimizes the bundled JavaScript files for better performance.

Happy coding with Iridium!
g users get started with Iridium.
