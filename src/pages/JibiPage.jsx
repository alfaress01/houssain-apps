import { Link } from 'react-router-dom';

const contentByLanguage = {
  ar: {
    dir: 'rtl',
    subtitle: 'تطبيق إدارة المصروفات الذكي',
    pageTitle: 'مرحباً بك في تطبيق Jibi',
    intro: 'تطبيق مجاني وسهل الاستخدام لإدارة مصروفاتك الشخصية بذكاء وفعالية',
    cards: [
      { title: '📊 إحصائيات مفصلة', text: 'تقارير وإحصائيات شاملة لمساعدتك في فهم أنماط الإنفاق' },
      { title: '🌍 دعم متعدد اللغات', text: 'يدعم العربية والإنجليزية والإسبانية والفرنسية' },
      { title: '💾 نسخ احتياطي آمن', text: 'احفظ بياناتك واستعدها بسهولة وأمان' },
      { title: '🎨 واجهة عصرية', text: 'تصميم جميل وسهل الاستخدام' },
      { title: '🔒 خصوصية تامة', text: 'جميع بياناتك محفوظة محلياً على جهازك' },
      { title: '📱 مجاني بالكامل', text: 'تطبيق مجاني مع إعلانات غير مزعجة' },
    ],
    featuresTitle: 'تطبيق جيبي - المزايا',
    features: [
      'سجل وراقب مصروفاتك اليومية.',
      'قارن بين مصاريفك لآخر 3 أشهر.',
      'تنبيه عند اقترابك من تجاوز ميزانيتك.',
      'نسخ احتياطي للحفاظ على بياناتك.',
      'تسجيل بياناتك كملف PDF.',
      'أرشيف لمصاريفك على مدى الشهور والسنوات.',
      'أربع لغات رئيسية: العربية والإنجليزية والإسبانية والفرنسية.',
      'نصائح مالية عملية وذكية.',
    ],
    highlight:
      '💡 تطبيق جيبي دليلك العملي لمعرفة أين تضيع أموالك، وبالتالي ستتمكن من تسيير مصاريفك بل والتوفير أيضا.',
    downloadTitle: 'حمل التطبيق الآن',
    homeLabel: 'العودة إلى الصفحة الرئيسية',
    googlePlayLabel: '📱 Google Play Store',
    appInfoTitle: 'معلومات التطبيق',
    versionLabel: 'الإصدار',
    developerLabel: 'المطور',
    appIdLabel: 'معرف التطبيق',
    privacyLabel: 'سياسة الخصوصية',
    supportLabel: 'الدعم الفني',
    copyright: '© 2025 Jibi Expense Tracker. جميع الحقوق محفوظة.',
  },
  en: {
    dir: 'ltr',
    subtitle: 'Smart Expense Management App',
    pageTitle: 'Welcome to Jibi App',
    intro: 'A free and easy-to-use app to manage your personal expenses smartly and efficiently',
    cards: [
      { title: '📊 Detailed Statistics', text: 'Comprehensive reports and statistics to help you understand your spending habits' },
      { title: '🌍 Multilingual Support', text: 'Supports Arabic, English, Spanish, and French' },
      { title: '💾 Secure Backup', text: 'Save and restore your data easily and safely' },
      { title: '🎨 Modern Interface', text: 'Beautiful design and easy-to-use experience' },
      { title: '🔒 Full Privacy', text: 'All your data is stored locally on your device' },
      { title: '📱 Completely Free', text: 'A free app with non-intrusive ads' },
    ],
    featuresTitle: 'Jibi App - Features',
    features: [
      'Record and track your daily expenses.',
      'Compare your expenses over the last 3 months.',
      'Get alerts when you are close to exceeding your budget.',
      'Create backups to protect your data.',
      'Export your data as a PDF file.',
      'Keep an archive of your expenses by month and year.',
      'Four main languages: Arabic, English, Spanish, and French.',
      'Receive practical and smart financial tips.',
    ],
    highlight:
      '💡 Jibi is your practical guide to discovering where your money goes, helping you manage expenses better and save more.',
    downloadTitle: 'Download the App Now',
    homeLabel: 'Back to Home',
    googlePlayLabel: '📱 Google Play Store',
    appInfoTitle: 'App Information',
    versionLabel: 'Version',
    developerLabel: 'Developer',
    appIdLabel: 'App ID',
    privacyLabel: 'Privacy Policy',
    supportLabel: 'Support',
    copyright: '© 2025 Jibi Expense Tracker. All rights reserved.',
  },
  es: {
    dir: 'ltr',
    subtitle: 'Aplicación inteligente para gestionar gastos',
    pageTitle: 'Bienvenido a la aplicación Jibi',
    intro: 'Una aplicación gratuita y fácil de usar para gestionar tus gastos personales de forma inteligente y eficaz',
    cards: [
      { title: '📊 Estadísticas Detalladas', text: 'Informes y estadísticas completas para ayudarte a entender tus hábitos de gasto' },
      { title: '🌍 Soporte Multilingüe', text: 'Compatible con árabe, inglés, español y francés' },
      { title: '💾 Copia de Seguridad Segura', text: 'Guarda y restaura tus datos de forma fácil y segura' },
      { title: '🎨 Interfaz Moderna', text: 'Diseño atractivo y experiencia fácil de usar' },
      { title: '🔒 Privacidad Total', text: 'Todos tus datos se guardan localmente en tu dispositivo' },
      { title: '📱 Completamente Gratis', text: 'Aplicación gratuita con anuncios no intrusivos' },
    ],
    featuresTitle: 'Aplicación Jibi - Características',
    features: [
      'Registra y controla tus gastos diarios.',
      'Compara tus gastos de los últimos 3 meses.',
      'Recibe alertas cuando estés cerca de superar tu presupuesto.',
      'Crea copias de seguridad para proteger tus datos.',
      'Exporta tus datos en formato PDF.',
      'Mantén un archivo de tus gastos por meses y años.',
      'Cuatro idiomas principales: árabe, inglés, español y francés.',
      'Obtén consejos financieros prácticos e inteligentes.',
    ],
    highlight:
      '💡 Jibi es tu guía práctica para descubrir a dónde se va tu dinero, para que puedas gestionar mejor tus gastos y ahorrar más.',
    downloadTitle: 'Descarga la aplicación ahora',
    homeLabel: 'Volver a la página principal',
    googlePlayLabel: '📱 Google Play Store',
    appInfoTitle: 'Información de la aplicación',
    versionLabel: 'Versión',
    developerLabel: 'Desarrollador',
    appIdLabel: 'ID de la aplicación',
    privacyLabel: 'Política de privacidad',
    supportLabel: 'Soporte',
    copyright: '© 2025 Jibi Expense Tracker. Todos los derechos reservados.',
  },
  fr: {
    dir: 'ltr',
    subtitle: 'Application intelligente de gestion des dépenses',
    pageTitle: "Bienvenue dans l'application Jibi",
    intro: 'Une application gratuite et facile à utiliser pour gérer vos dépenses personnelles de manière intelligente et efficace',
    cards: [
      { title: '📊 Statistiques Détaillées', text: 'Rapports et statistiques complets pour vous aider à comprendre vos habitudes de dépenses' },
      { title: '🌍 Support Multilingue', text: 'Prend en charge l’arabe, l’anglais, l’espagnol et le français' },
      { title: '💾 Sauvegarde Sécurisée', text: 'Sauvegardez et restaurez vos données facilement et en toute sécurité' },
      { title: '🎨 Interface Moderne', text: 'Un design élégant et une utilisation simple' },
      { title: '🔒 Confidentialité Totale', text: 'Toutes vos données sont stockées localement sur votre appareil' },
      { title: '📱 Entièrement Gratuit', text: 'Application gratuite avec des publicités non gênantes' },
    ],
    featuresTitle: 'Application Jibi - Fonctionnalités',
    features: [
      'Enregistrez et suivez vos dépenses quotidiennes.',
      'Comparez vos dépenses des 3 derniers mois.',
      'Recevez une alerte lorsque vous approchez de votre budget maximal.',
      'Créez des sauvegardes pour protéger vos données.',
      'Exportez vos données au format PDF.',
      'Conservez un historique de vos dépenses par mois et par année.',
      'Quatre langues principales : arabe, anglais, espagnol et français.',
      'Profitez de conseils financiers pratiques et intelligents.',
    ],
    highlight:
      '💡 Jibi est votre guide pratique pour comprendre où va votre argent, afin de mieux gérer vos dépenses et d’épargner davantage.',
    downloadTitle: "Téléchargez l'application maintenant",
    homeLabel: "Retour à l'accueil",
    googlePlayLabel: '📱 Google Play Store',
    appInfoTitle: "Informations sur l'application",
    versionLabel: 'Version',
    developerLabel: 'Développeur',
    appIdLabel: "ID de l'application",
    privacyLabel: 'Politique de confidentialité',
    supportLabel: 'Support',
    copyright: '© 2025 Jibi Expense Tracker. Tous droits réservés.',
  },
};

const languageLinks = [
  { code: 'ar', label: 'العربية', path: '/jibi' },
  { code: 'en', label: 'English', path: '/jibi/en' },
  { code: 'es', label: 'Español', path: '/jibi/es' },
  { code: 'fr', label: 'Français', path: '/jibi/fr' },
];

const JibiPage = ({ language = 'ar' }) => {
  const content = contentByLanguage[language] ?? contentByLanguage.ar;
  const isRtl = content.dir === 'rtl';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] font-sans text-[#333] py-10" dir={content.dir}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center text-white mb-10">
          <img
            src={`${import.meta.env.BASE_URL}images/logo_jibi_app.png`}
            alt="Jibi Logo"
            className="w-24 h-24 mx-auto mb-4 rounded-2xl shadow-lg"
          />

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {languageLinks.map((lang) => {
              const isActive = lang.code === language;

              return (
                <Link
                  key={lang.code}
                  to={lang.path}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-white text-[#667eea] shadow-md'
                      : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'
                  }`}
                >
                  {lang.label}
                </Link>
              );
            })}
          </div>

          <h1 className="text-5xl font-bold mb-2 drop-shadow-md">Jibi Expense Tracker</h1>
          <p className="text-xl opacity-90">{content.subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-2xl mb-8 relative">
          <Link
            to="/"
            aria-label={content.homeLabel}
            className="absolute top-5 left-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#667eea] text-[#667eea] hover:bg-[#667eea] hover:text-white transition-colors duration-300"
          >
            ←
          </Link>

          <h2 className="text-center text-[#667eea] text-2xl font-bold mb-8">{content.pageTitle}</h2>

          <p className="text-center text-lg mb-8">{content.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {content.cards.map((card) => (
              <div key={card.title} className="text-center p-5 rounded-xl bg-gray-50 border border-gray-200">
                <h3 className="text-[#667eea] text-xl font-bold mb-4">{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 shadow-xl border border-gray-100 mb-12 ${isRtl ? 'text-right' : 'text-left'} relative overflow-hidden`}>
            <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} w-2 h-full bg-blue-500`}></div>
            <h3 className="text-blue-600 text-3xl font-extrabold mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">✨</span> {content.featuresTitle}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700 mb-8">
              {content.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300"
                >
                  <span className={`text-green-500 text-xl mt-1 ${isRtl ? 'ml-3' : 'mr-3'}`}>✔</span>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-xl font-semibold text-blue-900 bg-blue-50 p-6 rounded-xl leading-relaxed border border-blue-100 shadow-inner">
              {content.highlight}
            </p>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-xl font-bold mb-5">{content.downloadTitle}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.jibi.spanish_expense_tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-8 py-4 rounded-full text-lg font-medium hover:-translate-y-1 transition-transform duration-300"
              >
                {content.googlePlayLabel}
              </a>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-200">
            <h3 className="text-[#667eea] text-lg font-bold mb-4">{content.appInfoTitle}</h3>
            <p><strong>{content.versionLabel}:</strong> 1.0.3+7</p>
            <p><strong>{content.developerLabel}:</strong> Houssain</p>
            <p><strong>{content.appIdLabel}:</strong> com.jibi.spanish_expense_tracker</p>
          </div>
        </div>

        <div className="text-center text-white opacity-80 mt-10">
          <p className="mb-2">
            <Link to="/jibi/privacy" className="underline mx-2 hover:text-white">{content.privacyLabel}</Link> |
            <a href="mailto:support@jibi.app" className="underline mx-2 hover:text-white">{content.supportLabel}</a>
          </p>
          <p>{content.copyright}</p>
        </div>
      </div>
    </div>
  );
};

export default JibiPage;
