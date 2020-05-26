# Easy Frontend JS Workflow With No Framework

## User File Template

This console gives us the information we need from the API.

![user console](/img/userConsole.png)

In user js, we say      `  <div class="card">; `
 , not `  <div className="card"> `. This is not React.

 This is not ideal because placing another `<div id="user"></div>`  would replace the first one. You can do `querySelectorAll` or you can have a users component and loop through them and put them in there. This is just an example.

 