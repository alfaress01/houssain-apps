import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const featureCards = [
  {
    title: 'محاكي المباريات بالذكاء الاصطناعي',
    icon: 'AI',
    description:
      'تتيح هذه الميزة للمستخدم اختيار أي منتخبين وطلب محاكاة للمباراة عبر تحليل يعتمد على Gemini API لتقديم نتيجة متوقعة وتقرير تفصيلي.',
  },
  {
    title: 'لعبة سابق العالم',
    icon: 'QZ',
    description:
      'لعبة معلومات كروية من 5 مراحل متدرجة الصعوبة مع نظام الموت المفاجئ ومؤقت 15 ثانية لكل سؤال.',
  },
  {
    title: 'لوحة الشرف التنافسية',
    icon: 'LB',
    description:
      'ربط مباشر مع Firebase Firestore وتسجيل دخول عبر Google لحفظ النتائج وعرض أفضل 100 لاعب في لوحة عالمية.',
  },
  {
    title: 'أخبار متجددة تلقائيا',
    icon: 'RSS',
    description:
      'محرك أخبار يعتمد على RSS Feeds لعرض جديد أخبار كأس العالم بتصميم عصري وأنيق.',
  },
  {
    title: 'أداء سريع وتجربة حديثة',
    icon: 'UX',
    description:
      'الموقع مبني باستخدام React.js وVite مع دعم الوضعين الليلي والنهاري وتجربة استخدام سريعة بدون إعادة تحميل الصفحات.',
  },
];

const TakortPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans" dir="rtl">
      <Seo
        title="Takort | منصة توقعات ومحاكاة كأس العالم 2026"
        description="تعرف على منصة Takort الذكية لتوقعات ومحاكاة كأس العالم 2026، مع تحليلات AI، لعبة سابق العالم، ولوحة شرف عالمية."
        path="/takort"
        lang="ar"
        dir="rtl"
        image="/images/takort_logo.png"
        type="article"
        keywords="Takort, كأس العالم 2026, محاكاة المباريات, توقعات كرة القدم, Gemini API"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'المنصة الذكية الأولى لتوقعات ومحاكاة كأس العالم 2026',
          description:
            'مقال تعريفي بمنصة Takort التي تجمع بين محاكاة المباريات بالذكاء الاصطناعي، الأخبار، والمسابقات التفاعلية.',
          inLanguage: 'ar',
          url: `${Seo.siteUrl}/takort`,
          image: `${Seo.siteUrl}/images/takort_logo.png`,
          author: {
            '@type': 'Person',
            name: 'Houssain',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Houssain Apps',
            logo: {
              '@type': 'ImageObject',
              url: `${Seo.siteUrl}/logo.png`,
            },
          },
        }}
      />
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-emerald-600 to-blue-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15 shadow-xl backdrop-blur-sm overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/takort_logo.png`}
                alt="Takort Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
              المنصة الذكية الأولى لتوقعات ومحاكاة كأس العالم 2026
            </h1>
            <p className="max-w-4xl mx-auto text-lg md:text-2xl text-blue-100 leading-relaxed">
              تاكورت منصة تفاعلية حديثة تمنح عشاق كرة القدم تجربة مختلفة تجمع بين التحليل الذكي،
              المحاكاة، التحديات، والأخبار المتجددة في مكان واحد.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 relative">
              <Link
                to="/"
                aria-label="العودة إلى الصفحة الرئيسية"
                className="absolute top-5 left-5 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#4f66f0] bg-white text-[#4f66f0] shadow-md transition-colors duration-300 hover:bg-[#4f66f0] hover:text-white"
              >
                <svg
                  className="h-7 w-7 -translate-x-px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                  <path d="M9 12h10" />
                </svg>
              </Link>
              <div className="space-y-8 text-gray-700 dark:text-gray-200 leading-8 text-lg">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">ما هو موقع تاكورت؟</h2>
                  <p>
                    في ظل التطور التقني المتسارع واقتراب الحدث الكروي الأكبر عالميا، يأتي موقع
                    تاكورت (Takort) ليقدم تجربة غير مسبوقة لعشاق كرة القدم. لم يعد دور المشجع
                    مقتصرا على المشاهدة فقط، بل أصبح بإمكانه تحليل، محاكاة، وتوقع نتائج مباريات
                    كأس العالم 2026 باستخدام أحدث تقنيات الذكاء الاصطناعي.
                  </p>
                  <p className="mt-4">
                    تاكورت هو منصة تفاعلية متعددة اللغات تدعم العربية والإنجليزية والفرنسية
                    والإسبانية، وصممت خصيصا لمواكبة أحداث كأس العالم 2026. يجمع الموقع بين متعة
                    التوقع الكروي وقوة التحليل الاصطناعي ليقدم للمستخدمين أدوات مبتكرة تزيد من
                    حماس البطولة.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">أبرز الميزات التقنية في المنصة</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featureCards.map((feature) => (
                      <div
                        key={feature.title}
                        className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-6 shadow-sm"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-extrabold text-white">
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                        </div>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 p-6">
                  <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">الرؤية المستقبلية</h2>
                  <p>
                    مشروع تاكورت ليس مجرد أداة لتوقع النتائج، بل هو منصة مجتمعية تتطور باستمرار.
                    مع اقتراب البطولة، سيتم تفعيل ربط مباشر مع قواعد بيانات رياضية حية مثل
                    Sportmonks لتحديث الإحصائيات لحظة بلحظة، بالإضافة إلى إطلاق ميزات جديدة مثل
                    صانع تشكيلة الأحلام وغرف الدردشة التفاعلية للمشجعين.
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 p-6 text-center">
                  <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-4">رابط المنصة للتجربة</h2>
                  <a
                    href="https://takort.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
                  >
                    زيارة Takort.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TakortPage;
