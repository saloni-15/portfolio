import SkillsTitle from "../components/UI/SkillsTitle";
import c from "../assets/c2.svg";
import cpp from "../assets/cpp.svg";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import javascript from "../assets/javascript2.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import next from "../assets/next.svg";
import springboot from "../assets/springboot2.svg";
import sql from "../assets/sql2.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import jira from "../assets/jira2.svg";
import confluence from "../assets/confluence.svg";
import postman from "../assets/postman.svg";
import vscode from "../assets/vscode.svg";
import selenium from "../assets/selenium.svg";

import SkillIcon from "../components/UI/SkillIcon";

export default function SkillsContent() {
  return (
    <>
      <div className="h-[20rem]">
        <SkillsTitle title="Tech Stack" />
        {/*tech stack*/}
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <SkillIcon icon={c} title="C" />
            <SkillIcon icon={cpp} title="C++" />
            <SkillIcon icon={java} title="Java" />
            <SkillIcon icon={python} title="Python" />
            <SkillIcon icon={javascript} title="Javascript" />
            <SkillIcon icon={html} title="HTML" />
            <SkillIcon icon={css} title="CSS" />
          </div>
          <div className="flex flex-row items-center justify-between mb-8">
            <SkillIcon icon={react} title="ReactJS" />
            <SkillIcon icon={node} title="NodeJS" />
            <SkillIcon icon={express} title="ExpressJS" />
            <SkillIcon icon={mongodb} title="MongoDB" />
            <SkillIcon icon={next} title="NextJS" />
            <SkillIcon icon={springboot} title="Springboot" />
            <SkillIcon icon={sql} title="MySQL" />
          </div>
        </div>
        <SkillsTitle title="Dev Tools" />
        <div className="flex flex-row items-center justify-between mb-4">
          <SkillIcon icon={git} title="Git" />
          <SkillIcon icon={github} title="Github" />
          <SkillIcon icon={postman} title="Postman" />
          <SkillIcon icon={jira} title="Jira" />
          <SkillIcon icon={confluence} title="Confluence" />
          <SkillIcon icon={selenium} title="Selenium" />
          <SkillIcon icon={vscode} title="VS Code" />
        </div>
      </div>
    </>
  );
}
