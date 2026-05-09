import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './Home.css';

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0);

  // Porting animations
  useReveal(".split-section, .beliefs-grid, .belief-item, .history-block, .milestone-box, .faq-item, .media-card, .interview-item, .article-item");

  const hiddenWords = [
    { text: "يَا ابْنَ الإِنْسانِ", sub: "أَحْبَبْتُ خَلْقَكَ فَخَلَقْتُكَ، فَأَحْبِبْني كَيْ أَذْكُرَكَ، وَفِي رُوحِ الْحَياةِ أُثَبِّتُكَ." },
    { text: "يَا ابْنَ الوُجُودِ", sub: "حُبِّي حِصْني مَنْ دَخَلَ فِيهِ نَجا وَأَمِنَ وَمَنْ أَعْرَضَ غَوَى وَهَلَكَ." },
    { text: "يَا ابْنَ الرُّوحِ", sub: "فِي أَوَّلِ القَوْلِ امْلِكْ قَلْباً جَيِّداً حَسَناً مُنيراً لِتَمْلِكَ مُلْكاً دائِماً باقِياً أَزَلاً قَدِيماً." },
    { text: "يَا ابْنَ الإِنْسانِ", sub: "أَنْتَ مُلْكِي وَمُلْكِي لا يَفْنى. كَيْفَ تَخافُ مِنْ فَنائِكَ، وَأَنْتَ نُوري وَنُوري لا يُطْفى." },
    { text: "يَا ابْنَ البَشَرِ", sub: "إِنْ أَصَابَتْكَ نِعْمَةٌ لا تَفْرَحْ بِها، وَإِنْ تَمَسَّكَ ذِلَّةٌ لا تَحْزَنْ مِنْهَا." },
    { text: "يَا ابْنَ الرُّوحِ", sub: "خَلَقْتُكَ غَنِيّاً كَيْفَ تَفْتَقِرُ، وَصَنَعْتُكَ عَزِيزاً بِمَ تَسْتَذِلُّ." }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      const interval = setInterval(() => {
        setCurrentWord((prev) => (prev + 1) % hiddenWords.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [hiddenWords.length]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-bg" style={{ backgroundImage: 'url("assets/hero.png")' }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <h1 className="hero-site-title">الجامعة البهائية في مصر</h1>
          <blockquote className="hero-quote">
            "لم يزل كان إصلاح العالم بالأعمال الطيبة الطاهرة والأخلاق الراضية المرضية"
          </blockquote>
          <cite className="hero-cite">— حضرة بهاء الله</cite>
        </div>
        <div className="hero-scroll-hint">
          <span></span>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro-section" id="intro">
        <div className="intro-inner">
          <p className="intro-body dropcap">
            على ضفاف النيل، وفي قلب أرض الكنانة، تمتد جذور الجامعة البهائية لأكثر من مائةٍ وثمانين عامًا. فقد كانت مصر، على مرّ العصور، في طليعة البلدان التي احتضنت رسالات الله، وتهيّأت لتلقّي نورها، ومن ثمّ احتضنت هذه الدعوة العالمية.
          </p>
          <p className="intro-body">
            فمنذ عام 1863م، لم تكن أرض مصر مجرّد محطة عبور، بل كانت منارةً فكرية تشعّ علمًا وثقافةً إلى محيطها. يهدف هذا الموقع إلى تعريف زوّاره بالدين البهائي، ومبادئه وتعاليمه، وإبراز مساهمات البهائيين في بناء مصر الحبيبة، لما فيه خير ورخاء الجميع.
          </p>
          <p className="intro-body">
            ويسعى البهائيون، استلهامًا من تعاليمهم، إلى الإسهام في بناء حضارة إنسانية مزدهرة، شعارها وحدة الجنس البشري، وروحها المحبة، وغايتها خدمة مصر والإنسانية جمعاء.
          </p>
        </div>
      </section>

      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* ABOUT SECTION */}
      <section className="split-section" id="about">
        <div className="split-image">
          <img
            src="assets/img-about.png"
            alt="البهائيون في مصر — مجتمع يعمل لخير الوطن"
            loading="lazy"
            width="550"
            height="520"
          />
        </div>
        <div className="split-content papyrus-bg">
          <span className="section-tag">البهائيون في مصر</span>
          <h2 className="split-heading">جزء من نسيج الوطن</h2>
          <p>
            البهائيون المصريون جزء من نسيج المجتمع المصري ويعمل أفراده، بروح من المسؤولية والمواطنة، على الإسهام في تقدم المجتمع، من خلال المشاركة في مبادرات تربوية واجتماعية تهدف إلى تعزيز التماسك الاجتماعي وترسيخ قيم التعاون والاحترام المتبادل.
          </p>
          <p>
            ويؤمن البهائيون بأن لكل فرد دورًا في بناء مجتمعه، وأن التقدم الحقيقي يتحقق عندما تتكامل الجهود الفردية والجماعية في خدمة الصالح العام.
          </p>
        </div>
      </section>

      <div className="quote-divider">
        <blockquote>
          يَا أَبْناءَ الإِنْسانِ<br />
          هَلْ عَرَفْتُمْ لِمَ خَلَقْناكُمْ مِنْ تُرابٍ واحِدٍ؛ لِئَلاَّ يَفْتَخِرَ أَحَدٌ عَلى أَحَدٍ.
        </blockquote>
        <cite>— حضرة بهاء الله</cite>
      </div>

      {/* BELIEFS SECTION */}
      <section className="beliefs-section" id="beliefs">
        <div className="beliefs-inner">
          <span className="section-tag centered">ما يؤمنون به</span>
          <h2 className="section-heading centered">إن الأرض وطن واحد والبشر سكانه</h2>
          <p className="section-lead centered">
            الديانة البهائية دين عالمي مستقل يقوم على الإيمان بوحدة الله، ووحدة الأديان، ووحدة الجنس البشري. وترى تعاليمها أن الرسالات الإلهية تمثل مراحل متتابعة لهداية البشرية. وقد جاء حضرة بهاء الله برسالة تدعو إلى تحقيق السلام العالمي، وإرساء العدل، وبناء مجتمع يسوده التعاون والتكافل.
          </p>

          <div className="inline-quote">
            <span className="inline-quote-text">
              يَا ابْنَ الإِنْسانِ — أَحْبَبْتُ خَلْقَكَ فَخَلَقْتُكَ، فَأَحْبِبْني كَيْ أَذْكُرَكَ، وَفِي رُوحِ الْحَياةِ أُثَبِّتُكَ.
            </span>
            <cite>— حضرة بهاء الله</cite>
          </div>

          <div className="beliefs-grid">
            <div className="belief-item">
              <div className="belief-icon" aria-hidden="true">☀</div>
              <h3>وحدة الله</h3>
              <p>الإيمان بإله واحد، خالق الكون، مصدر كل خير وجمال في الوجود.</p>
            </div>
            <div className="belief-item">
              <div className="belief-icon" aria-hidden="true">◉</div>
              <h3>وحدة الأديان</h3>
              <p>الرسالات الإلهية تمثل مراحل متتابعة لهداية البشرية من مصدر واحد.</p>
            </div>
            <div className="belief-item">
              <div className="belief-icon" aria-hidden="true">❊</div>
              <h3>وحدة البشرية</h3>
              <p>البشر جميعاً أسرة واحدة، والتنوع ثروة لا مصدر نزاع.</p>
            </div>
            <div className="belief-item">
              <div className="belief-icon" aria-hidden="true">⚖</div>
              <h3>العلم والدين</h3>
              <p>يجب أن يتوافق العلم والدين، فكلاهما وسيلة للوصول إلى الحقيقة.</p>
            </div>
            <div className="belief-item">
              <div className="belief-icon" aria-hidden="true">♾</div>
              <h3>المساواة بين الجنسين</h3>
              <p>المرأة والرجل متساويان في الحقوق والواجبات أمام الله وأمام المجتمع.</p>
            </div>
            <div className="belief-item">
              <div className="belief-icon" aria-hidden="true">✦</div>
              <h3>نبذ التعصب</h3>
              <p>ضرورة القضاء على جميع أشكال التعصب لبناء عالم أكثر استقراراً وازدهاراً.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* CONTRIBUTIONS SECTION */}
      <section className="split-section split-reversed" id="contributions">
        <div className="split-image">
          <img
            src="assets/img-contributions.png"
            alt="مساهمات البهائيين في بناء المجتمع المصري"
            loading="lazy"
            width="550"
            height="520"
          />
        </div>
        <div className="split-content papyrus-bg">
          <span className="section-tag">مساهماتنا</span>
          <h2 className="split-heading">العمل في سبيل خير العالم</h2>
          <div className="pull-quote">
            "قل أن اتحدوا في كلمتكم واتفقوا في رأيكم واجعلوا إشراقكم أفضل من عشيكم وغدكم أحسن من أمسكم. فضل الإنسان في الخدمة والكمال لا في الزينة والثروة والمال"
            <cite>— حضرة بهاء الله</cite>
          </div>
          <p>
            يساهم البهائيون في مصر في أنشطة تهدف إلى تنمية القدرات الروحية والفكرية للأفراد، وتعزيز روح الخدمة والمسؤولية تجاه المجتمع.
          </p>
          <ul className="contributions-list">
            <li>برامج للأطفال تهدف إلى غرس القيم الأخلاقية</li>
            <li>برامج لليافعين لتطوير قدراتهم واكتشاف دورهم في المجتمع</li>
            <li>أنشطة للشباب والبالغين تركز على التعلم الجماعي</li>
            <li>مبادرات مجتمعية لتعزيز التماسك الاجتماعي وخدمة البيئة</li>
          </ul>
        </div>
      </section>

      <div className="quote-divider">
        <blockquote>
          يَا ابْنَ الرُّوحِ — فِي أَوَّلِ القَوْلِ امْلِكْ قَلْباً جَيِّداً حَسَناً مُنيراً لِتَمْلِكَ مُلْكاً دائِماً باقِياً.
        </blockquote>
        <cite>— حضرة بهاء الله</cite>
      </div>

      {/* HISTORY PREVIEW SECTION */}
      <section className="history-section" id="history">
        <div className="history-hero">
          <img
            src="assets/history-hero.jpeg"
            alt="تاريخ البهائية في مصر"
            className="history-bg-img"
            loading="lazy"
            width="1100"
            height="420"
          />
          <div className="history-hero-overlay">
            <span className="section-tag light">تاريخ البهائية في مصر</span>
            <h2 className="history-hero-title">نورٌ امتدّ عبر الزمان</h2>
          </div>
        </div>

        <div className="history-content">
          <div className="history-opening-quote">
            <blockquote>
              يَا ابْنَ الوُجُودِ — حُبِّي حِصْني مَنْ دَخَلَ فِيهِ نَجا وَأَمِنَ وَمَنْ أَعْرَضَ غَوَى وَهَلَكَ.
            </blockquote>
            <cite>— حضرة بهاء الله</cite>
          </div>

          <div className="history-block">
            <p className="dropcap">
              يمتد وجود البهائيين في مصر إلى أكثر من قرن ونصف، حيث كانت مصر من أوائل البلدان التي شهدت انتشار هذه الدعوة. وقد لعبت مصر دورًا مهمًا في تاريخ الديانة البهائية، نظرًا لموقعها الثقافي والجغرافي، مما جعلها مركزًا للتفاعل الفكري والديني في المنطقة.
            </p>
          </div>

          <div className="milestone-box">
            <div className="milestone-year">١٩٢٥م</div>
            <div className="milestone-text">
              <h4>حكم تاريخي رائد</h4>
              <p>
                سطر القضاء المصري حكماً تاريخياً رائداً جعل من مصر أول دولة في العالم العربي والإسلامي تُقرّ بالاستقلال الديني للعقيدة البهائية كدين قائم بذاته.
              </p>
            </div>
          </div>

          <Link to="/history" className="read-more-link">
            قراءة المزيد عن تاريخ البهائية في مصر ←
          </Link>
        </div>
      </section>

      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* FAQ SECTION */}
      <section className="faq-section papyrus-bg" id="faq">
        <div className="faq-inner">
          <span className="section-tag centered">الأسئلة الشائعة</span>
          <h2 className="section-heading centered">تحرّوا الحقيقة بأنفسكم</h2>

          <div className="faq-list">
            <details className="faq-item">
              <summary>هل الديانة البهائية دين مستقل؟</summary>
              <p>نعم، الديانة البهائية دين عالمي مستقل له نصوصه وتعاليمه ونظامه الإداري.</p>
            </details>
            <details className="faq-item">
              <summary>ما هدف هذا الموقع؟</summary>
              <p>يهدف الموقع إلى التعريف بالدين البهائي ومبادئه، وإبراز مساهمات المجتمع البهائي في مصر.</p>
            </details>
            <details className="faq-item">
              <summary>ما أبرز المبادئ التي يؤكد عليها البهائيون؟</summary>
              <p>وحدة الجنس البشري، المساواة، نبذ التعصب، التوافق بين العلم والدين، وخدمة المجتمع.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <span className="section-tag centered light">تواصل معنا</span>
          <h2 className="section-heading centered light">باب المحبة مفتوح للجميع</h2>
          <p className="contact-lead">
            يسعدنا استقبال استفساراتكم والتواصل معكم للتعرف على المزيد حول المجتمع البهائي وأنشطته. يمكنكم التواصل معنا عبر البريد الإلكتروني أو من خلال النماذج المتاحة على الموقع.
          </p>
          <a href="mailto:info@bahai-egypt.org" className="btn-contact">تواصل معنا</a>
        </div>
      </section>

      {/* HIDDEN WORDS CAROUSEL */}
      <section className="hidden-words-section" id="hidden-words">
        <div className="hidden-words-inner">
          <span className="section-tag centered">الكلمات المكنونة</span>
          <p className="section-lead centered">لحضرة بهاء الله</p>
          <div className="words-carousel">
            {hiddenWords.map((word, i) => (
              <div key={i} className={`word-card ${currentWord === i ? 'active' : ''}`}>
                <blockquote>
                  {word.text}<br />{word.sub}
                </blockquote>
              </div>
            ))}
          </div>
          <div className="words-controls" role="group" aria-label="تنقل بين الكلمات المكنونة">
            <button className="word-btn" onClick={() => setCurrentWord((prev) => (prev - 1 + hiddenWords.length) % hiddenWords.length)} aria-label="الكلمة السابقة">
              <span aria-hidden="true">→</span>
            </button>
            <div className="words-dots" role="tablist" aria-label="مؤشرات الكلمات">
              {hiddenWords.map((_, i) => (
                <button
                  key={i}
                  className={`word-dot ${currentWord === i ? 'active' : ''}`}
                  onClick={() => setCurrentWord(i)}
                  aria-selected={currentWord === i}
                  role="tab"
                  aria-label={`الكلمة ${i + 1}`}
                />
              ))}
            </div>
            <button className="word-btn" onClick={() => setCurrentWord((prev) => (prev + 1) % hiddenWords.length)} aria-label="الكلمة التالية">
              <span aria-hidden="true">←</span>
            </button>
          </div>
        </div>
      </section>

      <div className="section-separator">
        <div className="site-symbol"></div>
      </div>

      {/* MEDIA SECTION */}
      <section className="media-section papyrus-bg" id="media" aria-label="المركز الإعلامي">
        <div className="media-inner">
          <span className="section-tag centered">المركز الإعلامي</span>
          <h3 className="media-subtitle">مناجاة — فيديوهات روحية</h3>
          <div className="media-grid">
            {[
              { id: "UWuXlMMeUiI", title: "مناجاة — ١" },
              { id: "dGsjz2DCuBs", title: "مناجاة — ٢" },
              { id: "PS9eyyq1gMc", title: "مناجاة — ٣" }
            ].map(video => (
              <a key={video.id} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener" className="media-card">
                <div className="media-thumb youtube-thumb" style={{ backgroundImage: `url("https://img.youtube.com/vi/${video.id}/mqdefault.jpg")` }}>
                  <div className="play-btn">▶</div>
                </div>
                <p>{video.title}</p>
              </a>
            ))}
          </div>

          <h3 className="media-subtitle" style={{ marginTop: '4rem' }}>لقاءات مع البهائيين المصريين</h3>
          <div className="interviews-list">
            {[
              "إبراهيم عيسى مع غادة علاء ومحمد بن موسى — البهائية",
              "الساحة مع م. بهاء إسحاق — بهائي في مصر، حكاية ٣ أجيال",
              "ما علاقة الدين البهائي بالطائفة الشيعية وإسرائيل؟",
              "مصر: لماذا يعاني البهائيون لدفن موتاهم؟",
              "اعرف البهائية — غادة علاء وبهاء إسحاق مع أحمد سعد زايد",
              "أسرار الديانة البهائية — د. سيامك ساساني وأ. غادة علاء",
              "سيرة أسرة مصرية بهائية",
              "لقاء المتحدث الإعلامي للبهائيين في مصر بعد رفض المحكمة تخصيص مقابر"
            ].map((text, i) => (
              <a key={i} href="#" className="interview-item">
                <span className="interview-num">{i + 1}</span>
                <span className="interview-text">{text}</span>
                <span className="interview-arrow">←</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section className="articles-section" id="articles">
        <div className="articles-inner">
          <span className="section-tag centered">مقالات الجامعة البهائية العالمية</span>
          <h2 className="section-heading centered">البهائيون في مصر — على الصعيد الدولي</h2>
          <div className="articles-list">
            {[
              { tag: "الأمم المتحدة", title: "خبراء الأمم المتحدة يتناولون انتهاكات حقوق البهائيين في مصر" },
              { tag: "مجلس حقوق الإنسان", title: "بيان حول مصر في الدورة 59 لمجلس حقوق الإنسان الأممي" },
              { tag: "مجلس حقوق الإنسان", title: "بيان حول مصر في الدورة 58 لمجلس حقوق الإنسان الأممي" },
              { tag: "حرية الدين", title: "دول أعضاء في الأمم المتحدة تحث مصر على احترام حرية الدين والمعتقد" },
              { tag: "التنمية", title: "الجامعة البهائية في COP27 تستعرض أنشطة التنمية البهائية في مصر" }
            ].map((article, i) => (
              <a key={i} href="https://www.bic.org" target="_blank" className="article-item">
                <span className="article-tag">{article.tag}</span>
                <h4>{article.title}</h4>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
