const FIELD_NAMES = {
  title: "Title",
  author: "Author",
  genre: "Genre",
  publication_year: "Release",
  rating: "Rating"
};
export function SortingList({ sortingField, setSortingField }) {
  return (
    <>
      Sort By:
      <select
        value={sortingField}
        onChange={(e) => setSortingField(e.target.value)}
      >
        <option></option>
        {Object.entries(FIELD_NAMES).map(([key, value]) => {
          return (
            <option key={key} value={key}>
              {value}
            </option>
          );
        })}
      </select>
    </>
  );
}
