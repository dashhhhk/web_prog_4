import RectangleB from "../assets/img/RectangleB.svg";
import Rectangle1 from "../assets/img/Rectangle1.svg";
import Rectangle2 from "../assets/img/Rectangle2.svg";
import Rectangle3 from "../assets/img/Rectangle3.svg";
import Rectangle4 from "../assets/img/Rectangle4.svg";

const blogImages = {
  1: { src: RectangleB, alt: "Иллюстрация статьи о GPT-4 и Openai" },
  2: { src: Rectangle1, alt: "Иллюстрация статьи о GPT-4 и Openai" },
  3: { src: Rectangle2, alt: "Иллюстрация статьи о GPT-4 и Openai" },
  4: { src: Rectangle3, alt: "Иллюстрация статьи о GPT-4 и Openai" },
  5: { src: Rectangle4, alt: "Иллюстрация статьи о GPT-4 и Openai" }
};

const blogData = {
    title: "Многое Происходит,<br>Мы Ведем об Этом Блог.",
    posts: [
        {
            id: 1,
            date: "Сентябрь 26, 2021",
            title: "GPT-4 и Openai – это будущее. Давайте разберемся, как это?",
            isMain: true
        },
        {
            id: 2,
            date: "Сентябрь 26, 2021", 
            title: "GPT-4 и Openai – это будущее. Давайте разберемся, как это?",
            isMain: false
        },
        {
            id: 3,
            date: "Сентябрь 26, 2021",
            title: "GPT-4 и Openai – это будущее. Давайте разберемся, как это?",
            isMain: false
        },
        {
            id: 4,
            date: "Сентябрь 26, 2021",
            title: "GPT-4 и Openai – это будущее. Давайте разберемся, как это?",
            isMain: false
        },
        {
            id: 5,
            date: "Сентябрь 26, 2021", 
            title: "GPT-4 и Openai – это будущее. Давайте разберемся, как это?",
            isMain: false
        }
    ]
};

export default blogData;
export { blogImages };