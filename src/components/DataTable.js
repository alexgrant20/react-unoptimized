const FIELD_NAMES = {
  title: "Title",
  author: "Author",
  genre: "Genre",
  publication_year: "Release",
  rating: "Rating"
};

export function DataTable({ data, sortedField = null }) {
  const fields = Object.keys(data[0]);
  let sortedStyle = {};
  if (sortedField) {
    sortedStyle = { border: "1px solid red " };
  }
  return (
    <table width="100%">
      <thead>
        <tr>
          {fields.map((field, index) => {
            return (
              <th
                key={`th-${index}`}
                style={field === sortedField ? sortedStyle : {}}
              >
                {FIELD_NAMES[field]}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((dataItem, dataIndex) => {
          return (
            <tr key={`tr-${dataIndex}`}>
              {fields.map((field, index) => {
                return <td key={`td-${index}`}>{dataItem[field]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
