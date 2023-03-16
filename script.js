window.promises=[];
window.promises = Array.from({ length: 5 }, () => new Promise(resolve => {
  const timeout = Math.floor(Math.random() * 5) + 1;
  setTimeout(() => resolve(`Promise resolved after ${timeout} seconds`), timeout * 1000);
}));

Promise.any(window.promises)
  .then(result => document.getElementById("output").innerHTML = result);


