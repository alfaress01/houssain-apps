import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const contactMethods = [
  {
    title: 'البريد الإلكتروني',
    value: 'alforsa4@gmail.com',
    href: 'mailto:alforsa4@gmail.com',
    description: 'للاستفسارات العامة أو طلبات التعاون وملاحظات الموقع.',
  },
  {
    title: 'GitHub',
    value: 'github.com/alfaress01',
    href: 'https://github.com/alfaress01',
    description: 'لمتابعة المشاريع العامة والاطلاع على التحديثات البرمجية.',
  },
  {
    title: 'الموقع الرئيسي',
    value: 'houssain.app',
    href: 'https://houssain.app',
    description: 'المرجع الرئيسي لعرض التطبيقات والمشاريع المنشورة.',
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans" dir="rtl">
      <Seo
        title="اتصل بنا | معرض تطبيقات حسين"
        description="تواصل مع معرض تطبيقات حسين عبر البريد الإلكتروني أو GitHub أو من خلال الموقع الرسمي."
        path="/contact"
        lang="ar"
        dir="rtl"
        image="/logo.png"
        type="website"
        keywords="اتصل بنا, معرض تطبيقات حسين, Houssain Apps, تواصل"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'اتصل بنا - معرض تطبيقات حسين',
          url: `${Seo.siteUrl}/contact`,
          inLanguage: 'ar',
          description: 'صفحة التواصل الخاصة بمعرض تطبيقات حسين.',
        }}
      />
      <Header />

      <main className="flex-grow py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="bg-gradient-to-r from-sky-600 to-indigo-700 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">اتصل بنا</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-8 max-w-4xl">
              إذا كانت لديك ملاحظة، اقتراح، فكرة تعاون، أو استفسار حول أحد التطبيقات والمشاريع،
              يمكنك التواصل معنا عبر القنوات التالية.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {contactMethods.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h2>
                <p className="text-indigo-600 dark:text-indigo-300 font-bold break-all mb-4">{item.value}</p>
                <p className="text-gray-700 dark:text-gray-200 leading-7">{item.description}</p>
              </a>
            ))}
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">متى نستخدم هذه الصفحة؟</h2>
            <ul className="space-y-4 text-lg leading-8 text-gray-700 dark:text-gray-200">
              <li>الاستفسار عن مشروع أو تطبيق معروض داخل الموقع.</li>
              <li>إرسال اقتراح تطوير أو ملاحظة تخص تجربة الاستخدام.</li>
              <li>التواصل بخصوص تعاون تقني أو تصميمي أو إطلاق مشروع جديد.</li>
            </ul>

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

export default ContactPage;
