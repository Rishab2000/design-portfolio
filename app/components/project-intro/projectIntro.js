import React from "react";
import { Divider, Image} from "@nextui-org/react";

const ProjectIntro = (props) => {
  return (
    <div className="pb-20 w-full">
      <div className="w-full flex flex-col md:flex-row items-center content-center gap-10 mt-20 mb-28">
        <div className="md:w-6/12 ">
          <h1 className="text-text-primary">
            {props.title}
          </h1>

          <div className="flex flex-row mt-3text-text-helper">
            <p className="label" >{props.miniDesc.role} </p>
            <span>{props.miniDesc.firstSegment ? <p>&nbsp;|&nbsp;</p> : ""}</span>
            <p className="label">{props.miniDesc.firm}</p>
            <p>{props.miniDesc.secondSegment ? <p>&nbsp;|&nbsp;</p> : ""}</p>
            <p className="label">{props.miniDesc.duration}</p>
            {/* &nbsp;  */}
          </div>
        </div>
        <div className= {props.imageHeight + " w-6/12 h-auto overflow-hidden md:rounded-lg"}>
          <Image src={props.image} alt="temp" />
        </div>

      </div>
      <Divider />
    </div>
  );
};

export default ProjectIntro;
