import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import './Contributions.css';

export default function Contributions() {
  useReveal('.contrib-reveal, .contrib-section');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -125;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="contributions-page">
      {/* HERO SECTION */}
      <section className="contrib-hero">
        <img
          src="assets/What we do/action.jpg"
          alt="مساهمات في بناء المجتمع"
          className="contrib-bg-img"
        />
        <div className="contrib-hero-overlay">
          <span className="section-tag light">ما نقوم به</span>
          <h1 className="contrib-hero-title">مساهمات في بناء المجتمع</h1>
          <p className="contrib-hero-subtitle">
            العمل المشترك جنباً إلى جنب بروح من الخدمة والمسؤولية للمساهمة في بناء مجتمع يسوده العدل والمحبة والاتحاد
          </p>
        </div>
      </section>

      {/* QUICK IN-PAGE NAVIGATION BAR */}
      <nav className="contrib-nav-bar" aria-label="أقسام الصفحة">
        <div className="contrib-container">
          <div className="contrib-nav-links">
            <a
              href="#social-action"
              className="contrib-nav-item"
              onClick={(e) => scrollToSection(e, 'social-action')}
            >
              <span className="nav-num">١</span>
              <span>العمل الاجتماعي</span>
            </a>
            <a
              href="#ruhi-institute"
              className="contrib-nav-item"
              onClick={(e) => scrollToSection(e, 'ruhi-institute')}
            >
              <span className="nav-num">٢</span>
              <span>معهد روحي</span>
            </a>
            <a
              href="#discourses"
              className="contrib-nav-item"
              onClick={(e) => scrollToSection(e, 'discourses')}
            >
              <span className="nav-num">٣</span>
              <span>المشاركة في الحوارات السائدة</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ================================================================
          SECTION 1: SOCIAL ACTION (العمل الاجتماعي)
          ================================================================ */}
      <section className="contrib-section" id="social-action">
        <div className="contrib-container">
          <div className="contrib-header-block contrib-reveal">
            <h2 className="section-heading">العمل الاجتماعي</h2>
          </div>

          {/* Social Action Narrative Overview */}
          <div className="social-lead-card contrib-reveal">
            <p>
              منذ بدايات الدّين البهائيّ، كان هناك دائمًا بُعد اجتماعيّ قويّ لأنشطة المجتمع. تمّ تنفيذ آلاف المشاريع على مدار السّنين في جميع أنحاء العالم في مجالات النّهوض بالمرأة، والحفاظ على البيئة، والتّعليم ومحو الأمّيّة، والنّظافة والصّحّة، والزّراعة وتربية الأسماك. معظمها كان عبارة عن مبادرات صغيرة على مستوى القاعدة الشّعبيّة مستوحاة من التّعاليم البهائيّة تستخدم قدرات السّكان المعنيّين وتعنى بهم مباشرة.
            </p>

            <p>
              العمل الاجتماعيّ البهائيّ مبنيّ على مفهوم أنّ مفتاح التّقدّم المادّيّ يكمن في قدرات الرّوح البشريّة، وأنّ التّقدّم المادّيّ يجب أن يعزّز التّطوّر الأخلاقيّ والرّوحانيّ أيضًا. وبما أنّ القضاء على جميع أشكال التّعصّب والتّمييز هو هدف أساسيّ، يجب أن تعود الفوائد من العمل الاجتماعيّ الّتي بدأها المجتمع البهائيّ على المجتمع الأوسع بغضّ النّظر عن الانتماء الدّينيّ.
            </p>
          </div>

          {/* 5-Pillar Showcase: Spacious, Full-Width Multi-Column Grid */}
          <div className="pillars-showcase-wrap contrib-reveal">
            <div className="pillars-section-title">
              <span className="dot-accent"></span>
              <h3>ميادين ومجالات العمل الاجتماعي</h3>
              <span className="line-accent"></span>
            </div>

            <div className="pillars-cards-grid">
              <div className="pillar-feature-card">
                <div className="pillar-card-icon-wrap">
                  <span className="pillar-header-icon">♀</span>
                </div>
                <div className="pillar-card-body">
                  <div className="pillar-card-top">
                    <h4>النهوض بالمرأة</h4>
                  </div>
                  <p>تعزيز المساواة بين الجنسين وتمكين المرأة للمشاركة الفاعلة في تنمية المجتمع وبناء المستقبل.</p>
                </div>
              </div>

              <div className="pillar-feature-card">
                <div className="pillar-card-icon-wrap">
                  <span className="pillar-header-icon">🌿</span>
                </div>
                <div className="pillar-card-body">
                  <div className="pillar-card-top">
                    <h4>الحفاظ على البيئة</h4>
                  </div>
                  <p>مبادرات واعية للعناية بالطبيعة، التوعية البيئية، وترشيد الموارد وحماية المساحات الخضراء.</p>
                </div>
              </div>

              <div className="pillar-feature-card">
                <div className="pillar-card-icon-wrap">
                  <span className="pillar-header-icon">📖</span>
                </div>
                <div className="pillar-card-body">
                  <div className="pillar-card-top">
                    <h4>التعليم ومحو الأمية</h4>
                  </div>
                  <p>برامج تعليمية تفتح آفاق المعرفة وتطور المهارات الأساسية لجميع الفئات لتمكينهم من التعلم الذاتي.</p>
                </div>
              </div>

              <div className="pillar-feature-card">
                <div className="pillar-card-icon-wrap">
                  <span className="pillar-header-icon">🩺</span>
                </div>
                <div className="pillar-card-body">
                  <div className="pillar-card-top">
                    <h4>النظافة والصحة</h4>
                  </div>
                  <p>نشر الوعي الصحي السليم وسبل الوقاية والعناية بالنظافة العامة للارتقاء بصحة المجتمع المحلي.</p>
                </div>
              </div>

              <div className="pillar-feature-card span-full">
                <div className="pillar-card-icon-wrap">
                  <span className="pillar-header-icon">🌾</span>
                </div>
                <div className="pillar-card-body">
                  <div className="pillar-card-top">
                    <h4>الزراعة وتربية الأسماك</h4>
                  </div>
                  <p>مشاريع تطبيقية مستدامة تعتمد على إمكانيات البيئة المحلية وتساهم في تحقيق الأمن الغذائي وتوفير سبل العيش الكريمة.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* ================================================================
          SECTION 2: RUHI INSTITUTE (معهد روحي)
          ================================================================ */}
      <section className="contrib-section papyrus-bg" id="ruhi-institute">
        <div className="contrib-container">
          <div className="contrib-header-block contrib-reveal">
            <h2 className="section-heading">معهد روحي</h2>
          </div>

          <div className="ruhi-intro-banner contrib-reveal">
            <p>
              ينظِّم معهد روحي دورات وبرامج تعليميّة لفئات عمريّة مختلفة ابتداءً من الصّغار في سنّ الخامسة أو السّادسة حتّى البالغين. وفيما يلي وصف لثلاثة من مساعيه الحاليّة:
            </p>
          </div>

          {/* Stepped Age-Progression Flow: Spacious Horizontal Cards */}
          <div className="ruhi-flow-wrap contrib-reveal">

            {/* STAGE 1: CHILDREN'S CLASSES */}
            <div className="ruhi-flow-card stage-children">
              <div className="flow-card-badge">سن ٥ أو ٦ سنوات</div>
              <div className="flow-card-grid">
                <div className="flow-card-main">
                  <div className="flow-card-title-row">
                    <span className="flow-card-emoji">🌸</span>
                    <h3>صفوف الأطفال البهائيّة للتّربية الرّوحانيّة</h3>
                  </div>
                  <p className="flow-card-desc">
                    يتمّ تقديم دروس صفوف الأطفال البهائيّة، ابتداءً من الصّف الأول لأولئك الّذين أعمارهم ٥ أو ٦ سنوات، في سياق تدريب المعلّمين. ويتوق النّاس في كلّ مكان لمشاركة أطفالهم في صفوف تُعنى بتربيتهم الرّوحانيّة.
                  </p>
                </div>
                <div className="flow-card-side">
                  <div className="side-feature-box">
                    <span className="side-feature-icon">✨</span>
                    <div>
                      <strong>غرس الفضائل:</strong>
                      <p>تنمية السجايا الأخلاقية كالمحبة والصدق والأمانة والتعاون عبر القصص والأنشطة الإبداعية.</p>
                    </div>
                  </div>
                  <div className="side-feature-box">
                    <span className="side-feature-icon">🎓</span>
                    <div>
                      <strong>تأهيل المعلمين:</strong>
                      <p>إعداد مربين قادرين على خلق بيئة دافئة تشجع الطفل على اكتشاف إمكانياته الكامنة.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STAGE 2: JUNIOR YOUTH (FEATURED WIDE CARD) */}
            <div className="ruhi-flow-card stage-jy featured-flow-card">
              <div className="flow-card-badge accent">من سنّ ١٢ إلى ١٥ سنة</div>
              <div className="jy-card-full-layout">
                <div className="jy-main-intro">
                  <div className="flow-card-title-row">
                    <span className="flow-card-emoji">🌱</span>
                    <div>
                      <h3>برنامج التّمكين الرّوحانيّ للشّباب النّاشئ</h3>
                      <p className="jy-subtitle">مرحلة الانتقال الحيوية وتشكيل الهوية الأخلاقية</p>
                    </div>
                  </div>
                  <p className="jy-intro-text">
                    يعطى معهد روحي أهميّة خاصّة لعمله مع الشّباب من سنّ ١٢ إلى ١٥. وسعى بصفة خاصّة لفهم ديناميكيّة المحافظة على مجموعات صغيرة تتشكَّل في مجتمعات محلّيّة وتوفّر محيطًا يستطيع فيه الشّباب مناقشة الأفكار وبناء هويّة أخلاقيّة قويّة.
                  </p>
                </div>

                <div className="jy-pillars-grid">
                  <div className="jy-sub-pillar-box">
                    <div className="pillar-header-wrap">
                      <span className="sub-pillar-bullet">◈</span>
                      <h4>تنمية المهارات اللغوية والمنهج العلمي</h4>
                    </div>
                    <p>
                      تهتمّ جميع الكتب بتنمية المهارات اللّغوية وقوّة التّعبير. وتتناول بعض كتب الفئة الأولى مفاهيم رياضيّة ومسائل اجتماعيّة أيضًا، في حين تسعى أخرى لإعداد الشّباب لمقاربة تحرّي الواقع المادّيّ والاجتماعيّ والرّوحانيّ بأسلوب علميّ.
                    </p>
                  </div>

                  <div className="jy-sub-pillar-box">
                    <div className="pillar-header-wrap">
                      <span className="sub-pillar-bullet">◈</span>
                      <h4>متاح لكافة الهيئات والمؤسسات التعليمية</h4>
                    </div>
                    <p>
                      رغم أنّ المفاهيم الأخلاقيّة التي تتضمّنها الموادّ في الفئة الأولى مُقتبسة من التّعاليم البهائيّة إلّا أنّها ليست دينيّة بطبيعتها، ولا تعالج مواضيع بهائيّة تحديدًا. لذا فإنّ مختلف المنظّمات بما فيها المؤسّسات الأكاديميّة ستجدها مفيدة لبرامجها التّعليميّة مع الشّباب النّاشئ.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* STAGE 3: MAIN SEQUENCE COURSES */}
            <div className="ruhi-flow-card stage-adults">
              <div className="flow-card-badge">الأعمار من ١٥ عاماً فأكثر</div>
              <div className="flow-card-grid">
                <div className="flow-card-main">
                  <div className="flow-card-title-row">
                    <span className="flow-card-emoji">📚</span>
                    <h3>سلسلة الدّورات الرّئيسيّة للأعمار من ١٥ عامًا فأكثر</h3>
                  </div>
                  <p className="flow-card-desc">
                    صممت هذه السلسلة من الكتب للشباب والبالغين في سعي منهجيّ لتنمية قدرة الشّباب والكبار من أجل خدمة جامعاتهم ومجتمعاتهم المحلّيّة.
                  </p>
                </div>
                <div className="flow-card-side">
                  <div className="side-feature-box">
                    <span className="side-feature-icon">🤝</span>
                    <div>
                      <strong>حلقات دراسية وتعلم جماعي:</strong>
                      <p>مسار تشاركي يستكشف المفاهيم الروحية ويحولها إلى مبادرات عملية ملموسة لخير المحيط.</p>
                    </div>
                  </div>
                  <div className="side-feature-box">
                    <span className="side-feature-icon">⚡</span>
                    <div>
                      <strong>تنمية روح المبادرة:</strong>
                      <p>إعداد الشباب لتولي مسؤولية تقدم أحيائهم ومساعدة الأجيال الصاعدة على التطور والازدهار.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* ================================================================
          SECTION 3: PARTICIPATION IN PREVAILING DISCOURSES
          ================================================================ */}
      <section className="contrib-section" id="discourses">
        <div className="contrib-container">
          <div className="contrib-header-block contrib-reveal">
            <h2 className="section-heading">المشاركة في الحوارات السائدة</h2>
          </div>

          <div className="discourses-wrap contrib-reveal">
            {/* Top Discourse Intro Card */}
            <div className="discourses-lead-card">
              <p className="dropcap">
                يسعى أفراد الجامعة البهائية في مصر مشاركة الجميع في المساهمة للعمل معا جنبا الي جنب في بناء مجتمع يسوده العدل والمحبة والاتحاد، كما يتأملون في خلق بيئة تعزز الحرية والمساواة وذلك إيمانا منهم بقدرة كل فرد يبدي رغبة في تقدم المجتمع، وتكون هذه فرصة للتعلم سوياً كيفية التغلب على التحديات التي تواجه المجتمع.
              </p>
              <p>
                فإنّ الهدف الأساسيّ للدّين البهائيّ هو تعزيز الوحدة والاتّحاد، ويؤمن البهائيّون أنّ هذه هي الطّريقة الوحيدة الّتي يمكن بها تحقيق التّقدّم الاجتماعيّ الحقيقيّ. وبالتّالي، فإنّهم في عملهم الاجتماعيّ وتصريحاتهم العامّة يتجنّبون بحذر الانحياز لأيّ جهة أو إلقاء اللّوم.
              </p>
              <p>
                يحترم البهائيّون جميع السّلطات العامّة ويصوّتون في الانتخابات استنادًا إلى الكفاءة الشّخصيّة للمرشّحين، انطلاقاً من ولائهم لوطنهم وحرصهم على تقدمه واستقراره.
              </p>
              <p>
                وفي نفس الوقت، وبما أنّ المنافسة والخصومة المتأصّلة في السّعي إلى السّلطة السّياسيّة هما بالضّرورة مثيران للفرقة والانقسام، فإنّ البهائيّين لا يترشّحون للمناصب السّياسيّة، ولا يقبلون التّعيينات السّياسيّة، ولا يدعمون أحزابًا أو فصائل سياسيّة معيّنة.
              </p>
            </div>
          </div>

          {/* BOTTOM INVITATION / REFLECTION */}
          <div className="contrib-cta-box contrib-reveal">
            <div className="contrib-cta-inner">
              <h3>شراكة مجتمعية في خدمة الوطن</h3>
              <p>
                التقدم الاجتماعي الحقيقي لا تصنعه فئة بمفردها، بل ينبع من التعاون المخلص وتضافر كافة الجهود الإنسانية لبناء عالم أفضل وغدٍ أكثر إشراقاً لأبنائنا.
              </p>
              <div className="contrib-cta-links">
                <Link to="/about" className="contrib-btn-secondary">
                  عن الجامعة البهائية في مصر
                </Link>
                <Link to="/beliefs" className="contrib-btn-primary">
                  <span>تعرّف على المبادئ والعقيدة</span>
                  <span aria-hidden="true">←</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
