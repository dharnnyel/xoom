'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';

type MeetingTypeListProps = {};
type meetingState =
	| 'isScheduledMeeting'
	| 'isJoiningMeeting'
	| 'isInstantMeeting'
	| undefined;

const MeetingTypeList: React.FC<
	MeetingTypeListProps
> = props => {
	const router = useRouter();

	const [meetingState, setMeetingState] =
		useState<meetingState>();

	return (
		<section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
			<HomeCard
				img='/icons/add-meeting.svg'
				title='New Meeting'
				description='Start an instant meeting'
				handleClick={() =>
					setMeetingState('isInstantMeeting')
				}
				className='bg-orange-1'
			/>
			<HomeCard
				img='/icons/join-meeting.svg'
				title='Join Meeting'
				description='via invitation link'
				handleClick={() =>
					setMeetingState('isJoiningMeeting')
				}
				className='bg-blue-1'
			/>
			<HomeCard
				img='/icons/schedule.svg'
				title='Schedule Meeting'
				description='Plan your meeting'
				handleClick={() =>
					setMeetingState('isScheduledMeeting')
				}
				className='bg-purple-1'
			/>
			<HomeCard
				img='/icons/Video.svg'
				title='View Recordings'
				description='Meeting recordings'
				handleClick={() => router.push('/recordings')}
				className='bg-yellow-1'
      />
      
      <MeetingModal />
		</section>
	);
};

export default MeetingTypeList;
