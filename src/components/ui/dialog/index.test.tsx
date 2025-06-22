import { describe, it, expect } from "vitest";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from "./index";

import { render, screen } from "@testing-library/react";

describe("Dialog Component", () => {
  it("renders DialogTrigger and opens DialogContent when triggered", () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogDescription>Dialog Description</DialogDescription>
          <DialogFooter>
            <button>Close</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByText("Open Dialog")).toBeInTheDocument();
  });

  it("renders DialogTitle and DialogDescription correctly", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test Title</DialogTitle>
          </DialogHeader>
          <DialogDescription>Test Description</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders DialogFooter with a button", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogFooter>
            <button>Confirm</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });
});
