'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type DisplayLinksProps = {};

const DisplayLinks: React.FC<DisplayLinksProps> = ({}) => {
	const pathname = usePathname();
	return (
		<>
			{sidebarLinks.map(link => {
				const isActive =
					pathname === link.route || pathname.startsWith(`${link.route}/`);

				return (
					<Link
						href={link.route}
						key={link.label}
						className={cn(
							'flex gap-4 items-center p-4 rounded-lg justify-start',
							{
								'bg-blue-1': isActive,
							}
						)}
					>
						<Image
							src={link.imgUrl}
							alt={link.label}
							width={24}
							height={24}
						/>
						<p className='text-lg font-semibold max-lg:hidden'>
							{link.label}
						</p>
					</Link>
				);
			})}
		</>
	);
};

export default DisplayLinks;

// flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto
