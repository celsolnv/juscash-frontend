import { describe, expect, it, vi } from "vitest";

import { PasswordInput } from "./index";

import { render, screen } from "@testing-library/react";

describe("PasswordInput", () => {
  it("renders the PasswordInput component", () => {
    render(<PasswordInput data-testid="password-input" />);
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
  });

  it("disables the toggle button when input is empty or undefined", () => {
    render(<PasswordInput value="" />);
    const toggleButton = screen.getByRole("button", { name: /show password/i });
    expect(toggleButton).toBeDisabled();
  });

  it("renders the loading skeleton when loading is true", () => {
    render(<PasswordInput loading />);
    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("applies additional class names to the input", () => {
    render(<PasswordInput data-testid="textbox" className="custom-class" />);
    const input = screen.getByTestId("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("forwards refs to the input element", () => {
    const ref = vi.fn();
    render(<PasswordInput ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });
});
