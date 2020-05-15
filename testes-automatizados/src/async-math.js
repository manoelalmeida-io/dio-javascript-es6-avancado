class AsyncMath {
  sum(a, b, callback) {
    setTimeout(() => {
      callback(a + b);
    }, 100);
  }
}

module.exports = AsyncMath;