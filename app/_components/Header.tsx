import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto p-3 border-b">
        <div className="flex items-center justify-center gap-220">
            <img src="/logo.svg" alt="JobPortal Logo" width={160} />
            <div className="flex justify-center items-center gap-4">
              <Link href="/">
                <p className="mt-2 cursor-pointer hover:text-blue-800!">Home</p>
              </Link>
              <Link href="/jobs">
                <p className="mt-2 cursor-pointer hover:text-blue-800!">Jobs</p>
              </Link>
              <Link href="/login">
                <Button className="px-3 py-3 rounded-3 hover:bg-blue-700! transition-all">Post a Job</Button>
              </Link>
            </div>
        </div>
    </div>
  );
};

export default Header;