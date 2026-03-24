import type { Theme } from '@emotion/react';
import type { PaletteMode, SxProps } from '@mui/material';

export const cardMetaStyle: SxProps = {
  width: '100%',
  display: 'flex',
  gap: 1,
  justifyContent: { xs: 'flex-start', sm: 'space-between' },
};

export const paperMetaStyle = (mode: PaletteMode): SxProps<Theme> => {
  return {
    width: { xs: '100%', md: '85%', lg: '75%', xl: '60%' },
    backgroundColor: mode === 'light' ? 'white' : 'inherit',
    borderRadius: { xs: 2, md: 3 },
  };
};
