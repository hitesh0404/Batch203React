import { render,screen } from "@testing-library/react";
import Counter from "./Counter";

describe("check whether the First name appears in profile component", () => {
    test("myprofile component",()=>{
      render(<Counter/>);
      const data = screen.getByTestId("countValue").textContent;
        expect(Number(data)).toEqual(0);
  });
});