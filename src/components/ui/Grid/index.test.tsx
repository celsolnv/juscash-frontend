import { describe, it, expect } from "vitest";

import { Grid } from "./index";

import { render, screen } from "@testing-library/react";

describe("Grid component", () => {
  it("renders children correctly", () => {
    render(
      <Grid>
        <div>Test Child</div>
      </Grid>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("passes props to the GridRd component", () => {
    const { container } = render(
      <Grid className="test-class">
        <div>Test Child</div>
      </Grid>
    );
    const { firstChild } = container;

    expect(firstChild).toHaveClass("test-class");
  });
});
