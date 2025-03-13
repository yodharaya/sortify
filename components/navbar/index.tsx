import { twMerge } from "tailwind-merge";
import Logo from "./logo";
import ProfilePicture from "./profile-picture";
import Notification from "./notification";

export default function Navbar() {
  return (
    <nav className={twMerge("w-full", "flex flex-row justify-between items-center")}>

      <Logo size={120} />
      <div className={twMerge("flex flex-row items-center gap-x-5")}>
        <Notification size={25} />
        <ProfilePicture size={40} />
      </div>

    </nav>
  )
}
