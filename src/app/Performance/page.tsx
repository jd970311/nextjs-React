/**
 * @file page
 * @date 2025-07-05
 */

import React from 'react';
import Common from '@/app/common';
import imgSrc from '../../../public/2.png';
import { notFound } from 'next/navigation';
const ComponentName = () => {
  return (
    <div>
      <Common title="Performance Page" imgSrc={imgSrc} />
    </div>
  );
};

ComponentName.propTypes = {};

export default ComponentName;
