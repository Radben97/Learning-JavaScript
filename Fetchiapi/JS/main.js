// fetch api() it returns a promise
// callbacks: functions passed as parameter to other functions but when u over do it with multiple levels cusing a fractal it becomes a callback hell.

//promises solve that issue
// it has 3 states: pending, fullfiled, rejected. it generates async codes
// promise is an class so we used new to push its properties to myPromise
// when error turns true the value of reject isn't caught
/* const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("It's resolved");
    } else {
        reject("The promise is rejected");
    }
}); */
/* console.log(myPromise); */

/* myPromise
.then(value => { return value + 3; })
.then(newValue => { console.log(newValue); })
    // catch uncaught value of reject
.catch(err => { console.error(err); }); */
// then => thenable, u can chain the thenables. these are used to get the values from resolve or reject

/* const myNextPromise = new Promise((resolve) => {
    setTimeout(function () { resolve("myNextPromise resolved"); }, 5000);
})

myNextPromise
    .then(value => { console.log(value); })

myPromise
    .then(value => { console.log(value); });
 */

// pending state

/* const users = fetch("https://jsonplaceholder.typicode.com/users"); */
/* console.log(users); */

/* fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();// we can't work with this data
    })

    /* .then(data => { console.log(data); }); */
/* .then(data => {
        data.forEach(user => {
            console.log(user);
        });
    }); */

/* const users = {
    userList: []    
} // errors can be made here

// note: fetch() and JSON both return a promise so we need to wait before the data is sent

async function myFunction() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    /* jsonData.forEach(data => {
        users.userList = data;
        console.log(users.userList);
    }) */
/* users.userList = jsonData;
    console.log(users.userList);
}; */

// to use await u need an async function to do so
// since myFunction() is also has promises, u can make another function and call myFunction with await.

/* myFunction(); */

/* console.log(users.userList); */ // u won't see anyhting here as console.log would run before the myFunction fetches the data so put the console log inside the function

// example: workflow function

/* const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    const filteredData = jsonData.map(data => {
        return data.email;
    })
    console.log(filteredData);
};

getAllUserEmails(); */

// 2nd parameter of fetch

/* const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      /* accept: "application/json", */
/* accept: "text/plain" */
/*  },
  }); */
/* const jsonData = await response.json(); */
/* const jsonData = await response.text();
  console.log(jsonData);
};
getDadJoke(); */

// u can't use higher order functions on single object json datasets

// using POST

/* const postData = {
  id: "aMmbaFYTKBd",
  joke: "I finally bought the limited edition Thesaurus tha…ank.I have no words to describe how angry I am.",
};

const postJoshi = async (jokeObj) => {
    const post = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });

    const jsonresponse = await post.json();
    console.log(jsonresponse);
}
postJoshi(postData); */

// httpbin.org is how we test the post method

// template literals

/* const requestJoke = async (firstName, lastName) => {
  const response = await fetch(
    `https://v2.jokeapi.dev/joke/Any?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`
  );

  const jsonresponse = await response.json();
  console.log(jsonresponse.value);
};

requestJoke("Suurs", "Baka"); */

// Data from form

const getDataFromForm = () => {
  const requestObj = {
    firstName: "bruce",
    lastName: "Lee",
    category: "nerdy",
  };
  return requestObj;
};

const buildRequestUrl = (requestObj) => {
  return `https://v2.jokeapi.dev/joke/Any?firstName=${requestObj.firstName}&lastName=${requestObj.lastName}&limitTo=${requestObj.category}`;
};

const url = buildRequestUrl();

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonresponse = await response.json();
  const joke = jsonresponse.value.joke;
  console.log(joke);
};

const processJokeRequest = async () => {
  getDataFromForm();
  buildRequestUrl(requestObj);
  await requestJoke();
  console.log("finished");
};

processJokeRequest();
