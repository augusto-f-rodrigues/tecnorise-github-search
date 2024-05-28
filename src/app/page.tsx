'use client';
import { CustomTextField } from '@/components/CustomTextField';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

export default function Home() {
  return (
    <main className="main-container p-4">
      <h1 className="text-h1 mb-2">GitHub Search Repositories</h1>
      <h2 className="text-h2 mb-4">In the input field below, search repositories on GitHub for free</h2>
      <div className="flex items-center">
        <CustomTextField
          id="search-input"
          variant="outlined"
          label="Repository name"
          placeholder="Search GitHub repositories"
          className="flex-grow mr-2"
        />

        <IconButton
          color="primary"
          aria-label="search"
          className="bg-purple-500 text-white hover:bg-purple-600"
        >
          <SearchIcon />
        </IconButton>
      </div>
    </main>
  );
}
