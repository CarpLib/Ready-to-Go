import Switch from "./Switch";
import { useState } from "react";

export default function Main() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <main>
      <div>
        <div className="lign">
          <Switch
            name={1}
            switch1={switch1}
            setSwitch1={setSwitch1}
            title="ON"
            color={switch1 ? "purple" : "white"}
          />
          <Switch
            name={1}
            switch1={switch1}
            setSwitch1={setSwitch1}
            title="OFF"
            color={switch1 ? "white" : "purple"}
          />
        </div>
        <div className="lign">
          <Switch
            name={2}
            switch2={switch2}
            setSwitch2={setSwitch2}
            title="ON"
            color={switch2 ? "purple" : "white"}
          />
          <Switch
            name={2}
            switch2={switch2}
            setSwitch2={setSwitch2}
            title="OFF"
            color={switch2 ? "white" : "purple"}
          />
        </div>
        <div className="lign">
          <Switch
            name={3}
            switch3={switch3}
            setSwitch3={setSwitch3}
            title="ON"
            color={switch3 ? "purple" : "white"}
          />
          <Switch
            name={3}
            switch3={switch3}
            setSwitch3={setSwitch3}
            title="OFF"
            color={switch3 ? "white" : "purple"}
          />
        </div>
      </div>
      <div className={switch1 && switch2 && switch3 ? "green" : "red"}>
        {switch1 && switch2 && switch3 ? "Go !" : "No way !"}
      </div>
    </main>
  );
}
