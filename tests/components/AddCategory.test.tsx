import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe("Pruebas en <AddCategory />", () => {
  test("debería actualizar el valor del input cuando se ingresa texto", () => {
    render(<AddCategory onNewCategory={jest.fn()} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
  });

  test("debe de llamar a onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const category = jest.fn();

    render(<AddCategory onNewCategory={category} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(category).toBeCalled();
    expect(category).toBeCalledTimes(1);
    expect(category).toBeCalledWith(inputValue);
  });

  test("no debe de llamar a onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewCategory).toBeCalledTimes(0);
    expect(onNewCategory).not.toBeCalled();
  });
});
