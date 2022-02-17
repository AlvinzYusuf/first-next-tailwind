import React from "react";

function ProjectItem({ name, descirption, image }) {
  return (
    <article>
      <img src={image} className="w-full rounded-lg" />
      <h3 className="text-xl font-semibold mt-4 mb-1">{name}</h3>
      <p className="text-lg text-gray-400">{descirption}</p>
    </article>
  );
}

export default ProjectItem;
