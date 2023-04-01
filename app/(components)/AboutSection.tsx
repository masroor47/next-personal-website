
import AboutMe from './aboutMe.mdx';


export default async function AboutSection({ postData }: any) {

  return (
    <div className="p-4 my-2">
      <h1 className="text-2xl font-bold my-2">About Me:</h1>

      <AboutMe />

    </div>
  )
}