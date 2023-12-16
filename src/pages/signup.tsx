import React, { useEffect } from "react";
import { event } from "../lib/gtag";
import PageLayout from "../components/PageLayout";

const SignUp = () => {
  useEffect(() => {
    event("signup_view", {
      step: 1,
    });
  }, []);

  return <PageLayout>SignUp</PageLayout>;
};

export default SignUp;
