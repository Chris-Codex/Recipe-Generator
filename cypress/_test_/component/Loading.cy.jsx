import Loading from "../../../src/components/Loading";
import { mount } from "cypress/react18";

describe("Test Loading Component", () => {
  //Ensure the component mounts correctly
  beforeEach(() => {
    mount(<Loading />);
  });

  it("should ensure loading state loads and renders correctly", () => {
    //should ensure the container element is visible and exist in the DOM
    cy.get("[data-cy='container']").should("be.visible").and("exist");
    //should ensure the img element is visible and has attribute
    cy.get("img").should("be.visible", "exist").and("have.attr", "src");
  });
});
