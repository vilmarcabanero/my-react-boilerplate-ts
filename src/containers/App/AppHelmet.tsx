import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function AppHelmet() {
  const { i18n } = useTranslation();
  return (
    <Helmet
      titleTemplate="%s - Fiona"
      defaultTitle="Fiona"
      htmlAttributes={{ lang: i18n.language }}
    >
      <meta name="description" content="A Fiona application" />
    </Helmet>
  );
}
