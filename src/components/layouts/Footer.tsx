import * as React from 'react';
import { Disclosure } from '@headlessui/react'

const Footer: React.FunctionComponent = () => {
  return (
    <Disclosure as="footer" className="bg-gray-100 bottom-0 fixed w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between text-sm">
          <div>Spider Tracks</div>
          <div>Assignment By Kaji RK</div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Footer;
