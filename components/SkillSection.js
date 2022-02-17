import React from "react";
import Sectiontitle from "./Sectiontitle";
import SectionSubTitle from "./SectionSubTitle";
import SkillCard from "./SkillCard";
function SkillSection() {
  return (
    <section className="py-28 bg-primarygray" id="skill">
      <div className="container mx-auto px-10 2xl:px-0">
        <Sectiontitle>Skills</Sectiontitle>
        <SectionSubTitle>Beberapa kemampuan saya.</SectionSubTitle>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="React JS"
              level="Menengah"
              image="/react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="React JS"
              level="Menengah"
              image="/react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="React JS"
              level="Menengah"
              image="/react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
