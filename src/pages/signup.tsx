import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import { SignUpDone, SignUpStep1, SignUpStep2 } from "../components/SignUp";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const handlePrevClick = () => {
    setStep(step - 1);
  };

  const handleNextClick = () => {
    setStep(step + 1);
  };

  return (
    <PageLayout>
      {step === 1 && <SignUpStep1 />}
      {step === 2 && <SignUpStep2 />}
      {step === 3 && <SignUpDone />}

      <div>
        {step > 1 && <button onClick={handlePrevClick}>이전</button>}
        {step < 3 && <button onClick={handleNextClick}>다음</button>}
      </div>
    </PageLayout>
  );
};

export default SignUp;
