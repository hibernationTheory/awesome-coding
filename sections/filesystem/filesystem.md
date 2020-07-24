- prerequisites for this module is:
  variables
  modules
  functions
  string concatenation
  if - else statements.

* Seems like the first things to do might be to create folders sync
* Then see the difference in between sync and async
* Readign in a file, sync way
* Reading in a file, async way.

# CREATING A FOLDER

# WRITING A FILE

# READING A FILE

Let's create a folder:

```
const fs = require("fs");

const targetFolder = "myFolder";

fs.mkdirSync(targetFolder);
```

You will notice that this fails if the folder already exists.
Let's check to see if the folder exists first.

```
const fs = require("fs");

const targetFolder = "myFolder";

// fs.mkdirSync(targetFolder);

const folderExists = fs.existsSync(targetFolder);
console.log(folderExists);
```

Using this knowledge we can update our code to only create the folder if it exists.

```
const fs = require("fs");

const targetFolder = "myFolder";

const folderExists = fs.existsSync(targetFolder);
if (!folderExists) {
  fs.mkdirSync(targetFolder);
} else {
  console.log("folder exists");
}
```

By the way you might be curious as to why we named the variable folderExists and not folderDoesNotExist.
Also notice we are saving it inside the variable with a very legible name.

What if we wanted to create the folder relative to the source of the destination file.

Let's first put all of this code inside a function so it is tidier.

```
const fs = require("fs");

const TARGET_PATH = "myFolder";

const createFolder = (path) => {
  const folderExists = fs.existsSync(path);
  if (!folderExists) {
    fs.mkdirSync(path);
    return true;
  } else {
    console.log("folder exists");
  }

  return false;
};

createFolder(TARGET_PATH);
```

explain why you are returning true or false.

introduce \_\_dirname

```
const fs = require("fs");

const FOLDER_NAME = "myFolder";
const TARGET_PATH = `${__dirname}/${FOLDER_NAME}`;

const createFolder = (path) => {
  console.log(`Creating a folder at: ${path}`);

  const folderExists = fs.existsSync(path);
  if (!folderExists) {
    fs.mkdirSync(path);
    console.log("Success!");
    return true;
  } else {
    console.log("Folder already exists");
  }

  return false;
};

createFolder(TARGET_PATH);
```

and then introduce the path module.

```
const fs = require("fs");
const path = require("path");

const FOLDER_NAME = "myFolder";
const TARGET_PATH = path.join(__dirname, FOLDER_NAME);

const createFolder = (path) => {
  console.log(`Creating a folder at: ${path}`);

  const folderExists = fs.existsSync(path);
  if (!folderExists) {
    fs.mkdirSync(path);
    console.log("Success!");
    return true;
  } else {
    console.log("Folder already exists");
  }

  return false;
};

createFolder(TARGET_PATH);
```

This is at a pretty good spot right now, but let's look at couple of more scenarios.

- creating bunch of folders.

```
const fs = require("fs");
const path = require("path");

const createFolder = (path) => {
  console.log(`Creating a folder at: ${path}`);

  const folderExists = fs.existsSync(path);
  if (!folderExists) {
    fs.mkdirSync(path);
    console.log("Success!");
    return true;
  } else {
    console.log("Folder already exists");
  }

  return false;
};

const main = () => {
  const PARENT_FOLDER_NAME = "myFolder";
  const PARENT_FOLDER_PATH = path.join(__dirname, PARENT_FOLDER_NAME);

  const CHILD_FOLDER_PREFIX = "subFolder_";
  const childFolderAmount = 10;

  createFolder(PARENT_FOLDER_PATH);
  for (let i = 0; i < childFolderAmount; i++) {
    const childFolderPath = path.join(
      __dirname,
      PARENT_FOLDER_NAME,
      `${CHILD_FOLDER_PREFIX}${i}`
    );
    createFolder(childFolderPath);
  }
};

main();
```

Maybe number padding.
Maybe reading names from an array
