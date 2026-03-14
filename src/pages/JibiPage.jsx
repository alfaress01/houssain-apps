import { Link } from 'react-router-dom';

const JibiPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] font-sans text-[#333] py-10" dir="rtl">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center text-white mb-10">
          <img src="/images/logo_jibi_app.png" alt="Jibi Logo" className="w-24 h-24 mx-auto mb-4 rounded-2xl shadow-lg" />
          <h1 className="text-5xl font-bold mb-2 drop-shadow-md">Jibi Expense Tracker</h1>
          <p className="text-xl opacity-90">تطبيق إدارة المصروفات الذكي</p>
        </div>
        
        <div className="bg-white rounded-2xl p-10 shadow-2xl mb-8">
          <h2 className="text-center text-[#667eea] text-2xl font-bold mb-8">مرحباً بك في تطبيق Jibi</h2>
          
          <p className="text-center text-lg mb-8">
            تطبيق مجاني وسهل الاستخدام لإدارة مصروفاتك الشخصية بذكاء وفعالية
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            <div className="text-center p-5 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="text-[#667eea] text-xl font-bold mb-4">📊 إحصائيات مفصلة</h3>
              <p>تقارير وإحصائيات شاملة لمساعدتك في فهم أنماط الإنفاق</p>
            </div>
            
            <div className="text-center p-5 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="text-[#667eea] text-xl font-bold mb-4">🌍 دعم متعدد اللغات</h3>
              <p>يدعم العربية والإنجليزية والإسبانية</p>
            </div>
            
            <div className="text-center p-5 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="text-[#667eea] text-xl font-bold mb-4">💾 نسخ احتياطي آمن</h3>
              <p>احفظ بياناتك واستعدها بسهولة وأمان</p>
            </div>
            
            <div className="text-center p-5 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="text-[#667eea] text-xl font-bold mb-4">🎨 واجهة عصرية</h3>
              <p>تصميم جميل وسهل الاستخدام</p>
            </div>
            
            <div className="text-center p-5 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="text-[#667eea] text-xl font-bold mb-4">🔒 خصوصية تامة</h3>
              <p>جميع بياناتك محفوظة محلياً على جهازك</p>
            </div>
            
            <div className="text-center p-5 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="text-[#667eea] text-xl font-bold mb-4">📱 مجاني بالكامل</h3>
              <p>تطبيق مجاني مع إعلانات غير مزعجة</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 shadow-xl border border-gray-100 mb-12 text-right relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-500"></div>
            <h3 className="text-blue-600 text-3xl font-extrabold mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">✨</span> تطبيق جيبي - المزايا
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700 mb-8">
              {[
                "سجل وراقب مصروفاتك اليومية.",
                "قارن بين مصاريفك لآخر 3 أشهر.",
                "تنبيه عند اقترابك من تجاوز ميزانيتك.",
                "نسخ احتياطي للحفاظ على بياناتك.",
                "تسجيل بياناتك كملف PDF.",
                "أرشيف لمصاريفك على مدى الشهور والسنوات.",
                "أربع لغات رئيسية: العربية والإنجليزية والإسبانية والفرنسية.",
                "نصائح مالية عملية وذكية."
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
                  <span className="text-green-500 ml-3 text-xl mt-1">✔</span>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-xl font-semibold text-blue-900 bg-blue-50 p-6 rounded-xl leading-relaxed border border-blue-100 shadow-inner">
              💡 تطبيق جيبي دليلك العملي لمعرفة أين تضيع أموالك، وبالتالي ستتمكن من تسيير مصاريفك بل والتوفير أيضا.
            </p>
          </div>
          
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold mb-5">حمل التطبيق الآن</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.jibi.spanish_expense_tracker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-8 py-4 rounded-full text-lg font-medium hover:-translate-y-1 transition-transform duration-300"
              >
                📱 Google Play Store
              </a>
              <a 
                href="#" 
                className="inline-block bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-8 py-4 rounded-full text-lg font-medium hover:-translate-y-1 transition-transform duration-300"
              >
                🍎 App Store
              </a>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-200">
            <h3 className="text-[#667eea] text-lg font-bold mb-4">معلومات التطبيق</h3>
            <p><strong>الإصدار:</strong> 1.0.3+7</p>
            <p><strong>المطور:</strong> Houssain</p>
            <p><strong>معرف التطبيق:</strong> com.jibi.spanish_expense_tracker</p>
          </div>
        </div>
        
        <div className="text-center text-white opacity-80 mt-10">
          <p className="mb-2">
            <Link to="/jibi/privacy" className="underline mx-2 hover:text-white">سياسة الخصوصية</Link> | 
            <a href="mailto:support@jibi.app" className="underline mx-2 hover:text-white">الدعم الفني</a>
          </p>
          <p>© 2025 Jibi Expense Tracker. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </div>
  );
};

export default JibiPage;
