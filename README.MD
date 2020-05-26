# Easy Frontend JS Workflow With No Framework

## Components: The User, Axios, and Fetching APIs

`npm i axios`

You can install anything from NPM and we are in the front-end and without frameworks.

axios is used to fetch APIs. 

async await will be used because axios returns a promise. 

<a href="https://randomuser.me/api" target="_blank">
Random User API
</a>  
It gives an array with a single user by default.

res.data.results[0];
The results array has a first value which is a user object.



We alter the const app to make it an async.

change `const User =  () => {`

  to 
  
  `const User =  async () => { `

In addition to awaiting the user. Promises are meant to be kept.


We just have the word 'User' because that is the template. But looking in the console will give us the data. We should be able to use the data in our component.


![user console](/img/userConsole.png)]
