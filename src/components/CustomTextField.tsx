'use client';
import { TextField, styled } from '@mui/material';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: fullConfig.theme.colors.purple['500'],
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: fullConfig.theme.colors.purple['500'], 
    },
    '&.Mui-focused fieldset': {
      borderColor: fullConfig.theme.colors.purple['500'], 
    },
  },
});