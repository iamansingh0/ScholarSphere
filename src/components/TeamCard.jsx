import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
// import 'semantic-ui-css/semantic.min.css'
import {BsGithub,BsLinkedin} from "react-icons/bs"
import {ImInstagram} from "react-icons/im"

function TeamCard(props) {
  const {name, bio, githubUrl, img, linkedin, insta} = props
  return (
    <div className="w-[20vw] rounded-[6px] shadow-lg">
      <div className="image">
        <img src={img} style={{ width: "20vw", height: "42vh" }} className="rounded-t-[6px]"/>
      </div>
      <div className="pt-3 pl-4 pb-2 pr-4">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-[#999999] text-sm">Student</div>
        <div className="mt-2">
          {bio}
        </div>
      </div>
      <hr></hr>
      <div className="pl-4 pt-2 pb-2 flex gap-3">
        <a href={githubUrl} target="_blank">
          <BsGithub size={25} color="#999999"/>
        </a>
        <a href={insta} target="_blank">
          <ImInstagram size={25} color="#999999"/>
        </a>
        <a href={linkedin} target="_blank">
          <BsLinkedin size={25} color="#999999"/>
        </a>
      </div>
    </div>
  );
}

export default TeamCard;
