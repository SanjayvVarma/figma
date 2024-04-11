
"use client";

import { RoomProvider } from "./liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { NextUIProvider } from "@nextui-org/react";
import { LiveMap } from "@liveblocks/client";
import Room from "./pages/room";
import Loader from "./components/loader";
import "./App.css";

function App() {
  return (
    <NextUIProvider>
      <RoomProvider
        id="my-room"
        initialPresence={{
          cursor: null,
          cursorColor: null,
          editingText: null,
        }}
        initialStorage={{
          canvasObjects: new LiveMap(),
        }}
      >
        <ClientSideSuspense fallback={<Loader />}>
          {() => <Room />}
        </ClientSideSuspense>
      </RoomProvider>
    </NextUIProvider>
  );
}

export default App;

