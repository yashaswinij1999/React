import Profile from "./Profile";
import { getImageUrl } from "./utils";

export default function Gallery() {
  return (
    <div>
      <Profile
        imageid={"szV5sdG"}
        name={"Maria Skłodowska-Curie"}
        width={70}
        height={70}
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        profession={" physicist and chemist"}
        discovery={"polonium (chemical element)"}
      />
      <Profile
        imageid={"YfeOqp2"}
        name={"Katsuko Saruhashi"}
        width={70}
        height={70}
        awards={[
          "Miyake Prize for geochemistry",
          "Tanaka Prize",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        profession={" geochemist"}
        discovery={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}
