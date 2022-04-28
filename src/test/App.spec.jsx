import { getByText, render, within } from "@testing-library/react";

import Home from "../Pages/Home";
import Login from "../Pages/Login";

describe("Home component", () => {
  it("should render list items", () => {
    const { getAllByRole } = render(<Home />);
    expect(getAllByRole("list")).toBeTruthy();
    expect(getAllByRole("listitem")).toBeTruthy();
    expect(getAllByRole("button", { name: "logout" })).toBeTruthy();

    const list = getAllByRole("list");
    expect(list.length < 7).toBeTruthy();
    for (let ul of list) {
      const listItem = within(ul).getAllByRole("listitem");
      expect(listItem.length < 5).toBeTruthy();
      for (let li of listItem) {
        expect(within(li).getByRole("button"));
      }
    }
  });
});

describe("Login component", () => {
  it("should render input and button", () => {
    const { getByRole, getByPlaceholderText } = render(<Login />);
    expect(getByPlaceholderText("Username")).toBeTruthy();
    expect(getByRole("button")).toBeTruthy();
  });
});
