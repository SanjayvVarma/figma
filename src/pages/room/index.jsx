// import { useEffect, useRef, useState } from "react";
// import { useMutation, useOthers, useRedo, useStorage, useUndo, } from "../../liveblocks.config";
// import { handleCanvaseMouseMove, handleCanvasMouseDown, handleCanvasMouseUp, handleCanvasObjectModified, handleCanvasObjectMoving, handleCanvasObjectScaling, handleCanvasSelectionCreated, handleCanvasZoom, handlePathCreated, handleResize, initializeFabric, renderCanvas, } from "../../lib/canvas";
// import { handleDelete, handleKeyDown } from "../../lib/keyEvents";
// import { handleImageUpload } from "../../lib/shapes";
// import { defaultNavElement } from "../../constants";
// import LeftSidebar from "../../components/leftSidebar";
// import Navbar from "../../components/navbar";
// import RightSidebar from "../../components/rightSidebar";
// import Live from "../../components/live";

// const Room = () => {
//     const undo = useUndo();
//     const redo = useRedo();
//     const canvasObjects = useStorage((root) => root.canvasObjects);
//     const canvasRef = useRef(null);
//     const fabricRef = useRef(null);
//     const isDrawing = useRef(false);
//     const shapeRef = useRef(null);
//     const selectedShapeRef = useRef(null);
//     const activeObjectRef = useRef(null);
//     const isEditingRef = useRef(false);
//     const imageInputRef = useRef(null);

//     const others = useOthers();

//     const [activeElement, setActiveElement] = useState({
//         name: "",
//         value: "",
//         icon: "",
//     });

//     const [elementAttributes, setElementAttributes] = useState({
//         width: "",
//         height: "",
//         fontSize: "",
//         fontFamily: "",
//         fontWeight: "",
//         fill: "#aabbcc",
//         stroke: "#aabbcc",
//     });

//     const deleteShapeFromStorage = useMutation(({ storage }, shapeId) => {
//         const canvasObjects = storage.get("canvasObjects");
//         canvasObjects.delete(shapeId);
//     }, []);

//     const deleteAllShapes = useMutation(({ storage }) => {
//         const canvasObjects = storage.get("canvasObjects");
//         if (!canvasObjects || canvasObjects.size === 0) return true;
//         for (const [key, value] of canvasObjects.entries()) {
//             canvasObjects.delete(key);
//         }

//         return canvasObjects.size === 0;
//     }, []);

//     const syncShapeInStorage = useMutation(({ storage }, object) => {
//         if (!object) return;
//         const { objectId } = object;
//         const shapeData = object.toJSON();
//         shapeData.objectId = objectId;

//         const canvasObjects = storage.get("canvasObjects");
//         canvasObjects.set(objectId, shapeData);
//     }, []);
//     const handleActiveElement = (elem) => {
//         setActiveElement(elem);

//         switch (elem?.value) {
//             case "reset":
//                 deleteAllShapes();
//                 fabricRef.current?.clear();
//                 setActiveElement(defaultNavElement);
//                 break;
//             case "delete":
//                 handleDelete(fabricRef.current, deleteShapeFromStorage);
//                 setActiveElement(defaultNavElement);
//                 break;
//             case "image":
//                 imageInputRef.current?.click();
//                 isDrawing.current = false;

//                 if (fabricRef.current) {
//                     fabricRef.current.isDrawingMode = false;
//                 }
//                 break;
//             case "comments":
//                 break;

//             default:
//                 selectedShapeRef.current = elem?.value;
//                 break;
//         }
//     };

//     useEffect(() => {
//         const canvas = initializeFabric({
//             canvasRef,
//             fabricRef,
//         });
//         canvas.on("mouse:down", (options) => {
//             handleCanvasMouseDown({
//                 options,
//                 canvas,
//                 selectedShapeRef,
//                 isDrawing,
//                 shapeRef,
//             });
//         });
//         canvas.on("mouse:move", (options) => {
//             handleCanvaseMouseMove({
//                 options,
//                 canvas,
//                 isDrawing,
//                 selectedShapeRef,
//                 shapeRef,
//                 syncShapeInStorage,
//             });
//         });
//         canvas.on("mouse:up", () => {
//             handleCanvasMouseUp({
//                 canvas,
//                 isDrawing,
//                 shapeRef,
//                 activeObjectRef,
//                 selectedShapeRef,
//                 syncShapeInStorage,
//                 setActiveElement,
//             });
//         });

//         canvas.on("path:created", (options) => {
//             handlePathCreated({
//                 options,
//                 syncShapeInStorage,
//             });
//         });

//         canvas.on("object:modified", (options) => {
//             handleCanvasObjectModified({
//                 options,
//                 syncShapeInStorage,
//             });
//         });

//         canvas?.on("object:moving", (options) => {
//             handleCanvasObjectMoving({
//                 options,
//             });
//         });

//         canvas.on("selection:created", (options) => {
//             handleCanvasSelectionCreated({
//                 options,
//                 isEditingRef,
//                 setElementAttributes,
//             });
//         });

//         canvas.on("object:scaling", (options) => {
//             handleCanvasObjectScaling({
//                 options,
//                 setElementAttributes,
//             });
//         });

//         canvas.on("mouse:wheel", (options) => {
//             handleCanvasZoom({
//                 options,
//                 canvas,
//             });
//         });

//         window.addEventListener("resize", () => {
//             handleResize({
//                 canvas: fabricRef.current,
//             });
//         });

//         window.addEventListener("keydown", (e) =>
//             handleKeyDown({
//                 e,
//                 canvas: fabricRef.current,
//                 undo,
//                 redo,
//                 syncShapeInStorage,
//                 deleteShapeFromStorage,
//             })
//         );
//         return () => {
//             canvas.dispose();
//             window.removeEventListener("resize", () => {
//                 handleResize({
//                     canvas: null,
//                 });
//             });

//             window.removeEventListener("keydown", (e) =>
//                 handleKeyDown({
//                     e,
//                     canvas: fabricRef.current,
//                     undo,
//                     redo,
//                     syncShapeInStorage,
//                     deleteShapeFromStorage,
//                 })
//             );
//         };
//     }, [canvasRef]); 
//     useEffect(() => {
//         renderCanvas({
//             fabricRef,
//             canvasObjects,
//             activeObjectRef,
//         });
//     }, [canvasObjects]);

//     return (
//         <main className="dark h-screen overflow-hidden bg-gray-900">
//             <Navbar
//                 imageInputRef={imageInputRef}
//                 activeElement={activeElement}
//                 handleImageUpload={(e) => {
//                     e.stopPropagation();
//                     handleImageUpload({
//                         file: e.target.files[0],
//                         canvas: fabricRef,
//                         shapeRef,
//                         syncShapeInStorage,
//                     });
//                 }}
//                 handleActiveElement={handleActiveElement}
//             />

//             <section className="flex h-full flex-row">
//                 <LeftSidebar allShapes={Array.from(canvasObjects)} />

//                 <Live canvasRef={canvasRef} undo={undo} redo={redo} others={others} />

//                 <RightSidebar
//                     elementAttributes={elementAttributes}
//                     setElementAttributes={setElementAttributes}
//                     fabricRef={fabricRef}
//                     isEditingRef={isEditingRef}
//                     activeObjectRef={activeObjectRef}
//                     syncShapeInStorage={syncShapeInStorage}
//                 />
//             </section>
//         </main>
//     );
// };

// export default Room;








import { useEffect, useRef, useState } from "react";
import { useMutation, useOthers, useRedo, useStorage, useUndo } from "../../liveblocks.config";
import { handleCanvaseMouseMove, handleCanvasMouseDown, handleCanvasMouseUp, handleCanvasObjectModified, handleCanvasObjectMoving, handleCanvasObjectScaling, handleCanvasSelectionCreated, handleCanvasZoom, handlePathCreated, handleResize, initializeFabric, renderCanvas } from "../../lib/canvas";
import { handleDelete, handleKeyDown } from "../../lib/keyEvents";
import { handleImageUpload } from "../../lib/shapes";
import { defaultNavElement } from "../../constants";
import LeftSidebar from "../../components/leftSidebar";
import Navbar from "../../components/navbar";
import RightSidebar from "../../components/rightSidebar";
import Live from "../../components/live";

const Room = () => {
    const undo = useUndo();
    const redo = useRedo();
    const canvasObjects = useStorage((root) => root.canvasObjects);
    const canvasRef = useRef(null);
    const fabricRef = useRef(null);
    const isDrawing = useRef(false);
    const shapeRef = useRef(null);
    const selectedShapeRef = useRef(null);
    const activeObjectRef = useRef(null);
    const isEditingRef = useRef(false);
    const imageInputRef = useRef(null);

    const others = useOthers();

    const [activeElement, setActiveElement] = useState({
        name: "",
        value: "",
        icon: "",
    });

    const [elementAttributes, setElementAttributes] = useState({
        width: "",
        height: "",
        fontSize: "",
        fontFamily: "",
        fontWeight: "",
        fill: "#aabbcc",
        stroke: "#aabbcc",
    });

    const deleteShapeFromStorage = useMutation(({ storage }, shapeId) => {
        const canvasObjects = storage.get("canvasObjects");
        canvasObjects.delete(shapeId);
    }, []);

    const deleteAllShapes = useMutation(({ storage }) => {
        const canvasObjects = storage.get("canvasObjects");
        if (!canvasObjects || canvasObjects.size === 0) return true;
        for (const [key, value] of canvasObjects.entries()) {
            canvasObjects.delete(key);
        }

        return canvasObjects.size === 0;
    }, []);

    const syncShapeInStorage = useMutation(({ storage }, object) => {
        if (!object) return;
        const { objectId } = object;
        const shapeData = object.toJSON();
        shapeData.objectId = objectId;

        const canvasObjects = storage.get("canvasObjects");
        canvasObjects.set(objectId, shapeData);
    }, []);
    const handleActiveElement = (elem) => {
        setActiveElement(elem);

        switch (elem?.value) {
            case "reset":
                deleteAllShapes();
                fabricRef.current?.clear();
                setActiveElement(defaultNavElement);
                break;
            case "delete":
                handleDelete(fabricRef.current, deleteShapeFromStorage);
                setActiveElement(defaultNavElement);
                break;
            case "image":
                imageInputRef.current?.click();
                isDrawing.current = false;

                if (fabricRef.current) {
                    fabricRef.current.isDrawingMode = false;
                }
                break;
            case "comments":
                break;

            default:
                selectedShapeRef.current = elem?.value;
                break;
        }
    };

    useEffect(() => {
        const canvas = initializeFabric({
            canvasRef,
            fabricRef,
        });
        canvas.on("mouse:down", (options) => {
            handleCanvasMouseDown({
                options,
                canvas,
                selectedShapeRef,
                isDrawing,
                shapeRef,
            });
        });
        canvas.on("mouse:move", (options) => {
            handleCanvaseMouseMove({
                options,
                canvas,
                isDrawing,
                selectedShapeRef,
                shapeRef,
                syncShapeInStorage,
            });
        });
        canvas.on("mouse:up", () => {
            handleCanvasMouseUp({
                canvas,
                isDrawing,
                shapeRef,
                activeObjectRef,
                selectedShapeRef,
                syncShapeInStorage,
                setActiveElement,
            });
        });

        canvas.on("path:created", (options) => {
            handlePathCreated({
                options,
                syncShapeInStorage,
            });
        });

        canvas.on("object:modified", (options) => {
            handleCanvasObjectModified({
                options,
                syncShapeInStorage,
            });
        });

        canvas?.on("object:moving", (options) => {
            handleCanvasObjectMoving({
                options,
            });
        });

        canvas.on("selection:created", (options) => {
            handleCanvasSelectionCreated({
                options,
                isEditingRef,
                setElementAttributes,
            });
        });

        canvas.on("object:scaling", (options) => {
            handleCanvasObjectScaling({
                options,
                setElementAttributes,
            });
        });

        canvas.on("mouse:wheel", (options) => {
            handleCanvasZoom({
                options,
                canvas,
            });
        });

        window.addEventListener("resize", () => {
            handleResize({
                canvas: fabricRef.current,
            });
        });

        window.addEventListener("keydown", (e) =>
            handleKeyDown({
                e,
                canvas: fabricRef.current,
                undo,
                redo,
                syncShapeInStorage,
                deleteShapeFromStorage,
            })
        );
        return () => {
            canvas.dispose();
            window.removeEventListener("resize", () => {
                handleResize({
                    canvas: null,
                });
            });

            window.removeEventListener("keydown", (e) =>
                handleKeyDown({
                    e,
                    canvas: fabricRef.current,
                    undo,
                    redo,
                    syncShapeInStorage,
                    deleteShapeFromStorage,
                })
            );
        };
    }, [canvasRef]); 
    useEffect(() => {
        renderCanvas({
            fabricRef,
            canvasObjects,
            activeObjectRef,
        });
    }, [canvasObjects]);

    return (
        <main className="dark h-screen overflow-hidden bg-gray-900">
            <Navbar
                imageInputRef={imageInputRef}
                activeElement={activeElement}
                handleImageUpload={(e) => {
                    e.stopPropagation();
                    handleImageUpload({
                        file: e.target.files[0],
                        canvas: fabricRef,
                        shapeRef,
                        syncShapeInStorage,
                    });
                }}
                handleActiveElement={handleActiveElement}
            />

            <section className="flex h-full flex-row">
                <LeftSidebar allShapes={Array.from(canvasObjects)} />

                <Live canvasRef={canvasRef} undo={undo} redo={redo} others={others} />

                <RightSidebar
                    elementAttributes={elementAttributes}
                    setElementAttributes={setElementAttributes}
                    fabricRef={fabricRef}
                    isEditingRef={isEditingRef}
                    activeObjectRef={activeObjectRef}
                    syncShapeInStorage={syncShapeInStorage}
                />
            </section>
        </main>
    );
};

export default Room;
