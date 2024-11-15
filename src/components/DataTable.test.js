import { render } from "@testing-library/react";
import { DataTable } from "./DataTable";

describe("DataTable Component", () => {
  const data = [
    {
      title: "Book 1",
      author: "Author 1",
      genre: "Fiction",
      publication_year: "2020",
      rating: "4.5"
    },
    {
      title: "Book 2",
      author: "Author 2",
      genre: "Non-Fiction",
      publication_year: "2018",
      rating: "3.8"
    }
  ];

  it("Should render provided list", () => {
    const Table = render(<DataTable data={data} />);
    //console.log(Table.getByText("Book 1"));
    Object.entries(data[0]).forEach(([field, fieldName]) => {
      expect(Table.getByText(fieldName)).toBeDefined();
    });
  });
});
