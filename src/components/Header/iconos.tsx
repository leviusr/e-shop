"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import Car from "../car";

function Iconos() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex gap-3 text-white text-xl">
      <button onClick={() => setActive(!active)} className="relative">
        <FaShoppingCart />
        <span className="rounded-full bg-red-700 w-4 flex items-center justify-center z-30 h-4 text-white absolute -right-2 -top-2 text-[10px] ">
          15
        </span>
      </button>
      {active && (
        <div className="w-full h-screen fixed top-0 left-0 z-40">
          <div
            onClick={() => setActive(!active)}
            className="w-1/2 bg-black/80 h-screen"
          >
            {}
          </div>
          <div className="bg-white w-1/2 fixed top-0 right-0 h-screen overflow-auto">
          <div className="text-black flex w-full justify-center py-5">
            <h2>carrito</h2>
          </div>
            <Car />
            <Car />
            <div className="px-5 text-black flex flex-col py-5 gap-y-5 justify-end items-end">
              <p className="text-zinc-400">
                sub-total: <span className="text-black">0.00 $</span>
              </p>
              <p className="text-zinc-400">
                total: <span className="text-black">0.00 $</span>
              </p>
              <Link href="/" className="text-center py-2 bg-cuarty w-full">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
      <Link href="/">
        <FaUserLarge />
      </Link>
    </div>
  );
}

export default Iconos;
