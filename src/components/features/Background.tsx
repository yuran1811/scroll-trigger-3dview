import React, { useEffect } from 'react';
import { ThreeBGElement } from '@/tasks/3DView/main';

const Background = () => {
  useEffect(() => {
    document.querySelector('#bg')?.appendChild(ThreeBGElement);

    return () => {};
  }, []);

  return <div id="bg" />;
};

export default Background;
