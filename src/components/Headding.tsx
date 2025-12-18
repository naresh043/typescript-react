import React from "react";

type HeaddingProp = {
  user: {
    firstName: string;
    lastName: string;
  }[];
};

function Headding(props: HeaddingProp) {
  return props.user.map((user) => <h1>{user.firstName + " "+user.lastName}</h1>);
}

export default Headding;
