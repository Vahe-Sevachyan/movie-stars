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

const onInput = (event) => {
  fetchData(event.target.value);
};
input.addEventListener("input", deBounce(onInput, 500));

//debounce helper function
