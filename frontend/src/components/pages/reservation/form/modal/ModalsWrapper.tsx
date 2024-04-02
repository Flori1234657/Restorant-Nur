import { Modal } from '@mui/joy';
import React, { JSXElementConstructor } from 'react';

interface Props {
  children: React.ReactElement<any, string | JSXElementConstructor<any>>;
}

function ModalsWrapper({ children }: Props) {
  return (
    <Modal
      aria-labelledby="reservation form modals wrapper"
      open={false}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {children}
    </Modal>
  );
}

export default ModalsWrapper;
