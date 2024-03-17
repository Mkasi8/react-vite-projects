const BtnContainer = ({ user, setItem, currentItem }) => {
  return (
    <>
      <div className="btn-container">
        {user.map((item, ind) => {
          return (
            <button
              key={item.id}
              onClick={() => setItem(() => ind)}
              className={currentItem === ind ? "act-btn" : "single-btn"}
            >
              {item.company}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default BtnContainer;
