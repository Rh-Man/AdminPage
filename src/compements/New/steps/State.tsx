import React from "react"; // Importation de la bibliothèque React
import { Stepper, Step, Button } from "@material-tailwind/react"; // Importation de composants depuis la bibliothèque @material-tailwind/react
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";

const State = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <div className="w-full py-4 px-8">
      {/* Composant Stepper avec les propriétés pour l'étape active et les vérifications de première et dernière étape */}

      {/* Section des boutons "Prev" et "Next" */}
      <div className="mt-16 flex justify-between">
        <Stepper
          children={undefined}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        ></Stepper>
      </div>
    </div>
  );
};

export default State;
