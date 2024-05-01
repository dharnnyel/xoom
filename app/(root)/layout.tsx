import React from 'react';
import { LayoutProps } from '@/types';
import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'XOOM',
	description: 'Video calling platform',
	icons: {
		icon: '/icons/logo.svg',
	},
};

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
