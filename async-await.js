const asyncTimer = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(12345);
  }, 1000);
});

const asyncFunc = async() => {
  const data = await asyncTimer();
  return data;
}

asyncFunc().then(data => {
  console.log(data);
});