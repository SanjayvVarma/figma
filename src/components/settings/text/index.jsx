// import { Select, SelectItem } from "@nextui-org/react";
// import {
//   fontFamilyOptions,
//   fontSizeOptions,
//   fontWeightOptions,
// } from "../../../constants";

// const selectConfigs = [
//   {
//     property: "fontFamily",
//     placeholder: "Choose a font",
//     options: fontFamilyOptions,
//   },
//   {
//     property: "fontWeight",
//     placeholder: "Semibold",
//     options: fontWeightOptions,
//   },
//   { property: "fontSize", placeholder: "Font size", options: fontSizeOptions },
// ];

// const Text = ({ fontFamily, fontSize, fontWeight, handleInputChange }) => {
//   return (
//     <div className="flex flex-col gap-3 border-b border-primary-grey-200">
//       <h3 className="text-[10px] uppercase">Text</h3>

//       <div className="flex flex-col gap-3">
//         {RenderSelect({
//           config: selectConfigs[0],
//           fontSize,
//           fontWeight,
//           fontFamily,
//           handleInputChange,
//         })}

//         <div className="flex gap-2">
//           {selectConfigs.slice(1).map((config) =>
//             RenderSelect({
//               config,
//               fontSize,
//               fontWeight,
//               fontFamily,
//               handleInputChange,
//             })
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderSelect = ({
//   config,
//   fontSize,
//   fontWeight,
//   fontFamily,
//   handleInputChange,
// }) => (
//   <>
//     <Select
//       label={
//         config.property === "fontFamily"
//           ? "Choose a font"
//           : config.property === "fontSize"
//           ? "FontSize"
//           : "Semibold"
//       }
//       key={config.property}
//       onChange={(e) => handleInputChange(config.property, e.target.value)}
//       value={
//         config.property === "fontFamily"
//           ? fontFamily
//           : config.property === "fontSize"
//           ? fontSize
//           : fontWeight
//       }
//     >
//       {config.options.map((option) => (
//         <SelectItem
//           key={option.value}
//           value={option.value}
//           className=" hover:bg-primary-green hover:text-primary-black bg-white py-2 px-3"
//         >
//           {option.label}
//         </SelectItem>
//       ))}
//     </Select>
//   </>
// );

// export default Text;









import React from "react";
import PropTypes from 'prop-types';
import { Select, SelectItem } from "@nextui-org/react";
import {
  fontFamilyOptions,
  fontSizeOptions,
  fontWeightOptions,
} from "../../../constants";

const selectConfigs = [
  {
    property: "fontFamily",
    placeholder: "Choose a font",
    options: fontFamilyOptions,
  },
  {
    property: "fontWeight",
    placeholder: "Semibold",
    options: fontWeightOptions,
  },
  { property: "fontSize", placeholder: "Font size", options: fontSizeOptions },
];

const Text = ({ fontFamily, fontSize, fontWeight, handleInputChange }) => {
  return (
    <div className="flex flex-col gap-3 border-b border-primary-grey-200">
      <h3 className="text-[10px] uppercase">Text</h3>

      <div className="flex flex-col gap-3">
        {selectConfigs.map((config) => (
          <RenderSelect
            key={config.property}
            config={config}
            value={config.property === "fontFamily" ? fontFamily : config.property === "fontSize" ? fontSize : fontWeight}
            handleInputChange={handleInputChange}
          />
        ))}
      </div>
    </div>
  );
};

const RenderSelect = ({ config, value, handleInputChange }) => (
  <Select
    label={config.placeholder}
    onChange={(e) => handleInputChange(config.property, e.target.value)}
    value={value}
  >
    {config.options.map((option) => (
      <SelectItem
        key={option.value}
        value={option.value}
        className="hover:bg-primary-green hover:text-primary-black bg-white py-2 px-3"
      >
        {option.label}
      </SelectItem>
    ))}
  </Select>
);

Text.propTypes = {
  fontFamily: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  fontWeight: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

RenderSelect.propTypes = {
  config: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default Text;
