import axios from "../utils/axiosCustomize";

const putTemperatureAxios = (humi, tempC, tempF) => {
  return axios.put("/api/temp/add/1", { humi, tempC, tempF });
};

const getAllTemperatureAxios = () => {
  return axios.get("/api/temp/all");
};

export { putTemperatureAxios, getAllTemperatureAxios };
