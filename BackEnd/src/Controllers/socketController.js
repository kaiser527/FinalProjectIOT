import {
  getAllTemperatureAxios,
  putTemperatureAxios,
} from "../services/apiServices";

const updateDbSocket = (io) => {
  io.on("connection", (client) => {
    console.log(`New client connected`);
    client.on("sensor2Server", async (data) => {
      let { humi, tempC, tempF } = data.dht;
      try {
        await putTemperatureAxios(humi, tempC, tempF);
        let res = await getAllTemperatureAxios();
        console.log("check res:", res.data);
        io.emit("server2user", res.data);
      } catch (e) {
        console.log(e);
      }
    });
    client.on("disconnect", () => console.log(`Client disconnected`));
  });
};

export default updateDbSocket;
