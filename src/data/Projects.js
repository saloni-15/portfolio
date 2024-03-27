import project1 from "../assets/postoblog.JPG";
import project2 from "../assets/project2.JPG";
import Button from "../components/UI/Button";
export default function ProjectsContent() {
  return (
    <div className="h-[20rem]">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="project-card w-1/2 bg-light-blue bg-opacity-15 m-2">
            <div className="overlay h-60 flex flex-row items-center justify-center">
              <Button buttonText="Code" />
              <Button buttonText="Live">demo</Button>
            </div>
            <a href="/" className="flex flex-row blur-in">
              <img
                className="w-1/2 h-60 rounded-r-[20px] object-cover"
                src={project1}
                alt="image1"
              />
              <div className="ml-4 mt-4">
                <p className="font-semibold text-xl">Title</p>
                <p className="mt-4">
                  A dynamically updating blogging website along with Markdown
                  support.
                </p>
                <p>
                  <button>github</button>
                </p>
              </div>
            </a>
          </div>

          <div className="w-1/2 bg-light-blue bg-opacity-15 m-2">
            <a href="/" className="flex flex-row">
              <img
                className="w-1/2 h-60 rounded-r-[20px] object-cover"
                src={project2}
                alt="image1"
              />
              <div>
                <p>Title</p>
                <p>lorem jfldjfal dfjalf alfjasl fjafd lfjslfjslfs</p>
                <p>
                  <button>github</button>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 bg-light-blue bg-opacity-15 m-2">
            <a href="/" className="flex flex-row">
              <img
                className="w-1/2 h-60 rounded-r-[20px] object-cover"
                src={project1}
                alt="image1"
              />
              <div>
                <p>Title</p>
                <p>lorem jfldjfal dfjalf alfjasl fjafd lfjslfjslfs</p>
                <p>
                  <button>github</button>
                </p>
              </div>
            </a>
          </div>
          <div className="w-1/2 bg-light-blue bg-opacity-15 m-2">
            <a href="/" className="flex flex-row">
              <img
                className="w-1/2 h-60 rounded-r-[20px] object-cover"
                src={project1}
                alt="image1"
              />
              <div>
                <p>Title</p>
                <p>lorem jfldjfal dfjalf alfjasl fjafd lfjslfjslfs</p>
                <p>
                  <button>github</button>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
