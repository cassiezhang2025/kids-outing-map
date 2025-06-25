import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SearchBar from "../components/SearchBar";
import ListView from "../components/ListView";

const MapView = dynamic(() => import("../components/MapView"), { ssr: false });

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [view, setView] = useState("map");

  useEffect(() => {
    fetch("https://api.sheetbest.com/sheets/776bfffa-c92b-4915-9fb6-945e2b3762e4")
      .then((res) => res.json())
      .then((data) => setResults(data));
  }, []);

  const filtered = results.filter((item: any) => {
    return (
      item.city.toLowerCase().includes(query.toLowerCase()) ||
      item.ZIP.includes(query)
    );
  });

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Find a Place to Go with Kids</h1>
      <SearchBar query={query} setQuery={setQuery} />

      <div className="flex justify-end space-x-2 mb-2">
        <button onClick={() => setView("map")} className="px-4 py-2 rounded bg-blue-500 text-white">
          Map View
        </button>
        <button onClick={() => setView("list")} className="px-4 py-2 rounded bg-gray-500 text-white">
          List View
        </button>
      </div>

      {view === "map" ? <MapView places={filtered} /> : <ListView places={filtered} />}
    </div>
  );
}
