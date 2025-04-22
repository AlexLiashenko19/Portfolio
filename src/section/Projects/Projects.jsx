import ProjectCard from "../../common/ProjectCard";
import styles from "./Projects.Styles.module.css";
import cinemania from "../../assets/viberr.png";
import fitnes from "../../assets/fitlift.png";
import twitti from "../../assets/icons8-x-twitti-250.png";
import chat from "../../assets/live-chat.png";
import aqua from "../../assets/aqua-track.png";
import game from "../../assets/game-2048.png";
import todo from "../../assets/to-do-list.png";
import music from "../../assets/music-store.png";
import crm from "../../assets/free-icon-crm-2464106.png";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={game}
          link="https://alexliashenko19.github.io/2048-Game/"
          h3="2048 Game"
          a="2048 Game"
          links="https://github.com/AlexLiashenko19/2048-Game"
        />
        <ProjectCard
          src={todo}
          link="https://alexliashenko19.github.io/Todo-App/"
          h3="Todo App App"
          p="Todo App App"
          links="https://github.com/AlexLiashenko19/Todo-App"
        />
        <ProjectCard
          src={twitti}
          link="https://twitti.onrender.com/profile/Alex"
          h3="Social Media App"
          p="Social Media App"
          links="https://github.com/AlexLiashenko19/Twitti"
        />
        <ProjectCard
          src={aqua}
          link="https://aqua-track-project.netlify.app/"
          h3="Aqua Track"
          p="Aqua Track"
          links="https://github.com/BurglachOK/aqua-track-project-back"
        />
        <ProjectCard
          src={cinemania}
          link="https://andre29839.github.io/error-404_team_name_not_found/"
          h3="Cinemania"
          p="Cinema App"
          links="https://github.com/Andre29839/error-404_team_name_not_found"
        />
        <ProjectCard
          src={chat}
          link="https://chat-c2gt.onrender.com"
          h3="Chat-App"
          p="Chat-App"
          links="https://github.com/AlexLiashenko19/Chat"
        />
        <ProjectCard
          src={crm}
          link="https://crm-psi-seven.vercel.app/dashboard"
          h3="Crm"
          p="Crm App"
          links="https://github.com/AlexLiashenko19/CRM"
        />
        <ProjectCard
          src={music}
          link="https://alexliashenko19.github.io/Landing-Page/"
          h3="SoundNest  App"
          p="SoundNest  App"
          links="https://github.com/AlexLiashenko19/Landing-Page"
        />
        <ProjectCard
          src={fitnes}
          link="https://fitness-application-azure.vercel.app/"
          h3="Fitnes App"
          p="Fitnes App"
          links="https://github.com/AlexLiashenko19/Fitness-Application"
        />
      </div>
    </section>
  );
};

export default Projects;
