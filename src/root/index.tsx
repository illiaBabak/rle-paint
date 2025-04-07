import { JSX, useEffect, useState } from "react";
import { Alert } from "src/components/Alert";
import { BinaryMaskDrawer } from "src/components/BinaryMaskDrawer";
import { AlertProps } from "src/types";

export const App = (): JSX.Element => {
  const [alertProps, setAlertProps] = useState<AlertProps | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const startAlertTimer = () => {
    const id = setTimeout(() => {
      setAlertProps(null);
    }, 5000);

    setTimeoutId(id);

    return id;
  };

  const handleMouseEnter = () => {
    if (!timeoutId) return;

    clearTimeout(timeoutId);
    setTimeoutId(null);
  };

  useEffect(() => {
    const id = startAlertTimer();

    return () => clearTimeout(id);
  }, [alertProps]);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen p-8 bg-gray-50">
      <BinaryMaskDrawer setAlertProps={setAlertProps} />

      {alertProps && (
        <Alert
          onClose={() => setAlertProps(null)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={startAlertTimer}
          {...alertProps}
        />
      )}
    </div>
  );
};
