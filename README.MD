# Easy Frontend JS Workflow With No Framework
## Change package.json

 change   ` "test": "echo \"Error: no test specified\" && exit 1"   `
to ` "dev": "rm -rf ./development && rm -rf ./cache && parcel public/index.html --out-dir development -p 3000",`


`-p 3000 ` is port 3000

Remove development and cache folder

`rm- rf ./development &&    rm-rf ./cache`

`rm-rf` is tO remove directories with files. We are choosing to delete the development folder and cache folders, that would otherwise be generate with each run.

Under the dev command : `"build": "parcel build public/index.html --out-dir dist --public-url ./" `


You can install build parcel build globally, but we want to make peopel able to clone it, so we want people to be able to use it locally.

`--out-dir` is the output directory This will contain our static assets and that will be the dist folder. 

`npm run dev`

We see that the .cache and development folders are created. The remove commands from earlier will reset delete them and make new ones when we build the server.

Check the console to see if the console.log in app.js works


`npm run build` places our static assets in a `dist`  folder.

It is a bundled version of our app that we would deploy to a server.

We can delete the `dist`,`development`, and   `.cache` folders. They wil come back upon our build and run commands with `run dev` deelting and recreating it.



