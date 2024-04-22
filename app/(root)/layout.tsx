import React from 'react';
import { LayoutProps } from '@/types';

const RootLayout: React.FC<LayoutProps> = ({
	children,
}) => {
  return <main>
    {children}
  </main>;
};

export default RootLayout;
