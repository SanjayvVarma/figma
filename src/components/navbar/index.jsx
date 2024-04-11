


// import PropTypes from 'prop-types';
// import ActiveUsers from "../users/activeUsers";
// import { navElements } from "../../constants";
// import ShapesMenu from "../shapesMenu";
// import { ReactComponent as Logo } from "../../assets/logo.svg";

// const Navbar = ({
//   activeElement,
//   imageInputRef,
//   handleImageUpload,
//   handleActiveElement,
// }) => {
//   const isActive = (value) => {
//     return (
//       (activeElement && activeElement.value === value) ||
//       (Array.isArray(value) &&
//         value.some((val) => val?.value === activeElement?.value))
//     );
//   };

//   return (
//     <nav className="flex select-none items-center justify-between gap-4 px-5 text-white bg-black h-[50px]">
//       <Logo width={58} height={20} />

//       <ul className="flex flex-row">
//         {navElements.map((item) => {
//           return (
//             <li
//               key={item.name}
//               onClick={() => {
//                 if (Array.isArray(item.value)) return;
//                 handleActiveElement(item);
//               }}
//               className={`group p-2 flex justify-center items-center cursor-pointer m-1
//             ${isActive(item.value) ? "bg-green-500" : "hover:bg-slate-700"}
//             `}
//             >
//               {Array.isArray(item.value) ? (
//                 <ShapesMenu
//                   item={item}
//                   activeElement={activeElement}
//                   imageInputRef={imageInputRef}
//                   handleActiveElement={handleActiveElement}
//                   handleImageUpload={handleImageUpload}
//                 />
//               ) : (
//                 <button className="relative w-5 h-5 object-contain">
//                   <img
//                     src={item.icon}
//                     alt={item.name}
//                     className={isActive(item.value) ? "invert" : ""}
//                   />
//                 </button>
//               )}
//             </li>
//           );
//         })}
//       </ul>

//       <ActiveUsers />
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   activeElement: PropTypes.object,
//   imageInputRef: PropTypes.object,
//   handleImageUpload: PropTypes.func,
//   handleActiveElement: PropTypes.func
// };

// export default Navbar;






import PropTypes from 'prop-types';
import ActiveUsers from "../users/activeUsers";
import { navElements } from "../../constants";
import ShapesMenu from "../shapesMenu";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const isActive = (activeElement, value) => {
  if (!activeElement) return false;
  if (activeElement.value === value) return true;
  if (Array.isArray(value)) {
    return value.some((val) => val?.value === activeElement.value);
  }
  return false;
};

const Navbar = ({
  activeElement,
  imageInputRef,
  handleImageUpload,
  handleActiveElement,
}) => {
  return (
    <nav className="flex select-none items-center justify-between gap-4 px-5 text-white bg-black h-[50px]">
      <Logo width={58} height={20} />

      <ul className="flex flex-row">
        {navElements.map((item) => {
          const active = isActive(activeElement, item.value);
          return (
            <li
              key={item.name}
              onClick={() => {
                if (Array.isArray(item.value)) return;
                handleActiveElement(item);
              }}
              className={`group p-2 flex justify-center items-center cursor-pointer m-1 ${
                active ? "bg-green-500" : "hover:bg-slate-700"
              }`}
            >
              {Array.isArray(item.value) ? (
                <ShapesMenu
                  item={item}
                  activeElement={activeElement}
                  imageInputRef={imageInputRef}
                  handleActiveElement={handleActiveElement}
                  handleImageUpload={handleImageUpload}
                />
              ) : (
                <button className="relative w-5 h-5 object-contain">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className={active ? "invert" : ""}
                  />
                </button>
              )}
            </li>
          );
        })}
      </ul>

      <ActiveUsers />
    </nav>
  );
};

Navbar.propTypes = {
  activeElement: PropTypes.object,
  imageInputRef: PropTypes.object,
  handleImageUpload: PropTypes.func,
  handleActiveElement: PropTypes.func
};

export default Navbar;

