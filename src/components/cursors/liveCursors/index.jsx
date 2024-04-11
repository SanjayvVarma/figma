// import React from "react";
// import Cursor from "../cursor";
// import { COLORS } from "../../../constants";

// const LiveCursors = ({ others }) => {
//   return (
//     <>
//       {others.map(({ connectionId, presence }) => {
//         if (!presence.cursor) return null;
//         return (
//           <Cursor
//             key={connectionId}
//             color={COLORS[Number(connectionId) % COLORS.length]}
//             x={presence?.cursor?.x}
//             y={presence?.cursor?.y}
//             message={presence?.message}
//           />
//         );
//       })}
//     </>
//   );
// };

// export default LiveCursors;



import React from "react";
import Cursor from "../cursor";
import { COLORS } from "../../../constants";

const LiveCursors = ({ others }) => {
  return (
    <>
      {others.map(({ connectionId, presence }) => {
        if (!presence.cursor) return null;
        return (
          <Cursor
            key={connectionId} // Assigning unique key using connectionId
            color={COLORS[Number(connectionId) % COLORS.length]}
            x={presence?.cursor?.x}
            y={presence?.cursor?.y}
            message={presence?.message}
          />
        );
      })}
    </>
  );
};

export default LiveCursors;
