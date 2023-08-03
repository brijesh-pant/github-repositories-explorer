import Button from "@mui/material/Button";

import ThemeProvider from "~/theme";

const Main = () => <Button variant="contained">Simple Button</Button>;

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
