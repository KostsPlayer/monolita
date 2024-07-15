import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faReadme,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGavel,
  faInfo,
  faQuestion,
  faBookOpenReader,
  faFaceLaughBeam,
  faLightbulb,
  faHandHoldingHeart,
  faRightFromBracket,
  faBars,
  faPlay,
  faTrophy,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const libraryIcon = library.add(
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faGavel,
  faInfo,
  faQuestion,
  faBookOpenReader,
  faFaceLaughBeam,
  faLightbulb,
  faHandHoldingHeart,
  faRightFromBracket,
  faBars,
  faCircleXmark
);

function Icons() {
  return libraryIcon;
}

export default Icons;
