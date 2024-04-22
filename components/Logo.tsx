import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { LogoProps } from '@/types';

const Logo: React.FC<LogoProps> = ({textStyles}) => {
	return (
		<Link
			href='/'
			className='flex items-center gap-1'
		>
			<Image
				src='/icons/logo.svg'
				width={32}
				height={32}
				alt='Xoom logo'
				className='max-sm:size-10'
			/>
			<p className={textStyles}>
				Xoom
			</p>
		</Link>
	);
};

export default Logo;
