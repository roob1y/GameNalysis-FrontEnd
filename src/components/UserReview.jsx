import { Link, useParams } from "react-router-dom";
import { getUserReview } from "../utils/api";
import { useState, useEffect } from "react";
import { BsChevronLeft } from "react-icons/bs";

import UserCardReview from "./UserCardReview";
import Comments from "./Comments"

const UserReview = () => {
  const { reviewId } = useParams();
  const [userReview, setUserReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getUserReview(reviewId)
      .then(({ review }) => {
        setUserReview(review);
        setIsLoading(false);
      })
  }, [reviewId]);

  if (!isLoading) {
    return (
      <>
        <nav>
          <Link to="/">
            <BsChevronLeft title="Home Button" size="2em" />
          </Link>
        </nav>
        <main className="main">
          <h2>Reviewed By {userReview.owner}</h2>
          <UserCardReview userReview={userReview} />
          <Comments reviewId={userReview.review_id} />
        </main>
      </>
    );
  } else {
    return <p>is loading...</p>;
  }
};

export default UserReview;
