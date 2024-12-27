import { useState } from "react";

const data = [
  { id: 1, title: "Apple", date: "2023-10-01", description: "A fruit." },
  {
    id: 2,
    title: "Banana",
    date: "2023-08-15",
    description: "A yellow fruit.",
  },
  {
    id: 3,
    title: "Cherry",
    date: "2023-09-10",
    description: "A small red fruit.",
  },
  {
    id: 4,
    title: "Date",
    date: "2023-05-20",
    description: "A sweet fruit from the Middle East.",
  },
  {
    id: 5,
    title: "Elderberry",
    date: "2023-07-05",
    description: "A dark purple fruit.",
  },
];

const Home = () => {
  // State to hold the original data, sorted data, and search query
  const [sortedData, setSortedData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  // Sorting functions
  const sortByTitle = () => {
    const sorted = [...sortedData].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setSortedData(sorted);
  };

  const sortByDate = () => {
    const sorted = [...sortedData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setSortedData(sorted);
  };

  const sortByDescription = () => {
    const sorted = [...sortedData].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    setSortedData(sorted);
  };

  // Filter data based on search query
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setSortedData(filteredData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Data Sorting and Search</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearch}
        style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
      />

      {/* Sorting Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={sortByTitle} style={{ marginRight: "10px" }}>
          Sort by Title
        </button>
        <button onClick={sortByDate} style={{ marginRight: "10px" }}>
          Sort by Date
        </button>
        <button onClick={sortByDescription}>Sort by Description</button>
      </div>

      {/* Display the sorted and filtered data */}
      <div>
        {sortedData.length === 0 ? (
          <p>No data found.</p>
        ) : (
          <ul>
            {sortedData.map((item) => (
              <li key={item.id} style={{ marginBottom: "10px" }}>
                <strong>{item.title}</strong> (Date: {item.date})
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
