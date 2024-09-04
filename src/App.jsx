import { useState } from "react";

const stepItems = ["Dream", "Name", "Done"];

function App() {
  return <Steps />;
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  /**
   * Handles the "Next" button click.
   *
   * If the current step is less than 3, increments the step and updates the name.
   * If the current step is 2, sets the name to "Mai".
   * If the current step is 1, sets the name to "Hello".
   */
  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }

  function handleBack() {
    if (step > 1) setStep((step) => step - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">Steps: {stepItems[step - 1]}</p>
          <div className="buttons">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
