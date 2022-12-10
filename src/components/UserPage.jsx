import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import UserCard from "../components/UserCard";
import { UserContext } from "../contexts/User";
import PageNotFound from "./Error/PageNotFound";

const UserPage = () => {
  const { setLoggedUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setErr(null);
    setIsLoading(true);
    getUsers()
      .then(({ users }) => {
        setIsLoading(false);
        setUsers(users);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  if (err) {
    return <PageNotFound status={err.response.status} />;
  }
  if (!isLoading) {
    return (
      <>
        <h1>Welcome!</h1>
        <section
          style={{
            display: "inline-flex",
            justifyContent: "space-around",
            width: "85%",
          }}
        >
          {users.map((user) => (
            <div
              onClick={() => setLoggedUser(user.username)}
              key={user.name}
              style={{ width: "20vh", backgroundColor: "gray" }}
            >
              <UserCard user={user}></UserCard>
            </div>
          ))}
        </section>
      </>
    );
  } else {
    <p>is loading...</p>;
  }
};

export default UserPage;
