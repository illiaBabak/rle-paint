import { JSX, useEffect, useRef, useState } from "react";
import { Alert } from "src/components/Alert";
import { AlertProps } from "src/types";
import { hasOtherDigits } from "src/utils/hasOtherDigits";

export const App = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [binaryNum, setBinaryNum] = useState(0);
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
      <canvas className="w-full h-[85%] outline-black/10 outline rounded-md shadow-lg" />
      <input
        ref={inputRef}
        className="w-[75%] bg-white rounded-md shadow-lg my-4 py-4 px-2 h-[40px] focus:outline-violet-400"
        placeholder="Write binary mask for element..."
        type="text"
      />
      <button
        onClick={() => {
          const parsedVal = Number(inputRef.current?.value);

          if (isNaN(parsedVal)) {
            setAlertProps({
              text: "Not valid value!",
              type: "error",
              position: "top",
            });

            return;
          }

          if (hasOtherDigits(parsedVal)) {
            setAlertProps({
              text: "Not binary mask!",
              type: "error",
              position: "top",
            });

            return;
          }

          setBinaryNum(parsedVal);
          setAlertProps(null);
        }}
        className="w-[75%] bg-violet-400 text-white py-2 rounded-md cursor-pointer duration-300 hover:scale-105"
      >
        Draw
      </button>

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
