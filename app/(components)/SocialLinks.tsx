import Image from 'next/image';
import EmailIcon from './EmailIcon';
import githubIcon from './social-icons/github.svg'
import linkedinIcon from './social-icons/linkedin.svg'
import siteMetadata from '../data/siteMetadata';

export default function SocialLinks() {

  return (
    <div className='flex'>

      <a 
        target="_blank"
        className='p-2'
        href={siteMetadata.github}>
        <Image
          priority
          src={githubIcon}
          alt="GitHub link"
        />
      </a>

      <a 
        target="_blank"
        className='p-2'
        href={siteMetadata.linkedin}>
        <Image
          priority
          src={linkedinIcon}
          alt="LinkedIn Link"
        />
      </a>

      <EmailIcon />

      
    </div>
  )
}