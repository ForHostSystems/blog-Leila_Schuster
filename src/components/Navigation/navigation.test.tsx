// Unit Test Code
import React from "react";
import { MemoryRouter, createMemoryRouter } from "react-router-dom";

import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi, expect } from "vitest";

import { Navigation } from ".";

const MockUseLocation = vi.fn();

vi.mock("react-router-dom", async () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const actual: Object = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLocation: () => MockUseLocation,
  };
});

describe("Navigation", () => {
  it("should render the navigation links", async () => {
    const { getByText } = render(<Navigation />);

    const homeLink = getByText("HOME");
    const biografiaLink = getByText("BIOGRAFIA");
    const dicasLink = getByText("DICAS LS");
    const blogLink = getByText("BLOG");

    expect(homeLink).toBeInTheDocument();
    expect(biografiaLink).toBeInTheDocument();
    expect(dicasLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
  });

  it("should change routes when clicled on a link", async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/", "/blog"]}>
        <Navigation />
      </MemoryRouter>,
    );

    const blogLink = getByText("BLOG");

    await waitFor(async () => await userEvent.click(blogLink));

    expect(window.location.pathname).toBe("/blog");
  });
});
