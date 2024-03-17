import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  const [currentItem, setItem] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="center">
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <div className="all-container">
      <BtnContainer user={user} setItem={setItem} currentItem={currentItem} />
      <JobInfo user={user} currentItem={currentItem} />
    </div>
  );
}

export default App;
