const NavItem = ({
    href,
    name
}: {href: string, name: string}) => {
    return (
      <ul className="">
        <li className="">
          <a className="group flex flex-row mr-0 py-3" href={href}>
            <div className="flex flex-row content-center items-center">
              <span className="nav-indicator mr-4 h-[2px] w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-600 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-600 group-focus-visible:text-slate-600">
                {name}
              </span>
            </div>
          </a>
        </li>
      </ul>
    );
}
 
export default NavItem;