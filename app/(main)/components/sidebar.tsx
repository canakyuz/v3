import NavItem from "@/components/nav-item";
import SocialMedia from "@/components/social-media";

const Sidebar = () => {
  return (
    <div className="lg:fixed lg:w-2/6 lg:top-0 lg:bottom-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24 py-16 px-8">
      <div className="h-full flex flex-col w-full">
        <div className="flex flex-col flex-1 h-full w-full justify-between">
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="md:text-5xl text-3xl font-bold">Can Akyuz</h1>
            </div>
            <div>
              <h2 className="md:text-xl text-base font-medium text-slate-700">
                Software Engineer
              </h2>
            </div>
            <div>
              <p className="text-sm text-slate-500">
                Experienced front end software engineer focused on building
                accessible products for the web
              </p>
            </div>
          </div>
          <nav className="hidden lg:block">
            <NavItem href="#about" name="About" />
            <NavItem href="#experience" name="Experience" />
            <NavItem href="#projects" name="Project" />
          </nav>
          <div className="lg:mt-0 mt-16">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* <div className="">
  
</div>; */
}
