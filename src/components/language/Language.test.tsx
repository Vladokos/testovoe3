import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Language } from "./Language";

describe("Language component test", () => {
  const mockChangeLanguage = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render the initial language", () => {
    render(<Language language="RU" changeLanguage={mockChangeLanguage} />);
    expect(screen.getByText("RU")).toBeInTheDocument();
  });

  test("should call changeLanguage on click and update language", () => {

    const { rerender } = render(
      <Language language="RU" changeLanguage={mockChangeLanguage} />
    );


    fireEvent.click(screen.getByTestId("divElement"));


    expect(mockChangeLanguage).toHaveBeenCalled();


    rerender(<Language language="EN" changeLanguage={mockChangeLanguage} />);


    expect(screen.getByText("EN")).toBeInTheDocument();
  });
});
