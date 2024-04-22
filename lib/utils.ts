import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type DateTime = {
	time: string;
	date: string;
}

// Function to format time
const formatTime = (date: Date): string => {
	// Get hours, minutes, and AM/PM
	let hours: number = date.getHours();
	const minutes: number = date.getMinutes();
	const ampm: string = hours >= 12 ? 'PM' : 'AM';

	// Convert hours to 12-hour format
	hours = hours % 12;
	hours = hours ? hours : 12;

	// Return formatted time string
	return `${hours}:${minutes
		.toString()
		.padStart(2, '0')}${ampm}`;
}

// Function to format date
const formatDate = (date: Date): string => {
	// Define arrays for days and months
	const days: string[] = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const months: string[] = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	// Get day, date, month, and year
	const day: string = days[date.getDay()];
	const dateOfMonth: number = date.getDate();
	const month: string = months[date.getMonth()];
	const year: number = date.getFullYear();

	// Return formatted date string
	return `${day}, ${dateOfMonth} ${month}, ${year}`;
}

const getCurrentDateTime = (): DateTime => {
	// Get current date and time
	const now: Date = new Date();

	// Format time
	const formattedTime: string = formatTime(now);

	// Format date
	const formattedDate: string = formatDate(now);

	// Return formatted time and date
	return {
		time: `${formattedTime}`,
		date: `${formattedDate}`,
	};
}

export {
  getCurrentDateTime,
}
