const neutral = {
  100: "#000000",
  200: "#303032",
  300: "#111827",
  400: "#9CA3AF",
  500: "#c5c5ca",
  600: "#f0f0fa",
  700: "#f0f2f4",
  800: "#1F2937",
  900: "#111827",
  1000: "#FFFFFF",
  1100: "#D6D6D6",
};

const moduleTheme = {
  pharmacy: "#A0522D", // Sienna brown
  ecommerce: "#FFF5E6", // Light beige
  food: "#F28C38", // Orange
  parcel: "#DEB887", // Burlywood beige
};

const background = {
  default: "#0B0F19",
  paper: neutral[900],
  custom: "#282829",
  custom2: "#1F2937",
  custom3: neutral[800],
  custom4: "#000000",
  footer1: "#9f9f9f1a",
  footer2: "#9f9f9f1a",
  custom5: "#282829",
  custom6: "rgba(255, 255, 255, 0.05)",
  custom7: "#000000",
};

const horizontalCardBG = "#2C1F0A"; // Dark brown
const divider = "#2D3748";
const foodCardColor = "#3A2A0F"; // Darker brown
const roundStackOne = "rgba(255, 255, 255, 0.04)";
const roundStackTwo = "rgba(255, 255, 255, 0.06)";

const primary = {
  main: "#8B4513", // Rich brown
  light: "#F5E9D8", // Beige
  dark: "#6B3A0F", // Darker brown
  deep: "#5C2F0A", // Deep brown
  contrastText: neutral[1000], // White for contrast
  semiLight: "#FFF5E6", // Light beige
  overLay: "#000000",
  customType2: "#CD853F", // Peru brown
  lite: "rgba(139, 69, 19, 0.1)", // Brown with opacity
  customType3: "#DEB887", // Burlywood beige
  icon: "#ffffff",
};

const secondary = {
  main: "#F28C38", // Orange
  light: "#FFB266", // Light orange
  dark: "#D76A1F", // Dark orange
  contrastText: neutral[1000], // White for contrast
};

const success = {
  main: "#DAA520", // Goldenrod
  light: "#FFE4B5", // Light beige/gold
  dark: "#B8860B", // Dark goldenrod
  contrastText: neutral[1000], // White for contrast
};

const info = {
  main: "#2196F3",
  light: "#64B6F7",
  dark: "#0B79D0",
  lite: "#DBF5FF",
  contrastText: neutral[1000], // White for contrast
  contrastText1: "#F5F6F8",
  blue: "#0D6EFD",
  custom1: "#31C0F5",
};

const warning = {
  main: "#FFB020",
  light: "#FFBF4C",
  dark: "#B27B16",
  lite: "#FFBD8B",
  liter: "#FFF8F2",
  contrastText: neutral[1000], // White for contrast
  new: "#FFC817",
};

const error = {
  main: "#D14343",
  light: "#DA6868",
  dark: "#922E2E",
  contrastText: neutral[1000], // White for contrast
  deepLight: "#FF725E",
};

const text = {
  primary: "#e8eaec",
  secondary: "#A0AEC0",
  disabled: "rgba(255, 255, 255, 0.48)",
  custom: "#ede8e8",
  customText1: "#EDF2F7",
};

const footer = {
  inputButton: "#FFDAB9", // Peachy beige
  inputButtonHover: "#DEB887", // Burlywood beige
  bottom: "rgba(139, 69, 19, 0.3)", // Brown with opacity
  foodBottom: "#686B78",
  appDownloadButtonBg: "#1A1A1A",
  appDownloadButtonBgGray: "#4A3728", // Dark brown
  foodFooterBg: "#414141",
};

const customColor = {
  textGray: "#9c9c9c",
  textGrayDeep: "#787676",
  buyButton: "#F9E091",
  parcelWallet: "#8B3FFD",
};

const whiteContainer = {
  main: "#ffffff",
};

const pink = {
  main: "#FF6D76",
};

const toolTipColor = "#88908C";
const paperBoxShadow = "#E5EAF1";

export const darkThemeOptions = {
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[500],
          color: "#FFFFFF",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-filledDefault": {
            backgroundColor: neutral[800],
            "& .MuiChip-deleteIcon": {
              color: neutral[500],
            },
          },
          "&.MuiChip-outlinedDefault": {
            borderColor: neutral[700],
            "& .MuiChip-deleteIcon": {
              color: neutral[700],
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
            color: text.secondary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: divider,
        },
        input: {
          "&:-webkit-autofill": {
            "-webkit-box-shadow": "0 0 0 100px #282929 inset",
            "-webkit-text-fill-color": "#fff",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: neutral[100],
        },
        track: {
          backgroundColor: neutral[500],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${divider}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[800],
          ".MuiTableCell-root": {
            color: neutral[300],
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: neutral[400],
      hover: "rgba(255, 255, 255, 0.04)",
      selected: "rgba(255, 255, 255, 0.08)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabled: "rgba(255, 255, 255, 0.26)",
    },
    horizontalCardBG,
    background,
    divider,
    error,
    info,
    mode: "dark",
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
    footer,
    customColor,
    whiteContainer,
    pink,
    paperBoxShadow,
    foodCardColor,
    moduleTheme,
    roundStackOne,
    roundStackTwo,
    toolTipColor,
  },
  shadows: [
    "none",
    "0px 1px 2px rgba(0, 0, 0, 0.24)",
    "0px 1px 2px rgba(0, 0, 0, 0.24)",
    "0px 1px 4px rgba(0, 0, 0, 0.24)",
    "0px 1px 5px rgba(0, 0, 0, 0.24)",
    "0px 1px 6px rgba(0, 0, 0, 0.24)",
    "0px 2px 6px rgba(0, 0, 0, 0.24)",
    "0px 3px 6px rgba(0, 0, 0, 0.24)",
    "0px 4px 6px rgba weeds(0, 0, 0, 0.24)",
    "0px 5px 12px rgba(0, 0, 0, 0.24)",
    "0px 5px 14px rgba(0, 0, 0, 0.24)",
    "0px 5px 15px rgba(0, 0, 0, 0.24)",
    "0px 6px 15px rgba(0, 0, 0, 0.24)",
    "0px 7px 15px rgba(0, 0, 0, 0.24)",
    "0px 8px 15px rgba(255, 255, 255, 0.07)",
    "0px 9px 15px rgba(0, 0, 0, 0.24)",
    "0px 10px 15px rgba(0, 0, 0, 0.24)",
    "0px 12px 22px -8px rgba(0, 0, 0, 0.24)",
    "0px 13px 22px -8px rgba(0, 0, 0, 0.24)",
    "0px 14px 24px -8px rgba(0, 0, 0, 0.24)",
    "0px 20px 25px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
  ],
};
