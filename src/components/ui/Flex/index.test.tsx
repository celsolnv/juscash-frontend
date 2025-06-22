import { describe, it, expect } from "vitest";

import { Flex } from ".";

import { render, screen } from "@testing-library/react";

describe("Flex component", () => {
  it("renders children correctly", () => {
    render(<Flex>Test Content</Flex>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Flex className="test-class">Test Content</Flex>
    );
    const { firstChild } = container;
    expect(firstChild).toHaveClass("test-class");
  });
});
