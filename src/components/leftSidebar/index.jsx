"use client";

// import { useMemo } from "react";

// import { getShapeInfo } from "../../lib/utils";
// import { Image } from "@nextui-org/react";

// const LeftSidebar = ({ allShapes }) => {
 
//   const memoizedShapes = useMemo(
//     () => (
//       <section className="flex flex-col bg-black text-grey-300 min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20">
//         <h3 className="px-5 py-4 text-xs uppercase text-white">Layers</h3>
//         <div className="flex flex-col">
//           {allShapes?.map((shape) => {
//             const info = getShapeInfo(shape[1]?.type);

//             return (
//               <div
//                 key={shape[1]?.objectId}
//                 className="group my-1 flex items-center gap-2 px-5 py-2.5 hover:cursor-pointer text-white hover:bg-green-500 hover:text-black"
//               >
//                 <Image
//                   src={info?.icon}
//                   alt="Layer"
//                   width={16}
//                   height={16}
//                   className="group-hover:invert"
//                 />
//                 <h3 className="text-sm font-semibold capitaliz">{info.name}</h3>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     ),
//     [allShapes?.length]
//   );

//   return memoizedShapes;
// };

// export default LeftSidebar;




import { useMemo } from "react";
import { getShapeInfo } from "../../lib/utils";
import { Image } from "@nextui-org/react";

const LeftSidebar = ({ allShapes }) => {
 
  const memoizedShapes = useMemo(
    () => (
      <section className="flex flex-col bg-black text-grey-300 min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20">
        <h3 className="px-5 py-4 text-xs uppercase text-white">Layers</h3>
        <div className="flex flex-col">
          {allShapes?.map((shape, index) => { // Added index parameter
            const info = getShapeInfo(shape[1]?.type);

            return (
              <div
                key={shape[1]?.objectId || index} // Using index as key fallback
                className="group my-1 flex items-center gap-2 px-5 py-2.5 hover:cursor-pointer text-white hover:bg-green-500 hover:text-black"
              >
                <Image
                  src={info?.icon}
                  alt="Layer"
                  width={16}
                  height={16}
                  className="group-hover:invert"
                />
                <h3 className="text-sm font-semibold capitaliz">{info.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    ),
    [allShapes?.length]
  );

  return memoizedShapes;
};

export default LeftSidebar;
