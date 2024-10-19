import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      navigation: {
        contact: "Contact"
      }
    },
    uz: {
      navigation: {
        contact: "Bog'lanish"
      }
    }
  }
})

export default i18n
