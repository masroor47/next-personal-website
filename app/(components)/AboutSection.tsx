
import AboutMe from './aboutMe.mdx';


export default function AboutSection({ postData }: any) {

  return (
    <div className="p-4 my-2">
      <h1 className="text-2xl my-2">About Me:</h1>

      <AboutMe />

    </div>
  )
}