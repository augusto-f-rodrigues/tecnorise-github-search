'use client';
import { CustomTextField } from '@/components/CustomTextField';
import RepositoryCard from '@/components/RepositoryCard';
import RepositoryModal from '@/components/RepositoryModal';
import {
  getRepositoryDetails,
  searchRepositories,
} from '@/services/github.service';
import { openModal } from '@/store/modal-slice';
import { AppDispatch } from '@/store/store';
import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress, IconButton } from '@mui/material';
import { KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await searchRepositories(query);
      setResults(data);
    } catch (error) {
      console.error('Error searching repositories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleOpenModal = async (repository: any) => {
    const repoDetails = await getRepositoryDetails({
      owner: repository.node.owner.login,
      name: repository.node.name,
    });
    dispatch(openModal(repoDetails));
  };

  return (
    <main className="main-container p-4">
      <h1 className="text-h1 mb-2">GitHub Search Repositories</h1>
      <h2 className="text-h2 mb-4">
        In the input field below, search repositories on GitHub for free
      </h2>
      <div className="mb-8 flex w-full max-w-[500px] items-center">
        <CustomTextField
          id="search-input"
          variant="outlined"
          label="Repository name"
          placeholder="Search GitHub repositories"
          className="mr-2 flex-grow"
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
          <CircularProgress
            sx={{ color: fullConfig.theme.colors.purple['500'] }}
          />
        </div>
      ) : (
        <div className="grid max-h-full grid-cols-1 gap-4 overflow-y-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          {results.map((result: any) => (
            <RepositoryCard
              key={result.node.id}
              repository={result}
              onClick={() => handleOpenModal(result)}
            />
          ))}
        </div>
      )}

      <RepositoryModal />
    </main>
  );
}
