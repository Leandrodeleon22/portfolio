"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import checkIcon from "@/assets/DESKTOP/check.png";
import { AnimatePresence, motion } from "framer-motion";

export default function Dialog() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { push } = useRouter();
  const dialogRef = useRef(null);
  const showDialog = searchParams.get("showDialog");

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    push(`${pathName}#contact`);
    dialogRef.current?.close();
    // onClose();
  };

  // const dialog =
  //   showDialog === "y" ? (
  //     <dialog
  //       ref={dialogRef}
  //       className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50 overflow-visible"
  //     >
  //       <div className=" min-w-full bg-gray-200 flex flex-col overflow-visible px-20">
  //         <div className=" bg-slate-200  overflow-visible rounded-xl ">
  //           <div className="flex justify-center">
  //             <Image
  //               src={checkIcon}
  //               width={100}
  //               height={100}
  //               alt="check icon"
  //               className="mt-[-3.4em] overflow-visible"
  //             />
  //           </div>

  //           <div className="my-8">
  //             <h1 className="text-[4rem] text-center font-medium my-6">
  //               Thank You!
  //             </h1>
  //             <p className="text-center text-[2.25rem] mb-8 ">
  //               Your message has been sent successfully!
  //             </p>
  //             <button
  //               onClick={closeDialog}
  //               className="w-full bg-[var(--neon-green-color)] my-10 h-[4rem] rounded-lg text-[2rem] font-medium text-white hover:bg-green-500"
  //             >
  //               OK
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </dialog>
  //   ) : null;

  // return dialog;

  return (
    <AnimatePresence>
      {showDialog === "y" && (
        <motion.dialog
          initial={{ opacity: 0, y: "-10%" }}
          animate={{ opacity: 1, y: "5%" }}
          transition={{ delay: 0.2 }}
          exit={{ opacity: 0 }}
          ref={dialogRef}
          className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50 overflow-visible"
        >
          <div className=" min-w-full bg-gray-200 flex flex-col overflow-visible px-20">
            <div className=" bg-slate-200  overflow-visible rounded-xl ">
              <div className="flex justify-center">
                <Image
                  src={checkIcon}
                  width={100}
                  height={100}
                  alt="check icon"
                  className="mt-[-3.4em] overflow-visible"
                />
              </div>

              <div className="my-8">
                <h1 className="text-[4rem] text-center font-medium my-6">
                  Thank You!
                </h1>
                <p className="text-center text-[2.25rem] mb-8 ">
                  Your message has been sent successfully!
                </p>
                <button
                  onClick={closeDialog}
                  className="w-full bg-[var(--neon-green-color)] my-10 h-[4rem] rounded-lg text-[2rem] font-medium text-white hover:bg-green-500"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
}
