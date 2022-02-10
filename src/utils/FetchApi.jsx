import axios from "axios";
//pixabay.com/api/?key=22610819-610095abdb962b7788008b666&q=yellow+flowers&image_type=photo

axios.defaults.baseURL = "https://pixabay.com/";
const setParams = ({ q, page }) =>
  (axios.defaults.params = {
    q,
    page,
    key: "22610819-610095abdb962b7788008b666",
    per_page: 12,
    image_type: "photo",
    orientation: "horizontal",
  });

export const fetchApi = (q, page) => {
  setParams({ q, page });
  return axios
    .get("api/")
    .then((res) => {
      if (!res.data.hits.length) {
        throw new Error("Not found");
      }
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

//   setTimeout(() => console.log(prevState.page), 0);
