const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "3e28670",
      s: searchTerm,
    },
  });
  return response.data.Search;
};

fetchData();

const input = document.querySelector("input");

const onInput = (event) => {
  const movies = fetchData(event.target.value);
  console.log(movies);
};
input.addEventListener("input", deBounce(onInput, 500));

//debounce helper function
