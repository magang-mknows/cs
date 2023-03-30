import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from ".";

describe("Check Card", () => {
  test("check if card is rendering properly", () => {
    render(<Card />);
    const idCard = screen.getByTestId("card");
    expect(idCard).toBeDefined;
  });
});
