import React from 'react';
import MobileNav from './MobileNav';
import Logo from './Logo';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
	return (
		<nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 '>
			<Logo textStyles='text-[26px] font-extrabold text-white max-sm:hidden' />

			<div className='flex-between gap-5'>
				{/* TODO: CLERK USER MANAGEMENT */}

				<MobileNav />
			</div>
		</nav>
	);
};

export default Navbar;
