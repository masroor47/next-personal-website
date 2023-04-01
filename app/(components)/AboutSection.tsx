import { getPostData } from "@/lib/posts"

import AboutMe from './aboutMe.mdx';


// export async function getStaticProps({ params }: any) {
//   console.log("IN THE ASYNC FUNC")
//   const postData = await getPostData("aboutMe");
  

//   return {
//     props: {
//       postData,
//     }
//   }
// }

// async function getData() {
//   const res = await fetch('../../lib/aboutMe.md')
// }

export default async function AboutSection({ postData }: any) {


  // const aboutMe = await getPostData('aboutMe');

  return (
    <div className="p-4 my-2">
      <h1 className="text-2xl font-bold">About Me:</h1>

      <AboutMe />

      {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}

    </div>
  )
}