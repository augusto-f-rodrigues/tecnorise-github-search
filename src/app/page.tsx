"use client";
import { CustomTextField } from "@/components/CustomTextField";
import RepositoryCard from "@/components/RepositoryCard";
import { searchRepositories } from "@/services/github.service";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { KeyboardEvent, useState } from "react";
import { CircularProgress } from "@mui/material";
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await searchRepositories(query);
      setResults(data);
    } catch (error) {
      console.error("Error searching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <main className="main-container p-4">
      <h1 className="text-h1 mb-2">GitHub Search Repositories</h1>
      <h2 className="text-h2 mb-4">
        In the input field below, search repositories on GitHub for free
      </h2>
      <div className="flex w-full max-w-[500px] items-center mb-8">
        <CustomTextField
          id="search-input"
          variant="outlined"
          label="Repository name"
          placeholder="Search GitHub repositories"
          className="flex-grow mr-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
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

      {loading ? (
        <div className="flex justify-center">
          <CircularProgress sx={{ color: fullConfig.theme.colors.purple['500'] }} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-full overflow-y-auto p-4">
          {results.map((result: any) => (
            <RepositoryCard key={result.node.id} repository={result} />
          ))}
        </div>
      )}
    </main>
  );
}
