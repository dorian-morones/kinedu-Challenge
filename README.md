# kinedu Challenge 
## How to run the project locally

1) Perform a yarn install to get all the required dependencies.
<pre><code>yarn install</code></pre>

2) Once the installation is completed, use the following command to run the project in your local machine. After that, you should be able to access the project through the standard **localhost:8080** location
<pre><code>yarn dev</code></pre>

## Dependecies

- [React](https://reactjs.org/)= To create the user interface and front logic
- [Bootstrap](https://getbootstrap.com/)= Help with responsive application management
- [Redux](https://es.redux.js.org/)= Help with managing application status

## Components structure

```

└── src
|   index.js
|   
├── components
|   ├── app.js
|   ├── app.scss
|   ├── container.js
|   |   
|   ├───Area
|   |    └── index.jsx
|   |       
|   ├───Description
|   |    └── index.jsx
|   |       
|   ├───Loading
|   |    └── index.jsx
|   |       
|   ├───Milestones
|   |    └── index.jsx
|   |       
|   ├───Modal
|   |    └── index.jsx
|   |       
|   ├───StateButton
|   |    └── index.jsx
|   |       
|   └───Task
|        ├── index.jsx
|        └── TaskItem.jsx
|           
├───public
|    └── index.html
|       
├───store
|   |──── index.js
|   |──── store-config.js
|   |   
|   ├─── actions
|   |       actionTypes.js
|   |       index.js
|   |       results.js
|   |       
|   └─── reducers
|        ├─── index.js
|        └─── results.js
|           
└───utils
     ├─── saveAnswers.js
     └─── validateItem.js
```