import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './Figures.css';

export default function Figures() {
  useReveal('.figures-reveal, .figure-card, .showcase-item');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="figures-page full-page-view">
      {/* FULL-WIDTH HERO SECTION */}
      <section className="figures-hero papyrus-bg">
        <div className="figures-hero-full">

          <h1 className="figures-hero-title">نماذج بارزة</h1>
          <p className="figures-hero-subtitle">
            شخصيات مصرية ملهمة أثرت الفكر والفن والآداب، وجسدت قيم المحبة والإبداع وخدمة الصالح العام
          </p>

          <div className="figures-quick-nav">
            <button 
              type="button" 
              className="quick-nav-pill" 
              onClick={() => scrollToSection('bicar')}
            >
              <span>الفنان حسين بيكار</span>
              <span className="pill-dates">(١٩١٣ - ٢٠٠٢)</span>
            </button>
            <button 
              type="button" 
              className="quick-nav-pill" 
              onClick={() => scrollToSection('ramadan')}
            >
              <span>الدكتورة سمية رمضان</span>
              <span className="pill-dates">(١٩٥١ - ٢٠٢٤)</span>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 1: HUSSEIN BICAR (FULL PAGE EXPANDED) */}
      {/* ============================================================ */}
      <section id="bicar" className="figure-section figure-bicar-section">
        <div className="figure-full-layout">
          
          <div className="figure-header-row figures-reveal">
            <div className="figure-portrait-wrapper">
              <img
                src="assets/nmazeg/h-bicar/personal-image.jpg"
                alt="الفنان حسين بيكار"
                className="figure-main-portrait"
                loading="lazy"
              />
              <span className="figure-years-badge">١٩١٣ — ٢٠٠٢م</span>
            </div>

            <div className="figure-intro-col">
              <span className="section-tag">رائد الفن والجمال</span>
              <h2 className="figure-name">حسين بيكار</h2>
              <p className="figure-tagline">
                أبرز فناني الجيل الثاني من التشكيليين المصريين، وعميد فن البورتريه، ورائد الرسوم الصحفية وأدب الأطفال في العالم العربي
              </p>
              <p className="dropcap">
                ولد حسين أمين بيكار بحي الأنفوشي العريق بالإسكندرية، وأظهر نبوغاً فنياً مبكراً منذ طفولته؛ فاحترف العزف على آلة العود وتعليمه لربات البيوت قبل أن يتجاوز سن العاشرة. التحق بكلية الفنون الجميلة (التي كانت تُعرف آنذاك بمدرسة الفنون العليا) بعد سلسلة من الاختبارات الدقيقة ليصبح من أوائل الملتحقين بها متفوقاً في كل مراحل دراسته.
              </p>
              <p>
                بدأ مسيرته المهنية عقب تخرجه بالتدريس في مصر والمغرب، ثم عاد في مطلع الأربعينيات ليدرّس في كلية الفنون الجميلة بالقاهرة مساعداً لأستاذه أحمد صبري، بالتوازي مع انطلاقته اللامعة في عالم الصحافة.
              </p>
            </div>
          </div>

          {/* BICAR HIGHLIGHTS GRID */}
          <div className="figure-cards-grid">
            <div className="figure-card figures-reveal">
              <div className="card-badge-line">
                <span className="card-badge">رسالة الفن للجميع</span>
              </div>
              <h3 className="card-title">جسر الفن إلى القارئ البسيط</h3>
              <p className="card-desc">
                في منتصف الخمسينات تولى رئاسة قسم التصوير النظامي بالكلية لأربع سنوات، حتى طلب منه الصحفي الكبير مصطفى أمين التفرغ للصحافة فاستجاب فوراً؛ إذ كان بيكار مؤمناً بعمق بأن الصحافة هي جسره الأمثل لنقل الجمال والذائقة الفنية لكل قارئ بسيط لا يرتاد صالات العرض النخبوية.
              </p>
              <p className="card-desc">
                وعلى مدار خمسين عاماً، أحدث طفرة في الصحافة المصرية برسومه التعبيرية المصاحبة للتحقيقات، وأغلفة مجلة «آخر ساعة»، وقصص الأطفال، إلى جانب مقالاته النقدية وأزجاله الأسبوعية التي تعلق بها الملايين.
              </p>
            </div>

            <div className="figure-card figures-reveal">
              <div className="card-badge-line">
                <span className="card-badge">ملحمة التراث</span>
              </div>
              <h3 className="card-title">لوحات «العجيبة الثامنة» وإنقاذ معبد أبي سمبل</h3>
              <p className="card-desc">
                في عام ١٩٦٨م كلفه وزير الثقافة د. ثروت عكاشة برسم لوحات فيلم «العجيبة الثامنة» للمخرج الكندي جون فيني لتوثيق ملحمة إنقاذ معبد أبي سمبل من الغرق. تفرغ بيكار عامين كاملين لرسم ٨٠ لوحة بألوان الجواش تجاوز طول بعضها ٤ أمتار، مجسداً مراحل بناء المعبد منذ تصاميم مهندسي مصر القديمة حتى نقله الحديث، وعُرض الفيلم عالمياً في روما وبرلين ولاقى إعجاباً دولياً واسعاً.
              </p>
            </div>

            <div className="figure-card figures-reveal">
              <div className="card-badge-line">
                <span className="card-badge">الإنسانية والأسلوب</span>
              </div>
              <h3 className="card-title">عميد فن البورتريه والهوية المصرية</h3>
              <p className="card-desc">
                طور بيكار صيغة فنية بديعة في فن البورتريه تحترم ملامح الإنسان وتبرز جوهره النبيل، حتى أصبح رسم البورتريه بريشته تقليداً ومقصداً لكبار الشخصيات والمفكرين.
              </p>
              <p className="card-desc">
                خلدت أعماله البيئات المصرية الأصيلة من النوبة إلى الريف وسواحل الصيد، وبرزت المرأة المصرية في لوحاته كعنصر رئيسي تعبيراً عن إيمانه الراسخ بدورها الفعال ورقي مكانتها في المجتمع.
              </p>
            </div>

            <div className="figure-card figures-reveal">
              <div className="card-badge-line">
                <span className="card-badge">شغف الموسيقى</span>
              </div>
              <h3 className="card-title">عازف الأوتار ومبتكر «الطنبورينا»</h3>
              <p className="card-desc">
                لم يفارقه عشق النغم طوال حياته، فأتقن العزف على مختلف الآلات الوترية كالعود والبزق والطنبور، وتوج هذا الشغف بابتكار آلة موسيقية فريدة بمقاييس صوتية خاصة به أطلق عليها اسم <strong>«الطنبورينا»</strong>، لتكتمل لوحته الفنية بأنغام الروح.
              </p>
            </div>
          </div>
        </div>

        {/* FULL-BLEED ARTWORKS SHOWCASE BREAK-OUT */}
        <div className="artworks-showcase-full figures-reveal">
          <div className="showcase-header">
            <span className="section-tag centered">معرض مختارات</span>
            <h3 className="section-heading centered">من إبداعات ريشة بيكار الخالدة</h3>
            <p className="section-lead centered">
              نماذج من أعماله التشكيلية التي تميزت بالخطوط الانسيابية، والألوان الشفيفة، والهارمونية الحالمة
            </p>
          </div>

          <div className="artworks-grid-full">
            <div className="artwork-card">
              <div className="artwork-image-box">
                <img
                  src="assets/nmazeg/h-bicar/art-work1.jpg"
                  alt="عمل فني لحسين بيكار"
                  loading="lazy"
                />
              </div>
              <div className="artwork-meta">
                <span className="artwork-caption">روح الريف والتقاليد المصرية بألوان رقيقة متناغمة</span>
              </div>
            </div>

            <div className="artwork-card">
              <div className="artwork-image-box">
                <img
                  src="assets/nmazeg/h-bicar/art-wrok2.jpg"
                  alt="لوحة زيتية لحسين بيكار"
                  loading="lazy"
                />
              </div>
              <div className="artwork-meta">
                <span className="artwork-caption">العنصر الإنساني والمشاعر الحالمة في خطوط انسيابية بديعة</span>
              </div>
            </div>

            <div className="artwork-card">
              <div className="artwork-image-box">
                <img
                  src="assets/nmazeg/h-bicar/art-work3.jpg"
                  alt="لوحة فنية لحسين بيكار"
                  loading="lazy"
                />
              </div>
              <div className="artwork-meta">
                <span className="artwork-caption">رمزية الأصالة النوبية والمصرية والانسجام الروحي</span>
              </div>
            </div>
          </div>
        </div>

        {/* HONORS & AWARDS BANNER */}
        <div className="figure-full-layout">
          <div className="honors-card figures-reveal">
            <h4 className="honors-title">أبرز الأوسمة والجوائز التقديرية</h4>
            <div className="honors-pills">
              <span className="honor-pill">وسام الاعتزاز من المغرب (١٩٤١م)</span>
              <span className="honor-pill">ميدالية الشرف الذهبية للمعرض الزراعي الصناعي (١٩٤٩م)</span>
              <span className="honor-pill">اختياره لحفر رسومه على الكريستال بمصنع ستوبن جلاس بأمريكا (١٩٥٨م)</span>
              <span className="honor-pill">وسام العلوم والفنون من الطبقة الأولى من الرئيس جمال عبد الناصر (١٩٦٧م)</span>
              <span className="honor-pill">وسام العلوم والفنون من الطبقة الأولى (١٩٧٢م)</span>
              <span className="honor-pill">جائزة الدولة التقديرية مع وسام الاستحقاق من الرئيس السادات (١٩٨٠م)</span>
              <span className="honor-pill">جائزة مبارك للفنون من المجلس الأعلى للثقافة (٢٠٠٠م)</span>
              <span className="honor-pill">جائزة سوزان مبارك لأدب الطفل (٢٠٠٠م)</span>
              <span className="honor-pill">إهداء مكتبته الخاصة لمكتبة الإسكندرية كمنارة للأجيال</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOTUS DIVIDER */}
      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* ============================================================ */}
      {/* SECTION 2: DR. SOMAYA RAMADAN (FULL PAGE EXPANDED) */}
      {/* ============================================================ */}
      <section id="ramadan" className="figure-section figure-ramadan-section papyrus-bg">
        <div className="figure-full-layout">
          
          <div className="figure-header-row figures-reveal">
            <div className="figure-portrait-wrapper">
              <img
                src="assets/nmazeg/s-ramadan/personal-look.jpg"
                alt="الدكتورة سمية رمضان"
                className="figure-main-portrait"
                loading="lazy"
              />
              <span className="figure-years-badge">١٩٥١ — ٢٠٢٤م</span>
            </div>

            <div className="figure-intro-col">
              <span className="section-tag">زهرةٌ مصريةٌ مشرقة</span>
              <h2 className="figure-name">د. سمية رمضان</h2>
              <p className="figure-tagline">
                الكاتبة والمترجمة والأستاذة الجامعية، رائدة النقد الفني، والحائزة على ميدالية نجيب محفوظ الأدبية
              </p>
              <p className="dropcap">
                هي الكاتبة والمترجمة والأستاذة الجامعية الدكتورة سمية رمضان، ومن العضوات المؤسسات لـ«ملتقى المرأة والذاكرة»، المؤسسة البحثية النسوية المصرية المستقلة. نشأت في القاهرة وتنقلت بينها وبين الإسكندرية، ونالت درجة الدكتوراه في الأدب الإنجليزي من كلية ترينيتي العريقة في دبلن عام ١٩٨٣م.
              </p>
              <p>
                عرف عنها اهتمامها الصادق والمخلص بإعلاء قيم العدالة، والحرية، والفن، والإبداع، والجمال؛ وهو ما تجلى في كتاباتها الممتدة على مدار عقود بين الإبداع الأدبي، والترجمة، والكتابات النقدية والفلسفية الرصينة.
              </p>
            </div>
          </div>

          {/* SOMAYA HIGHLIGHTS GRID */}
          <div className="figure-cards-grid">
            <div className="figure-card figures-reveal">
              <div className="card-badge-line">
                <span className="card-badge">التتويج الأدبي</span>
              </div>
              <h3 className="card-title">«أوراق النرجس» وميدالية نجيب محفوظ</h3>
              <p className="card-desc">
                دخلت الساحة الأدبية بمجموعتيها القصصيتين «خشب ونحاس» (١٩٩٥م) و«منازل القمر» (١٩٩٩م)، وذاعت شهرتها عقب نشر روايتها الفذة «أوراق النرجس» (٢٠٠١م) التي فازت بجائزة «ميدالية نجيب محفوظ الأدبية» في العام ذاته، وتُرجمت إلى الإنجليزية وصدرت عن دار نشر الجامعة الأمريكية بالقاهرة.
              </p>
              <p className="card-desc">
                نجحت في مزج تيار الوعي بالقضايا الجوهرية للمجتمع، وصياغة أدوات سردية مستحدثة أسهمت في إثراء ما عرف نقدياً بـ «بلاغة النساء».
              </p>
            </div>

            <div className="figure-card figures-reveal">
              <div className="card-badge-line">
                <span className="card-badge">العطاء الأكاديمي</span>
              </div>
              <h3 className="card-title">أستاذة النقد وبناء الأجيال</h3>
              <p className="card-desc">
                كرّست سنوات طويلة للتدريس في قسم النقد الفني بالمعهد العالي للنقد الفني بأكاديمية الفنون بالقاهرة؛ فتخرجت على يديها أجيال متعاقبة من النقاد والمثقفين الذين نهلوا من سعة أفقها ومنهجيتها الصارمة المفعمة بالإنسانية.
              </p>
              <p className="card-desc">
                كما أثرت المكتبة العربية بترجمات رائدة لأعمال كبار المفكرين مثل إدوارد سعيد وليلى أبو لغد، وتعد ترجمتها لكتاب فرجينيا وولف الشهير «غرفة تخص المرء وحده» الصادر عن المشروع القومي للترجمة من أبرز العلامات الثقافية.
              </p>
            </div>

            <div className="figure-card figures-reveal">
              <div className="card-badge-line">
                <span className="card-badge">الرؤية والروحانية</span>
              </div>
              <h3 className="card-title">«طريق المستقبل: رؤية بهائية»</h3>
              <p className="card-desc">
                جمعتها بالفنان حسين بيكار علاقة روحية عميقة واهتمام مشترك بالفن التشكيلي، حتى رسم لها بورتريه شخصي بديع. انعكست هذه الرحلة على قناعتها العميقة بالفلسفة والعقيدة البهائية.
              </p>
              <p className="card-desc">
                أفردت كتابها الرائد «طريق المستقبل: رؤية بهائية» (دار مدبولي، ٢٠٠٨م) لتقديم المبادئ البهائية برؤية نابعة من الداخل؛ مركزة على قيم الصدق، والعدالة الاجتماعية، والمساواة بين الجنسين، والتكامل المنهجي بين العلم والدين مستندة إلى النصوص البهائية الأصيلة.
              </p>
            </div>

            <div className="figure-card figures-reveal">
              <div className="card-badge-line">
                <span className="card-badge">شهادة مضيئة</span>
              </div>
              <h3 className="card-title">ثقافةٌ وبساطة.. قوةٌ ورقّة</h3>
              <p className="card-desc">
                وصفتها إحدى رائدات الفكر المستنير بكلمات مؤثرة:
                <br />
                <span className="tribute-quote">«إنها أجمل إنسان يمكن أن تصادفه في حياتك: ثقافةٌ وبساطة، قوةٌ ورقّة، علمٌ وعذوبةٌ... زهرةٌ مصريةٌ مشرقة اجتمع على حبّها الناسُ جميعُهم.»</span>
              </p>
              <p className="card-desc">
                وكانت سمية رمضان تردد بتواضع العالم المبدع: «في وقت ما، كنت أعتقد أنه لا فرق بين من يكتب ومن لا يكتب سوى شغف بعض الناس بالتدوين، ولم يخطر ببالي أن أسهم أنا في الإبداع وإنتاج الفن».
              </p>
            </div>
          </div>

          {/* SOMAYA VISUALS & BOOK SHOWCASE */}
          <div className="somaya-showcase figures-reveal">
            <div className="somaya-showcase-grid">
              
              <div className="somaya-book-card">
                <div className="book-cover-wrap">
                  <img
                    src="assets/nmazeg/s-ramadan/book-by-ramadan.jpg"
                    alt="غلاف كتاب طريق المستقبل: رؤية بهائية - د. سمية رمضان"
                    loading="lazy"
                  />
                </div>
                <div className="book-details">
                  <span className="book-tag">إصدار مميز</span>
                  <h4 className="book-title">طريق المستقبل: رؤية بهائية</h4>
                  <p className="book-pub">دار مدبولي للنشر والتوزيع — القاهرة (٢٠٠٨م)</p>
                  <p className="book-summary">
                    كتاب يستعرض تاريخ ومبادئ الجامعة البهائية برؤية نابعة من داخلها؛ جامعاً بين القيم الأخلاقية، والعدالة، والمساواة بين الجنسين، والتوافق بين العلم والدين في بناء المدنية الإنسانية.
                  </p>
                </div>
              </div>

              <div className="somaya-gallery-col">
                <div className="somaya-photo-box">
                  <img
                    src="assets/nmazeg/s-ramadan/_DSC5432.JPG"
                    alt="د. سمية رمضان في ندوة فكرية"
                    loading="lazy"
                  />
                  <span className="photo-caption">حضور ثقافي فاعل وإشعاع فكري في الندوات والمؤتمرات</span>
                </div>
                <div className="somaya-photo-box">
                  <img
                    src="assets/nmazeg/s-ramadan/persoanl-conferance.jpg"
                    alt="د. سمية رمضان في مشاركة أكاديمية"
                    loading="lazy"
                  />
                  <span className="photo-caption">مشاركة بحثية ملهمة في قضايا النقد والأدب والمرأة</span>
                </div>
              </div>

            </div>
          </div>

          {/* JURY QUOTE BOX */}
          <div className="jury-highlight-box figures-reveal">
            <div className="jury-quote-icon">❝</div>
            <blockquote className="jury-quote-text">
              "هناك خيط في الرواية يكتنف مشاهدها المتفرقة ويوحّد نصها المتشظي ويقدم الدور الخلاق للكتابة والإبداع والأدب في تشكيل الذات وتجديدها على مستوى الفرد والجماعة... سمية رمضان أضاءت بعملها عتمة الأفق ومنحتنا رواية معاناة فردية مثيرة لعواطفنا وأمثولة وطنية مثيرة لتأملنا."
            </blockquote>
            <cite className="jury-quote-cite">
              — من حيثيات لجنة تحكيم جائزة نجيب محفوظ للرواية العربية (٢٠٠١م)
            </cite>
          </div>

        </div>
      </section>
    </div>
  );
}
