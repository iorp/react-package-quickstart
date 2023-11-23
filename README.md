  # React Component Library Package with Rollup Quickstart

Creating a simple React Component Library Package template with Rollup and Babel.

## Table of Contents

- [About](#about)
- [Usage](#usage) 
  - [Developer Notes](#developer-notes)
  - [Install](#install)
- [Replication Instructions](#replication-instructions)
  - [Step 1: Project Setup and Installation](#step-1-project-setup-and-installation)
  - [Step 2: Create Project Files and Directories](#step-2-create-project-files-and-directories)
  - [Step 3: Configure Babel](#step-3-configure-babel)
  - [Step 4: Create a React Component](#step-4-create-a-react-component)
  - [Step 5: Configure Rollup](#step-5-configure-rollup)
  - [Step 6: Update package.json](#step-6-update-packagejson)
  - [Step 7: Build the Library](#step-7-build-the-library)
  - [Step 8: Link the Library](#step-8-link-the-library) 

 
## About
A handy quickstart

## Developer Notes 
Once changes have been done to the library, after build, dont forget to link the library from the library and from the consumer.


## Usage

### Install

```bash
npm install
```

### Consume the Library 
Now is time to  Link the Library From Another App and consume it
Assuming your component library is in the same parent directory as your consumer app, you can use a relative path to link the library.

#### Linking the Library

1. Navigate to your consumer app's root directory:

   ```bash
   cd path/to/your/consumer-app
   ```

2. Link the demo-lib library using a relative path:

   ```bash
   npm link ../path/to/demo-lib
   ```

   Replace `../path/to/demo-lib` with the actual relative path to your component library.

#### Importing and Using the Component

1. In your consumer app's React components, import and use the `DemoButton` component:

   ```javascript
   // In a React component of your consumer app
   import React from 'react';
   import DemoButton from 'demo-lib';

   function App() {
     return (
       <div>
         <h1>Consumer App</h1>
         <DemoButton text="Click me" />
       </div>
     );
   }

   export default App;
   ```

   Adjust the import path and usage based on your project structure and component names.

2. Run your consumer app:

   ```bash
   npm start
   ```

   Check your app, and you should now see and interact with the `DemoButton` component from your linked library.

#### Explanation

Linking the library using a relative path allows you to test your component library directly from another app without publishing it to npm. This is beneficial during development when you want to make changes to the library and immediately see the effects in your consumer app.

Remember to rebuild your library (`npm run build` in the library project) whenever you make changes to the library's source code. After rebuilding, the changes will be reflected in the consumer app upon the next rebuild or refresh.

By linking the library using a relative path, you create a direct connection between the library and the consumer app, making the development and testing process more seamless.



## Replication Instructions

This template has been created not to need the following instructions; just modify it as you require. Anyway, here explains how it's done.

### Step 1: Project Setup and Installation

```bash
mkdir demo-lib
cd demo-lib
npm init -y
```

Install the necessary dependencies:

```bash
npm install react react-dom @babel/core @babel/preset-env @babel/preset-react rollup rollup-plugin-babel --save-dev
```

### Step 2: Create Project Files and Directories

Create the following project structure and files:

```bash
demo-lib/
  ├── src/
  │     ├── DemoButton.js
  ├── dist/
  ├── .babelrc
  ├── rollup.config.js
  ├── package.json
```

### Step 3: Configure Babel

Create a .babelrc file in the project root with the following content:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### Step 4: Create a React Component

Create a simple React component inside src/DemoButton.js:

```javascript
// src/DemoButton.js
import React from 'react';

function DemoButton({ text }) {
  return <button>{text}</button>;
}

export default DemoButton;
```

### Step 5: Configure Rollup

Create a rollup.config.js file in the project root with the following content:

```javascript
// rollup.config.js
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',  
  output: {
    file: 'dist/demo-lib.js',
    format: 'cjs',
  },
  plugins: [babel()],
}
```

### Step 6: Update package.json

Update your package.json to include the build script:

```json
{
  "name": "demo-lib",
  "version": "1.0.0",
  "description": "A demo React component library",
  "main": "dist/demo-lib.js",
  "scripts": {
    "build": "rollup -c"
  },
  "peerDependencies": {
    "react": "^16.8.0",
    "react-dom": "^16.8.0"
  }
}
```

### Step 7: Build the Library

Run the build script to generate the component library:

```bash
npm run build
```

### Step 8: Link the Library

After running the build, your component library should be available in the dist directory. This setup explicitly uses Babel to transpile JSX code before passing it to Rollup, ensuring the correct bundling of your React component library.

```bash
npm link
``` 