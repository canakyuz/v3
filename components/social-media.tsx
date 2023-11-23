import Image from "next/image";
import Github from "../public/github.svg";
import Twitter from "../public/twitter.svg";
import Linkedin from "../public/linkedin.svg";
import Instagram from "../public/instagram.svg";

const SocialMedia = () => {
    return (
        <div className="flex flex-1 flex-row gap-6">
            <a className="block hover:text-slate-600 text-slate-400" href="https://github.com/canakyuz" target="_blank" rel="noreferrer">
                <Image src={Github} width={24} height={24} alt="Github" />
            </a>
            <a className="block hover:text-slate-600 text-slate-400" href="https://twitter.com/canakyuz" target="_blank" rel="noreferrer">
                <Image src={Twitter} width={24} height={24} alt="Twitter" />
            </a>
            <a className="block hover:text-slate-600 text-slate-400" href="https://www.linkedin.com/in/canakyuz/" target="_blank" rel="noreferrer">
                <Image src={Linkedin} width={24} height={24} alt="Linkedin" />
            </a>
            <a className="block hover:text-slate-600 text-slate-400" href="https://www.instagram.com/canakyuz/" target="_blank" rel="noreferrer">
                <Image src={Instagram} width={24} height={24} alt="Instagram" />
            </a>
        </div>
    );
}
 
export default SocialMedia;