/**
 * @file header
 * @date 2025-07-05
 */
'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
const linkData = [
  {
    name: 'Performance',
    href: '/Performance',
  },
  {
    name: 'Reliability',
    href: '/Reliability',
  },
  {
    name: 'Scale',
    href: '/Scale',
  },
];
const pathList = ['/', '/Performance', '/Reliability', '/Scale'];
const Header = () => {
  const pathname = usePathname();
  const activeIndex = pathList.findIndex((item) => item === pathname);
  if (activeIndex === -1) return null;
  return (
    <div className="absolute w-full flex justify-between items-center  p-8">
      <Link href="/" className="text-white text-2xl hover:text-purple-300 z-10">
        Home
      </Link>
      <div className="z-10">
        {linkData.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="text-white text-2xl ml-8 hover:text-purple-300 "
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
