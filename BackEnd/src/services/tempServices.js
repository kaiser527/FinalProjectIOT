import db from "../models/index";

const updateNewTemperatureService = (humi, tempC, tempF, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let temp = await db.Temperature.findOne({
        where: { id: id },
      });
      if (temp) {
        temp.humi = humi;
        temp.tempC = tempC;
        temp.tempF = tempF;
        await temp.save();
        resolve({
          errCode: 0,
          message: "Update the temperature succeeds !",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Temperature not found !",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const getAllTemperatureService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let temp = {};
      temp = await db.Temperature.findAll({
        attributes: {
          exclude: ["id", "createdAt"],
        },
      });
      resolve(temp);
    } catch (e) {
      reject(e);
    }
  });
};

export { updateNewTemperatureService, getAllTemperatureService };
