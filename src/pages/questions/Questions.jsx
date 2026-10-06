import React, { useState, useMemo } from 'react';
import { questionsData, categoriesList } from '../../data/questionsData';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import IconButton from '../../components/ui/IconButton';
import SvgIcon from '../../components/ui/SvgIcon';
import './Questions.css';

export default function Questions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  // Filtered questions based on search and category
  const filteredQuestions = useMemo(() => {
    return questionsData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.trim().toLowerCase();
      const inQuestion = item.question?.toLowerCase().includes(q);
      const inTitle = item.title?.toLowerCase().includes(q);
      const inShortAnswer = item.shortAnswer?.toLowerCase().includes(q);
      const inBody = item.paragraphs?.some((p) => p.toLowerCase().includes(q));

      return inQuestion || inTitle || inShortAnswer || inBody;
    });
  }, [searchQuery, selectedCategory]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: questionsData.length };
    categoriesList.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = questionsData.filter((q) => q.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  const handleCopyLink = (slug, id) => {
    const url = `${window.location.origin}${window.location.pathname}#/questions/${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="questions-page papyrus-bg" id="main-content">
      {/* Hero Section */}
      <section className="questions-hero">
        <div className="container">
          <div className="questions-hero-content">
            <h1 className="questions-hero-title">
              تساؤلات وحقائق حول الدين البهائي
            </h1>
            <p className="questions-hero-desc">
              إجابات مباشرة وموجزة تتناول المسائل العقائدية والتاريخية والاجتماعية بموضوعية وبرهان.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container questions-container">
        {/* Search & Filter Toolbar */}
        <section className="questions-toolbar" aria-label="أدوات البحث والتصنيف">
          <div className="questions-search-box">
            <div className="search-input-wrapper">
              <SvgIcon name="search" size={20} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="ابحث في التساؤلات، المقالات، أو النصوص (مثلاً: خاتم النبيين، السياسة، إسرائيل)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="بحث في التساؤلات"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="مسح نص البحث"
                >
                  <SvgIcon name="close" size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Categories Filter Tabs */}
          <div className="questions-categories-tabs" role="tablist">
            {categoriesList.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`category-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="tab-label">{cat.label}</span>
                  <span className="tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Active Status bar */}
          <div className="questions-status-bar">
            <div className="results-count">
              يتم عرض <strong>{filteredQuestions.length}</strong> من أصل {questionsData.length} تساؤلاً ومقالاً
            </div>
            {(searchQuery || selectedCategory !== 'all') && (
              <button className="reset-filter-btn" onClick={handleReset}>
                إلغاء التصفيات
              </button>
            )}
          </div>
        </section>

        {/* Questions Grid */}
        {filteredQuestions.length > 0 ? (
          <section className="questions-grid" aria-label="قائمة التساؤلات والمقالات">
            {filteredQuestions.map((item) => (
              <article key={item.id} className="question-card">
                <div className="question-card-top">
                  <Badge variant="default" size="sm" icon="tag">
                    {item.category}
                  </Badge>
                  <div className="question-card-meta">
                    <span className="meta-item">
                      <SvgIcon name="clock" size={13} />
                      {item.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="question-card-title">
                  {item.question}
                </h2>

                <div className="question-card-article-ref">
                  <span className="article-ref-label">المقال:</span>
                  <span className="article-ref-name">{item.title}</span>
                </div>

                <div className="question-short-answer-box">
                  <div className="short-answer-tag">
                    <SvgIcon name="sparkles" size={14} />
                    <span>خلاصة الإجابة</span>
                  </div>
                  <p className="short-answer-text">{item.shortAnswer}</p>
                </div>

                <div className="question-card-footer">
                  <Button
                    to={`/questions/${item.slug}`}
                    variant="primary"
                    size="sm"
                    icon="arrow-left"
                    iconPosition="left"
                  >
                    اقرأ المقال كاملاً
                  </Button>

                  <div className="card-actions">
                    <IconButton
                      icon={copiedId === item.id ? 'check' : 'share'}
                      label={copiedId === item.id ? 'تم نسخ الرابط!' : 'مشاركة أو نسخ الرابط'}
                      title={copiedId === item.id ? 'تم نسخ الرابط!' : 'نسخ رابط المقال'}
                      size="sm"
                      onClick={() => handleCopyLink(item.slug, item.id)}
                      className={copiedId === item.id ? 'copied-success' : ''}
                    />
                  </div>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="questions-empty-state">
            <div className="empty-state-icon">
              <SvgIcon name="help-circle" size={48} />
            </div>
            <h3 className="empty-state-title">لم يتم العثور على نتائج</h3>
            <p className="empty-state-desc">
              لم نجد أي تساؤلات أو مقالات تطابق «{searchQuery}». جرّب استخدام كلمات بحث أخرى أو تصفح كل الموضوعات.
            </p>
            <Button variant="outline" size="md" onClick={handleReset}>
              عرض كل الموضوعات
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
