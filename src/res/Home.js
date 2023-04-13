import api from "../api/API.js";
const callRestraunts = ({ fetchData, body, extraInit = {} }) => {
  const url = api.HOME_API(extraInit.latitude, extraInit.longitude);

  fetchData({
    url,
    body,
    extraInit,
  });
};
export default callRestraunts;
