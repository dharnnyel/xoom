import React from 'react';

type MeetingProps = {
	params: {
		id: string;
	};
};

const Meeting: React.FC<MeetingProps> = ({
	params: { id },
}) => {
	return <div>Meeting</div>;
};

export default Meeting;
