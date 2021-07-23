import ProductItem from "../components/ProjectItem";
import { WORK_SECTION } from "../constants/sections";
import styles from "./WorkScreen.module.css";

export default function WorkScreen() {
  const ecommerceText =
    "This is a e-commerce website that I did as a project to learn more about building with MERN stack, Mongo, E, React and Node.";
  const portfolioText =
    "Do you want to know how I build this portfolio websites? The source code is available on my github.";
  const algorithmsText =
    "This is a small project exploring sorting algorithms. Visit this project to see how it works.";
  const quietZoneText =
    "Quiet Zone is a mobile application created with React Native. This application puts the mobile on quiet mode, when the user is on a location where the user wishes not to be disturbed. ";

  return (
    <div id={WORK_SECTION} className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>MY</h1>
        <h1 className={styles.blue}>PROJECTS</h1>
      </div>

      <ProductItem>
        <ProductItem.Header label="Green" number="01" />
        <ProductItem.SubHeader label="01 Green" />
        <ProductItem.Text
          text={ecommerceText}
          link="https://github.com/sandrasmrekar/green-ecommerce"
        />
      </ProductItem>

      <ProductItem>
        <ProductItem.Header label="Algorithms" number="02" />
        <ProductItem.SubHeader label="02 Algorithms" />
        <ProductItem.Text
          text={algorithmsText}
          link="https://github.com/sandrasmrekar/sorting-algorithms"
        />
      </ProductItem>

      <ProductItem>
        <ProductItem.Header label="Quiet Zone" number="03" />
        <ProductItem.SubHeader label="03 Quiet Zone" />
        <ProductItem.Text
          text={quietZoneText}
          link="https://github.com/sandrasmrekar/QuietZone"
        />
      </ProductItem>

      <ProductItem>
        <ProductItem.Header label="Portfolio" number="04" />
        <ProductItem.SubHeader label="04 Portfolio" />
        <ProductItem.Text
          text={portfolioText}
          link="https://github.com/sandrasmrekar/portfolio"
        />
      </ProductItem>
    </div>
  );
}
