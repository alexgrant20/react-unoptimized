export function TableFilter({ filterText, setFilterText }) {
  return (
    <>
      Search:
      <input
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
        type="text"
      />
    </>
  );
}
