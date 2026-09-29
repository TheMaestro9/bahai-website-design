import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './About.css';

export default function About() {
  useReveal('.about-reveal, .content-section');

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <img
          src="assets/img-about.png"
          alt="البهائيون في مصر"
          className="about-bg-img"
        />
        <div className="about-hero-overlay">
          <span className="section-tag light">من نحن</span>
          <h1 className="about-hero-title">الجامعة البهائية في مصر</h1>
          <p className="about-hero-subtitle">
            مواطنون مصريون يعملون بروح التفاني والشراكة لبناء مجتمع متماسك ومزدهر
          </p>
        </div>
      </section>

      {/* SECTION 1: IDENTITY & CITIZENSHIP */}
      <section className="content-section about-intro-section">
        <div className="about-container">
          <div className="about-single-column about-reveal">
            <span className="section-tag">الهوية والمواطنة</span>
            <h2 className="section-heading">جزء لا يتجزأ من نسيج الوطن</h2>
            <p className="dropcap">
              البهائيون المصريون هم أبناء هذه الأرض العريقة؛ نشأوا على ضفاف نيلها الخالد وتشبعوا بثقافتها وقيمها الأصيلة. ويرى البهائيون في انتمائهم لمصر واجباً أخلاقياً وروحياً يترجم في صورة مشاركة بناءة في تنمية المجتمع وخدمة الصالح العام.
            </p>
            <p>
              تنطلق رؤية الجامعة البهائية من الإيمان بأن تقدم أي مجتمع يتطلب تضافر جهود جميع أبنائه بمختلف مشاربهم وخلفياتهم. فالمواطنة الصالحة في المفهوم البهائي تتجاوز مجرد الحقوق والواجبات القانونية لتصبح التزاماً ذاتياً بالسعي الحثيث لترسيخ التآخي، والعدل، والنزاهة، والتعاون المثمر.
            </p>
            <div className="about-quote-box">
              <blockquote>
                "عَمِّرُوا بِلادَ اللَّهِ بِالْمَحَبَّةِ وَالائْتِلافِ وَالْمَوَدَّةِ وَالاتِّحَادِ."
              </blockquote>
              <cite>— حضرة بهاء الله</cite>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* SECTION 2: COMMUNITY BUILDING IN ACTION */}
      <section className="content-section about-action-section">
        <div className="about-container">
          <div className="about-section-header centered about-reveal">
            <span className="section-tag centered">بناء المجتمع في الممارسة</span>
            <h2 className="section-heading centered">مسارات بناء القدرات وخدمة الأحياء السكنية</h2>
            <p className="section-lead centered">
              يفتح البهائيون أبواب أنشطتهم ومبادراتهم لجميع جيرانهم وأصدقائهم في القرى والمدن المصرية، بهدف تنمية الطاقات الإنسانية وتعزيز روابط المحبة:
            </p>
          </div>

          <div className="about-cards-grid">
            <div className="about-feature-card about-reveal">
              <div className="feature-card-header">
                <span className="card-badge">الأجيال الصاعدة</span>
              </div>
              <h3 className="card-title">صفوف تنمية روحانيات الأطفال</h3>
              <p className="card-desc">
                تُعنى هذه الصفوف بغرس القيم الإنسانية النبيلة كالأمانة والصدق والعدل والكرم، ومساعدة الأطفال على إدراك نبل جوهرهم الإنساني وتنمية محبتهم للآخرين.
              </p>
            </div>

            <div className="about-feature-card about-reveal">
              <div className="feature-card-header">
                <span className="card-badge">طاقات الشباب</span>
              </div>
              <h3 className="card-title">برنامج التمكين الأخلاقي للناشئة</h3>
              <p className="card-desc">
                يمكّن الفتيان والفتيات من توجيه طاقاتهم وقدراتهم الفكرية والروحية لخدمة مجتمعاتهم المحلية عبر مشاريع خدمية تعزز التضامن الاجتماعي.
              </p>
            </div>

            <div className="about-feature-card about-reveal">
              <div className="feature-card-header">
                <span className="card-badge">الحوار والتعلم</span>
              </div>
              <h3 className="card-title">حلقات دراسية لتطوير المهارات</h3>
              <p className="card-desc">
                حلقات مفتوحة لجميع الراغبين في التعلم الجماعي والتفكير المشترك في كيفية تطبيق المبادئ الروحانية على تحديات الحياة العملية والتنمية المستدامة.
              </p>
            </div>

            <div className="about-feature-card about-reveal">
              <div className="feature-card-header">
                <span className="card-badge">الروحانيات المشتركة</span>
              </div>
              <h3 className="card-title">جلسات التأمل والدعاء المشترك</h3>
              <p className="card-desc">
                لقاءات دورية تجمع القلوب في أجواء من الطمأنينة والمناجاة، تتلى فيها الأدعية والآيات الكريمة، مما يوحد النفوس ويقوي الروابط الأخوية.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* SECTION 3: HISTORICAL BRIDGE */}
      <section className="content-section about-history-bridge">
        <div className="about-container">
          <div className="about-single-column about-reveal">
            <span className="section-tag">الجذور التاريخية</span>
            <h2 className="section-heading">أكثر من قرن ونصف من الحضور في أرض مصر</h2>
            <p>
              لم يكن الوجود البهائي في مصر وليد العصر الحديث؛ بل يمتد لأكثر من مائة وخمسين عاماً، بدءاً من مرور حضرة بهاء الله بالإسكندرية عام 1868م، مروراً بإيمان أوائل المصريين عام 1900م، والزيارات التاريخية لحضرة عبد البهاء، وصولاً إلى الأحكام القضائية التاريخية والمراسيم الرسمية التي أقرت باستقلال الديانة البهائية ووجودها المؤسسي.
            </p>
            <div className="history-preview-container">
              <img
                src="assets/bahais-in-egypt/first-conference-1924.png"
                alt="المندوبون في أول مؤتمر بهائي مركزي بمصر عام 1924"
                className="history-preview-img"
                loading="lazy"
              />
              <p className="history-image-caption">من أرشيف الجامعة: المندوبون في أول مؤتمر بهائي مركزي بمصر (1924م)</p>
            </div>
            <div className="history-cta-action">
              <Link to="/history" className="about-btn-primary">
                <span>استكشف السجل التاريخي والوثائق الكاملة</span>
                <span className="btn-arrow" aria-hidden="true">←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GUIDING PRINCIPLES */}
      <section className="content-section about-principles-section">
        <div className="about-container">
          <div className="about-section-header centered about-reveal">
            <span className="section-tag centered">الرؤية والمنهج</span>
            <h2 className="section-heading centered">مبادئ ترشد العمل المجتمعي</h2>
          </div>

          <div className="principles-mini-grid about-reveal">
            <div className="principle-pill">
              <span className="principle-bullet">◈</span>
              <div>
                <strong>المشورة الصادقة:</strong>
                <span> اتخاذ القرارات من خلال التفكير الجماعي الحر البعيد عن فرض الرأي أو الخلافات الحزبية.</span>
              </div>
            </div>
            <div className="principle-pill">
              <span className="principle-bullet">◈</span>
              <div>
                <strong>النزاهة والتفاني:</strong>
                <span> اعتبار العمل المتقن والخدمة الصادقة للمجتمع شكلاً رفيعاً من أشكال العبادة.</span>
              </div>
            </div>
            <div className="principle-pill">
              <span className="principle-bullet">◈</span>
              <div>
                <strong>المساواة والتكامل:</strong>
                <span> الإيمان الكامل بالمساواة بين المرأة والرجل كجناحي طائر واحد ينهض به المجتمع.</span>
              </div>
            </div>
            <div className="principle-pill">
              <span className="principle-bullet">◈</span>
              <div>
                <strong>وحدة الإنسانية:</strong>
                <span> التنوع الديني والثقافي في مصر هو مصدر ثراء وقوة متى ما أُحيط بروح الاحترام المتبادل.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <div className="quote-divider">
        <blockquote>
          "يَا أَهْلَ الإِنْشَاءِ، عَمِّرُوا أَرْجَاءَ الْوُجُودِ بِالاتِّفَاقِ وَالْوِحْدَةِ."
        </blockquote>
        <cite>— حضرة بهاء الله</cite>
      </div>
    </div>
  );
}
