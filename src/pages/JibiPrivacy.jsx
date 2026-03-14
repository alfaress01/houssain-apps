import React from 'react';
import { Link } from 'react-router-dom';

const JibiPrivacy = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Header and Navigation */}
        <div className="bg-blue-600 text-white p-4 rounded-lg text-center mb-6">
          <p className="font-bold mb-2">📋 This privacy policy is available in four languages: English, Spanish, Arabic, and French</p>
          <p className="font-bold mb-2">📋 Esta política de privacidad está disponible en cuatro idiomas: inglés, español, árabe y francés</p>
          <p className="font-bold mb-2">📋 Cette politique de confidentialité est disponible en quatre langues : anglais, espagnol, arabe et français</p>
          <p className="font-bold">📋 سياسة الخصوصية هذه متوفرة بأربع لغات: الإنجليزية والإسبانية والعربية والفرنسية</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 p-4 bg-gray-100 rounded-lg">
          <button onClick={() => scrollToSection('english')} className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md font-bold hover:bg-blue-600 hover:text-white transition-colors">
            🇺🇸 English
          </button>
          <button onClick={() => scrollToSection('spanish')} className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md font-bold hover:bg-blue-600 hover:text-white transition-colors">
            🇪🇸 Español
          </button>
          <button onClick={() => scrollToSection('french')} className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md font-bold hover:bg-blue-600 hover:text-white transition-colors">
            🇫🇷 Français
          </button>
          <button onClick={() => scrollToSection('arabic')} className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md font-bold hover:bg-blue-600 hover:text-white transition-colors">
            🇸🇦 العربية
          </button>
        </div>

        {/* English Section */}
        <div id="english" className="mb-12 border border-gray-200 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-blue-700 border-b-4 border-blue-600 pb-4 mb-6">Privacy Policy - Jibi Expense Tracker</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <strong>Last Updated:</strong> January 25, 2025
          </div>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Introduction</h2>
          <p className="mb-4">At Jibi Expense Tracker, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect information when you use our app.</p>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">App Information</h2>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>App Name:</strong> Jibi Expense Tracker</li>
              <li><strong>App ID:</strong> com.jibi.expense_tracker</li>
              <li><strong>Developer:</strong> Lhoussaine Benboubker</li>
              <li><strong>Contact Email:</strong> alforsa4@gmail.com</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Data We Collect</h2>
          
          <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">1. Local Data</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Expense Data:</strong> All expenses, categories, and notes you enter</li>
            <li><strong>Settings:</strong> Language preferences and dark/light mode</li>
            <li><strong>Backups:</strong> Backup files you create</li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <strong>Important Note:</strong> All this data is stored locally on your device and is not sent to our servers.
          </div>

          <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">2. Advertising Data</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Advertising ID:</strong> Used to display personalized ads</li>
            <li><strong>Usage Data:</strong> Information about your interaction with ads</li>
            <li><strong>Device Information:</strong> Device type and OS for ad optimization</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">How We Use Data</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Expense Management:</strong> To save and display your personal expenses</li>
            <li><strong>Statistics:</strong> To create reports and charts</li>
            <li><strong>Backup:</strong> To import and export your data</li>
            <li><strong>Ad Display:</strong> To show relevant ads from Google AdMob</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Contact Us</h2>
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="mb-2">If you have any questions about this privacy policy or our data practices, please contact us:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Email:</strong> alforsa4@gmail.com</li>
              <li><strong>Developer:</strong> Lhoussaine Benboubker</li>
            </ul>
          </div>
        </div>

        {/* Spanish Section */}
        <div id="spanish" className="mb-12 border border-gray-200 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-blue-700 border-b-4 border-blue-600 pb-4 mb-6">Política de Privacidad - Jibi Expense Tracker</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <strong>Última actualización:</strong> 25 de enero de 2025
          </div>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Introducción</h2>
          <p className="mb-4">En Jibi Expense Tracker, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política explica cómo recopilamos, usamos y protegemos la información cuando utiliza nuestra aplicación.</p>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Información de la Aplicación</h2>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Nombre de la App:</strong> Jibi Expense Tracker</li>
              <li><strong>ID de la App:</strong> com.jibi.expense_tracker</li>
              <li><strong>Desarrollador:</strong> Lhoussaine Benboubker</li>
              <li><strong>Email de contacto:</strong> alforsa4@gmail.com</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Datos que Recopilamos</h2>
          
          <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">1. Datos Locales</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Datos de Gastos:</strong> Todos los gastos, categorías y notas que introduce</li>
            <li><strong>Ajustes:</strong> Preferencias de idioma y modo oscuro/claro</li>
            <li><strong>Copias de Seguridad:</strong> Archivos de respaldo que crea</li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <strong>Nota Importante:</strong> Todos estos datos se almacenan localmente en su dispositivo y no se envían a nuestros servidores.
          </div>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Contacto</h2>
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="mb-2">Si tiene alguna pregunta sobre esta política de privacidad, contáctenos:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Email:</strong> alforsa4@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Arabic Section */}
        <div id="arabic" className="mb-12 border border-gray-200 rounded-lg p-6" dir="rtl">
          <h1 className="text-3xl font-bold text-center text-blue-700 border-b-4 border-blue-600 pb-4 mb-6">سياسة الخصوصية - تطبيق جيبي</h1>
          
          <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6">
            <strong>آخر تحديث:</strong> 25 يناير 2025
          </div>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">مقدمة</h2>
          <p className="mb-4">في تطبيق جيبي (Jibi Expense Tracker)، نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. تشرح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا للمعلومات عند استخدامك لتطبيقنا.</p>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">معلومات التطبيق</h2>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <ul className="list-disc pr-5 space-y-2">
              <li><strong>اسم التطبيق:</strong> Jibi Expense Tracker</li>
              <li><strong>معرف التطبيق:</strong> com.jibi.expense_tracker</li>
              <li><strong>المطور:</strong> Lhoussaine Benboubker</li>
              <li><strong>البريد الإلكتروني:</strong> alforsa4@gmail.com</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">البيانات التي نجمعها</h2>
          
          <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">1. البيانات المحلية</h3>
          <ul className="list-disc pr-5 space-y-2 mb-4">
            <li><strong>بيانات المصروفات:</strong> جميع المصروفات والفئات والملاحظات التي تدخلها</li>
            <li><strong>الإعدادات:</strong> تفضيلات اللغة والوضع الداكن/الفاتح</li>
            <li><strong>النسخ الاحتياطي:</strong> ملفات النسخ الاحتياطي التي تنشئها</li>
          </ul>
          
          <div className="bg-blue-50 border-r-4 border-blue-600 p-4 mb-6">
            <strong>ملاحظة هامة:</strong> يتم تخزين جميع هذه البيانات محلياً على جهازك ولا يتم إرسالها إلى خوادمنا.
          </div>

          <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">2. بيانات الإعلانات</h3>
          <ul className="list-disc pr-5 space-y-2 mb-4">
            <li><strong>معرف الإعلانات:</strong> يُستخدم لعرض إعلانات مخصصة</li>
            <li><strong>بيانات الاستخدام:</strong> معلومات حول تفاعلك مع الإعلانات</li>
            <li><strong>معلومات الجهاز:</strong> نوع الجهاز ونظام التشغيل لتحسين الإعلانات</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">كيف نستخدم البيانات</h2>
          <ul className="list-disc pr-5 space-y-2 mb-4">
            <li><strong>إدارة المصروفات:</strong> لحفظ وعرض مصروفاتك الشخصية</li>
            <li><strong>الإحصائيات:</strong> لإنشاء تقارير ورسوم بيانية</li>
            <li><strong>عرض الإعلانات:</strong> لعرض إعلانات ملائمة من Google AdMob</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">اتصل بنا</h2>
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="mb-2">إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:</p>
            <ul className="list-disc pr-5 space-y-2">
              <li><strong>البريد الإلكتروني:</strong> alforsa4@gmail.com</li>
              <li><strong>المطور:</strong> Lhoussaine Benboubker</li>
            </ul>
          </div>
        </div>

        {/* French Section */}
        <div id="french" className="mb-12 border border-gray-200 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-blue-700 border-b-4 border-blue-600 pb-4 mb-6">Politique de Confidentialité - Jibi Expense Tracker</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <strong>Dernière mise à jour :</strong> 25 Janvier 2025
          </div>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Introduction</h2>
          <p className="mb-4">Chez Jibi Expense Tracker, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons les informations lorsque vous utilisez notre application.</p>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Informations sur l'application</h2>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Nom de l'application :</strong> Jibi Expense Tracker</li>
              <li><strong>ID de l'application :</strong> com.jibi.expense_tracker</li>
              <li><strong>Développeur :</strong> Lhoussaine Benboubker</li>
              <li><strong>Email de contact :</strong> alforsa4@gmail.com</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Données que nous collectons</h2>
          
          <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">1. Données locales</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Données de dépenses :</strong> Toutes les dépenses, catégories et notes que vous saisissez</li>
            <li><strong>Paramètres :</strong> Préférences de langue et mode sombre/clair</li>
            <li><strong>Sauvegardes :</strong> Fichiers de sauvegarde que vous créez</li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <strong>Note importante :</strong> Toutes ces données sont stockées localement sur votre appareil et ne sont pas envoyées à nos serveurs.
          </div>

          <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">2. Données publicitaires</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>ID publicitaire :</strong> Utilisé pour afficher des publicités personnalisées</li>
            <li><strong>Données d'utilisation :</strong> Informations sur votre interaction avec les publicités</li>
            <li><strong>Informations sur l'appareil :</strong> Type d'appareil et OS pour l'optimisation des publicités</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Comment nous utilisons les données</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Gestion des dépenses :</strong> Pour enregistrer et afficher vos dépenses personnelles</li>
            <li><strong>Statistiques :</strong> Pour créer des rapports et des graphiques</li>
            <li><strong>Sauvegarde :</strong> Pour importer et exporter vos données</li>
            <li><strong>Affichage publicitaire :</strong> Pour afficher des publicités pertinentes via Google AdMob</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">Contactez-nous</h2>
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="mb-2">Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de données, veuillez nous contacter :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Email :</strong> alforsa4@gmail.com</li>
              <li><strong>Développeur :</strong> Lhoussaine Benboubker</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/jibi" className="text-blue-600 hover:underline font-bold">
            ← Back to App / العودة للتطبيق
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JibiPrivacy;
