import { type CustomizationMap } from "@react-form-builder/designer";

export const simpleCustomization: CustomizationMap = {
  // Hiding the "Download" item in the main menu by using nested CSS selectors.
  MainMenu_Dropdown: {
    style: `
        #menuitem-\\:r5\\: {
          display: none;
        }
      `,
  },

  // Customizing Header styles
  Header: {
    className: "MyClassName",
    style: {
      // backgroundColor: "tomato",
      borderRadius: "10px",
      margin: 5,
      marginBottom: 10,
      padding: "8px!important",
    },
  },

  // Hiding the icon on the "Toggle mode" button.
  ToggleModeButton: {
    style: `
        background: black !important;
  
        svg {
          display: none;
        }
      `,
  },

  // Hiding the localization dropdown.
  LocalizationSelect: {
    hidden: true,
  },

  // Hiding the "Json view" button
  JsonViewButton: {
    hidden: false,
  },

  // Hiding the property code button
  PropertyCodeButton: {
    hidden: true,
  },

  Style_Tab: {
    hidden: true,
  },
  Rules_Tab: {
    hidden: true,
  },
  Actions_Tab: {
    hidden: true,
  },
  ToggleThemeButton: {
    hidden: true,
  },
  // RightPanel_Nav: {
  //   style: {
  //     overflow: "auto",
  //   },
  //   customRenderer: (defaultElement: ReactElement) => (
  //     <div style={{ display: "flex", gap: 10 }}>
  //       {defaultElement}
  //       <Button variant="text" size="small">
  //         Jadid
  //       </Button>
  //     </div>
  //   ),
  // },
};
