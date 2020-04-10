import * as React from 'react';
import { useStyletron } from 'styletron-react';

export function Sidebar() {
  const [css] = useStyletron();
  return (
    <div className={css({
      height: '100%',
      width: '100px',
      backgroundColor: '#f6f6f6',
    })}>
      item 1
    </div>
  );
};
