'use client';

import { cn } from '@/lib/utils';
import {
	CallParticipantsList,
	PaginatedGridLayout,
	SpeakerLayout,
} from '@stream-io/video-react-sdk';
import React, { useState } from 'react';
type CallLayout = 'grid' | 'speaker-left' | 'speaker-right';

type MeetingRoomProps = {};

const MeetingRoom: React.FC<MeetingRoomProps> = props => {
	const [layout, setLayout] =
		useState<CallLayout>('speaker-left');
	const [showParticipants, setShowParticipants] =
		useState(false);

	const CallLayout = () => {
		switch (layout) {
			case 'grid':
				return <PaginatedGridLayout />;
				break;
			case 'speaker-right':
				return (
					<SpeakerLayout participantsBarPosition='left' />
				);
				break;
			default:
				return (
					<SpeakerLayout participantsBarPosition='right' />
				);
		}
	};

	return (
		<section className='relative h-screen w-full overflow-hidden pt-4 text-white'>
			<div className='relative flex size-full items-center justify-center'>
				<div className='flex size-full max-w-[1000px] items-center'>
					<CallLayout />
				</div>
				<div
					className={cn(
						'h-[calc(100vh-86px)] hidden ml-2',
						{
							'show-block': showParticipants,
						}
					)}
				>
					<CallParticipantsList onClose={() => setShowParticipants(false)} />
				</div>
			</div>
		</section>
	);
};

export default MeetingRoom;
