import { SignIn } from '@clerk/nextjs';
import React from 'react';

type SignInPageProps = {};

const SignInPage: React.FC<SignInPageProps> = props => {
	return (
		<main className='flex h-screen w-full items-center justify-center'>
			<SignIn path='/sign-in' />
		</main>
	);
};

export default SignInPage;
