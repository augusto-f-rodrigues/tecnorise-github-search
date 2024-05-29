import { Card, CardContent, CardMedia } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface RepositoryCardProps {
  repository: {
    node: {
      id: string;
      name: string;
      owner: {
        login: string;
        avatarUrl: string;
      };
      stargazerCount: number;
      url: string;
      primaryLanguage: {
        color: string;
        name: string;
      } | null;
    };
  };
  onClick: () => void;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({
  repository,
  onClick,
}) => {
  const { name, owner, stargazerCount, url, primaryLanguage } = repository.node;

  return (
    <Card className="mb-2 h-56 cursor-pointer" onClick={onClick}>
      <CardContent>
        <h5>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {name.length > 40 ? `${name.slice(0, 40)}...` : name}
          </Link>
        </h5>
        <p>Owner: {owner.login}</p>
        <p>Stars: {stargazerCount}</p>
        {primaryLanguage && (
          <p>
            Primary Language: {primaryLanguage.name}
            <span
              style={{
                backgroundColor: primaryLanguage.color,
                borderRadius: '50%',
                display: 'inline-block',
                height: '10px',
                marginLeft: '8px',
                width: '10px',
              }}
            ></span>
          </p>
        )}
        <CardMedia
          component="img"
          image={owner.avatarUrl}
          alt={`${owner.login}'s avatar`}
          className="ml-auto mt-4 h-16 w-16 rounded-full"
        />
      </CardContent>
    </Card>
  );
};

export default RepositoryCard;
