import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
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

      {/* SECTION 1: THE BAHAI FAITH (من نحن: الديانة البهائية) */}
      <section className="content-section about-intro-section">
        <div className="about-container">
          <div className="about-single-column about-reveal">
            <span className="section-tag">من نحن</span>
            <h2 className="section-heading">الديانة البهائية</h2>
            
            <p className="dropcap">
              الدّين البهائيّ هو ديانة توحيديّة تقوم على تعاليم كلّ من حضرة الباب وحضرة بهاء الله، كلّ منهما تلقّى وحيًا مباشرًا من الله. تؤمن البهائيّة بصحّة وحقيقة جميع الدّيانات العالميّة الرّئيسيّة الأخرى، لكنها ليست طائفة أو فرعًا لأيّ منها. ينعكس طابعها المستقلّ في نظرتها الفريدة للعالم، وفي الهيكل المجتمعيّ الذي يستند على الكتب المقدّسة والأحكام الدّينيّة والتّقويم الخاصّ بها.
            </p>
            
            <p>
              يؤمن البهائيّون بأنّ الله، خالق الأكوان، قام بتعليم البشريّة عبر التّاريخ عن طريق إرسال الأنبياء أو الرّسل ومن جملتهم إبراهيم وموسى ويسوع المسيح ومحمد، وكريشنا وبوذا وزرادشت عليهم السّلام الّذين أسّسوا أديان العالم الرّئيسيّة.
            </p>
            
            <p>
              كما يؤمن البهائيّون أنّ جميع الأديان تأتي من نفس المصدر، وهي جزء من عمليّة تعليميّة واحدة مستمرّة. يعترف البهائيّون بوجود رسولين لهذا العصر هما حضرة الباب وحضرة بهاء الله.
            </p>

            <div className="about-sub-block">
              <h3 className="about-sub-heading">وحدة الجنس البشريّ</h3>
              <p>
                رسالة حضرة بهاء الله موجّهة إلى عالمٍ تنتشر فيه معرفة القراءة والكتابة على نطاقٍ واسعٍ، ويجمع بين التّطوّر الاجتماعيّ والتّقدّم التّكنولوجي ممّا جعل الوقت مناسبًا وضروريًّا لمعالجة المشكلات في سياقٍ عالميّ.
              </p>
              <p>
                الهدف الرّئيس لتعاليمه هو وحدة الجنس البشريّ، والقضاء على التّعصّبات والحواجز الّتي تفرّق البشريّة، وأنّ وحدة جميع الشّعوب يجب أن تنشأ من خلال تطوّر النّظام الاجتماعيّ.
              </p>
            </div>

            <div className="about-principles-block">
              <h3 className="about-sub-heading">المبادئ الرئيسية</h3>
              <div className="principles-mini-grid">
                <div className="principle-pill">
                  <span className="principle-bullet">◈</span>
                  <span>القضاء على التّعصبات</span>
                </div>
                <div className="principle-pill">
                  <span className="principle-bullet">◈</span>
                  <span>المساواة بين الرّجال والنّساء</span>
                </div>
                <div className="principle-pill">
                  <span className="principle-bullet">◈</span>
                  <span>ضرورة التّعليم العمومي</span>
                </div>
                <div className="principle-pill">
                  <span className="principle-bullet">◈</span>
                  <span>أهميّة العدالة الاجتماعيّة</span>
                </div>
              </div>
            </div>

            <div className="about-callout-box">
              <p>
                وفقًا للتّعاليم البهائيّة، تعتمد صحّة المجتمع وتقدّمه على تأدية العائلة لمهامها على نحو سليم يقوم على زواج لا يبيح تعدّد الزّوجات ويكون فيه الرّجل والمرأة شريكين متساويين. وصف حضرة بهاء الله الزّواج بأنّه “حصنًا للنّجاح والفلاح” وحدّد تربية الأطفال على أنّها الأساس، وإن لم تكن الهدف الوحيد من الزّواج. على البهائيّين واجب تلبية احتياجات عائلاتهم من خلال الاشتغال بعمل شريف مربح وتوفير التّربية الأخلاقيّة والأكاديميّة لأبنائهم.
              </p>
            </div>

            <p>
              على الصّعيد الشّخصيّ، حثّ حضرة بهاء الله كلّ فرد على تنميّة مواهبه وقدراته الّتي وهبها الله له وتعلّم حرفة أو مهنة، مضيفًا أنّ العمل الّذي يؤدّى بروح الخدمة للآخرين مقبول لدى الله ويعتبر شكلًا من أشكال العبادة. في حين حذّر من مخاطر غرور العلم والمجادلات عديمة الجدوى، كما شجّع على استخدام العقل، مشيرًا إلى أنّه لا ينبغي أن يكون هناك تناقض بين العلم والدّين، لأنّهما نهجان متكاملان في البحث عن الحقيقة.
            </p>
          </div>
        </div>
      </section>

      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* SECTION 2: HISTORICAL BRIDGE */}
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

      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* SECTION 2: PROMINENT FIGURES (نماذج بارزة) */}
      <section className="content-section about-figures-section">
        <div className="about-container">
          <div className="about-section-header centered about-reveal">
            <span className="section-tag centered">إسهامات وطنية</span>
            <h2 className="section-heading centered">نماذج وشخصيات بارزة</h2>
            <p className="section-lead centered">
              أبناء مخلصون لمصر أثروا الحياة الفنية والأدبية والفكرية، وجسدوا في مسيرتهم قيم التفاني والإبداع وخدمة الصالح العام
            </p>
          </div>

          <div className="about-figures-grid about-reveal">
            {/* BICAR PREVIEW CARD */}
            <div className="about-figure-card">
              <div className="about-figure-img-wrap">
                <img 
                  src="assets/nmazeg/h-bicar/personal-image.jpg" 
                  alt="الفنان حسين بيكار" 
                  loading="lazy" 
                />
                <span className="about-figure-badge">١٩١٣ — ٢٠٠٢م</span>
              </div>
              <div className="about-figure-content">
                <h3 className="about-figure-name">الفنان حسين بيكار</h3>
                <p className="about-figure-role">رائد الفن التشكيلي وعميد فن البورتريه في العالم العربي</p>
                <p className="about-figure-desc">
                  أحد أبرز رواد الجيل الثاني من التشكيليين المصريين، أحدث طفرة في الرسوم الصحفية وأغلفة المجلات، وخلد بريشته ملحمة إنقاذ معبد أبي سمبل، وعاش مؤمناً بأن الفن رسالة جمال لكل مواطن بسيط.
                </p>
              </div>
            </div>

            {/* SOMAYA PREVIEW CARD */}
            <div className="about-figure-card">
              <div className="about-figure-img-wrap">
                <img 
                  src="assets/nmazeg/s-ramadan/personal-look.jpg" 
                  alt="د. سمية رمضان" 
                  loading="lazy" 
                />
                <span className="about-figure-badge">١٩٥١ — ٢٠٢٤م</span>
              </div>
              <div className="about-figure-content">
                <h3 className="about-figure-name">د. سمية رمضان</h3>
                <p className="about-figure-role">أستاذة النقد الفني والحائزة على ميدالية نجيب محفوظ الأدبية</p>
                <p className="about-figure-desc">
                  كاتبة ومترجمة وأستاذة جامعية من مؤسسات ملتقى المرأة والذاكرة، أضاءت المشهد الأدبي بروايتها «أوراق النرجس» وكتابها «طريق المستقبل: رؤية بهائية»، مجسدة ثقافة وبساطة وعطاءً فكرياً راقياً.
                </p>
              </div>
            </div>
          </div>

          <div className="about-figures-cta about-reveal">
            <Link to="/figures" className="about-btn-primary">
              <span>استكشف السيرة الكاملة والمعرض الفني للنماذج البارزة</span>
              <span className="btn-arrow" aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
