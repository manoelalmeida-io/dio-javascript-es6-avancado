const doSomethingPromise = () => new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('first data');
  }, 1100);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('Second data');
  }, 1000);
});

doSomethingPromise()
  .then(data => {
    console.log('Ex 1:', data);
    return doOtherThingPromise();
  })
  .then(data2 => console.log('Ex 1:', data2))
  .catch(err => console.log('Ops:', err));

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
  console.log('Ex 2:', data[0]);
  console.log('Ex 2:', data[1]);
}).catch(err => {
  console.log(err);
});

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
  console.log('Ex 3:', data);
}).catch(err => {
  console.log(err);
});