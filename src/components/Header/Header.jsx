import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { useState, useRef } from "react";
import { Burger, Menu } from "../Header/BurgerMenu";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  Profile,
  NavProfile,
  ProfileSignOut,
  ProfileUserName,
} from "./Header.styled";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const { loggedUser, setLoggedUser } = useContext(UserContext);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <HeaderContainer ref={node}>
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <Menu open={open} id={menuId} />
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Link>
      {loggedUser ? (
        <Profile>
          <NavProfile
            onClick={() => setLoggedUser(null)}
            loggedUser={loggedUser}
            alt={`user profile picture of ${loggedUser.username}`}
          >
            <ProfileSignOut style={{}}>Sign Out</ProfileSignOut>
          </NavProfile>
          <ProfileUserName>{loggedUser.username}</ProfileUserName>
        </Profile>
      ) : null}
    </HeaderContainer>
  );
};

export default Header;
