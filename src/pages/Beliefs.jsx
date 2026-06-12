import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './Beliefs.css';

export default function Beliefs() {
  useReveal('.belief-section, .belief-intro-card');

  return (
    <div className="beliefs-page-wrapper">
      {/* HERO SECTION */}
      <section className="beliefs-hero">
        <img
          src="assets/img-about.png"
          alt="المبادئ والتعاليم البهائية"
          className="beliefs-bg-img"
        />
        <div className="beliefs-hero-overlay">
          <span className="section-tag light">عقيدتنا</span>
          <h1 className="beliefs-hero-title">ما يؤمن به البهائيون</h1>
        </div>
      </section>

      {/* INTRO CARD */}
      <section className="beliefs-intro-section papyrus-bg">
        <div className="beliefs-page-container">
          <div className="belief-intro-card">
            <p className="dropcap">
              الديانة البهائية هي دين عالمي مستقل، يدعو إلى تحقيق وحدة الجنس البشري كهدف رئيسي وغاية قصوى لكافة التطورات الاجتماعية والروحية الحاصلة في هذا العصر.
            </p>
            <p>
              تتمحور التعاليم البهائية حول ثلاث دعائم أساسية: وحدة الله (الخالق الغيب المنيع)، ووحدة الدين (الذي يتجلى تدريجياً عبر العصور لهداية البشر)، ووحدة الإنسانية (التي تجمع البشر كعائلة واحدة متكاملة). ومن هذه الركائز تنبثق مبادئ اجتماعية وأخلاقية شاملة تهدف إلى إصلاح العالم وتجديد هياكله الروحانية والمادية.
            </p>
          </div>
        </div>
      </section>

      {/* BELIEFS SECTIONS - ALTERNATING LAYOUT */}
      <section className="beliefs-content-timeline">
        <div className="beliefs-page-container">

          {/* SECTION 1: ONENESS OF GOD */}
          <div className="belief-section belief-row">
            <div className="belief-text-col">
              <span className="belief-num">٠١</span>
              <h2>وحدة الله الخالق</h2>
              <p>
                يؤمن البهائيون بوجود إله واحد أزلي أبدي، وهو فاطر السماوات والأرض وخالق كل شيء في الوجود. الله سبحانه وتعالى في العقيدة البهائية غيب منيع، يفوق إدراك البشر وتصوراتهم، ولا يمكن لعقل إنساني أن يحيط بكنهه أو ذاته الفريدة.
              </p>
              <p>
                ولأجل إعلان مشيئته وإيصال هدايته للبشر، يتجلى الله في كل عصر من خلال مظاهر أمره (الرسل والأنبياء)، الذين هم بمثابة مرايا صافية تعكس صفات الله وأسماءه الكريمة في عالم الخلق. فكل ما نعرفه عن الله من كمال وجود وجلال ورحمة وعدل وجمال، يفيض إلينا عبر هؤلاء الأنبياء والرسل المكرمين.
              </p>
            </div>
            <div className="belief-graphic-col">
              <div className="graphic-quote-box">
                <blockquote>
                  "شَهِدَ اللهُ أَنَّهُ لاَ إِلهَ إِلاَّ هُوَ وَأَنَّ الَّذِي ظَهَرَ هُوَ الاسْمُ الْمَكْنُونُ وَالرَّمْزُ الْمَخْزُونُ."
                </blockquote>
                <cite>— حضرة بهاء الله</cite>
              </div>
            </div>
          </div>

          <div className="beliefs-section-divider"></div>

          {/* SECTION 2: ONENESS OF RELIGIONS */}
          <div className="belief-section belief-row reverse">
            <div className="belief-text-col">
              <span className="belief-num">٠٢</span>
              <h2>وحدة الأديان والوحي المتتابع</h2>
              <p>
                تقوم الرؤية البهائية للأديان على أساس أن الأديان السماوية الكبرى تنبع من مصدر إلهي واحد، وأنها تمثل فصولاً متتابعة في كتاب واحد مستمر هو "الوحي الإلهي".
              </p>
              <p>
                ترى التعاليم البهائية أن رسالات الأنبياء كأبي الأنبياء إبراهيم، وموسى، وبوذا، وزرادشت، وعيسى، ومحمد، والباب، وبهاء الله، هي في جوهرها حقيقة روحانية واحدة تتطور وتتجدد في كل عصر لتلبي احتياجات البشر المتغيرة وتتناسب مع درجة نضجهم الفكري والاجتماعي. لذا، فإن الاختلافات الظاهرية بين الأديان تكمن في الأحكام المدنية والاجتماعية التي تقتضيها ظروف العصر، بينما يظل الجوهر الروحاني والأخلاقي ثابتاً لا يتغير.
              </p>
            </div>
            <div className="belief-graphic-col">
              <div className="graphic-quote-box">
                <blockquote>
                  "إِنَّ أَدْيانَ اللهِ وَشَرائِعَهُ قَدْ أُنْزِلَتْ وَظَهَرَتْ مِنْ سَماءِ مَشِيئَةِ مالِكِ القِدَمِ، وَالمَقْصُودُ مِنْها هُوَ الاِتِّحادُ وَالاِتِّفاقُ بَيْنَ أَهْلِ العالَمِ."
                </blockquote>
                <cite>— حضرة بهاء الله</cite>
              </div>
            </div>
          </div>

          <div className="beliefs-section-divider"></div>

          {/* SECTION 3: ONENESS OF HUMANITY */}
          <div className="belief-section belief-row">
            <div className="belief-text-col">
              <span className="belief-num">٠٣</span>
              <h2>وحدة الجنس البشري</h2>
              <p>
                هذا المبدأ هو المحور الأساسي الذي تدور حوله كافة التعاليم البهائية الاجتماعية. يؤكد البهائيون أن البشر جميعاً ينتمون إلى عائلة إنسانية واحدة متكاملة، خلقهم الله من تراب واحد لئلا يفتخر أحد على أحد أو يستعلي عرق على آخر.
              </p>
              <p>
                إن تحقيق وحدة البشرية لا يعني إذابة التنوع الثقافي أو الجغرافي، بل يشبه "التنوع في إطار الوحدة" كالزهور المختلفة الألوان والأشكال التي تزيد البستان جمالاً وبهاءً. ويتطلب هذا المبدأ إزالة كافة أشكال التعصبات العرقية والدينية والجنسية والوطنية والطبقية، والسعي لبناء نظام عالمي تسوده العدالة والمحبة والسلام الدائم.
              </p>
            </div>
            <div className="belief-graphic-col">
              <div className="graphic-quote-box">
                <blockquote>
                  "لَيْسَ الفَخْرُ لِمَنْ يُحِبُّ الوَطَنَ، بَلْ لِمَنْ يُحِبُّ العالَمَ. الأَرْضُ وَطَنٌ واحِدٌ وَالبَشَرُ سُكَّانُهُ."
                </blockquote>
                <cite>— حضرة بهاء الله</cite>
              </div>
            </div>
          </div>

          <div className="beliefs-section-divider"></div>

          {/* SECTION 4: HARMONY OF SCIENCE AND RELIGION */}
          <div className="belief-section belief-row reverse">
            <div className="belief-text-col">
              <span className="belief-num">٠٤</span>
              <h2>التوافق بين العلم والدين</h2>
              <p>
                تؤكد التعاليم البهائية أن الحقيقة واحدة لا تتجزأ، وأن العلم والدين هما وسيلتان مكملتان لفهم هذه الحقيقة والارتقاء بالإنسانية.
              </p>
              <p>
                شبه حضرة عبد البهاء العلم والدين بجناحي طائر واحد، لا يمكنه الطيران والارتفاع في سماء الرقي بغيرهما معاً. فالعلم بلا دين يؤدي إلى المادية البحتة والدمار المادي، والدين بلا علم يؤدي إلى الخرافات والتعصب الأعمى والجمود الفكري. لذا يجب أن يتطابق الفكر الديني مع الحقائق العلمية المثبتة والمنطق العقلي السليم ليكون قوة إيجابية تدفع مسيرة الحضارة.
              </p>
            </div>
            <div className="belief-graphic-col">
              <div className="graphic-quote-box">
                <blockquote>
                  "العلم والدين هما الجناحان اللذان يحلق بهما طائر الروح البشري في فضاء التطور والكمال السامي."
                </blockquote>
                <cite>— حضرة عبد البهاء</cite>
              </div>
            </div>
          </div>

          <div className="beliefs-section-divider"></div>

          {/* SECTION 5: EQUALITY OF GENDERS */}
          <div className="belief-section belief-row">
            <div className="belief-text-col">
              <span className="belief-num">٠٥</span>
              <h2>المساواة الكاملة بين الجنسين</h2>
              <p>
                تعد المساواة التامة في الحقوق والفرص والتعليم بين المرأة والرجل شرطاً أساسياً لتحقيق السلام العالمي والاستقرار الاجتماعي في عقيدة البهائيين.
              </p>
              <p>
                ترى التعاليم البهائية أن كفتي الإنسانية هما المرأة والرجل، ولا يمكن للمجتمع البشري أن يبلغ كمال نموه وقدراته طالما بقيت إحدى الكفتين غير مكافئة للأخرى أو محرومة من حقوقها الكاملة في التعليم والمساهمة في بناء الحضارة. إن دخول المرأة بقوة وتأثير في شتى ميادين القرار والخدمة المجتمعية يعد أكبر ضمانة لإنهاء ويلات الحروب وإحلال السلام الشامل.
              </p>
            </div>
            <div className="belief-graphic-col">
              <div className="graphic-quote-box">
                <blockquote>
                  "عالم الإنسانية له جناحان: أحدهما الذكور والآخر الإناث، وطالما لم يتساو هذان الجناحان فلن يمكن لهذا الطائر أن يحلق في الفضاء الأرحب."
                </blockquote>
                <cite>— حضرة عبد البهاء</cite>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COVENANT BANNER SECTION */}
      <section className="covenant-intro-banner papyrus-bg">
        <div className="beliefs-page-container">
          <div className="covenant-card-wrapper">
            <span className="section-tag centered">حماية الوحدة وصيانة الجامعة</span>
            <h2 className="covenant-banner-title text-center">الميثاق الإلهي والعهد الأصغر</h2>
            <p className="covenant-banner-text text-center">
              لم يترك حضرة بهاء الله أتباعه في حيرة بعد رحيله، بل أبرم معهم عهداً وميثاقاً فريداً ومكتوباً، عيّن بموجبه خليفته الشرعي والمبين الوحيد لتعاليمه ليكون محوراً لوحدة الجامعة البهائية وحمايتها من الانقسام والشقاق.
            </p>
            <div className="text-center button-container">
              <Link to="/beliefs/covenant" className="go-to-covenant-btn">
                استكشف الميثاق الإلهي ورحلة الخلافة بالتفصيل
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
