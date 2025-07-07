/**
 * @file common
 * @date 2025-07-05
 */

import React from 'react';
import Image from 'next/image';
interface Props {
  imgSrc: string;
  title: string;
}
const ComponentName = (props: Props) => {
  return (
    <div className="">
      <Image src={props.imgSrc} alt="home" layout="fill" />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   text-white  text-center">
        {props.title}
      </h1>
    </div>
  );
};

ComponentName.propTypes = {};

export default ComponentName;
