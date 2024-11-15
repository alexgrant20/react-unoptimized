import { useFetch } from "./useFetch";
import { useFilteredList } from "./useFiltered";
import { useOrderedList } from "./useOrderedList";
import { usePaginatedList } from "./usePaginatedList";
import { DataTable } from "./components/DataTable";
import { TableFilter } from "./components/TableFilter";
import { PaginationControl } from "./components/PaginationControl";
import { SortingList } from "./components/SortingList";

const PAGING_SIZE = 5;

const FIELD_NAMES = {
  title: "Title",
  author: "Author",
  genre: "Genre",
  publication_year: "Release",
  rating: "Rating",
};

const filterCallback = (filterText) => (book) => {
  let { title, author, genre, publication_year } = book;
  title = title.toLowerCase();
  author = author.toLowerCase();
  genre = genre.toLowerCase();
  if (title.includes(filterText)) return true;
  if (author.includes(filterText)) return true;
  if (genre.includes(filterText)) return true;
  if (publication_year.toString().includes(filterText)) return true;
  return false;
};

const sortingCallback = (sortingField) => (a, b) => {
  if (a[sortingField] > b[sortingField]) return 1;
  if (a[sortingField] < b[sortingField]) return -1;
  return 0;
};

export default function App() {
  // provide a hook that takes url and returns a state and data
  const [isLoading, books] = useFetch("books.json");

  // provides a list of filtered books if the query has changed and data as well
  const [filterText, setFilterText, filteredBooks] = useFilteredList(
    books,
    filterCallback
  );

  // provides a list of ordered items by a specific field
  const [sortingField, setSortingField, sortedBooks] = useOrderedList(
    filteredBooks,
    sortingCallback
  );

  // provides a list of paginated items
  const [nextPage, backPage, pageIndex, totalPages, paginatedList] =
    usePaginatedList(sortedBooks);

  return (
    <div>
      <div>
        <TableFilter filterText={filterText} setFilterText={setFilterText} />{" "}
        <SortingList
          sortingField={sortingField}
          setSortingField={setSortingField}
        />
      </div>
      {!isLoading
        ? paginatedList.length > 0 && (
            <DataTable
              sortedField={sortingField}
              data={paginatedList}
              fieldNames={FIELD_NAMES}
            />
          )
        : "Loading ..."}
      {!isLoading && (
        <PaginationControl
          nextPage={nextPage}
          backPage={backPage}
          totalPages={totalPages}
          pageIndex={pageIndex}
        />
      )}
    </div>
  );
}
