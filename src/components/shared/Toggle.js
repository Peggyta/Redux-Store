import React, {useEffect} from "react";
import Icon from "react-icons-kit";
import {moonO} from 'react-icons-kit/fa/moonO';
import {sunO} from 'react-icons-kit/fa/sunO';
import '../../styles/Toggle.css';
import { handledarkMode } from "../../redux/mode/darkModeAction";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // calling our state from the reduxer using useSelector hook of redux
  const mode = useSelector((state) => state.darkMode);

  // destructuring isdarkMode state
  const { isdarkMode } = mode;
  const switchDarkMode = () => {
    isdarkMode
      ? dispatch(handledarkMode(false))
      : dispatch(handledarkMode(true));
  };
  useEffect(() => {
    //changing color of body with darkmode
    document.body.style.backgroundColor = isdarkMode ? "#1c1e2a" : "#fff";
    document.body.style.color = isdarkMode ? "#996515" : "#000";
  }, [isdarkMode]);

  return (
    <>
      <div id="darkmode">
        <input type="checkbox" className="checkbox" id="checkbox" 
        checked={isdarkMode} onChange={switchDarkMode} />
        <label htmlFor="checkbox" className="label">
          <Icon className="text-lightblue pb-1 animate-pulse" icon={moonO} />
          <Icon className="text-yellow pb-1 animate-spin" icon={sunO} />
          <div className="ball"></div>
        </label>
      </div>
    </>
  );
}

export default App;