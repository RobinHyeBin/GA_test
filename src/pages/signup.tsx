import React, { useEffect } from "react";
import { event } from "../lib/gtag";

const SignUp = () => {
  useEffect(() => {
    event("signup_view", {
      step: 1,
    });
  }, []);

  return <div>SignUp</div>;
};

export default SignUp;
