'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
const WebIcon = () => {
    const router = useRouter();
    return ( 
    <div>
        <Image
      onClick={() => router.push('/')}
      className="block md:hidden cursor-pointer" 
      src="/images/icon.png" 
       
      height="50" 
      alt="Logo" 
        />
    </div> );
}
 
export default WebIcon;
