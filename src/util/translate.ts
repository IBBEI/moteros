
interface Locale {
    [key: string]: string;
} 
import en from '@locales/en.json';
import es from '@locales/es.json';
const lang = import.meta.env.WEBSITE_LANGUAGE;
export const t = (field: string): string => {
    const translations: Record<string, Locale>  = {
        en: en,
        es: es
    };

    if (translations[lang] && translations[lang][field]) {
        return translations[lang][field];
    }

    if (translations['en'] && translations['en'][field]) {
        return translations['en'][field];
    }

    if (translations['es'] && translations['es'][field]) {
        return translations['es'][field];
    }

    return field;
};