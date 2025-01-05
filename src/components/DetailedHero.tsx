import { PropsWithChildren } from "react";
import defaultBackground from "../assets/who-we-are@2x_2x.jpg";
import classes from "./DetailedHero.module.css";

interface DetailedHeroProps {
   title: string;
   description: string;
   background?: string;
}

function DetailedHero({
   title,
   description,
   background,
   children,
}: PropsWithChildren<DetailedHeroProps>) {
   return (
      <div
         className={classes.hero}
         style={{
            backgroundImage: `url(${
               background ? background : defaultBackground
            })`,
         }}
      >
         <h1>{title}</h1>
         <p>{description}</p>
         <div>{children}</div>
      </div>
   );
}

export default DetailedHero;
