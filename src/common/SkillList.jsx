const SkillList = ({ icon, skill }) => {
  return (
    <span>
      <img src={icon} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
};

export default SkillList;
