import Image from "next/image"
import Link from "next/link"
// import profileImg from "@/public/profile-img.png"
import Capture from "@/public/Capture.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className=" w-20 md:w-16 rounded-full overflow-hidden  mr-2 md:mr-4">
            {/* <Image src={Capture} alt="CodeBucks logo" className="w-full h-auto rounded-full" sizes="20vw" priority /> */}
        </div>
        <span className="font-bold dark:font-semibold text-lg md:text-xl">Blogster</span>
    </Link>
  )
}

export default Logo