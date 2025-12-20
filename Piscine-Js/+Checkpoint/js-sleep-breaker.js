export function sleepBreaker(delay, breaker) {
  return new Promise((res) => {
    breaker().then(res);
    setTimeout(res, delay);
  });
}
