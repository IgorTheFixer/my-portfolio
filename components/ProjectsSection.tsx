import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Trillion Troves",
    description:
      "Trillion Troves is an e-commerce store built using Next and Tailwind.",
    image: "/trillion-troves-screenshot.png",
    github: "https://github.com/IgorTheFixer/trillion-troves",
    link: "https://trillion-troves.vercel.app/",
  },
  {
    name: "Admin DashBoard (Trillion Troves)",
    description:
      "The Admin Dashboard is a custom-built content management system for the products sold on Trillion Troves. Interesed users can also create their on stores for use on a frontend of their choice. Features include Next, Tailwind, Prisma, MySQL, ReCharts, and, Stripe.",
    image: "/admin-dashboard-charts-screenshot.png",
    github: "https://github.com/IgorTheFixer/admin-dashboard-commerce",
    link: "https://admin-dashboard-commerce.vercel.app/",
  },
  {
    name: "NextFlix",
    description:
      "Nextflix is an attempt to mimic the basic functionality of the streaming platform Netflix.",
    image: "/nextflix-image.png",
    github: "https://github.com/IgorTheFixer/next-netflix-clone",
    link: "https://nextflixx.vercel.app",
  },
  {
    name: "Boston Code and Coffee's Official Website",
    description:
      "A volunteer project that I led for the nonprofit group: Boston Code and Coffee",
    image: "/code-and-coffee-screenshot.png",
    github: "https://github.com/CodeandCoffeeCommunity/boston-code-and-coffee",
    link: "https://boston-code-and-coffee-test.vercel.app/",
  },
  {
    name: "Personal Planner",
    description: "Personal Planner is a to do list app that built using Next.JS and Tailwind.",
    image: "/planner-image.png",
    github: "https://github.com/IgorTheFixer/personal-planner/",
    link: "https://personal-planner-two.vercel.app",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt="image of featured project"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection