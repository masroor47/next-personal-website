'use client';

import Image from "next/image";
import mailIcon from './social-icons/mail.svg'
import siteMetadata from "../data/siteMetadata";
import { useState } from "react";

export default function EmailIcon() {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    navigator.clipboard.writeText(siteMetadata.email);
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 2000);
  }


  return (
    <div 
      className='p-2 hover:cursor-pointer'
      onClick={handleClick}
    >
      {clicked ? (
        <div>copied</div>
      ) : (
        <Image
          priority
          src={mailIcon}
          width={24}
          alt="LinkedIn Link"
        />
      )}
      
    </div>
  )
}