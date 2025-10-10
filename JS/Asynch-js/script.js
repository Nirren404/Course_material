"use strict";
console.log("Hello, World!");

/*const heading = document.querySelector("h1");

async function loadData() {
  const [users, posts] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`),

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
  ]).then((response) => response.json());
  console.log(users, posts);
}
/*loadData();
/*const fetchData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.ok);
    if(!response.ok) return;
    const data = await response.json();
    console.log(data.title);
    heading.textContent = data.title;
  } catch (error) {
    console.log("Error:", error);
  }
};
fetchData();
*/

/*function logmessage(message) {
  console.log(message);
}

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData(logmessage);

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(() => console.log("Promise resolved after 3 seconds"));
    reject(() => console.log("Promise rejected"));
  });
});

promise
  .then((result) => {
    return console.log(result());
  })
  .catch((error) => {
    console.log(error());
  })
  .finally(() => {
    console.log("Promise completed");
  });
*/

//Create a function greetLater() that waits 3 seconds and then logs "Hello, Async World!" using async/await.

/*async function greetLater(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
      console.log("Hello, ASYNC");
    });
  });
  
}
greetLater();*/

/*function greetLater(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function message() {
  console.log("Hello, ASYNC");
  await greetLater(3000);
}
greetLater();*/

// * 1 A
async function greetLater() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Hello, Async World!");
  //const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //const data = await response.json();
  //console.log(data);
}
greetLater();

// * 1 B
// Use fetch try to get data from https:// jsonplaceholder.typicode.com/todos/1 and log it.
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("TODO", data);
  } catch (error) {
    console.error(error.message);
  }
}
fetchData();

// * 2A
// Fetch both users and posts from the API and log them together! using Promise.all().
async function loadData() {
  const [user, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((r) =>
      r.json()
    ),
  ]);

  console.log(user, posts);
}
loadData();

// * 2B
//Write a function that retries fetching data up to 3 times if it fails.
async function getdataTest(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Fetch failed");
      return await response.json();
    } catch (error) {
      console.log(`Attempt ${i + 1} failed. Retrying...`);
      if (i === retries - 1) throw error;
    }
  }
}
getdataTest("https://jsonplaceholder.typicode.com/posts/1");

const fetchwithRetry = async (
  url,
  options = {},
  retries = 3,
  backOffMs = 500
) => {
  let attempt = 0;

  while (attempt <= retries) {
    try {
      const res = await fetch(url, option);
      if (!res.ok) throw new Error(`HTTP: ${res.status}`);
      return res;
    } catch (error) {
      if (attempt === retries) throw error;
      await wait(backOffMs * (attempt + 1));
      attempt++;
    }
  }
};

//const demoRetry = async () => {
// try{
// const response = await fetchwithRetry("https://jsonplaceholder.typicode.com/posts/1");
//const data = await response.json();
//console.log(`success after retry number: `, data);`)
//} catch
// }

// ! 3A
const fetchPostsFirstAndFirstComment = async () => {
  try {
    const postsresponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (!postsresponse.ok)
      throw new Error(`HTTP code: ${postsresponse.status} `);
    const posts = await postsresponse.json();
    const firstpost = posts[0];

    const commentres = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstpost.id} `
    );

    if (!commentres.ok) throw new Error(`HTTP code: ${commentres.status}`);
    const comments = await commentres.json();

    console.log("First posts: ", firstpost);
    console.log("Comments for first posts: ", comments);
  } catch (error) {
    console.log(`Failed to fetch posts/comment, ${error.message}`);
  }
};

fetchPostsFirstAndFirstComment();

// ! 6

const measure = async (label, fn) => {
  const performance = window.performance || { now: now };

  const t0 = performance.now();
  const result = await fn();

  const t1 = performance.now();
  console.log(`${label}: ${t1 - t0}.toFixed(0) ms`);

  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];

  const sequentialFetch = async () => {
    const results = [];

    for (const url of urls) {
      const res = await fetch(url);
      results.push(await res.json());
    }
    return results;
  };

  const paralellFetch = async () => {
    const responses = await Promise.all(urls.map((u) => fetch(u)));
    return Promise.all(responses.map((r) => r.json()));
  };
  (async function runComparison() {
    await measure("Sequential", sequentialFetch);
    await measure("Parallel", paralellFetch);
  });
};
