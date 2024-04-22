type LayoutProps = {
	children: React.ReactNode;
};

type LogoProps = {
	textStyles: string;
};

type HomeCardProps = {
	img: string;
	title: string;
	description: string;
	handleClick: () => void;
	className: string;
};

type MeetingModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	buttonText?: string;
	className?: string;
	handleClick?: () => void;
	children?: React.ReactNode;
	image?: string;
	buttonIcon?: string;
};

type meetingState =
	| 'isScheduledMeeting'
	| 'isJoiningMeeting'
	| 'isInstantMeeting'
	| undefined;

export {
  LayoutProps,
	LogoProps,
	HomeCardProps,
	MeetingModalProps,
	meetingState,
};
