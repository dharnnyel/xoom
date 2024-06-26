import React from 'react';
import DisplayLinks from './DisplayLinks';

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = ({}) => {
	return (
		<div className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
			<div className='flex flex-1 flex-col gap-6'>
				<DisplayLinks />
			</div>
		</div>
	);
};

export default Sidebar;
