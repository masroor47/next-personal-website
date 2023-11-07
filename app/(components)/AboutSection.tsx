import Image from 'next/image';
import SocialLinks from './SocialLinks';



export default function AboutSection() {

  return (
    <div className="p-4 mb-4 h-[400px] flex justify-center items-center">

      <div className='flex h-min'>
        <Image
          className='mr-4'
          src="/images/profile/masroor-sde-city.jpg"
          width={200}
          height={200}
          alt="Masroor picture"
        />

        <div className='mt-4'>
          <h1 className='text-3xl'>Masroor Khonkhodzhaev</h1>
          <h1 className='text-sm'>Software Engineering / Data Analysis</h1>
          <div>
            <h1>B.S. Physics</h1>
            <h1>B.A. Computer Science</h1>
          </div>

          <SocialLinks />
        </div>
      </div>

    </div>
  )
}