import {
  getAllTemperatureAxios,
  putTemperatureAxios,
} from "../services/apiServices";

const updateDbSocket = (io) => {
  io.on("connection", (client) => {
    console.log(`New client connected`);
    client.on("sensor2Server", async (data) => {
      let { humi, tempC, tempF } = data.dht;
      let res = [];
      try {
        await putTemperatureAxios(humi, tempC, tempF);
        res = await getAllTemperatureAxios();
      } catch (e) {
        console.log(e);
      }
      console.log("check res:", res.data);
      io.emit("server2user", res.data);
    });
    client.on("disconnect", () => console.log(`Client disconnected`));
  });
};

export default updateDbSocket;
