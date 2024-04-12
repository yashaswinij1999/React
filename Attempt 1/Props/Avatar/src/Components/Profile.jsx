import { getImageUrl } from "./utils";

export default function Profile({
  imageId,
  name,
  width,
  height,
  awards,
  profession,
  discovery,
}) {
  return (
    <>
      <h1>Notable Scientist</h1>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId)}
          alt={name}
          width={width}
          height={height}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b>
            {awards.join()}
          </li>

          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
    </>
  );
}
