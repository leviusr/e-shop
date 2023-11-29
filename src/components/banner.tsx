"use client";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ViewOne from "./banner/view-one";
import ViewTwo from "./banner/view-two";
import ViewThree from "./banner/view-three";
import ViewFour from "./banner/view-four";
import ViewFive from "./banner/view-five";

function Banner() {
  const array = [1, 2, 3, 4, 5];
  const [view, setView] = useState<number>(array[0]);
  const indexRef = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setView(array[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % array.length;
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  console.log(view);
  return (
    <section className="w-full h-full  grid grid-cols-1 text-white  drop-shadow-md">
      <div className="overflow-x-auto px-20 py-5 w-full h-full bg-cuarty rounded relative flex items-center justify-center drop-shadow-md">
        <button
          onClick={() => setView((valor) => valor - 1)}
          type="button"
          className="absolute left-0 top-[40%] text-gray-100/20 hover:text-zinc-700"
        >
          <FaChevronLeft size={40} />
        </button>
        <button
          onClick={() => setView((valor) => valor + 1)}
          type="button"
          className="absolute right-0 top-[40%] text-gray-100/20 hover:text-zinc-700"
        >
          <FaChevronRight size={40} />
        </button>
        {view === 1 ? (
          <ViewOne />
        ) : view === 2 ? (
          <ViewTwo />
        ) : view === 3 ? (
          <ViewThree />
        ) : view === 4 ? (
          <ViewFour />
        ) : (
          <ViewFive />
        )}
      </div>
    </section>
  );
}

export default Banner;
