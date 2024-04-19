import { SignUp } from '@clerk/nextjs';
import React from 'react';

type SignUpPageProps = {};

const SignUpPage: React.FC<SignUpPageProps> = props => {
	return (
		<main className='flex h-screen w-full items-center justify-center'>
			<SignUp path='/sign-up' />
		</main>
	);
};

export default SignUpPage;
