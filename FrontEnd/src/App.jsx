import { useState } from "react";
import io from "socket.io-client";
import "./App.scss";
import { WiHumidity } from "react-icons/wi";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { FaLanguage } from "react-icons/fa6";
import { changeLanguageApp } from "./redux/action/appAction";
import { LANGUAGES } from "./utils/constants";

const socket = io.connect("http://localhost:3484");

const App = () => {
  const [temp, setTemp] = useState([]);
  const [dropdown, setDropdown] = useState(true);
  const [dropdownClass, setDropdownClass] = useState("");

  const language = useSelector((state) => state.app.language);

  const dispatch = useDispatch();

  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();

  socket.on("server2user", (data) => {
    setTemp(data);
  });

  const handleToggleDropdown = () => {
    setDropdown(!dropdown);
    if (dropdown === true) {
      setDropdownClass("open");
    } else {
      setDropdownClass("");
    }
  };

  return (
    <div className="main-container">
      <div className="time">
        <FormattedMessage id="Time" />: {showTime}
      </div>
      <div className="language">
        <FaLanguage
          onClick={() => handleToggleDropdown()}
          className="language-icon"
        />
        <div
          className={
            !dropdown ? `language-content ${dropdownClass}` : "language-content"
          }
        >
          <ul>
            <li
              className={language === LANGUAGES.VI ? "active" : ""}
              onClick={() => dispatch(changeLanguageApp(LANGUAGES.VI))}
            >
              VI
            </li>
            <li
              className={language === LANGUAGES.EN ? "active" : ""}
              onClick={() => dispatch(changeLanguageApp(LANGUAGES.EN))}
            >
              EN
            </li>
          </ul>
        </div>
      </div>
      {!temp ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {temp &&
            temp.length > 0 &&
            temp.map((item, index) => {
              return (
                <div className="wrapper" key={index}>
                  <div className="data">
                    <div className="title">
                      <FormattedMessage id="sensor.humidty" />
                      <WiHumidity className="icon" />
                    </div>
                    <p>{Math.round(item.humi)}</p>
                  </div>
                  <div className="data">
                    <div className="title">
                      <FormattedMessage id="sensor.temp" />
                      <TbTemperatureCelsius className="icon" />
                    </div>
                    <p>{Math.round(item.tempC)}</p>
                  </div>
                  <div className="data">
                    <div className="title">
                      <FormattedMessage id="sensor.temp" />
                      <TbTemperatureFahrenheit className="icon" />
                    </div>
                    <p>{Math.round(item.tempF)}</p>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default App;
