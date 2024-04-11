import Rectangle from '../assets/rectangle.svg'
import Circle from '../assets/circle.svg'
import Triangle from '../assets/triangle.svg'
import Line from '../assets/line.svg'
import Image from '../assets/image.svg'
import Freeform from '../assets/freeform.svg'
import Select from '../assets/select.svg'
import Text from '../assets/text.svg'
import Delete from '../assets/delete.svg'
import Reset from '../assets/reset.svg'
import Comments from '../assets/comments.svg'
import Front from '../assets/front.svg'
import Back from '../assets/back.svg'
import Alignleft from '../assets/align-left.svg'
import Alignhorizontalcenter from '../assets/align-horizontal-center.svg'
import Alignright from '../assets/align-right.svg'
import Aligntop from '../assets/align-top.svg'
import Alignverticalcenter from '../assets/align-vertical-center.svg'
import Alignbottom from '../assets/align-bottom.svg'

export const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

export const shapeElements = [
  {
    icon: `${Rectangle}`,
    name: "Rectangle",
    value: "rectangle",
  },
  {
    icon: `${Circle}`,
    name: "Circle",
    value: "circle",
  },
  {
    icon: `${Triangle}`,
    name: "Triangle",
    value: "triangle",
  },
  {
    icon: `${Line}`,
    name: "Line",
    value: "line",
  },
  {
    icon: `${Image}`,
    name: "Image",
    value: "image",
  },
  {
    icon: `${Freeform}`,
    name: "Free Drawing",
    value: "freeform",
  },
];

export const navElements = [
  {
    icon: `${Select}`,
    name: "Select",
    value: "select",
  },
  {
    icon: `${Rectangle}`,
    name: "Rectangle",
    value: shapeElements,
  },
  {
    icon: `${Text}`,
    value: "text",
    name: "Text",
  },
  {
    icon: `${Delete}`,
    value: "delete",
    name: "Delete",
  },
  {
    icon: `${Reset}`,
    value: "reset",
    name: "Reset",
  },
  {
    icon: `${Comments}`,
    value: "comments",
    name: "Comments",
  },
];

export const defaultNavElement = {
  icon: `${Select}`,
  name: "Select",
  value: "select",
};

export const directionOptions = [
  {
    label: "Bring to Front",
    value: "front",
    icon: `${Front}`
  },
  {
    label: "Send to Back",
    value: "back",
    icon: `${Back}`
  },
];

export const fontFamilyOptions = [
  {
    value: "Helvetica",
    label: "Helvetica"
  },
  {
    value: "Times New Roman",
    label: "Times New Roman"
  },
  {
    value: "Comic Sans MS",
    label: "Comic Sans MS"
  },
  {
    value: "Brush Script MT",
    label: "Brush Script MT"
  },
];

export const fontSizeOptions = [
  {
    value: "10",
    label: "10",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "18",
    label: "18",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "22",
    label: "22",
  },
  {
    value: "24",
    label: "24",
  },
  {
    value: "26",
    label: "26",
  },
  {
    value: "28",
    label: "28",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "32",
    label: "32",
  },
  {
    value: "34",
    label: "34",
  },
  {
    value: "36",
    label: "36",
  },
];

export const fontWeightOptions = [
  {
    value: "400",
    label: "Normal",
  },
  {
    value: "500",
    label: "Semibold",
  },
  {
    value: "600",
    label: "Bold",
  },
];

export const alignmentOptions = [
  {
    value: "left",
    label: "Align Left",
    icon: `${Alignleft}`
  },
  {
    value: "horizontalCenter",
    label: "Align Horizontal Center",
    icon: `${Alignhorizontalcenter}`,
  },
  {
    value: "right",
    label: "Align Right",
    icon: `${Alignright}`

  },
  {
    value: "top",
    label: "Align Top",
    icon: `${Aligntop}`
  },
  {
    value: "verticalCenter",
    label: "Align Vertical Center",
    icon: `${Alignverticalcenter}`,
  },
  {
    value: "bottom",
    label: "Align Bottom",
    icon: `${Alignbottom}`
  },
];

export const shortcuts = [
  {
    key: "1",
    name: "Chat",
    shortcut: "/",
  },
  {
    key: "2",
    name: "Undo",
    shortcut: "⌘ + Z",
  },
  {
    key: "3",
    name: "Redo",
    shortcut: "⌘ + Y",
  },
  {
    key: "4",
    name: "Reactions",
    shortcut: "E",
  },
];
