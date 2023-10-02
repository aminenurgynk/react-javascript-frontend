function getData(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const response = JSON.parse(request.responseText);
        resolve(response);
      } else if (request.readyState === 4) {
        reject("Data çekilemedi.");
      }
    });

    request.open("GET", url);
    request.send();
  });
}

async function callUsers() {
  // When you use `await` key , have to write `async` at the beginning of the function
  const users = await getData("https://jsonplaceholder.typicode.com/users"); // if you want to response, must use `await`
  console.log(users);
}

async function callPosts() {
  const posts = await getData("https://jsonplaceholder.typicode.com/posts");
  console.log(posts);
}

callPosts();
callUsers();
