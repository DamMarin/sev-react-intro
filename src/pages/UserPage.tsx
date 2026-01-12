import {useParams} from "react-router";
import {useEffect} from "react";

const UserPage = () => {
  const { userId } = useParams();

  useEffect(() => {
    document.title = `User id: ${userId}`;
  }, [userId]);

  return (
    <>
      <h1 className="text-center mt-8"> User id: {userId}</h1>
    </>
  )
}

export default UserPage;