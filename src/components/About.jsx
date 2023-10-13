import React from "react";
import TeamCard from "./TeamCard";

const About = () => {
  return (
    <section id="about" className="mb-[40vh]">
      <header className="hero_header">
        <h1 className="head_text">About Us</h1>
        <h2 className="desc mb-24">
        ScholarSphere: Where the convergence of learning and enjoyment unfolds! Experience the art of generating captivating knowledge and imagery, a process that transmutes intricate concepts into visually enthralling compositions. Embark on a journey into the realm of interactive learning, where education becomes an immersive and delightful visual symphony. Elevate comprehension, awaken inquisitiveness, and embrace the forefront of Educational Technology with ScholarSphere.
        </h2>
      </header>
      <div className="flex justify-between">
      <TeamCard name="Aman Kumar Singh" bio="bio" githubUrl="https://github.com/iamansingh0" insta="https://www.instagram.com/iaman._1/" linkedin="https://www.linkedin.com/in/aman-kumar-singh-08b2b220b/" img="https://react.semantic-ui.com/images/avatar/large/matthew.png"/>
      <TeamCard name="Japmann Kaur Banga" bio="bio" githubUrl="url" insta="https://www.instagram.com/iaman._1/" linkedin="https://www.linkedin.com/in/aman-kumar-singh-08b2b220b/" img="https://react.semantic-ui.com/images/avatar/large/matthew.png"/>
      </div>
    </section>
  );
};

export { About };
