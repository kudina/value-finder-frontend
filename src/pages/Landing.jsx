import BannerLand from "../components/BannerLand";
import Description from "../components/Description";
import FindOpportunity from "../components/FindOpportunity";
import FindSkill from "../components/FindSkill";
import SkillCat from "../components/SkillCat";

const Landing = () => {
  return (
    <div>
      <BannerLand />
      <SkillCat />
      <FindSkill />
      <Description />
      <FindOpportunity />
    </div>
  );
};

export default Landing;
