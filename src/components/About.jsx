import React from "react";
import TeamCard from "./TeamCard";

const About = () => {
  return (
    <section id="about" className="mb-[40vh]">
      <header className="hero_header">
        <h1 className="head_text"><span className="orange_gradient">About</span> Us</h1>
        <h2 className="desc mb-4">
          ScholarSphere: Where the convergence of learning and enjoyment
          unfolds! Experience the art of generating captivating knowledge and
          imagery, a process that transmutes intricate concepts into visually
          enthralling compositions. Embark on a journey into the realm of
          interactive learning, where education becomes an immersive and
          delightful visual symphony. Elevate comprehension, awaken
          inquisitiveness, and embrace the forefront of Educational Technology
          with ScholarSphere.
        </h2>
      </header>
      <h1 className="head_text">Team</h1>
      <div className="flex justify-between">
        <TeamCard
          name="Aman Kumar Singh"
          bio="Final Year Student | Passionate about React and TypeScript"
          githubUrl="https://github.com/iamansingh0"
          insta="https://www.instagram.com/iaman._1/"
          linkedin="https://www.linkedin.com/in/aman-kumar-singh-08b2b220b/"
          img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        />
        <TeamCard
          name="Japmann Kaur Banga"
          bio="Tech Student | Always learning and growing, always coding"
          githubUrl="https://github.com/JapmannKaur"
          insta="https://www.instagram.com/japmann3003/"
          linkedin="https://www.linkedin.com/in/japmann-kaur-banga-43962b1bb/"
          img="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
        />
      </div>
    </section>
  );
};

export { About };
