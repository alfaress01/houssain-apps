import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const highlights = [
  'نبني تطبيقات ومشاريع رقمية عربية تركّز على البساطة والسرعة وسهولة الاستخدام.',
  'نهتم بتجربة المستخدم والواجهة النظيفة قبل أي تعقيد غير ضروري.',
  'نطوّر مشاريع متنوعة تشمل الأدوات اليومية، التطبيقات المالية، والمنصات المتخصصة.',
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans" dir="rtl">
      <Seo
        title="من نحن | معرض تطبيقات حسين"
        description="تعرّف على معرض تطبيقات حسين ورؤيته في بناء تطبيقات ومشاريع عربية عملية تهتم بجودة التجربة وسهولة الاستخدام."
        path="/about"
        lang="ar"
        dir="rtl"
        image="/logo.png"
        type="website"
        keywords="من نحن, معرض تطبيقات حسين, Houssain Apps, تطبيقات عربية"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'من نحن - معرض تطبيقات حسين',
          url: `${Seo.siteUrl}/about`,
          inLanguage: 'ar',
          description:
            'صفحة تعريفية بمعرض تطبيقات حسين ورؤيته في بناء تطبيقات عربية عملية ومشاريع رقمية مفيدة.',
        }}
      />
      <Header />

      <main className="flex-grow py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">من نحن</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-8 max-w-4xl">
              معرض تطبيقات حسين هو مساحة لعرض التطبيقات والمشاريع الرقمية التي نطوّرها بعناية،
              مع تركيز واضح على الفائدة العملية، سهولة الاستخدام، والهوية العربية النظيفة.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">رؤيتنا</h2>
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-200 mb-8">
              نؤمن بأن أفضل المنتجات الرقمية ليست الأكثر تعقيدًا، بل الأكثر وضوحًا وفعالية.
              لذلك نعمل على تطوير أدوات ومشاريع تساعد المستخدم العربي في مهامه اليومية
              والعملية بأسلوب بسيط وسريع وموثوق.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 p-6"
                >
                  <p className="text-gray-700 dark:text-gray-200 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">ما الذي نعرضه هنا؟</h2>
            <div className="space-y-4 text-lg leading-8 text-gray-700 dark:text-gray-200">
              <p>
                داخل هذا المعرض ستجد تطبيقات مثل <strong>Jibi</strong> لإدارة المصروفات، ومشاريع
                رقمية مثل <strong>Takort</strong> و<strong>Tayssir</strong>، مع صفحات تعريفية
                توضّح فكرة كل مشروع ومزاياه وروابطه.
              </p>
              <p>
                الهدف من الموقع هو جمع هذه الأعمال في مكان واحد يسهل تصفحه، مع تقديم وصف واضح
                ومنظم لكل مشروع.
              </p>
            </div>

            <div className="mt-8">
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

export default AboutPage;
