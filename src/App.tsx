import ThemeProvider from "~/theme";
import Header from "~/ui/Header";

const Main = () => <Header />;

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
