import { Card, CardMedia } from "@mui/material";
import Link from "next/link";
import React from "react";

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
      primaryLanguage?: {
        color: string;
        name: string;
      };
    };
  };
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  const { name, owner, stargazerCount, url, primaryLanguage } = repository.node;

  return (
    <Card className="mb-2 h-28 flex items-center justify-between p-4">
      <div className="flex flex-col flex-grow">
        <h5>
          <Link
            href={url}
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
            {name}
          </Link>
        </h5>
        <p>Owner: {owner.login}</p>
        <p>Stars: {stargazerCount}</p>
        {primaryLanguage && (
          <div className="flex items-center mt-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: primaryLanguage.color }}
            ></span>
            <span className="ml-2">{primaryLanguage.name}</span>
          </div>
        )}
      </div>
      <CardMedia
        component="img"
        image={owner.avatarUrl}
        alt={`${owner.login}'s avatar`}
        className="h-16 w-16 rounded-full ml-4"
      />
    </Card>
  );
};

export default RepositoryCard;
