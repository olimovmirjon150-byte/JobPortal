import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="container mx-auto p-3 border-b">
        <div className="flex items-center justify-center gap-220">
            <img src="/logo.svg" alt="JobPortal Logo" width={160} />
            <div className="flex justify-center items-center gap-4">
                <p className="mt-2">Home</p>
                <p className="mt-2">Jobs</p>
                <Button className="px-3 py-3 rounded-3 hover:bg-blue-700! transition-all">Post a Job</Button>
            </div>
        </div>
    </div>
  );
};

export default Header;