'use client';

import React, { useEffect, useState } from 'react';

import { getCurrentDateTime } from '@/lib/utils';
import MeetingTypeList from '@/components/MeetingTypeList';

type Props = {};

const Home = (props: Props) => {
	const dateTime = getCurrentDateTime();

	const [currentTime, setCurrentTime] = useState(
		getCurrentDateTime().time
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(getCurrentDateTime().time);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<section className='flex size-full flex-col gap-10 text-white'>
			<div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
				<div className='flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-10'>
					<h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
						Upcoming Meeting at 12:30pm
					</h2>
					<div className='flex flex-col gap-1'>
						<h1 className='text-4xl font-extrabold lg:text-7xl'>
							{currentTime}
						</h1>
						<p className='text-lg font-medium text-sky-1 lg:text-2xl'>
							{/* Saturday,23 March 2024 */}
							{dateTime.date}
						</p>
					</div>
				</div>
			</div>

			<MeetingTypeList />
		</section>
	);
};

export default Home;
