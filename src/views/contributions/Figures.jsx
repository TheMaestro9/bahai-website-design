'use client';

import Link from 'next/link';
import useReveal from '../../hooks/useReveal';
import './Figures.css';
import { asset } from '@/utils/asset';
import SocialLinks from '../../components/ui/SocialLinks';

export default function Figures() {
  useReveal('.figures-reveal, .figure-card, .showcase-item, .bicar-editorial-row');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="figures-page full-page-view">
      {/* FULL-WIDTH HERO SECTION */}
      <section className="figures-hero">
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
            <button
              type="button"
              className="quick-nav-pill"
              onClick={() => scrollToSection('moussa')}
            >
              <span>الدكتورة باسمة موسى</span>
              <span className="pill-dates">(١٩٥٨ - ٢٠٢٥)</span>
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
                src={asset('/assets/nmazeg/h-bicar/personal-image-1.jpg')}
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
              <p>
                ولد حسين أمين بيكار بحي الأنفوشي العريق بالإسكندرية، وأظهر نبوغاً فنياً مبكراً منذ طفولته؛ فاحترف العزف على آلة العود وتعليمه لربات البيوت قبل أن يتجاوز سن العاشرة. التحق بكلية الفنون الجميلة (التي كانت تُعرف آنذاك بمدرسة الفنون العليا) بعد سلسلة من الاختبارات الدقيقة ليصبح من أوائل الملتحقين بها متفوقاً في كل مراحل دراسته.
              </p>
              <p>
                بدأ مسيرته المهنية عقب تخرجه بالتدريس في مصر والمغرب، ثم عاد في مطلع الأربعينيات ليدرّس في كلية الفنون الجميلة بالقاهرة مساعداً لأستاذه أحمد صبري، بالتوازي مع انطلاقته اللامعة في عالم الصحافة.
              </p>

              <SocialLinks
                ariaLabel="روابط حسين بيكار"
                links={[
                  { type: 'website', href: 'https://www.hbicar.com' },
                  { type: 'instagram', href: 'https://www.instagram.com/hussein_bicar/' },
                  { type: 'facebook', href: 'https://www.facebook.com/hBicar' },
                ]}
              />
            </div>
          </div>

          {/* BICAR EDITORIAL STORY SECTIONS */}
          <div className="bicar-story-flow">
            
            {/* 1. Journalism & Egyptian Environments */}
            <article className="bicar-editorial-row figures-reveal">
              <div className="bicar-editorial-content">
                <span className="section-tag">الصحافة ورسالة الفن</span>
                <h3 className="bicar-editorial-title">جسر الفن إلى القارئ وتخليد البيئات المصرية</h3>
                <p>
                  في منتصف الخمسينات نُصّب رئيساً لقسم التصوير النظامي بالكلية لأربع سنوات، إلى أن طلب منه الصحفي الكبير مصطفى أمين أن يتفرغ للصحافة فوافق؛ إذ كان بيكار يؤمن بعمق بأن الصحافة هي جسره لإيصال الفن والجمال إلى كل قارئ بسيط لا يعرف صالات العرض ذات الجمهور النخبوي.
                </p>
                <p>
                  وعلى مدى خمسين عاماً، حقق حسين بيكار طفرة نوعية في الصحافة المصرية برسومه المصورة التي صاحبت تحقيقات صحفية كبديل حي عن الصور الفوتوغرافية، وأغلفة مجلة «آخر ساعة»، وقصص الأطفال. وكانت لمقالاته النقدية أثراً في إثراء ثقافة أجيال من الهواة والمتخصصين، كما شكلت أزجاله المصاحبة لرسمه كل أسبوع أصداء وشغفاً للجمهور الذي ينتظره أسبوعياً بكل لهفة، حتى أصبح المواطن البسيط عاشقاً لرسوماته وكلماته التي تطرب الوجدان.
                </p>
                <p>
                  خلدت أعماله مظاهر البيئات المصرية المتنوعة من النوبة إلى الريف والنيل وإلى الصيد في السواحل، وتفاصيل حياة الفلاح والفلاحة المصرية، مع ظهور المرأة كعنصر رئيسي في معظم لوحاته انطلاقاً من إيمانه الراسخ بدورها الفعال في المجتمع.
                </p>
              </div>
              <div className="bicar-editorial-media">
                <div className="bicar-frame-box">
                  <img
                    src={asset('/assets/nmazeg/h-bicar/art-work1.jpg')}
                    alt="أصالة الريف والمرأة المصرية في أعمال بيكار"
                    loading="lazy"
                  />
                </div>
                <span className="bicar-media-caption">
                  لوحة تجسد روح الريف وعطاء المرأة المصرية بألوان دافئة متناغمة
                </span>
              </div>
            </article>

            {/* 2. Portrait Mastery & Fluid Harmony (Reversed) */}
            <article className="bicar-editorial-row editorial-reverse figures-reveal">
              <div className="bicar-editorial-content">
                <span className="section-tag">البورتريه والإنسانية</span>
                <h3 className="bicar-editorial-title">براعة فن البورتريه والأسلوب الفريد</h3>
                <p>
                  برع بيكار في فن البورتريه حتى أصبح تقليداً عند المشاهير وكبار الشخصيات ليحظى كل منهم بجزء من وقته لرسم بورتريه له. وقد طور بيكار أسلوبه في رسم البورتريه، حيث نجح في الوصول إلى صيغة فنية بديعة تحترم ملامح الإنسان وتبرزها في أفضل حالاتها.
                </p>
                <p>
                  اشتهر بيكار بأسلوبه الفريد الذي يمزج بين الاحترام العميق للعنصر الإنساني في لوحاته، وخطوطه الانسيابية، وألوانه الشفيفة؛ مما يخلق هارمونية حالمة تجمع بين تقبل وتفاعل الجمهور العادي وتقدير النخبة والمثقفين.
                </p>
              </div>
              <div className="bicar-editorial-media">
                <div className="bicar-frame-box">
                  <img
                    src={asset('/assets/nmazeg/h-bicar/art-wrok2.jpg')}
                    alt="بورتريه بريشة الفنان حسين بيكار"
                    loading="lazy"
                  />
                </div>
                <span className="bicar-media-caption">
                  بورتريه شخصي يجسد صفاء الخطوط الانسيابية والألوان الشفيفة والهارمونية الحالمة
                </span>
              </div>
            </article>

            {/* 3. The Eighth Wonder & Abu Simbel */}
            <article className="bicar-editorial-row figures-reveal">
              <div className="bicar-editorial-content">
                <span className="section-tag">ملحمة التراث الحضاري</span>
                <h3 className="bicar-editorial-title">لوحات «العجيبة الثامنة» وتوثيق إنقاذ معبد أبي سمبل</h3>
                <p>
                  في عام ١٩٦٨م كلف وزير الثقافة د. ثروت عكاشة الفنان حسين بيكار برسم لوحات فيلم «العجيبة الثامنة» للمخرج الكندي جون فيني، الذي يحكي قصة بناء معبد أبي سمبل وإنقاذه التاريخي من الغرق.
                </p>
                <p>
                  تفرغ بيكار عامين كاملين لرسم ثمانين لوحة بألوان الجواش تجاوزت أطوال بعضها أربعة أمتار، صوّر من خلالها قصة المعبد وتاريخه منذ عرض مهندسي مصر القديمة تصميماته على الملك رمسيس الثاني وزوجته، وموقع المعبد وطرق بنائه الفريدة، حتى عملية نقله وإنقاذه الحديثة.
                </p>
                <p>
                  عُرض الفيلم في مدن وبلدان عديدة مثل روما وبرلين بالإضافة إلى مصر، ونال إعجاباً وتقديراً دولياً واسعاً لمكانة مصر الحضارية وإبداع ريشة بيكار.
                </p>
              </div>
              <div className="bicar-editorial-media">
                <div className="bicar-frame-box">
                  <img
                    src={asset('/assets/nmazeg/h-bicar/abu-simbel.jpg')}
                    alt="توثيق معبد أبي سمبل وملحمة العجيبة الثامنة"
                    loading="lazy"
                  />
                </div>
                <span className="bicar-media-caption">
                  لوحة تجسد شموخ معبد أبي سمبل على ضفاف النيل — من ملحمة «العجيبة الثامنة»
                </span>
              </div>
            </article>

            {/* 4. Passion for Music & Al-Tanbourina (Reversed) */}
            <article className="bicar-editorial-row editorial-reverse figures-reveal">
              <div className="bicar-editorial-content">
                <span className="section-tag">شغف الموسيقى والابتكار</span>
                <h3 className="bicar-editorial-title">عازف الأوتار ومبتكر آلة «الطنبورينا»</h3>
                <p>
                  ظل بيكار شغوفاً بالموسيقى طوال عمره؛ فتعلم وأجاد العزف على مختلف الآلات الوترية مثل العود والبزق والطنبور، وكانت أنغام الموسيقى تتنفس في تراكيب لوحاته وانسجام إيقاعاتها البصرية.
                </p>
                <p>
                  ولم يقتصر على العزف، بل توّج هذا الشغف باختراع وابتكار آلة موسيقية فريدة بقياسات صوتية وفيزيائية خاصة به أسماها <strong>«الطنبورينا»</strong>، لتكتمل لوحته الفنية بأنغام الروح المصرية الأصيلة.
                </p>
              </div>
              <div className="bicar-editorial-media">
                <div className="bicar-frame-box">
                  <img
                    src={asset('/assets/nmazeg/h-bicar/personal-image.jpg')}
                    alt="عازف الموسيقى ورمزية الأصالة النوبية"
                    loading="lazy"
                  />
                </div>
                <span className="bicar-media-caption">
                  بيكار والعود
                </span>
              </div>
            </article>

          </div>

          {/* HONORS & AWARDS BANNER */}
          <div className="honors-card figures-reveal">
            <h4 className="honors-title">أبرز الأوسمة والجوائز والمعارض الدولية</h4>
            <div className="honors-pills">
              <span className="honor-pill">معارض فنية متتابعة طافت لوحاته بها شتى بلاد العالم</span>
              <span className="honor-pill">حفر رسومه على الكريستال بمصنع ستوبن جلاس بأمريكا (١٩٥٨م)</span>
              <span className="honor-pill">وسام الاعتزاز من المغرب (١٩٤١م)</span>
              <span className="honor-pill">ميدالية الشرف الذهبية للمعرض الزراعي الصناعي (١٩٤٩م)</span>
              <span className="honor-pill">وسام العلوم والفنون من الطبقة الأولى من الرئيس جمال عبد الناصر (١٩٦٧م)</span>
              <span className="honor-pill">وسام العلوم والفنون من الطبقة الأولى من الحكومة المصرية (١٩٧٢م)</span>
              <span className="honor-pill">جائزة الدولة التقديرية مع وسام الاستحقاق من الرئيس السادات (١٩٨٠م)</span>
              <span className="honor-pill">جائزة مبارك للفنون من المجلس الأعلى للثقافة (٢٠٠٠م)</span>
              <span className="honor-pill">جائزة خاصة من جوائز سوزان مبارك لأدب الطفل (٢٠٠٠م)</span>
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
                src={asset('/assets/nmazeg/s-ramadan/personal-look.jpg')}
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
              <p>
                هي الكاتبة والمترجمة والأستاذة الجامعية الدكتورة سمية رمضان، ومن العضوات المؤسسات لـ«ملتقى المرأة والذاكرة»، المؤسسة البحثية النسوية المصرية المستقلة. نشأت في القاهرة وتنقلت بينها وبين الإسكندرية، ونالت درجة الدكتوراه في الأدب الإنجليزي من كلية ترينيتي العريقة في دبلن عام ١٩٨٣م.
              </p>
              <p>
                عرف عنها اهتمامها الصادق والمخلص بإعلاء قيم العدالة، والحرية، والفن، والإبداع، والجمال؛ وهو ما تجلى في كتاباتها الممتدة على مدار عقود بين الإبداع الأدبي، والترجمة، والكتابات النقدية والفلسفية الرصينة.
              </p>
            </div>
          </div>

          {/* SOMAYA EDITORIAL STORY SECTIONS */}
          <div className="bicar-story-flow">
            
            {/* 1. Literary Achievement & Naguib Mahfouz Medal */}
            <article className="bicar-editorial-row figures-reveal">
              <div className="bicar-editorial-content">
                <span className="section-tag">التتويج الأدبي والرواية</span>
                <h3 className="bicar-editorial-title">«أوراق النرجس» وميدالية نجيب محفوظ للأدب</h3>
                <p>
                  دخلت سمية رمضان الساحة الأدبية في تسعينيات القرن العشرين حين نشرت أولى مجموعاتها القصصية بعنوان «خشب ونحاس» (١٩٩٥م)، ثم مجموعتها القصصية «منازل القمر» (١٩٩٩م). ولكن شهرتها الأدبية ذاعت عقب نشر روايتها الفذة «أوراق النرجس» (٢٠٠١م) التي ما لبثت أن فازت بجائزة «ميدالية نجيب محفوظ الأدبية» في العام ذاته، وتُرجمت إلى اللغة الإنجليزية وصدرت عن دار نشر الجامعة الأمريكية بالقاهرة عام ٢٠٠٢م.
                </p>
                <p>
                  وجاء في حيثيات فوز الرواية بجائزة نجيب محفوظ: «هناك خيط في الرواية يكتنف مشاهدها المتفرقة ويوحّد نصها المتشظي ويقدم الدور الخلاق للكتابة والإبداع والأدب في تشكيل الذات وتجديدها على مستوى الفرد والجماعة... تطرح رواية سمية رمضان أسئلة أكثر مما تطرح حلولاً، لكن هذه الأسئلة ذاتها مؤشر إلى أهمية إعادة تكوين أنفسنا ومقاومة التحجر والتصحر؛ وفي هذا تتقاطع مع أديبنا الكبير نجيب محفوظ... وقد أضاءت سمية رمضان بعملها عتمة الأفق ومنحتنا رواية معاناة فردية مثيرة لعواطفنا وأمثولة وطنية مثيرة لتأملنا».
                </p>
              </div>
              <div className="bicar-editorial-media">
                <div className="bicar-frame-box book-frame">
                  <img
                    src={asset('/assets/nmazeg/s-ramadan/book-by-ramadan.jpg')}
                    alt="غلاف رواية أوراق النرجس للدكتورة سمية رمضان"
                    loading="lazy"
                  />
                </div>
                <span className="bicar-media-caption">
                  غلاف رواية «أوراق النرجس» الفائزة بجائزة نجيب محفوظ للرواية العربية عام ٢٠٠١م
                </span>
              </div>
            </article>

            {/* 2. Stream of Consciousness, Academic Leadership & Global Thought */}
            <article className="bicar-editorial-row editorial-reverse figures-reveal">
              <div className="bicar-editorial-content">
                <span className="section-tag">تيار الوعي والنقد الأكاديمي</span>
                <h3 className="bicar-editorial-title">بلاغة النساء وترجمة الفكر المعاصر</h3>
                <p>
                  حظيت سمية رمضان بمكانة بارزة ضمن جيل التسعينيات من الكاتبات والكتّاب في مصر ممن اتسمت كتاباتهم بطرح قضايا فكرية تنطلق من التجربة الذاتية. وتميزت بإيصال «تيار الوعي» إلى القارئ، حيث نجحت في مزج الدراما بالقضايا الحيوية وصياغة أدوات فنية وأدبية مستحدثة أسهمت في خلق تيار جديد في الكتابة الإبداعية عُرف نقدياً بـ «بلاغة النساء» وصحفياً بـ «كتابة البنات».
                </p>
                <p>
                  ومن جانب آخر، أثرت الساحة عبر عملها الأكاديمي كأستاذة في قسم النقد الفني بالمعهد العالي للنقد الفني بأكاديمية الفنون بالقاهرة؛ فتخرجت على يديها أجيال متعاقبة من النقاد والمثقفين. كما ساهمت في ترجمة العديد من الأعمال الفكرية والأدبية لمفكرين معاصرين مثل إدوارد سعيد وليلى أبو لغد، وتعد ترجمتها لكتاب فرجينيا وولف الشهير «غرفة تخص المرء وحده» الصادر عن المشروع القومي للترجمة من أبرز العلامات الثقافية.
                </p>
              </div>
              <div className="bicar-editorial-media">
                <div className="bicar-frame-box">
                  <img
                    src={asset('/assets/nmazeg/s-ramadan/persoanl-conferance.jpg')}
                    alt="د. سمية رمضان متحدثة في مؤتمر أكاديمي"
                    loading="lazy"
                  />
                </div>
                <span className="bicar-media-caption">
                  د. سمية رمضان متحدثة في ندوة فكرية حول قضايا الأدب والنقد المعاصر والمرأة
                </span>
              </div>
            </article>

            {/* 3. The Spiritual Dimension & Bicar Connection */}
            <article className="bicar-editorial-row figures-reveal">
              <div className="bicar-editorial-content">
                <span className="section-tag">الفلسفة والبعد الروحي</span>
                <h3 className="bicar-editorial-title">العلاقة ببيكار وكتاب «طريق المستقبل: رؤية بهائية»</h3>
                <p>
                  أما الجانب الأقل شهرة، وإن كان لا يقل أهمية وعمقاً، فهو اهتمامها الوثيق بالفن التشكيلي واقترابها من الفنان حسين بيكار الذي رسم لها لوحة شخصية بديعة (بورتريه). وكانت هذه العلاقة الروحية والفكرية جسراً انعكس على رؤيتها للحياة واقتناعها بالفلسفة والعقيدة البهائية.
                </p>
                <p>
                  أفردت د. سمية رمضان لهذا البعد أحد كتبها المرجعية وهو كتاب «طريق المستقبل: رؤية بهائية» الصادر عن دار مدبولي بالقاهرة (٢٠٠٨م)، حيث أوضحت تاريخ ومبادئ البهائية برؤية نابعة من داخلها؛ وركزت على قيم الصدق، والتسامح، والعدالة الاجتماعية، والمساواة التامة بين الجنسين، والتكامل بين العلم والدين مستندة إلى النصوص الدينية البهائية.
                </p>
                <p>
                  وكانت تردد بتواضع العالم المبدع: «في وقت ما، كنت أعتقد أنه لا فرق بين من يكتب ومن لا يكتب سوى شغف بعض الناس بالتدوين، ولم يخطر ببالي أن أسهم أنا في الإبداع وإنتاج الفن».
                </p>
              </div>
              <div className="bicar-editorial-media">
                <div className="bicar-frame-box">
                  <img
                    src={asset('/assets/nmazeg/s-ramadan/somaya-bicar-portrait.jpg')}
                    alt="د. سمية رمضان أمام البورتريه الشخصي بريشة حسين بيكار"
                    loading="lazy"
                  />
                </div>
                <span className="bicar-media-caption">
                  د. سمية رمضان أمام البورتريه الشخصي بريشة الفنان حسين بيكار وميدالية نجيب محفوظ
                </span>
              </div>
            </article>

          </div>

          {/* TRIBUTE & MEMORIAL BANNER */}
          <div className="honors-card somaya-tribute-card figures-reveal">
            <h4 className="honors-title">شهادة محبة وتقدير</h4>
            <blockquote className="tribute-full-quote">
              «إنها أجمل إنسان يمكن أن تصادفه في حياتك: ثقافةٌ وبساطة، قوةٌ ورقّة، علمٌ وعذوبةٌ... زهرةٌ مصريةٌ مشرقة اجتمع على حبّها الناسُ جميعُهم.»
            </blockquote>
            <cite className="tribute-author">— شهادة إحدى رائدات الفكر المستنير في سيرة د. سمية رمضان</cite>
          </div>

        </div>
      </section>

      {/* LOTUS DIVIDER */}
      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* ============================================================ */}
      {/* SECTION 3: DR. BASMA MOUSSA */}
      {/* ============================================================ */}
      <section id="moussa" className="figure-section figure-moussa-section">
        <div className="figure-full-layout">

          <div className="figure-header-row figures-reveal">
            <div className="figure-portrait-wrapper">
              <img
                src={asset('/assets/nmazeg/b-moussa/basma5.jpeg')}
                alt="الدكتورة باسمة موسى"
                className="figure-main-portrait"
                loading="lazy"
              />
              <span className="figure-years-badge">١٩٥٨ — ٢٠٢٥م</span>
            </div>

            <div className="figure-intro-col">
              <span className="section-tag">صوت المواطنة وحرية العقيدة</span>
              <h2 className="figure-name">د. باسمة موسى</h2>
              <p className="figure-tagline">
                أستاذة جراحة الفم والفك بقصر العيني، والمدافعة الصبورة عن حقوق البهائيين والأقليات وحرية العقيدة في مصر
              </p>
              <p>
                وُلدت الدكتورة باسمة موسى في مدينة بورفؤاد بمحافظة بورسعيد في ١٩ أكتوبر ١٩٥٨م لأبوين بهائيين، ونشأت بين إخوتها يحيى وفاتن ووفاء وعلا وشريف، وأنجبت عليّ وأذكار طاهر خليفة.
              </p>
              <p>
                حصلت على بكالوريوس طب وجراحة الفم والأسنان من قصر العيني عام ١٩٨١م، لتبدأ مسيرة علمية وإنسانية امتدت لأكثر من أربعة عقود، جمعت فيها بين العطاء الأكاديمي والدفاع عن حق كل إنسان في المواطنة الكاملة.
              </p>
            </div>
          </div>

          <div className="bicar-story-flow">

            {/* 1. Academic career under persecution */}
            <article className="bicar-editorial-row figures-reveal">
              <div className="bicar-editorial-content">
                <span className="section-tag">المسيرة الأكاديمية</span>
                <h3 className="bicar-editorial-title">ثلاثون عاماً من الصبر الجميل حتى الأستاذية</h3>
                <p>
                  عُيّنت معيدة في قسم الجراحة عام ١٩٨٢م، لكنها عانت اضطهاداً دينياً شديداً من قبل بعض الأساتذة؛ فحصلت على الماجستير بعد سبع سنوات، ثم على الدكتوراه بعد معاناة تسع سنوات أخرى.
                </p>
                <p>
                  وحين تقدمت بطلب تعيينها مدرّسة، أرسل عدد من الأساتذة رسالة إلى الأزهر يطلبون فيها الفتوى في تعيين من يدين بالفكر البهائي في وظائف تربوية، ونشرت جريدة «عقيدتي» فتوى الأزهر ورُفض التعيين، غير أن مجلس الكلية قرر تعيينها على درجة مدرس.
                </p>
                <p>
                  وفي عام ٢٠١٢م نالت درجة الأستاذية، أي بعد ثلاثين عاماً من الاضطهاد الشديد والصبر الجميل والتوكل على الخالق عز وجل.
                </p>
              </div>
              <div className="bicar-editorial-media">
                <div className="bicar-frame-box">
                  <img
                    src={asset('/assets/nmazeg/b-moussa/basma3.jpeg')}
                    alt="د. باسمة موسى مع زملائها في غرفة العمليات"
                    loading="lazy"
                  />
                </div>
                <span className="bicar-media-caption">
                  د. باسمة موسى مع زملائها الجراحين في غرفة العمليات
                </span>
              </div>
            </article>

            {/* 2. Human rights and the identity-papers case (Reversed) */}
            <article className="bicar-editorial-row editorial-reverse figures-reveal">
              <div className="bicar-editorial-content">
                <span className="section-tag">حقوق الإنسان والمواطنة</span>
                <h3 className="bicar-editorial-title">الدفاع عن الأوراق الثبوتية وحقوق المضطهدين</h3>
                <p>
                  حصلت على دبلوم في المجتمع المدني وحقوق الإنسان من كلية الاقتصاد والعلوم السياسية بجامعة القاهرة، حتى يتسنى لها الدفاع عن حقوق البهائيين والأقليات، وعن الطلبة المضطهدين في الكلية للحيلولة دون رسوبهم؛ وكان لها باع كبير في حصول كثير منهم على درجاتهم العلمية بمنتهى النزاهة.
                </p>
                <p>
                  وعندما رفضت الدولة منح البهائيين أوراقهم الثبوتية، رفع البهائيون قضية مدنية، وحضرت د. باسمة جميع جلساتها رغم شعورها بالخطر المحدق بها. وفي كل جلسة كانت تلتقي النشطاء والصحفيين لتحدثهم عن الدين البهائي وحق المواطنة.
                </p>
              </div>
              <div className="bicar-editorial-media">
                <div className="bicar-frame-box">
                  <img
                    src={asset('/assets/nmazeg/b-moussa/basma1.jpeg')}
                    alt="د. باسمة موسى في مؤتمر لحقوق الإنسان"
                    loading="lazy"
                  />
                </div>
                <span className="bicar-media-caption">
                  د. باسمة موسى بين الحضور في أحد مؤتمرات المجتمع المدني وحقوق الإنسان
                </span>
              </div>
            </article>

            {/* 3. Writing and civil society */}
            <article className="bicar-editorial-row figures-reveal">
              <div className="bicar-editorial-content">
                <span className="section-tag">القلم والمجتمع المدني</span>
                <h3 className="bicar-editorial-title">صوت للمرأة والطفل والتعليم والسلام</h3>
                <p>
                  شاركت متحدثةً في العديد من منظمات المجتمع المدني ومنظمات حقوق الإنسان المصرية، ونُشرت لها مقالات كثيرة في عدة جرائد مصرية تناولت فيها حقوق المرأة والطفل، والتعليم، والاهتمام بالبيئة والمناخ، والتسامح والسلام.
                </p>
                <p>
                  ونتيجة لجهودها اختارتها جريدة «اليوم السابع» واحدةً من السيدات الأكثر تأثيراً في مصر في الدفاع عن حرية العقيدة.
                </p>
              </div>
              <div className="bicar-editorial-media">
                <div className="bicar-frame-box">
                  <img
                    src={asset('/assets/nmazeg/b-moussa/basma4.jpeg')}
                    alt="د. باسمة موسى في احتفالية اليوم العالمي للمرأة"
                    loading="lazy"
                  />
                </div>
                <span className="bicar-media-caption">
                  في احتفالية اليوم العالمي للمرأة
                </span>
              </div>
            </article>

            {/* 4. Media dialogue (Reversed) */}
            <article className="bicar-editorial-row editorial-reverse figures-reveal">
              <div className="bicar-editorial-content">
                <span className="section-tag">الحوار بأدب ووقار</span>
                <h3 className="bicar-editorial-title">الرد على الإساءة بالكلمة الطيبة</h3>
                <p>
                  شاركت في عدة حلقات تليفزيونية، وكانت تتعرض خلالها للهجوم الشرس والسب بالألفاظ الجارحة، لكنها كانت ترد بكل أدب ووقار. وكان لذلك ردود فعل عظيمة لدى الناس؛ إذ أثار تعاطفهم مع القضية البهائية ودفع كثيرين إلى البحث عن حقيقة الدين البهائي.
                </p>
                <p>
                  توفيت في ٢٩ نوفمبر ٢٠٢٥م، ورحلت إلى الملكوت الإلهي في سلام.
                </p>
              </div>
              <div className="bicar-editorial-media">
                <div className="bicar-frame-box">
                  <img
                    src={asset('/assets/nmazeg/b-moussa/basma2.jpeg')}
                    alt="د. باسمة موسى في أحد لقاءاتها العامة"
                    loading="lazy"
                  />
                </div>
                <span className="bicar-media-caption">
                  د. باسمة موسى في أحد لقاءاتها العامة
                </span>
              </div>
            </article>

          </div>

        </div>
      </section>
    </div>
  );
}
