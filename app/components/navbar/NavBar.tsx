'use client'
import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import WebIcon from "./WebIcon";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface NavBarProps {
    currentUser?: SafeUser | null;
}

const NavBar: React.FC<NavBarProps> = ({
    currentUser
}) => {
    
    return ( 
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div
                className="
                 py-4 
                 border-b-[1px]
                         "
            >
                <Container>
                    <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
                    >
                        <Logo className="hidden lg:block" />
                        <WebIcon className="block lg:hidden" />
                        <Search />
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>

           </div>
           <Categories />
        </div>
     );
}
 
export default NavBar;
