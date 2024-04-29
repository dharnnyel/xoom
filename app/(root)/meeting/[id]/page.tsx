'use client';

// import { MeetingRoom, MeetingSetup } from '@/components';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import Loader from '@/components/Loader';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import {
	StreamCall,
	StreamTheme,
} from '@stream-io/video-react-sdk';
import React, { useState } from 'react';

type MeetingProps = {
	params: {
		id: string;
	};
};

const Meeting: React.FC<MeetingProps> = ({
	params: { id },
}) => {
	const { user, isLoaded } = useUser();
	const [isSetupComplete, setIsSetupComplete] =
		useState(false);

	const { call, isCallLoading } = useGetCallById(id);

	if (!isLoaded || isCallLoading) return <Loader />;

	return (
		<main className='h-screen w-full'>
			<StreamCall call={call}>
				<StreamTheme>
					{!isSetupComplete ? (
						<MeetingSetup
							setIsSetupComplete={setIsSetupComplete}
						/>
					) : (
						<MeetingRoom />
					)}
				</StreamTheme>
			</StreamCall>
		</main>
	);
};

export default Meeting;
