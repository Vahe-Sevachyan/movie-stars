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
const willMasterJS = new Promise((resolve, reject) => {
  resolve();
  reject();
});

const input = document.querySelector("input");
input.addEventListener("input", (event) => {
  fetchData(event.target.value);
});
