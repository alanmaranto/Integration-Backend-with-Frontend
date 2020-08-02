import React from "react";
import { mount } from "enzyme";
import Footer from "../../components/Footer";

describe("<Footer />", () => {
  const footer = mount(<Footer />);

  test("Render Footer component", () => {
    expect(footer.length).toEqual(1);
  });

  test("Footer should have 3 anchors", () => {
    expect(footer.find("a")).toHaveLength(3);
  });
});