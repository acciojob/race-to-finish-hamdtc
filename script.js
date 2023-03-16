window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const promises = [];

for (let i = 0; i < 5; i++) {
  const promise = new Promise(resolve => {
    const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
    setTimeout(() => {
      resolve(`Promise ${i+1} resolved in ${timeout/1000} seconds`);
    }, timeout);
  });
  promises.push(promise);
}

Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch(error => {
    console.log(error);
  });

// Do not change the code above this
// add your promises to the array `promises`
