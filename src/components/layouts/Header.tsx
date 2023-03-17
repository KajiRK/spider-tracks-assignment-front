import * as React from 'react';
import { Disclosure } from '@headlessui/react'

const Header: React.FunctionComponent = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2">
            <div className="relative flex h-16 items-center">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <span className="text-white text-2xl">Customer Relationship Management</span>
                </div>
              </div>
            </div>
        </div>
    </Disclosure>
  );
};

export default Header;
