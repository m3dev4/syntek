import { ModeToggle } from "@/components/provider/theme";
import { MobileNav } from "@/components/shared/MobileNav";
import { Sidebar } from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <div className="flex min-h-screen w-full flex-col lg:flex-row ">
      <Sidebar />
      <MobileNav />
      <div className="relative flex justify-center align-center top-2">
      
      </div>

      <main className="mt-16 flex-1 overflow-auto py-8 lg:mt-0 lg:max-h-screen lg:py-10">
        <div className="wrapper">{children}</div>
      </main>
      <Toaster />
    </div>
    </>
  );
};

export default Layout;
