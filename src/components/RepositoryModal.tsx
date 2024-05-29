import { closeModal } from '@/store/modal-slice';
import { AppDispatch, RootState } from '@/store/store';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RepositoryModal: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, repository } = useSelector((state: RootState) => state.modal);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      aria-labelledby="repository-modal-title"
      aria-describedby="repository-modal-description"
    >
      <Box className="relative mx-auto my-8 w-3/4 max-w-lg rounded bg-white p-8 shadow-lg">
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          style={{
            position: 'absolute',
            right: '16px',
            top: '16px',
          }}
        >
          <CloseIcon />
        </IconButton>
        {repository?.owner.avatarUrl && (
          <img
            src={repository.owner.avatarUrl}
            alt={repository.owner.login}
            style={{
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              objectFit: 'cover',
              display: 'block',
              margin: '0 auto 16px',
            }}
          />
        )}
        <p id="repository-modal-title" className="text-center">
          {repository?.name}
        </p>
        <p id="repository-modal-description" className="mt-2">
          <strong>Description:</strong> {repository?.description || 'N/A'}
        </p>
        <p className="mt-2">
          <strong>Owner:</strong> {repository?.owner.login}
        </p>
        <p className="mt-2">
          <strong>Stars:</strong> {repository?.stargazers.totalCount}
        </p>
        <p className="mt-2">
          <strong>Forks:</strong> {repository?.forks.totalCount}
        </p>
        <p className="mt-2">
          <strong>Issues:</strong> {repository?.issues.totalCount}
        </p>
        <p className="mt-2">
          <strong>Pull Requests:</strong> {repository?.pullRequests.totalCount}
        </p>
        <p className="mt-2">
          <strong>Primary Language:</strong>{' '}
          {repository?.primaryLanguage?.name || 'N/A'}
          {repository?.primaryLanguage && (
            <p
              style={{
                backgroundColor: repository.primaryLanguage.color,
                borderRadius: '50%',
                display: 'inline-block',
                height: '10px',
                marginLeft: '8px',
                width: '10px',
              }}
            ></p>
          )}
        </p>
        <Typography sx={{ mt: 2 }}>
          <strong>Created At:</strong>{' '}
          {new Date(repository?.createdAt).toLocaleDateString()}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>Updated At:</strong>{' '}
          {new Date(repository?.updatedAt).toLocaleDateString()}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <a
            href={repository?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Visit Repository
          </a>
        </Typography>
      </Box>
    </Modal>
  );
};

export default RepositoryModal;
