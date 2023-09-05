import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const NavBar = async () => {
  const session = await getServerSession(options);

  const userImage = session?.user?.image ? (
    <div className=" h-full flex justify-start items-center" >
      <Image
        className=" rounded-full"
        src={session?.user?.image}
        width={50}
        height={50}
        alt={session?.user?.name ?? "Profile Pic"}
        priority={true}
      />
    </div>
  ) : null;

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={138}
            height={18}
            className="object-contain"
          />
        </Link>
        {session ? (
          <div className="flex flex-row gap-4 justify-center items-center ">
            {userImage}
            <Link href="/api/auth/signout">
              <CustomButton title="SIGN OUT" />
            </Link>
          </div>
        ) : (
          <div>
            <Link href="/api/auth/signin">
              <CustomButton title="SIGN IN" />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
