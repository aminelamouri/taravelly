'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
const WebIcon = () => {
    const router = useRouter();
    return ( 
    <div>
        <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/icon.png" 
       
      width="150" 
      alt="Logo" 
        />
    </div> );
}
 
export default WebIcon;
