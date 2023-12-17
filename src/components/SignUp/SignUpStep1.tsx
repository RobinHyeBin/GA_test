import { event } from "@/src/lib/gtag";
import React, { useEffect } from "react";

const SignUpStep1 = () => {
  useEffect(() => {
    event("signup_view", {
      step: "1",
    });
  }, []);

  return (
    <div>
      <h1>SignUp Step 1</h1>
    </div>
  );
};

export default SignUpStep1;
