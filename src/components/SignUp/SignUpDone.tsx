import { event } from "@/src/lib/gtag";
import React, { useEffect } from "react";

const SignUpDone = () => {
  useEffect(() => {
    event("signup_view", {
      step: "signupDone",
    });
  }, []);

  return (
    <div>
      <h1>SignUp Done</h1>
    </div>
  );
};

export default SignUpDone;
