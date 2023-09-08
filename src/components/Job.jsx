import React from "react";

export default function Job(props) {
  return (
    <div className="border border-solid border-black">
      {props.data.name}
    </div>)
}