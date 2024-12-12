import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";

import "@formatjs/intl-pluralrules/polyfill";
import "@formatjs/intl-pluralrules/locale-data/en";
import "@formatjs/intl-pluralrules/locale-data/vi";

import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/vi";

import { getFlattenedMessages } from "../utils/languageUtils";

const messages = getFlattenedMessages();

const IntlProviderWrapper = (props) => {
  const language = useSelector((state) => state.app.language);

  return (
    <IntlProvider
      locale={language}
      messages={messages[language]}
      defaultLocale="en"
    >
      {props.children}
    </IntlProvider>
  );
};

export default IntlProviderWrapper;
