import sgs from "../../../Images/sgs.png";
import uob from "../../../Images/uob.png";
import sm from "../../../Images/sm.png";
import mary from "../../../Images/maryevans.gif";
import heed from "../../../Images/heed.jpg";

import HeedSummary from "./Heed";
import MaryEvansSummary from "./MaryEvans";
import SMarquees from "./SMarquees";
import Uob from "./Uob";
import Sgs from "./Sgs";

const summaryData = {
  sgs: {
    Summary: Sgs,
    image: sgs,
    title: "Steyning Sixth Form",
    job: "Student"
  },
  uob: {
    Summary: Uob,
    image: uob,
    title: "University Of Bristol - Physics",
    job: "Student"
  },
  sm: {
    Summary: SMarquees,
    image: sm,
    title: "Strawberry Marquees",
    job: "Marquee Erector"
  },
  maryEvans: {
    Summary: MaryEvansSummary,
    image: mary,
    title: "Mary Evans Picture Library",
    job: "IT Support / Web Developer"
  },
  heed: {
    Summary: HeedSummary,
    image: heed,
    title: "Heed Software",
    job: "Junior Software Developer"
  }
};
export default summaryData;
