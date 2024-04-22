import React from 'react';

import { Navbar, Sidebar } from '@/components/index';
import { LayoutProps } from '@/types';

const HomeLayout: React.FC<LayoutProps> = ({
	children,
}) => {
	return (
		<main className='relative'>
			<Navbar />
			<div className='flex'>
				<Sidebar />
				<section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-10'>
					<div className='w-full'>{children}</div>
				</section>
			</div>
		</main>
	);
};

export default HomeLayout;
