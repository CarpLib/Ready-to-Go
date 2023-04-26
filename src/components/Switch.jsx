import React from "react";

export default function Switch({
  switch1,
  switch2,
  switch3,
  setSwitch1,
  setSwitch2,
  setSwitch3,
  title,
  color,
  name,
}) {
  return (
    <button
      className={`switch ${color}`}
      onClick={() => {
        name === 1 && setSwitch1(!switch1);
        name === 2 && setSwitch2(!switch2);
        name === 3 && setSwitch3(!switch3);
      }}
    >
      {title}
    </button>
  );
}
