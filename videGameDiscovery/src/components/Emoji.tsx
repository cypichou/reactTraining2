import { ImageProps, Image } from "@chakra-ui/react";
import bulleyes from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbs from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbs, alt: "recommanded", boxSize: "25px" },
    5: { src: bulleyes, alt: "exceptionnal", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={2} />;
};

export default Emoji;
