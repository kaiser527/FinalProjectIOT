import {
  getAllTemperatureService,
  updateNewTemperatureService,
} from "../services/tempServices";

const getHomePage = (req, res) => {
  res.send("BackEnd Side");
};

const putTemperature = async (req, res) => {
  try {
    let { humi, tempC, tempF } = req.body;
    let id = req.params.id;
    let message = await updateNewTemperatureService(humi, tempC, tempF, id);
    res.status(200).json(message);
  } catch (e) {
    res.status(500).json({
      errCode: 1,
      errMessage: "Error from Server!",
    });
  }
};

const getAllTemperature = async (req, res) => {
  try {
    let temp = await getAllTemperatureService();
    res.status(200).json(temp);
  } catch (e) {
    res.status(500).json({
      errCode: 1,
      errMessage: "Error from Server!",
    });
  }
};

export { getHomePage, putTemperature, getAllTemperature };
