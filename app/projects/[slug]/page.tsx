import Image from 'next/image'
// import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import programmingProjects from '@/app/data/programmingProjects';
// const inter = Inter({ subsets: ['latin'] })


// export async function getSlug(params: any) {
//   const slug = params.slug;
//   return slug;
// }

export default async function SingleProject({ params }: any) {
  
  const slug = params.slug;
  const project = programmingProjects.find((curr) => curr.link === slug)


  return (
    <main>
      <div className='p-4'>
        <h1 className='text-xl font-semibold'>This is a Project Page for { slug }</h1>
        <p>Below is some info on how impressive it is lol</p>
      </div>
    </main>
  )
}
