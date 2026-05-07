import React from 'react';
import Header from '../components/Header';
import AppCard from '../components/AppCard';
import Footer from '../components/Footer';

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
      icon: "🧰",
      link: "/tayssir"
    },
    {
      id: 4,
      title: "مدير المهام",
      description: "نظم وقتك ومهامك بفعالية مع تطبيق إدارة المهام المتطور.",
      icon: "✅",
      link: "#"
    },
    {
      id: 5,
      title: "حاسبة العملات",
      description: "تحويل سريع ودقيق بين العملات العالمية بأسعار لحظية.",
      icon: "💱",
      link: "#"
    },
    {
      id: 6,
      title: "قارئ الأخبار",
      description: "تابع آخر الأخبار من مصادرك المفضلة في مكان واحد.",
      icon: "📰",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans" dir="rtl">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-md text-white">
              أهلاً بك في معرض تطبيقات حسين
            </h1>
            <p className="text-xl md:text-3xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              نقدم لك أفضل التطبيقات التي تساعدك في حياتك اليومية والعملية.
              تصفح مجموعتنا المختارة من الأدوات المفيدة.
            </p>
            <a href="#apps" className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 text-lg">
              تصفح التطبيقات
            </a>
          </div>
        </section>

        {/* Apps Grid */}
        <section id="apps" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">تطبيقاتنا المميزة</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
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
