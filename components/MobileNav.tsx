'use client';

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type MobileNavProps = {};

const MobileNav: React.FC<MobileNavProps> = props => {
	const pathname = usePathname();

	return (
		<section className='w-full max-w-[264px]'>
			<Sheet>
				<SheetTrigger asChild>
					<Image
						src='/icons/hamburger.svg'
						width={36}
						height={36}
						alt='mobile menu'
						className='cursor-pointer sm:hidden'
					/>
				</SheetTrigger>
				<SheetContent
					side='left'
					className='border-none bg-dark-1'
				>
					<Logo textStyles='text-[26px] font-extrabold text-white' />
					<div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
						<SheetClose asChild>
							<section className='flex h-full flex-col gap-6 pt-16 text-white'>
								{sidebarLinks.map(link => {
									const isActive =
										pathname === link.route;

									return (
										<SheetClose
											asChild
											key={link.route}
										>
											<Link
												href={link.route}
												key={link.label}
												className={cn(
													'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
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
												<p className='font-semibold'>
													{link.label}
												</p>
											</Link>
										</SheetClose>
									);
								})}
							</section>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNav;