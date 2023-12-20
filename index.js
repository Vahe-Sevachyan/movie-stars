const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "3e28670",
      s: searchTerm,
    },
  });
  console.log(response.data);
};

fetchData();

const input = document.querySelector("input");

const deBounce = (func, delay = 1000) => {
  let timeoutId;
  return (...arg) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, arg);
    }, delay);
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};
input.addEventListener("input", deBounce(onInput, 500));

//debounce helper function
