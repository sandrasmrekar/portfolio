import ProductItem from "../components/ProjectItem";
import { WORK_SECTION } from "../constants/sections";
import styles from "./WorkScreen.module.css";
// TODO: Visa projekt på ett snyggt sätt, kanske bildspel eller använda nummer sidomenu som finns på figma.
export default function WorkScreen() {
  const text =
    "This is a e-commerce website that I did as a project to learn more about building with MERN stack, Mongo, E, React and Node.";
  const portfolioText =
    "Do you want to know how I build this portfolio websites? The source code is available on my github.";
  return (
    <div id={WORK_SECTION} className={styles.container}>
      <ProductItem>
        <ProductItem.Header label="Green" number="01" />
        <ProductItem.SubHeader label="01 Green" />
        <ProductItem.Text
          text={text}
          link="https://github.com/sandrasmrekar/green-ecommerce"
        />
      </ProductItem>

      <ProductItem linkTo="https://sandrasmrekar.github.io/sorting-algorithms/">
        <ProductItem.Header label="Algorithms" number="02" />
        <ProductItem.SubHeader label="02 Algorithms" />
        <ProductItem.Text
          text={text}
          link="https://github.com/sandrasmrekar/sorting-algorithms"
        />
      </ProductItem>

      <ProductItem>
        <ProductItem.Header label="Quiet Zone" number="03" />
        <ProductItem.SubHeader label="03 Quiet Zone" />
        <ProductItem.Text
          text={text}
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
