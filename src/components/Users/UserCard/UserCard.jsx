import { theme } from "../../../theme";
import styled from "styled-components";

const ProfileImg = styled.div`
  background: url(${({ user }) => user.avatar_url});
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  background-size: contain;
  width: 100%;
  height: 100%;
  outline: ${theme.outline};
  border-radius: 50%;
  padding: 15px;
  background-origin: content-box;
`;

const UserCard = ({ user }) => {
  const altText = `profile of ${user.username}`;
  return (
    <>
      <section
        style={{
          display: "flex",
          width: "20vh",
          height: "20vh",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <ProfileImg user={user} alt={altText} />
      </section>
      <section
        style={{
          backgroundColor: theme.primaryLight,
          padding: "1px",
          borderRadius: "10px"
        }}
      >
        <p style={{color: "white", fontWeight: "bold"}}>{user.username}</p>
        <p style={{color: "white"}}>{user.name}</p>
      </section>
    </>
  );
};

export default UserCard;
