import React from "react";

const ProjectIntro = (props) => {
  return (
    <div className="w-full">
      <div className="mt-24 flex flex-col">
        <p className="font-avenir-roman text-title-colour text-2xl lg:text-4xl">
          {props.title}
        </p>
      </div>
      <div className="mt-8 font-avenir-roman text-base text-desc-colour">
        <p>{props.miniDesc.role} </p>
        <p>{props.miniDesc.firm}</p>
        <p>{props.miniDesc.duration}</p>
      </div>
      <div className="my-28 overflow-hidden md:rounded-lg">
        <img src={props.image} alt="temp" />
      </div>
    </div>
  );
};

export default ProjectIntro;
