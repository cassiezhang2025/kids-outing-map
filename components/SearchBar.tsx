export default function SearchBar({ query, setQuery }: any) {
  return (
    <input
      type="text"
      placeholder="Enter ZIP code or city name..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded mb-4"
    />
  );
}
