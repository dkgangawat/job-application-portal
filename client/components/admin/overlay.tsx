import Image from "next/image";
import React, { useRef } from "react";


type OverlayProps = {
    children: React.ReactNode;
    setClose: (value: boolean) => void;
};

const Overlay :React.FC<OverlayProps>= ({ children, setClose }) => {
  const ref = useRef(null);

  const handleClose = (e: any) => {
    if (ref.current === e.target) {
      setClose(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
      <div
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        ref={ref}
        onMouseDown={handleClose}
      >
        <div className="bg-white p-6 rounded-lg flex flex-col gap-4  overflow-y-auto relative">
          <button
            onClick={() => {
              setClose(false);
            }}
            className="absolute top-4 right-4"
          >
            X
          </button>
            {children}
        </div>
      </div>
    </>
  );
};

export default Overlay;
