import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BuilderView, FormBuilder } from "@react-form-builder/designer";
import muiComponents from "./components/ui";
import { simpleCustomization } from "./constants/customization";
import { lime, purple } from "@mui/material/colors";
import "./App.css";

// created a file which contains all imports and then exports components definers 
const componentsMetadata = muiComponents.map((definer) => definer.build());

const builderView = new BuilderView(componentsMetadata);

// custom theme for test
const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});

// const view = createView([matButton.build(),matGrid.build(),tailGrid.build()]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box sx={{ height: "100vh" }}>
          <FormBuilder view={builderView} customization={simpleCustomization} />
          {/* <FormViewer view={view} getForm={() => JSON.stringify(form)} /> */}
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
