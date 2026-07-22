import React from 'react';
import Header from '../components/Header';
import AppCard from '../components/AppCard';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

function Home() {
  const apps = [
    {
      id: 1,
      title: "Jibi Expense Tracker",
      description: "تطبيق مجاني وسهل الاستخدام لإدارة مصروفاتك الشخصية بذكاء وفعالية.",
      icon: <img src={`${import.meta.env.BASE_URL}images/logo_jibi_app.png`} alt="Jibi Logo" className="w-full h-full object-cover" />,
      link: "/jibi"
    },
    {
      id: 2,
      title: "Takort",
      description: "منصة ذكية لتوقعات ومحاكاة كأس العالم 2026 بالذكاء الاصطناعي.",
      icon: <img src={`${import.meta.env.BASE_URL}images/takort_logo.png`} alt="Takort Logo" className="w-full h-full object-cover" />,
      link: "/takort"
    },
    {
      id: 3,
      title: "تيسير",
      description: "أكثر من 50 أداة مجانية لتسهيل المهام اليومية والمهنية في مكان واحد.",
      icon: <img src={`${import.meta.env.BASE_URL}images/tayssir_logo.png`} alt="Tayssir Logo" className="w-full h-full object-cover" />,
      link: "/tayssir"
    },
    {
      id: 4,
      title: "Shatranj Pro",
      description: "منصة شطرنج عربية للعب مع الكمبيوتر، اللعب أونلاين، البطولات، ومختبر الشطرنج.",
      icon: <img src={`${import.meta.env.BASE_URL}images/shatranj_logo.png`} alt="Shatranj Pro Logo" className="w-full h-full object-cover" />,
      link: "/shatranj"
    }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'معرض تطبيقات حسين',
    url: `${Seo.siteUrl}/`,
    description: 'معرض عربي لعرض تطبيقات ومشاريع حسين مثل Jibi وTakort وتيسير وShatranj Pro مع صفحات تعريفية وروابط مباشرة.',
    inLanguage: 'ar',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Houssain Apps',
      url: `${Seo.siteUrl}/`,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: apps
        .filter((app) => app.link.startsWith('/'))
        .map((app, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: app.title,
          url: `${Seo.siteUrl}${app.link}`,
        })),
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans" dir="rtl">
      <Seo
        title="معرض تطبيقات حسين | Houssain Apps"
        description="اكتشف تطبيقات ومشاريع حسين الرقمية مثل Jibi لإدارة المصاريف، Takort لمحاكاة كأس العالم، تيسير للأدوات المجانية، وShatranj Pro لعشاق الشطرنج."
        path="/"
        lang="ar"
        dir="rtl"
        image="/logo.png"
        type="website"
        keywords="معرض تطبيقات حسين, Houssain Apps, Jibi, Takort, تيسير, Shatranj Pro, تطبيقات عربية, أدوات مجانية, شطرنج"
        structuredData={structuredData}
      />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-10 text-center text-white shadow-xl md:px-12 md:py-12">
              <div className="pointer-events-none absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-white blur-xl"></div>
                <div className="absolute bottom-16 right-16 h-28 w-28 rounded-full bg-white blur-xl"></div>
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl opacity-20"></div>
              </div>
              <div className="relative z-10 mx-auto max-w-4xl">
                <h1 className="mb-5 text-center text-4xl font-extrabold leading-[1.3] text-white md:text-[3.4rem]">
                  أهلاً بك في معرض تطبيقات حسين
                </h1>
                <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-blue-100 md:text-2xl">
                  نقدم لك أفضل التطبيقات التي تساعدك في حياتك اليومية والعملية. تصفح مجموعتنا
                  المختارة من الأدوات المفيدة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Apps Grid */}
        <section id="apps" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">تطبيقاتنا المميزة</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {apps.map((app) => (
              <AppCard 
                key={app.id}
                title={app.title}
                description={app.description}
                icon={app.icon}
                link={app.link}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white dark:bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">لماذا تختار تطبيقاتنا؟</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  نحن نركز على تجربة المستخدم البسيطة والفعالة. جميع تطبيقاتنا مصممة لتكون سريعة، 
                  آمنة، وسهلة الاستخدام. نستخدم أحدث التقنيات لضمان أفضل أداء وموثوقية.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-500 ml-2">✓</span>
                    تصميم عصري وجذاب
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 ml-2">✓</span>
                    دعم فني متواصل
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 ml-2">✓</span>
                    تحديثات دورية ومستمرة
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 lg:mr-12">
                <div className="bg-indigo-100 dark:bg-indigo-900 rounded-2xl p-8 text-center">
                  <span className="text-6xl">🚀</span>
                  <h3 className="text-2xl font-bold mt-4 text-indigo-800 dark:text-indigo-200">ابدأ رحلتك معنا</h3>
                  <p className="mt-2 text-indigo-700 dark:text-indigo-300">انضم لآلاف المستخدمين السعداء</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
