import styles from "./links.module.sass";
import DefaultLink from "@app/_components/buttons/defaultLink";
import { VercelSVG } from "@app/_components/svgs";

const Links = ({ isLight }) => {
  return (
    <div className={styles.links}>
      <DefaultLink
        link="https://vercel.com/new/clone?utm_source=next-site&utm_medium=banner&b=main&s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fnextjs&showOptionalTeamCreation=false&template=nextjs&teamCreateStatus=hidden&utm_campaign=showcase"
        light={isLight}
      >
        <VercelSVG height={14} />
        Deploy
      </DefaultLink>
      <DefaultLink
        link="https://nextjs.org/learn?utm_source=next-site&utm_medium=navbar&utm_campaign=home"
        light={!isLight}
      >
        Learn
      </DefaultLink>
    </div>
  );
};

export default Links;
