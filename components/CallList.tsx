'use client';

import { useGetCalls } from '@/hooks/useGetCalls';
import { CallRecording } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type CallType = 'upcoming' | 'ended' | 'recordings';

type CallListProps = {
	type: CallType;
};

const CallList: React.FC<CallListProps> = ({ type }) => {
	const {
		endedCalls,
		callRecordings,
		upcomingCalls,
		isLoading,
	} = useGetCalls();

	const router = useRouter();

	const [recordings, setRecordings] =
		useState<CallRecording[]>([]);

	const getCalls = () => {
		switch (type) {
			case 'ended':
				return endedCalls;
				break;

			default:
				break;
		}
	};

	return <div>CallList</div>;
};

export default CallList;
