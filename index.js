const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "3e28670",
      s: "avengers",
    },
  });
  console.log(response.data);
};
// 3e28670
// http://www.omdbapi.com/?i=tt3896198&apikey=3e28670
fetchData();
const willMasterJS = new Promise((resolve, reject) => {
  resolve();
  reject();
});

const myObject = {
  name: "vahe",
  age: 35,
  location: "unknown",
};
// console.log(myObject.name);
// console.log(myObject.age);
