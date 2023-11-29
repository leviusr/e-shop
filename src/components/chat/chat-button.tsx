"use client";
import React, { useState, useEffect } from "react";
import { BsFillChatLeftFill } from "react-icons/bs";
import { CgCloseO } from "react-icons/cg";
import { IoSend } from "react-icons/io5";

function ChatButton() {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <div>
      <button
        type="button"
        onClick={() => setActive(!active)}
        className="text-5xl fixed right-5 bottom-5 text-blue-500/20 hover:text-blue-500"
      >
        <BsFillChatLeftFill />
      </button>
      {active && (
        <div className="bottom-0 right-0 fixed z-50">
          <div className="absolute px-3 top-3 left-0 text-2xl w-full">
            <div className="flex w-full justify-between items-center">
            <p className="text-sm italic font-semibold">Staff</p>
            <button
              onClick={() => setActive(false)}
              type="button"
            >
              <CgCloseO />
            </button>
            </div>
          </div>
          <div className="w-96 h-96 bg-tercery/90 px-3 py-14">
            <div className="w-full h-[90%] full border bg-white"></div>
            <div className="w-full flex justify-center items-center pt-5">
              <input className="border w-full py-1 px-3" />
              <div className="px-3">
                <IoSend />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatButton;
