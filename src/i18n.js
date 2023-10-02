import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      text: "Pizza is universally loved, and for good reason. Its delightful combination of a crispy crust, tangy sauce, melted cheese, and various toppings offers a symphony of flavors in every bite. Whether you're a fan of classic margherita, pepperoni, or even pineapple, there's a pizza out there for everyone. It's the perfect food for gatherings, celebrations, or just a cozy night in.",
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a nuestro sitio web!",
      text: "La pizza es universalmente amada, y por una buena razón. Su deliciosa combinación de una masa crujiente, salsa picante, queso derretido y varios ingredientes ofrece una sinfonía de sabores en cada bocado. Ya sea que seas fanático de la margarita clásica, pepperoni o incluso piña, hay una pizza para todos. Es la comida perfecta para reuniones, celebraciones o simplemente una noche acogedora en casa.",
    },
  },
  sv: {
    translation: {
      welcome: "Välkommen till vår webbplats!",

      text: "Pizza är universellt älskad, och av goda skäl. Dess underbara kombination av en krispig skorpa, syrlig sås, smält ost och olika pålägg erbjuder en symfoni av smaker i varje tugga. Oavsett om du är ett fan av klassisk margherita, pepperoni eller till och med ananas finns det en pizza för alla. Det är den perfekta maten för sammankomster, firanden eller bara en mysig kväll hemma.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
