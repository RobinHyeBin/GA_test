import { event } from "@/src/lib/gtag";
import React, { useEffect } from "react";

const SignUpStep2 = () => {
  useEffect(() => {
    event("signup_view", {
      step: "2",
    });
  }, []);

  return (
    <div>
      <h1>SignUp Step 2</h1>
    </div>
  );
};

export default SignUpStep2;
