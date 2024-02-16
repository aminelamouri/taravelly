'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
    const router = useRouter();
    return ( 
    <div>
        <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/logo.png"
      width="200" 
      alt="Logo" 
        />
    </div> );
}
 
export default Logo;
