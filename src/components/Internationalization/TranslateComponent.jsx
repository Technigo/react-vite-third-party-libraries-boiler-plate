import { useTranslation } from "react-i18next";

export const TranslateComponent = () => {
  const { t, i18n } = useTranslation();

  // Function to change the language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("text")}</p>
      <div className="internationalization-wrapper">
        <button onClick={() => changeLanguage("en")}>English</button>
        <br />
        <button onClick={() => changeLanguage("es")}>Español</button>
        <br />
        <button onClick={() => changeLanguage("sv")}>Svenska</button>
      </div>
    </div>
  );
};
