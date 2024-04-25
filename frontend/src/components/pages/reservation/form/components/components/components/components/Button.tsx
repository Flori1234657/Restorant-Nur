import { Button as Btn } from '@mui/joy';
import React from 'react';
import useViewPortWidth from '@/hooks/useViewPortWidth';

interface Props {
  disabled?: boolean;
  type?: string;
  innerText: string;
  action: () => void;
  decorator: React.ReactNode;
}

function Button({ action, decorator, innerText, type, disabled }: Props) {
  const { vw } = useViewPortWidth();

  return (
    <Btn
      disabled={disabled}
      type={type}
      size={vw < 900 ? 'sm' : 'xs'}
      endDecorator={innerText === 'Next' ? decorator : null}
      startDecorator={innerText !== 'Next' ? decorator : null}
      onClick={action}
    >
      {innerText}
    </Btn>
  );
}

Button.defaultProps = {
  type: '',
  disabled: false,
};

export default Button;
