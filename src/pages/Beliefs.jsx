import useReveal from '../hooks/useReveal';
import './Beliefs.css';

const TOPIC_LINKS = [
  { title: 'لمحة عامّة', url: '#overview', isInternal: true },
  { title: 'حضرة بهاءاللّٰه وعهده وميثاقه', url: 'https://www.bahai.org/ar/beliefs/bahaullah-covenant' },
  { title: 'حياة الرّوح', url: 'https://www.bahai.org/ar/beliefs/life-spirit' },
  { title: 'الله وخلقه', url: 'https://www.bahai.org/ar/beliefs/god-his-creation' },
  { title: 'العلاقات الأساسيّة', url: 'https://www.bahai.org/ar/beliefs/essential-relationships' },
  { title: 'السّلام العالميّ', url: 'https://www.bahai.org/ar/beliefs/universal-peace' }
];

const THEMATIC_TOPICS = [
  {
    id: 'covenant',
    title: 'حضرة بهاءاللّٰه وعهده وميثاقه',
    subtitle: 'نشأة الدّين البهائيّ ومصدر وحدته المميزة',
    image: 'assets/beliefs/tile-1-bahaullah-covenant.jpg',
    url: 'https://www.bahai.org/ar/beliefs/bahaullah-covenant',
    tag: 'العهد والميثاق'
  },
  {
    id: 'life-spirit',
    title: 'حياة الرّوح',
    subtitle: 'الروح الخالدة، الهدف من الحياة، وتطور الصفات الروحانية',
    image: 'assets/beliefs/tile-4-life-spirit.jpg',
    url: 'https://www.bahai.org/ar/beliefs/life-spirit',
    tag: 'الروحانيات'
  },
  {
    id: 'god-creation',
    title: 'الله وخلقه',
    subtitle: 'اللّٰه والوحي الإلهيّ ومظاهر الظّهور والجنس البشريّ وعالم الطّبيعة، تقدّم المدنيّة',
    image: 'assets/beliefs/tile-3-god-his-creation.jpg',
    url: 'https://www.bahai.org/ar/beliefs/god-his-creation',
    tag: 'الوحي والكون'
  },
  {
    id: 'relationships',
    title: 'العلاقات الأساسيّة',
    subtitle: 'تطوير العلاقات والروابط الّتي تعكس مبدأ وحدة العالم الإنساني بين الأفراد، الجامعات، والمؤسسات',
    image: 'assets/beliefs/tile-2-essential-relationships.jpg',
    url: 'https://www.bahai.org/ar/beliefs/essential-relationships',
    tag: 'المجتمع والوحدة'
  },
  {
    id: 'peace',
    title: 'السّلام العالميّ',
    subtitle: 'المبادئ اللازمة لتحقيق السلام وبناء مدنيّة عالمية جديدة',
    image: 'assets/beliefs/tile-5-universal-peace.jpg',
    url: 'https://www.bahai.org/ar/beliefs/universal-peace',
    tag: 'السلام والحضارة'
  }
];

export default function Beliefs() {
  useReveal('.belief-reveal');

  return (
    <div className="beliefs-page-wrapper">
      {/* HERO SECTION */}
      <section className="beliefs-hero">
        <img
          src="assets/beliefs/sea.jpg"
          alt="ما يؤمن به البهائيّون"
          className="beliefs-bg-img"
        />
        <div className="beliefs-hero-overlay">
          <span className="section-tag light">عقيدتنا</span>
          <h1 className="beliefs-hero-title">ما يؤمن به البهائيّون</h1>
        </div>
      </section>

      {/* TOPIC NAVIGATION BAR */}
      <nav className="beliefs-topics-bar" aria-label="أقسام العقيدة">
        <div className="beliefs-container">
          <ul className="topics-nav-list">
            {TOPIC_LINKS.map((item, index) => (
              <li key={index}>
                {item.isInternal ? (
                  <a href={item.url} className="topic-nav-link active">
                    {item.title}
                  </a>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="topic-nav-link"
                  >
                    <span>{item.title}</span>
                    <span className="external-arrow" aria-hidden="true">↗</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* OVERVIEW SECTION */}
      <section className="beliefs-overview-section papyrus-bg" id="overview">
        <div className="beliefs-container">
          <div className="belief-overview-card belief-reveal">
            <div className="overview-header">
              <span className="section-tag">لمحة عامّة</span>
              <h2 className="overview-title">أسس المعتقدات والتعاليم البهائية</h2>
            </div>
            
            <p className="overview-paragraph dropcap">
              تلهم التّعاليم البهائيّة في آلاف تلو آلاف من بقاع الأرض، أفرادًا وجماعات يعملون على تحسين حياتهم ويساهمون في تقدّم الحضارة. وتتناول المعتقدات البهائيّة مواضيعَ جوهريّة منها: وحدانيّة اللّٰه ووحدة الدّين، ووحدة الجنس البشريّ ونبذ التّعصّبات، والنّبل المتأصّل في الإنسان، والتّكشّف التّدريجيّ للحقيقة الدّينيّة، وتطوير الخصال الرّوحانيّة، والتّكامل بين العبادة والخدمة، والمساواة الأساسيّة بين النساء والرّجال، واتّفاق الدّين والعلم، ومحوريّة العدل في كافّة المساعي البشريّة، وأهمّيّة التّعليم، وديناميكيّة العلاقات الّتي تربط الأفراد والجامعات والمؤسّسات بينما تتقدّم البشريّة نحو رشدها الجماعيّ.
            </p>

            <div className="pull-quote boxed">
              <blockquote>
                "إنّ ربّكم الرّحمن يحبّ أن يرى من في الأكوان كنفس واحدة وهيكل واحد."
              </blockquote>
              <cite>— حضرة بهاءاللّٰه</cite>
            </div>
          </div>
        </div>
      </section>

      {/* LOTUS SEPARATOR */}
      <div className="section-separator" aria-hidden="true"></div>

      {/* THEMATIC TOPICS SECTION */}
      <section className="thematic-topics-section">
        <div className="beliefs-container">
          <div className="section-intro-center belief-reveal">
            <span className="section-tag centered">استكشاف أعمق</span>
            <h2 className="section-heading centered">استكشاف مواضيع مختارة</h2>
            <p className="section-lead centered">
              يهدف هذا القسم من الموقع إلى تنظيم مجموعة من المعتقدات البهائيّة الرّئيسيّة في عدد من المواضيع.
            </p>
          </div>

          <div className="thematic-grid">
            {THEMATIC_TOPICS.map((topic) => (
              <a
                key={topic.id}
                href={topic.url}
                target="_blank"
                rel="noopener noreferrer"
                className="thematic-card belief-reveal"
              >
                <div className="card-image-wrapper">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    loading="lazy"
                    className="card-image"
                  />
                  <div className="card-badge">{topic.tag}</div>
                  <div className="card-image-gradient"></div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">
                    {topic.title}
                    <span className="card-arrow" aria-hidden="true">↗</span>
                  </h3>
                  <p className="card-subtitle">{topic.subtitle}</p>
                  <span className="card-action-link">
                    استكشف الموضوع على bahai.org
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCE LIBRARY SECTION */}
      <section className="library-callout-section">
        <div className="beliefs-container">
          <div className="library-card belief-reveal">
            <div className="library-content">
              <span className="section-tag light">المصادر والآثار الكتابية</span>
              <h2 className="library-title">مكتبة المراجع البهائيّة</h2>
              <p className="library-text">
                قد ترغب في زيارة مكتبة المراجع البهائيّة لفهم أعمق للمعتقدات البهائيّة حيث يمكنك الاطّلاع على الآثار الكتابيّة لحضرة الباب، وحضرة بهاءاللّٰه، وحضرة عبدالبهاء، بالإضافة إلى مؤلّفات كتبها حضرة شوقي أفندي ومجموعة من بيانات ورسائل صادرة عن بيت العدل الأعظم.
              </p>
              <div className="library-action">
                <a
                  href="https://reference.bahai.org/ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="library-btn"
                >
                  <span>تفضّل بزيارة المكتبة</span>
                  <span className="btn-icon" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING INSPIRATIONAL QUOTE */}
      <section className="quote-divider">
        <blockquote>
          "يا أبناء الإنسان، إنّ دين اللّٰه ومذهبه هو لأجلِ حفظ العالم واتّحاده واتّفاقه ومحبّته وألفته، فلا تجعلوه سببًا للنّفاق والاختلاف والضّغينة والبغضاء... وما يشاد على هذا الأساس لا تزعزعه حوادث العالم ولا يتداعى بمرور الزّمن."
        </blockquote>
        <cite>— حضرة بهاءاللّٰه</cite>
      </section>
    </div>
  );
}
