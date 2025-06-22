import { describe, it, expect } from "vitest";

import { Text } from "./index";

import { render, screen } from "@testing-library/react";

describe("Text", () => {
  it("should render correctly", () => {
    render(<Text>Sample text</Text>);
    expect(screen.getByText("Sample text")).toBeInTheDocument();
  });

  it("should render correctly with custom className", () => {
    render(<Text className="custom-class">Sample text</Text>);
    expect(screen.getByText("Sample text")).toHaveClass("custom-class");
  });

  it("should render correctly when loading is true", () => {
    render(<Text loading>Sample text</Text>);
    expect(screen.getByText("Sample text")).toBeInTheDocument();
    // Assuming Skeleton component adds a class or some indication when loading
    expect(screen.getByText("Sample text")).toHaveClass("rt-Skeleton");
  });

  it("should render correctly when loading is false", () => {
    render(<Text loading={false}>Sample text</Text>);
    expect(screen.getByText("Sample text")).toBeInTheDocument();
    // Assuming Skeleton component does not add a class or indication when not loading
    const textElement = screen.getByText("Sample text");
    expect(textElement).not.toHaveClass("rt-Skeleton");
  });
});
