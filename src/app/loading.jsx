import Image from 'next/image'

const Loading = () => {
  return (
    <div className='mt-16 flex justify-center'>
      <Image className='h-52' src='/spinner.svg' alt='loading spinner' width={200} height={200}/>
    </div>
  )
}

export default Loading