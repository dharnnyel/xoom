import React from 'react'

type RecordingProps = {}

const Recordings: React.FC<RecordingProps> = (props) => {
  return (
		<section className='flex size-full flex-col gap-10 text-white'>
			<h1 className='text-3xl font-bold'>Recordings</h1>
		</section>
	);
}

export default Recordings