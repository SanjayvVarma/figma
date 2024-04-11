// import React, { useRef } from "react";
// import Dimensions from "../settings/dimensions";
// import Color from "../settings/color";
// import Text from "../settings/text";
// import { modifyShape } from "../../lib/shapes";
// import Export from "../settings/export";

// const RightSidebar = (props) => {
//   const {
//     elementAttributes,
//     setElementAttributes,
//     fabricRef,
//     isEditingRef,
//     activeObjectRef,
//     syncShapeInStorage,
//   } = props;

//   const colorInputRef = useRef(null);
//   const strokeInputRef = useRef(null);

//   const handleInputChange = (property, value) => {
//     if (!isEditingRef.current) isEditingRef.current = true;
//     setElementAttributes((PREV) => {
//       return {
//         ...PREV,
//         [property]: value,
//       };
//     });

//     modifyShape({
//       canvas: fabricRef.current,
//       property,
//       value,
//       activeObjectRef,
//       syncShapeInStorage,
//     });
//   };

//   return (
//     <div className="flex flex-col border-t bg-black text-gray-200 border-gray-900 min-2-[240px] stikcy right-0 h-full max-sm:hidden select-none overflow-y-auto pb-20">
//       <h3 className="px-5 pt-4 text-xs uppercase">Design</h3>
//       <span className="text-xs text-grey-300 mt-3 px-5 border-b border-grey-200 pb-4">
//         Make changes to canavs as you like
//       </span>
//       <Dimensions
//         isEditingRef={isEditingRef}
//         width={elementAttributes.width}
//         height={elementAttributes.height}
//         handleInputChange={handleInputChange}
//       />
//       <Text
//         fontFamily={elementAttributes.fontFamily}
//         fontSize={elementAttributes.fontSize}
//         fontWeight={elementAttributes.fontWeight}
//         handleInputChange={handleInputChange}
//       />
//       <Color
//         inputRef={colorInputRef}
//         attribute={elementAttributes.fill}
//         placeholder={"color"}
//         handleInputChange={handleInputChange}
//         attributeType={"fill"}
//       />
//       <Color
//         inputRef={strokeInputRef}
//         attribute={elementAttributes.stroke}
//         placeholder={"stroke"}
//         attributeType={"stroke"}
//         handleInputChange={handleInputChange}
//       />
//       <Export />
//     </div>
//   );
// };

// export default RightSidebar;




import React, { useRef } from "react";
import PropTypes from 'prop-types';
import Dimensions from "../settings/dimensions";
import Color from "../settings/color";
import Text from "../settings/text";
import { modifyShape } from "../../lib/shapes";
import Export from "../settings/export";

const RightSidebar = ({
  elementAttributes,
  setElementAttributes,
  fabricRef,
  isEditingRef,
  activeObjectRef,
  syncShapeInStorage,
}) => {
  const colorInputRef = useRef(null);
  const strokeInputRef = useRef(null);

  const handleInputChange = (property, value) => {
    if (!isEditingRef.current) isEditingRef.current = true;
    setElementAttributes((prev) => ({
      ...prev,
      [property]: value,
    }));

    modifyShape({
      canvas: fabricRef.current,
      property,
      value,
      activeObjectRef,
      syncShapeInStorage,
    });
  };

  return (
    <div className="flex flex-col border-t bg-black text-gray-200 border-gray-900 min-2-[240px] sticky right-0 h-full max-sm:hidden select-none overflow-y-auto pb-20">
      <h3 className="px-5 pt-4 text-xs uppercase">Design</h3>
      <span className="text-xs text-gray-300 mt-3 px-5 border-b border-gray-200 pb-4">
        Make changes to canvas as you like
      </span>
      <Dimensions
        isEditingRef={isEditingRef}
        width={elementAttributes.width}
        height={elementAttributes.height}
        handleInputChange={handleInputChange}
      />
      <Text
        fontFamily={elementAttributes.fontFamily}
        fontSize={elementAttributes.fontSize}
        fontWeight={elementAttributes.fontWeight}
        handleInputChange={handleInputChange}
      />
      <Color
        inputRef={colorInputRef}
        attribute={elementAttributes.fill}
        placeholder={"color"}
        handleInputChange={handleInputChange}
        attributeType={"fill"}
      />
      <Color
        inputRef={strokeInputRef}
        attribute={elementAttributes.stroke}
        placeholder={"stroke"}
        attributeType={"stroke"}
        handleInputChange={handleInputChange}
      />
      <Export />
    </div>
  );
};

RightSidebar.propTypes = {
  elementAttributes: PropTypes.object.isRequired,
  setElementAttributes: PropTypes.func.isRequired,
  fabricRef: PropTypes.object.isRequired,
  isEditingRef: PropTypes.object.isRequired,
  activeObjectRef: PropTypes.object.isRequired,
  syncShapeInStorage: PropTypes.func.isRequired
};

export default RightSidebar;
