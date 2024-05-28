"use client";
import { useState } from "react";
import { CustomTextField } from "@/components/CustomTextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { searchRepositories } from "@/services/github.service";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchRepositories(query);
      setResults(data);
    } catch (error) {
      console.error("Error searching repositories:", error);
    }
  };

  return (
    <main className="main-container p-4">
      <h1 className="text-h1 mb-2">GitHub Search Repositories</h1>
      <h2 className="text-h2 mb-4">
        In the input field below, search repositories on GitHub for free
      </h2>
      <div className="flex items-center">
        <CustomTextField
          id="search-input"
          variant="outlined"
          label="Repository name"
          placeholder="Search GitHub repositories"
          className="flex-grow mr-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <IconButton
          color="primary"
          aria-label="search"
          className="bg-purple-500 text-white hover:bg-purple-600"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </div>

      <div className="mt-4">
        {results.map((result: any) => (
          <div
            key={result.node.id}
            className="mb-2 p-2 border border-gray-300 rounded"
          >
            <a
              href={result.node.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {result.node.name}
            </a>
            <p>Owner: {result.node.owner.login}</p>
            <p>Stars: {result.node.stargazerCount}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
