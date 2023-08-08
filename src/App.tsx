import { Provider } from "react-redux";
import ThemeProvider from "~/theme";
import MainLayout from "~/layouts/main";
import LandingPage from "~/pages/LandingPage";
import { store } from "~/features/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainLayout>
          <LandingPage />
        </MainLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
