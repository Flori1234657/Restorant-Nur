import { Button as Btn } from '@mui/joy';
import React from 'react';
import useViewPortWidth from '@/hooks/useViewPortWidth';

interface Props {
  innerText: string;
  action: () => void;
  decorator: React.ReactNode;
}

function Button({ action, decorator, innerText }: Props) {
  const { vw } = useViewPortWidth();

  return (
    <Btn
      size={vw < 900 ? 'sm' : 'xs'}
      endDecorator={innerText === 'Next' ? decorator : null}
      startDecorator={innerText !== 'Next' ? decorator : null}
      onClick={action}
    >
      {innerText}
    </Btn>
  );
}

export default Button;
