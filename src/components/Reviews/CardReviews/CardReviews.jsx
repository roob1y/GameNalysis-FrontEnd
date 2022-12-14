import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = styled.li`
  width: 100%;
  display: grid;
  grid-template-areas:
    "title"
    "designer"
    "gameImg"
    "owner"
    "created_at votes";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto auto;
  align-items: center;

  margin: 10px 10px;
  height: auto;
  outline: ${({ theme }) => theme.outline};
  border-radius: 20px;
  background: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 1) 0%,
    hsla(36, 100%, 65%, 1) 43%
  );
  background-image: linear-gradient(
    to bottom left,
    #ffb74d 70%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 0 0 12px rgba(0, 0, 0, 1);
  padding: 20px;
  backdrop-filter: "blur(10px)";

  :hover {
    box-shadow: 0 0 12px 7px ${({ theme }) => theme.primaryHover};
  }

  h3 {
    font-size: 1.5em;
  }

  & h3,
  & h4,
  & h5 {
    color: ${({ theme }) => theme.textDark};
  }
`;

const linkStyle = {
  margin: "0.5em",
  textDecoration: "none",
  color: "blue",
  display: "flex",
  flexWrap: "wrap",
  flex: "0 0 30%",
};

const CardReviews = ({ review }) => {
  return (
    <Link style={linkStyle} to={`/review/${review.review_id}`}>
      <ReviewCard className="reviewCards grid">
        <div className="gridItem g1">
          <h3>{review.title}</h3>
        </div>
        <div className="gridItem g2">
          <h4 className="owner">Reviewed by: {review.owner}</h4>
        </div>
        <div className="gridItem g3">
          <img
            className="gameImg"
            src={review.review_img_url}
            alt={review.title}
          />
        </div>
        <div className="gridItem g4">
          <h4>Designed by {review.designer}</h4>
        </div>
        <div className="gridItem g5">
          <FontAwesomeIcon style={{color: "black"}} size={"lg"} icon={faComment} />
          <h5>comments: {review.comment_count}</h5>
        </div>
        <div className="gridItem g6">
        <FontAwesomeIcon style={{color: "black"}} size={"lg"} icon={faThumbsUp} />

          <h5>Upvotes: {review.votes}</h5>
        </div>
      </ReviewCard>
    </Link>
  );
};

export default CardReviews;
