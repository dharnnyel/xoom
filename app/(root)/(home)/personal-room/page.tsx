import React from 'react'

type PersonalRoomProps = {}

const PersonalRoom: React.FC<PersonalRoomProps> = (props) => {
  return (
		<section className='flex size-full flex-col gap-10 text-white'>
			<h1 className='text-3xl font-bold'>Personal Room</h1>
		</section>
	);
}

export default PersonalRoom