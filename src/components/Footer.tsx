import { AiFillGithub } from 'react-icons/ai';

const socialLinks = [
    { href: "https://github.com/Sahasawat-Boss", Icon: AiFillGithub, label: "GitHub" },
];

export const Footer = () => {

    return (
        <footer className="py-8 mx-auto px-4">
            <div className="text-lg my-10 flex flex-col justify-center items-center gap-10 ">
                <p className="text-gray-200">
                    Create by Boss © 2025. All rights reserved.
                </p>

                <ul className="flex gap-5 flex-wrap">
                    {socialLinks.map(({ href, Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            aria-label={label}
                            className="text-gray-200 flex items-center justify-center w-12 h-12 rounded-full hover:text-gray-400 transition-colors hover:scale-125"
                        >
                            <Icon size={45} />
                        </a>
                    ))}
                </ul>
            </div>
        </footer>
    );
};