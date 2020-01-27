## Architecture 
This application was made with React to create the UI and Redux to handle global state.

When application loads, an API call is performed, and the result is stored in a global store, and through the <provider> the entire application is fed. Each component is able to connect with the global store to read or write data in it.

When user change the status of each task this state is stored in the global store to save the status when user change the  skill page, once the user have more than half of the task of the page completed is able to change the skill page. If the user complete all the task in first and second page the last green button change the text to "Finish assessment" and this action will open a modal, the button this this modal will push the user to the next skill, in this case is only reloading the page.

The user also can change the skill page with the togge action at the top of the page under 'Area' component, all the content of this section is feeded by the info provider for the API that is stored in the global store.

## Challenges

API: was a really huge problem consume the API, usually when I will work with a new API, I try to consume the API with a fetch in a browser console to understan the data structure, in this case, I didn't can for some reason, after request some help to Kinedu team, finally I did can consume the API with Postman, however when I tried with axios in the app the cross-domain block my request, so I decide to use local file to consume the data.

TIME: Unfortunately, since last week, we had some important problems in the company and we are working on creating reports on all the pages we have, so my time to invest in the challenge was limited.
