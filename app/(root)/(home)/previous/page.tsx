import React from 'react'

type PreviousProps = {}

const Previous: React.FC<PreviousProps> = (props) => {
  return (
		<section className='flex size-full flex-col gap-10 text-white'>
			<h1 className='text-3xl font-bold'>Previous</h1>
		</section>
	);
}

export default Previous