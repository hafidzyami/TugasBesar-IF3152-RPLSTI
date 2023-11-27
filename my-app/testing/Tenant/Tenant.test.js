import React from "react";
import { render, screen } from "@testing-library/react";
import { useRouter, useParams } from "next/navigation";
import DashboardTenant from "../../src/app/tenant/[id]/page.jsx";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useParams: jest.fn(),
}));

describe("DashboardTenant", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });
    useParams.mockReturnValue({
      id: "123",
    });
  });

  test("renders the component", () => {
    render(<DashboardTenant />);
    // Add your assertions here
  });

  test("navigates to manage orders page when the button is clicked", () => {
    render(<DashboardTenant />);
    // Simulate button click
    // Add your assertions here
  });

  // Add more test cases as needed
});
