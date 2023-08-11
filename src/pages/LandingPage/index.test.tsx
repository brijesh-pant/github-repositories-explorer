import { Provider } from "react-redux";
import ThemeProvider from "~/theme";
import { rest } from "msw";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { server } from "~/mocks/server";
import { store } from "~/features/store";
import { resizeScreenSize } from "~/utils";
import LandingPage from ".";

let Wrapper: any;

describe("LandingPage Component", () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen());

  beforeEach(() => {
    Wrapper = () => (
      <Provider store={store}>
        <ThemeProvider>
          <LandingPage />
        </ThemeProvider>
      </Provider>
    );
  });

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  it("fetches & receives users and repos after entering a username", async () => {
    resizeScreenSize(1000);
    render(<Wrapper />);

    fireEvent.change(screen.getByPlaceholderText(/Enter username/i), {
      target: { value: "dan" },
    });
    fireEvent.click(screen.getByTestId(/search-button/i));
    await waitFor(() => {
      expect(screen.getByTestId("user-list")).toBeInTheDocument();
    });
    // test repos list behaviour on user click
    fireEvent.click(screen.getByTestId(/user-list-item/i));
    await waitFor(() => {
      expect(screen.getByTestId("repo-list")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getAllByTestId("repo-list-item")).toHaveLength(1);
    });

    // test repos list scroll behaviour
    fireEvent.scroll(screen.getByTestId("repo-list"), {
      target: { scrollY: 9000 },
    });
    await waitFor(() => {
      expect(screen.getAllByTestId("repo-list-item")).toHaveLength(2);
    });
  });

  it("renders repo list inside dialog on mobiles screens", async () => {
    // Set the screen size to a mobile breakpoint
    resizeScreenSize(500);
    render(<Wrapper />);

    fireEvent.change(screen.getByPlaceholderText(/Enter username/i), {
      target: { value: "dan" },
    });
    fireEvent.click(screen.getByTestId(/search-button/i));
    await waitFor(() => {
      expect(screen.getByTestId("user-list")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId(/user-list-item/i));
    await waitFor(() => {
      expect(screen.getByTestId("repo-list-dialog")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText(/close/i));
  });

  it("renders no results found for error in users api calls", async () => {
    server.use(
      rest.get("https://api.github.com/search/users", (req, res, ctx) => {
        return res(ctx.status(500), ctx.delay(150));
      })
    );
    render(<Wrapper />);

    fireEvent.change(screen.getByPlaceholderText(/Enter username/i), {
      target: { value: "dan" },
    });
    fireEvent.click(screen.getByTestId(/search-button/i));
    await waitFor(() => {
      expect(screen.getByTestId("no-results-found")).toBeInTheDocument();
    });
  });

  it("renders no results found for error in repos api calls", async () => {
    server.use(
      rest.get(
        "https://api.github.com/users/:username/repos",
        (req, res, ctx) => {
          return res(ctx.status(500), ctx.delay(150));
        }
      )
    );
    render(<Wrapper />);

    fireEvent.change(screen.getByPlaceholderText(/Enter username/i), {
      target: { value: "dan" },
    });
    fireEvent.click(screen.getByTestId(/search-button/i));
    await waitFor(() => {
      expect(screen.getByTestId("user-list")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId(/user-list-item/i));
    await waitFor(() => {
      expect(screen.queryByTestId("repo-list-item")).not.toBeInTheDocument();
    });
  });
});
