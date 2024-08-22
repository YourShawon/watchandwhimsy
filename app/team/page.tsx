import image1 from "@/public/uploads/2.jpg";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
  const data = [
    {
      name: "Anamul Hoque",
      image: image1,
      title: "Developer",
      media: {
        twitter: "https://x.com/anamulhoque_wd",
        instagram: "#",
        linkdIn: "#",
        github: "#",
      },
    },
    {
      name: "Anamul Hoque",
      image: image1,
      title: "Developer",
      media: {
        twitter: "https://x.com/anamulhoque_wd",
        instagram: "#",
        linkdIn: "#",
        github: "#",
      },
    },
    {
      name: "Anamul Hoque",
      image: image1,
      title: "Developer",
      media: {
        twitter: "https://x.com/anamulhoque_wd",
        instagram: "#",
        linkdIn: "#",
        github: "#",
      },
    },
    {
      name: "Anamul Hoque",
      image: image1,
      title: "Developer",
      media: {
        twitter: "https://x.com/anamulhoque_wd",
        instagram: "#",
        linkdIn: "#",
        github: "#",
      },
    },
    {
      name: "Anamul Hoque",
      image: image1,
      title: "Developer",
      media: {
        twitter: "https://x.com/anamulhoque_wd",
        instagram: "#",
        linkdIn: "#",
        github: "#",
      },
    },
    {
      name: "Anamul Hoque",
      image: image1,
      title: "Developer",
      media: {
        twitter: "https://x.com/anamulhoque_wd",
        instagram: "#",
        linkdIn: "#",
        github: "#",
      },
    },
    {
      name: "Anamul Hoque",
      image: image1,
      title: "Developer",
      media: {
        twitter: "https://x.com/anamulhoque_wd",
        instagram: "#",
        linkdIn: "#",
        github: "#",
      },
    },
  ];

  return (
    <div>
      <div className="sm:container flex flex-col gap-12 mt-20 xs:mt-12">
        <div className="xl:w-2/4 xs:w-[90%] sm:w-3/4 m-auto text-center gap-2 flex justify-center items-center flex-col">
          <h2 className="xl:text-4xl font-bold sm:text-xl xs:text-xl md:text-2xl text-gray-800">
            Our Amazing Team
          </h2>
          <p className="sm:text-base  xs:text-[14px] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex justify-between items-center gap-y-8 flex-wrap">
          {data.map((item, i) => (
            <div
              key={i}
              className="xl:w-[23%] group xs:w-full sm:w-[48%] md:w-[31%]"
            >
              <div className="xl:w-full hover:opacity-100 hover:visible relative xl:h-[320px] sm:h-[400px] md:h-[370px] overflow-hidden flex justify-center transition-all items-center">
                <Image
                  src={item.image}
                  alt="Anam"
                  className="h-full w-auto max-w-none object-cover"
                />

                <ul className="absolute bottom-8 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out flex items-center gap-1">
                  <Link href={item.media.twitter} target="_blank">
                    <li className="w-8 h-8 bg-white border border-[#0000001e] rounded-full flex justify-center items-center transition-opacity duration-500 delay-200">
                      <TwitterLogoIcon
                        color="#000"
                        fill="#000"
                        width={20}
                        height={20}
                      />
                    </li>
                  </Link>
                  <Link href={item.media.linkdIn} target="_blank">
                    <li className="w-8 h-8 bg-white border border-[#0000001e] rounded-full flex justify-center items-center transition-opacity duration-500 delay-200">
                      <LinkedInLogoIcon
                        color="#000"
                        fill="#000"
                        width={20}
                        height={20}
                      />
                    </li>
                  </Link>
                  <Link href={item.media.github} target="_blank">
                    <li className="w-8 h-8 bg-white border border-[#0000001e] rounded-full flex justify-center items-center transition-opacity duration-500 delay-200">
                      <GitHubLogoIcon
                        color="#000"
                        fill="#000"
                        width={20}
                        height={20}
                      />
                    </li>
                  </Link>
                  <Link href={item.media.instagram} target="_blank">
                    <li className="w-8 h-8 bg-white border border-[#0000001e] rounded-full flex justify-center items-center transition-opacity duration-500 delay-200">
                      <InstagramLogoIcon
                        color="#000"
                        fill="#000"
                        width={20}
                        height={20}
                      />
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="pl-3 border-[#808080] xs:mx-3 sm:mx-0 my-4 border-l-2">
                <h2 className="text-base font-medium text-gray-800">
                  {item.name}
                </h2>
                <h4 className="text-gray-600">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
