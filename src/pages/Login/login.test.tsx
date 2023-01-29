import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import { Login } from ".";

type TestElement = Document | Element | Window | Node;

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

describe("Login", () => {
  it("should render the form", () => {
    const { getByText } = render(<Login />);

    expect(getByText("E-mail")).toBeInTheDocument();
    expect(getByText("Senha")).toBeInTheDocument();

    expect(getByText("ENTRAR")).toBeInTheDocument();
  });

  it("should update the form fields when changed", () => {
    const { getByPlaceholderText } = render(<Login />);

    const emailInput = getByPlaceholderText("E-mail...");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(hasInputValue(emailInput, "test@example.com")).toBe(true);

    const passwordInput = getByPlaceholderText("Senha...");
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(hasInputValue(passwordInput, "password")).toBe(true);
  });
});
