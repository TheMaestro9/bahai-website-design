import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getQuestionBySlug, questionsData } from '../data/questionsData';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import IconButton from '../components/ui/IconButton';
import SvgIcon from '../components/ui/SvgIcon';
import './ArticleDetail.css';

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const article = getQuestionBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!article) {
    return (
      <div className="article-not-found papyrus-bg" id="main-content">
        <div className="container not-found-container">
          <div className="not-found-card">
            <SvgIcon name="help-circle" size={54} className="not-found-icon" />
            <h1>المقال غير موجود</h1>
            <p>عذراً، لم نتمكن من العثور على المقال المطلوب أو ربما تم تغيير رابطه.</p>
            <Button to="/questions" variant="primary" icon="arrow-right" iconPosition="right">
              العودة إلى قائمة التساؤلات والمقالات
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Related articles from the same category (excluding current)
  const relatedArticles = questionsData
    .filter((item) => item.category === article.category && item.slug !== article.slug)
    .slice(0, 3);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const isQuoteParagraph = (p) => {
    return (
      (p.startsWith('"') && p.endsWith('"')) ||
      (p.startsWith('«') && p.endsWith('»')) ||
      p.includes('سورة') ||
      p.includes('(كولوسي')
    );
  };

  return (
    <article className="article-detail-page papyrus-bg" id="main-content">
      {/* Top Breadcrumb & Navigation */}
      <div className="article-top-nav">
        <div className="container article-nav-container">
          <nav className="article-breadcrumbs" aria-label="مسار التصفح">
            <Link to="/">الرئيسية</Link>
            <span className="crumb-sep">/</span>
            <Link to="/questions">تساؤلات وحقائق</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{article.title}</span>
          </nav>

          <Button
            to="/questions"
            variant="outline"
            size="sm"
            icon="arrow-right"
            iconPosition="right"
            className="back-btn"
          >
            العودة للتساؤلات
          </Button>
        </div>
      </div>

      {/* Main Article Container */}
      <div className="container article-main-container">
        <div className="article-card-wrapper">
          {/* Header */}
          <header className="article-header">
            <div className="article-header-meta-top">
              <Badge variant="default" size="md" icon="tag">
                {article.category}
              </Badge>
              <span className="article-read-time">
                <SvgIcon name="clock" size={14} />
                وقت القراءة: {article.readTime}
              </span>
            </div>

            <h1 className="article-headline">{article.title}</h1>

            <div className="article-byline">
              <div className="author-info">
                <div className="author-avatar">
                  <SvgIcon name="user" size={18} />
                </div>
                <div className="author-text">
                  <span className="author-name">بقلم: {article.author}</span>
                  <span className="author-title">باحث في الدراسات البهائية وتاريخ الأديان</span>
                </div>
              </div>

              <div className="article-quick-actions">
                <Button
                  variant="outline"
                  size="sm"
                  icon={copied ? 'check' : 'copy'}
                  iconPosition="right"
                  onClick={handleCopy}
                  className={copied ? 'copied-btn' : ''}
                >
                  {copied ? 'تم نسخ الرابط!' : 'نسخ الرابط'}
                </Button>
              </div>
            </div>
          </header>

          {/* Core Question & Concise Answer Box */}
          <div className="article-question-highlight">
            <div className="question-highlight-header">
              <SvgIcon name="sparkles" size={18} className="highlight-icon" />
              <span className="highlight-tag">السؤال المطروح وخلاصة الإجابة</span>
            </div>
            <h2 className="highlight-question-title">{article.question}</h2>
            <p className="highlight-answer-text">{article.shortAnswer}</p>
          </div>

          {/* Full Article Content */}
          <section className="article-content-body">
            <div className="article-divider-ornament">
              <span className="ornament-line"></span>
              <span className="ornament-symbol">✦</span>
              <span className="ornament-line"></span>
            </div>

            {article.paragraphs.map((p, idx) => {
              if (isQuoteParagraph(p)) {
                return (
                  <blockquote key={idx} className="article-quote-block">
                    <SvgIcon name="quote" size={24} className="quote-mark" />
                    <p>{p}</p>
                  </blockquote>
                );
              }

              // Check if paragraph is short header-like text
              if (p.length < 60 && !p.endsWith('.') && !p.endsWith('!') && !p.endsWith('؟') && idx > 0) {
                return (
                  <h3 key={idx} className="article-subheading">
                    {p}
                  </h3>
                );
              }

              return (
                <p key={idx} className="article-paragraph">
                  {p}
                </p>
              );
            })}
          </section>

          {/* Article Footer & Actions */}
          <footer className="article-footer">
            <div className="article-share-section">
              <span className="share-title">هل وجدت هذا المقال مفيداً؟ شاركه مع الآخرين:</span>
              <div className="share-actions">
                <Button
                  variant="primary"
                  size="sm"
                  icon={copied ? 'check' : 'share'}
                  iconPosition="right"
                  onClick={handleCopy}
                >
                  {copied ? 'تم نسخ رابط المقال!' : 'مشاركة المقال'}
                </Button>
                <Button
                  to="/questions"
                  variant="outline"
                  size="sm"
                  icon="arrow-right"
                  iconPosition="right"
                >
                  تصفح المزيد من التساؤلات
                </Button>
              </div>
            </div>
          </footer>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="related-articles-section" aria-label="مقالات ذات صلة">
            <h3 className="related-section-title">
              مقالات وتساؤلات ذات صلة في محور «{article.category}»
            </h3>
            <div className="related-cards-grid">
              {relatedArticles.map((rel) => (
                <div key={rel.id} className="related-card">
                  <div className="related-card-category">{rel.category}</div>
                  <h4 className="related-card-title">
                    <Link to={`/questions/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <p className="related-card-excerpt">{rel.shortAnswer}</p>
                  <Button
                    to={`/questions/${rel.slug}`}
                    variant="ghost"
                    size="sm"
                    icon="arrow-left"
                    iconPosition="left"
                    className="related-read-more"
                  >
                    اقرأ المزيد
                  </Button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
