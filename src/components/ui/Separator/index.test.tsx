import { describe, it, expect } from "vitest";

import { Separator } from "./index";

import { render, screen } from "@testing-library/react";

describe("Separator Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Separator />);
    expect(container).toBeDefined();
  });

  it("applies custom className", () => {
    const { container } = render(<Separator className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders as non-decorative when decorative is false", () => {
    render(<Separator decorative={false} />);
    const separator = screen.getByRole("separator");
    expect(separator).not.toHaveAttribute("data-decorative", "true");
  });
});
