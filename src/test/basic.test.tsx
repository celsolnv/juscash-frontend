import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";

describe("Basic Test", () => {
  it("should work", () => {
    render(<div>Test Component</div>);
    expect(screen.getByText("Test Component")).toBeInTheDocument();
  });
});
