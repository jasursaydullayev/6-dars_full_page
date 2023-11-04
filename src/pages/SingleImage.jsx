import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { useGlobalContext } from "../hook/useGlobalContext";

function SingleImage() {
  const data = useGlobalContext();
  console.log(data);
  const { id } = useParams();
  const url = `https://api.unsplash.com/photos/${id}?client_id=${
    import.meta.env.VITE_APP_ACCESS_KEY
  }`;

  const { data: image, isPending, error } = useFetch(url);

  console.log(image);

  return (
    <div>
      {image && (
        <>
          <img src={image.urls.regular} alt="" height={500} />
          <div className="description">
            <h2>Description: </h2>
            <p>{image.description || "No Description"}</p>
          </div>
          <div className="user">
            <img
              className="profile_image"
              src={image.user.profile_image.large}
              alt=""
            />
            <div className="user__name">
              <p>
                {" "}
                <strong>Name:</strong>
                {image.user.name}
              </p>
              <p>
                <strong>Location:</strong>
                {image.user.location
                  ? image.user.location
                  : "No Yet Location😔"}
              </p>
              <p className="bio">
                <strong>Bio:</strong>
                {image.user.bio || "He or She has not Bio🙂"}
              </p>
            </div>
            <h1>Likes {image.likes} 😍 </h1>
          </div>
        </>
      )}
    </div>
  );
}
export default SingleImage;
