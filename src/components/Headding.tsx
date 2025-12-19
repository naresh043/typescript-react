import React from "react";
import type { Name } from "./headding.type";

type HeaddingProp = {
  user:Name[];
};

function Headding(props: HeaddingProp) {
  return props.user.map((user) => <h1>{user.firstName + " "+user.lastName}</h1>);
}

export default Headding;
