function getData(url, callback) {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // TODO: response alinacak.
      const response = JSON.parse(request.responseText);
      callback("Data cekildi.", response);
      //console.log(request.status, "Data cekildi")
    } else if (request.readyState === 4) {
      // TODO: hata mesaji verilecek.
      callback("Data cekilemedi");
    }
    console.log(request.readyState);
  });

  request.open("GET", url);
  request.send;
}

getData("https://jsonplaceholder.typicode.com/posts", (message, data) => {
  console.log(message);
  if (data) {
    console.log(data);
  }
});
