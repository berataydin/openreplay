/* Auto-generated, do not edit */
import React from 'react';

interface Props {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

function Sandglass(props: Props) {
    const { size = 14, width = size, height = size, fill = '' } = props;
    return (
      <svg viewBox="0 0 384 512" width={ `${ width }px` } height={ `${ height }px` } ><path d="M368 32h4c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H12C5.373 0 0 5.373 0 12v8c0 6.627 5.373 12 12 12h4c0 91.821 44.108 193.657 129.646 224C59.832 286.441 16 388.477 16 480h-4c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12h-4c0-91.821-44.108-193.657-129.646-224C324.168 225.559 368 123.523 368 32zM48 32h288c0 110.457-64.471 200-144 200S48 142.457 48 32zm288 448H48c0-110.457 64.471-200 144-200s144 89.543 144 200z"/></svg>
  );
}

export default Sandglass;
