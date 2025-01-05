import defaultBackground from "../assets/who-we-are@2x_2x.jpg";
import classes from "./Hero.module.css";

function Hero({ title, background }: { title: string; background?: string }) {
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
      </div>
   );
}

export default Hero;
