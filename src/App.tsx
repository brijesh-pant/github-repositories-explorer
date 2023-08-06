import ThemeProvider from "~/theme";
import MainLayout from "~/layouts/main";
import LandingPage from "~/pages/LandingPage";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <LandingPage />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
