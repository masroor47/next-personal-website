import Image from 'next/image';
import EmailIcon from './EmailIcon';
import githubIcon from './social-icons/github.svg'
import linkedinIcon from './social-icons/linkedin.svg'

export default function SocialLinks() {

  return (
    <div className='flex'>

      <a 
        target="_blank"
        className='p-2'
        href="https://github.com/masroor47">
        <Image
          priority
          src={githubIcon}
          alt="GitHub link"
        />
      </a>

      <a 
        target="_blank"
        className='p-2'
        href="https://linkedin.com/in/masroor-k">
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