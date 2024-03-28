import project1 from "../assets/postoblog.JPG";
import project2 from "../assets/project2.JPG";
import project3 from "../assets/project3.JPG";
import project4 from "../assets/project4.jpg";
import ProjectCard from "../components/UI/ProjectCard";
export default function ProjectsContent() {
  return (
    <div className="h-[20rem]">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <ProjectCard
            title="Post-O-Blog"
            description="A dynamically updating blogging website along with Markdown
          support."
            techstack="NodeJS, ExpressJS, MongoDB, EJS, Google OAuth, Bootstrap"
            imgSrc={project1}
            liveUrl="https://post-o-blog.up.railway.app/"
            codeUrl="https://github.com/saloni-15/POST-O-BLOG"
          />
          <ProjectCard
            title="Project Manager"
            description="An app to manage multiple projects by adding to do tasks for each project."
            techstack="ReactJS, Tailwind CSS"
            imgSrc={project2}
            liveUrl="https://project-management-app-react.netlify.app/"
            codeUrl="https://github.com/saloni-15/project-management-app-react"
          />
        </div>

        <div className="flex flex-row">
          <ProjectCard
            title="Nextlevel Food"
            description="Platform to share your favorite recipes and browse recipes added by others."
            techstack="NextJS, CSS"
            imgSrc={project3}
            liveUrl="https://github.com/saloni-15/nextlevel-food"
            codeUrl="https://github.com/saloni-15/nextlevel-food"
          />
          <ProjectCard
            title="LinkedIn Automate"
            description="Script to automate multiple connection requests with personalized note."
            techstack="Python, Selenium Webdriver"
            imgSrc={project4}
            liveUrl="https://drive.google.com/file/d/1oujsEjAmKIoeEYQTS_dIphZhjnL_fFtZ/view?usp=sharing"
            codeUrl="https://github.com/saloni-15/linkedin-connection-request-automate"
          />
        </div>
      </div>
    </div>
  );
}
