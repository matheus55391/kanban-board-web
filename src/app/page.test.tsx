/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("HomePage", () => {
  it("renders the title correctly", () => {
    render(<Page />);
    expect(screen.getByTestId("title")).toHaveTextContent("Kanban Board");
  });
})