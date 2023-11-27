import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MengelolaPesanan from "../../src/app/tenant/[id]/mengelola_pesanan/page.jsx";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    params: { id: "1" },
  }),
  useParams: jest.fn(),
}));

describe("MengelolaPesanan Component", () => {
  test("renders table headers", () => {
    render(<MengelolaPesanan />);
    const idPesananHeader = screen.getByText("ID Pesanan");
    // ... (other assertions)
  });

 
});
