// import React, { useCallback, useEffect, useState } from "react";
// import LiveCursors from "../cursors/liveCursors";
// import { useMyPresence } from "../../liveblocks.config";
// import CursorChat from "../cursors/cursorChat";

// const Live = ({ others, canvasRef }) => {
//   const [{ cursor }, updateMyPresence] = useMyPresence();
//   const [cursorState, setCursorState] = useState({ mode: "" });

//   const handlePointerMove = useCallback((event) => {
//     event.preventDefault();
//     const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
//     const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
//     updateMyPresence({ cursor: { x, y } });
//   }, []);

//   const handlePointerLeave = useCallback((event) => {
//     event.preventDefault();
//     updateMyPresence({ cursor: null, message: null });
//   }, []);

//   const handlePointerDown = useCallback((event) => {
//     const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
//     const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
//     updateMyPresence({ cursor: { x, y } });
//   }, []);

//   return (
//     <div
//       id="canvas"
//       onPointerMove={handlePointerMove}
//       onPointerLeave={handlePointerLeave}
//       onPointerDown={handlePointerDown}
//       className="h-[100vh] w-full"
//     >
//       <canvas ref={canvasRef} />
//       {cursor && <CursorChat cursorState={cursorState} />}
//       <LiveCursors others={others} />
//     </div>
//   );
// };

// export default Live;






import React, { useCallback, useEffect, useState } from "react";
import LiveCursors from "../cursors/liveCursors";
import { useMyPresence } from "../../liveblocks.config";
import CursorChat from "../cursors/cursorChat";

const Live = ({ others, canvasRef }) => {
  const [{ cursor }, updateMyPresence] = useMyPresence();
  const [cursorState, setCursorState] = useState({ mode: "" });

  const handlePointerMove = useCallback((event) => {
    event.preventDefault();
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPresence({ cursor: { x, y } });
  }, []);

  const handlePointerLeave = useCallback((event) => {
    event.preventDefault();
    updateMyPresence({ cursor: null, message: null });
  }, []);

  const handlePointerDown = useCallback((event) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPresence({ cursor: { x, y } });
  }, []);

  return (
    <div
      id="canvas"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      className="h-[100vh] w-full"
    >
      <canvas ref={canvasRef} />
      {cursor && <CursorChat cursorState={cursorState} />}
      <LiveCursors others={others.map((item) => ({ ...item, key: item.id }))} />
    </div>
  );
};

export default Live;
