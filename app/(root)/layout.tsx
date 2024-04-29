import React from 'react';
import { LayoutProps } from '@/types';
import StreamVideoProvider from '@/providers/StreamClientProvider';

const RootLayout: React.FC<LayoutProps> = ({
	children,
}) => {
	return (
		<main>
			<StreamVideoProvider>{children}</StreamVideoProvider>
		</main>
	);
};

export default RootLayout;
