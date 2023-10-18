function debounceOnChange(wait) {
  let timeout;
  return function (e, func) {
    const value = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(value);
    }, wait);
  };
}

export default debounceOnChange;
