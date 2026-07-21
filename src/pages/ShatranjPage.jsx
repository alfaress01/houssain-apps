import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const features = [
  {
    title: 'اللعب مع الكمبيوتر',
    description: 'واجهة مخصصة لخوض مباريات شطرنج مباشرة ضد الكمبيوتر بمستويات لعب مختلفة.',
  },
  {
    title: 'لعب حر وإعداد الرقعة',
    description: 'إعداد الوضعيات الشطرنجية بحرية وتجربة الأفكار والتكتيكات على الرقعة بشكل عملي.',
  },
  {
    title: 'اللعب أونلاين والبطولات',
    description: 'إمكانية متابعة اللعب عبر الإنترنت والدخول إلى أجواء المنافسة والبطولات.',
  },
  {
    title: 'مختبر الشطرنج والمقالات',
    description: 'مساحة تعليمية وتحليلية تتضمن محتوى شطرنجي وأدوات مفيدة لمحبي اللعبة.',
  },
];

const ShatranjPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans" dir="rtl">
      <Seo
        title="Shatranj Pro | منصة شطرنج عربية للعب والتدريب"
        description="تعرف على shatranj.pro، منصة شطرنج تجمع اللعب مع الكمبيوتر، اللعب أونلاين، البطولات، المقالات، ومختبر الشطرنج."
        path="/shatranj"
        lang="ar"
        dir="rtl"
        image="/images/shatranj_logo.png"
        type="article"
        keywords="Shatranj Pro, shatranj.pro, شطرنج, لعب الشطرنج, بطولات الشطرنج, مختبر الشطرنج"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Shatranj Pro - منصة شطرنج عربية للعب والتدريب',
          description:
            'صفحة تعريفية بمنصة shatranj.pro التي تقدم اللعب مع الكمبيوتر، اللعب الحر، البطولات، ومختبر الشطرنج.',
          inLanguage: 'ar',
          url: `${Seo.siteUrl}/shatranj`,
          image: `${Seo.siteUrl}/images/shatranj_logo.png`,
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

      <main className="flex-grow py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="bg-gradient-to-r from-slate-800 to-emerald-700 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-10">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl bg-white/10 shadow-xl backdrop-blur-sm">
              <img
                src={`${import.meta.env.BASE_URL}images/shatranj_logo.png`}
                alt="Shatranj Pro Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-center">Shatranj Pro</h1>
            <p className="text-lg md:text-xl text-emerald-100 leading-8 max-w-4xl mx-auto text-center">
              منصة شطرنج عربية تجمع بين اللعب، التدريب، استكشاف الوضعيات، والبطولات، مع أدوات
              موجهة لمحبي اللعبة والمهتمين بتطوير مستواهم الشطرنجي.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">ماذا يقدم الموقع؟</h2>
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-200 mb-8">
              بحسب أقسام الموقع الحالية، يوفّر <strong>shatranj.pro</strong> تجربة متكاملة تشمل
              اللعب مع الكمبيوتر، اللعب الحر وإعداد الرقعة، اللعب أونلاين، البطولات، المقالات،
              ومختبر الشطرنج، مما يجعله مساحة مناسبة للعب والتعلم معًا.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-7">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">زيارة الموقع</h2>
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-200 mb-8">
              يمكنك الانتقال مباشرة إلى الموقع لاستكشاف أقسامه وتجربة اللعب والمحتوى الشطرنجي
              المتاح داخله.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://shatranj.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white font-bold hover:bg-emerald-700 transition-colors"
              >
                زيارة shatranj.pro
              </a>
              <Link
                to="/"
                className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-white font-bold hover:bg-indigo-700 transition-colors"
              >
                العودة إلى الصفحة الرئيسية
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShatranjPage;
