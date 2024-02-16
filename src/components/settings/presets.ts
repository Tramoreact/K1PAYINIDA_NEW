// theme
import palette from "../../theme/palette";
//
import { ThemeColorPresetsValue } from "./types";

// ----------------------------------------------------------------------

const themePalette = palette("light");

export const presets = [
  // DEFAULT
  {
    name: "default",
    ...themePalette.primary,
  },
  // CYAN
  {
    name: "cyan",
    lighter: "#CCF4FE",
    light: "#68CDF9",
    main: "#078DEE",
    dark: "#0351AB",
    darker: "#012972",
    contrastText: "#FFFFFF",
  },
  // PURPLE for PAYJUST
  {
    name: "PURPLE",
    lighter: "#34558E",
    light: "#1A4080",
    main: "#012B72",
    dark: "#001259",
    darker: "#00003F",
    contrastText: "#FFFFFF",
  },
  // BLUE for K1PAY
  {
    name: "Blue",
    lighter: "#431a9e24",
    light: "#5631A8",
    main: "#431A9E",
    dark: "#2A0184",
    darker: "#10006B",
    contrastText: "#FFFFFF",
  },
  // ORANGE
  {
    name: "orange",
    lighter: "#FEF4D4",
    light: "#FED680",
    main: "#fda92d",
    dark: "#B66816",
    darker: "#793908",
    contrastText: themePalette.grey[800],
  },
  // RED for TRAMO
  {
    name: "red",
    lighter: "#FFE3D5",
    light: "#FFC1AC",
    main: "#f82228",
    dark: "#B71833",
    darker: "#7A0930",
    contrastText: "#FFFFFF",
  },

  //GREEN for neosprint
  {
    name: "Green",
    lighter: "#33BC77",
    light: "#1AB366",
    main: "#00AB55",
    dark: "#00913C",
    darker: "#007822",
    contrastText: "#FFFFFF",
  },
  //Light Red for Nrupee
  {
    name: "LightRed",
    lighter: "#F37979",
    light: "#F16868",
    main: "#F05757",
    dark: "#D63E3E",
    darker: "#BD2424",
    contrastText: "#FFFFFF",
  },
];

export const greenPreset = presets[0];
export const cyanPreset = presets[1];
export const purplePreset = presets[5];
export const redPreset = presets[3];
export const orangePreset = presets[4];
export const defaultPreset = presets[Number(process.env.REACT_APP_THEME_COLOR)];

export const presetsOption = presets.map((color) => ({
  name: color.name,
  value: color.main,
}));

export function getPresets(key: ThemeColorPresetsValue) {
  return {
    default: defaultPreset,
    cyan: cyanPreset,
    purple: purplePreset,
    blue: greenPreset,
    orange: orangePreset,
    red: redPreset,
  }[key];
}
