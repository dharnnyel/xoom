import React from 'react';
import { MeetingModalProps } from '@/types';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

const MeetingModal: React.FC<MeetingModalProps> = ({
	isOpen,
	onClose,
	title,
	buttonText,
	className,
	handleClick,
	children,
}) => {
	return <div>MeetingModal</div>;
};

export default MeetingModal;
