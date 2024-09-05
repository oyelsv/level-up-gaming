import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
};

function StorePage() {
  return (
    <div>
      <span>Products</span>
    </div>
  );
}

export default StorePage;

StorePage.displayName = 'StorePage';
