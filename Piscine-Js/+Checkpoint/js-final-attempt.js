export function FinalAttempt(callback, count) {
  return async function (...args) {
    while (true) {
      try {
        return await callback(...args);
      } catch (err) {
        count--;
      }
      if (count === 0) return "Final Attempt Fail";
    }
  };
}
