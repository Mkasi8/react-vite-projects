import Duties from "./Duties";

const JobInfo = ({ user, currentItem }) => {
  const { company, dates, title, duties } = user[currentItem];
  return (
    <div className="job-info">
      <h3>{title}</h3>
      <span className="company-name">{company}</span>
      <p className="date">{dates}</p>
      <Duties duties={duties} />
    </div>
  );
};

export default JobInfo;
