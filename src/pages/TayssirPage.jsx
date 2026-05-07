import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sections = [
  {
    title: 'أدوات الصور والـ PDF',
    icon: 'PDF',
    items: [
      'تحويل وتعديل ملفات PDF مثل الدمج والتقسيم والضغط والتحويل من وإلى Word.',
      'معالجة الصور عبر تغيير الصيغ إلى WebP وPNG وJPG وضغط الصور وإزالة الخلفية بالذكاء الاصطناعي.',
    ],
  },
  {
    title: 'أدوات المال والأعمال',
    icon: 'FIN',
    items: [
      'حاسبة الراتب الصافي لدول عربية مثل السعودية والمغرب.',
      'منشئ فواتير احترافية مع التصدير إلى PDF.',
      'مولد سيرة ذاتية جاهز للطباعة، مع حاسبات القروض والضريبة.',
    ],
  },
  {
    title: 'أدوات التحميل من الإنترنت',
    icon: 'DL',
    items: [
      'تنزيل الفيديوهات والصوتيات من يوتيوب، إنستغرام، تيك توك، فيسبوك، وتويتر (X) بسرعة وبساطة.',
    ],
  },
  {
    title: 'الأدوات الإسلامية',
    icon: 'ISL',
    items: [
      'حاسبة المواريث والزكاة بدقة عالية.',
      'اتجاه القبلة ومواقيت الصلاة وحاسبة أثلاث الليل والسبحة الإلكترونية.',
    ],
  },
  {
    title: 'أدوات الصحة واللياقة',
    icon: 'FIT',
    items: [
      'حاسبة السعرات الحرارية والوزن المثالي.',
      'حاسبة النوم وحاسبة شرب الماء لمعرفة احتياج الجسم اليومي.',
    ],
  },
  {
    title: 'أدوات المطورين والتقنيين',
    icon: 'DEV',
    items: [
      'مولد كلمات المرور، محول الأكواد، استخراج الألوان HEX/RGB، ومولد QR والباركود.',
    ],
  },
];

const TayssirPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans" dir="rtl">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15 text-5xl shadow-xl backdrop-blur-sm">
              🧰
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
              منصة "تيسير": كنزك الشامل لأكثر من 50 أداة مجانية تسهل حياتك اليومية
            </h1>
            <p className="max-w-4xl mx-auto text-lg md:text-2xl text-orange-100 leading-relaxed">
              منصة عربية تجمع عشرات الأدوات المجانية المفيدة في مكان واحد، بدون تسجيل، وبدون
              تعقيدات، مع تجربة سريعة ومريحة على الهاتف والكمبيوتر.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="space-y-8 text-gray-700 dark:text-gray-200 leading-8 text-lg">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">ما هي منصة تيسير؟</h2>
                  <p>
                    في عصر السرعة الرقمية، نحتاج يوميا إلى أدوات صغيرة لإنجاز مهام سريعة مثل
                    تحويل العملات، ضغط الصور، تحميل الفيديوهات، أو حساب الراتب الصافي. وغالبا ما
                    نضطر إلى التنقل بين مواقع متعددة مليئة بالإعلانات أو المواقع التي تطلب
                    التسجيل والدفع. هنا يأتي دور منصة تيسير، الموقع العربي الذي يجمع كل ما
                    تحتاجه في مكان واحد، مجانا بالكامل، وبدون أي تعقيدات.
                  </p>
                  <p className="mt-4">
                    "تيسير" هو موقع ويب متكامل يهدف إلى تسهيل حياة المستخدمين عبر أكثر من 50
                    أداة مجانية مقسمة بعناية لتغطي الاستخدامات اليومية والمهنية والدينية. واجهة
                    الموقع بسيطة، سريعة الاستجابة، وتعمل بكفاءة عالية على أجهزة الكمبيوتر
                    والهواتف الذكية.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">أبرز أقسام وأدوات الموقع</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sections.map((section) => (
                      <div
                        key={section.title}
                        className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-6 shadow-sm"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-xs font-extrabold text-white">
                            {section.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                        </div>
                        <ul className="space-y-3">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="text-green-500 mt-1">✔</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900 p-6">
                  <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-4">لماذا ننصح باستخدام منصة تيسير؟</h2>
                  <ul className="space-y-3">
                    <li>مجاني 100% بدون خطط مدفوعة أو طلب بطاقة ائتمانية.</li>
                    <li>بدون تسجيل أو إنشاء حسابات جديدة.</li>
                    <li>الخصوصية أولا، لأن كثيرا من الأدوات تعمل محليا داخل المتصفح.</li>
                    <li>دعم للوضع الليلي مع تصميم عصري مريح للعين.</li>
                    <li>مدونة مفيدة تحتوي على شروحات تقنية ومالية تساعد على الاستفادة من الأدوات.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 p-6">
                  <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">الخلاصة</h2>
                  <p>
                    منصة تيسير هي صندوق أدوات رقمي شامل يجب أن يكون ضمن مفضلة كل مستخدم عربي.
                    سواء كنت طالبا، موظفا، مستقلا، أو باحثا عن أدوات سريعة ومفيدة، فستجد في
                    تيسير ما يسهل عليك الكثير من المهام اليومية.
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 p-6 text-center">
                  <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-4">رابط المنصة للتجربة</h2>
                  <a
                    href="https://www.tayssir.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
                  >
                    زيارة www.tayssir.net
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

export default TayssirPage;
