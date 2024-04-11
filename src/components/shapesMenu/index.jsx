// import {
//     Button,
//     Dropdown,
//     DropdownItem,
//     DropdownMenu,
//     DropdownTrigger,
//     Image,
//   } from "@nextui-org/react";
  
//   export function ButtonDemo() {
//     return <Button>Button</Button>;
//   }
  
//   const ShapesMenu = ({
//     item,
//     activeElement,
//     handleActiveElement,
//     handleImageUpload,
//     imageInputRef,
//   }) => {
//     const isDropdownElem = item.value.some(
//       (elem) => elem?.value === activeElement?.value
//     );
  
//     return (
//       <>
//         <Dropdown className="h-full w-full">
//           <DropdownTrigger>
//             <button className="hover:border-none h-full w-full">
//               <Image
//                 src={isDropdownElem ? activeElement.icon : item.icon}
//                 alt={item.name}
//                 fill
//                 className={isDropdownElem ? "invert" : ""}
//               />
//             </button>
//           </DropdownTrigger>
//           <DropdownMenu
//             aria-label="Static Actions"
//             onAction={(e) => console.log({ e })}
//           >
//             {item?.value.map((elem) => (
//               <DropdownItem
//                 onPress={() => handleActiveElement(elem)}
//                 key={elem.name}
//                 startContent={
//                   <Image
//                     src={elem?.icon}
//                     alt={elem?.name}
//                     width={20}
//                     height={20}
//                     className={
//                       activeElement?.value === elem?.value ? "invert" : ""
//                     }
//                   />
//                 }
//               >
//                 <p
//                   className={`text-sm  ${
//                     activeElement?.value === elem?.value
//                       ? "text-primary-black"
//                       : "text-white"
//                   }`}
//                 >
//                   {elem?.name}
//                 </p>
//               </DropdownItem>
//             ))}
//           </DropdownMenu>
//         </Dropdown>
  
//         <input
//           type="file"
//           className="hidden"
//           ref={imageInputRef}
//           accept="image/*"
//           onChange={handleImageUpload}
//         />
//       </>
//     );
//   };
  
//   export default ShapesMenu;









import React from "react";
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";

const ShapesMenu = ({
  item,
  activeElement,
  handleActiveElement,
  handleImageUpload,
  imageInputRef,
}) => {
  const isDropdownElem = item.value.some(
    (elem) => elem?.value === activeElement?.value
  );

  return (
    <>
      <Dropdown className="h-full w-full">
        <DropdownTrigger>
          <button className="hover:border-none h-full w-full" >
            <Image
              src={isDropdownElem ? activeElement.icon : item.icon}
              alt={item.name}
              fill="true" 
              className={isDropdownElem ? "invert" : ""}
            />
          </button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          onAction={(e) => console.log({ e })}
        >
          {item?.value.map((elem) => (
            <DropdownItem
              onPress={() => handleActiveElement(elem)}
              key={elem.name}
              startContent={
                <Image
                  src={elem?.icon}
                  alt={elem?.name}
                  width={20}
                  height={20}
                  className={
                    activeElement?.value === elem?.value ? "invert" : ""
                  }
                  fill="true"
                />
              }
            >
              <p
                className={`text-sm ${
                  activeElement?.value === elem?.value
                    ? "text-primary-black"
                    : "text-white"
                }`}
              >
                {elem?.name}
              </p>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <input
        type="file"
        className="hidden"
        ref={imageInputRef}
        accept="image/*"
        onChange={handleImageUpload}
      />
    </>
  );
};

ShapesMenu.propTypes = {
  item: PropTypes.object.isRequired,
  activeElement: PropTypes.object,
  handleActiveElement: PropTypes.func.isRequired,
  handleImageUpload: PropTypes.func.isRequired,
  imageInputRef: PropTypes.object.isRequired
};

export default ShapesMenu;
