'use client';

import { useState, useRef } from 'react';
import './Contact.css';

// Netlify registers this form from public/__forms.html at deploy time.
const FORM_NAME = 'contact';

export default function Contact() {
  // idle | sending | success | error
  const [status, setStatus] = useState('idle');
  const cardRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      form.reset();
      setStatus('success');
      // The thank-you card is shorter than the form, so bring it into view.
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <img src="/assets/nile-night.jpeg" alt="" className="contact-hero-img" />
        <div className="contact-hero-overlay">
          <span className="section-tag light">تواصل معنا</span>
          <h1 className="contact-hero-title">باب المحبة مفتوح للجميع</h1>
          <p className="contact-hero-subtitle">
            يسعدنا استقبال استفساراتكم والتواصل معكم للتعرف على المزيد حول المجتمع البهائي وأنشطته.
          </p>
        </div>
      </section>

      <section className="contact-form-section papyrus-bg">
        <div className="contact-card" ref={cardRef}>
          {status === 'success' ? (
            <div className="contact-success" role="status">
              <h2>شكرًا لتواصلكم معنا</h2>
              <p>تم استلام رسالتكم بنجاح، وسنقوم بالرد عليكم في أقرب وقت ممكن.</p>
              <button type="button" className="contact-submit" onClick={() => setStatus('idle')}>
                إرسال رسالة أخرى
              </button>
            </div>
          ) : (
            <form
              name={FORM_NAME}
              method="POST"
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="contact-honeypot" aria-hidden="true">
                <label>
                  لا تملأ هذا الحقل: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">الاسم</label>
                  <input id="contact-name" type="text" name="name" required autoComplete="name" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">البريد الإلكتروني</label>
                  <input id="contact-email" type="email" name="email" required autoComplete="email" dir="ltr" />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">الموضوع <span className="contact-optional">(اختياري)</span></label>
                <input id="contact-subject" type="text" name="subject" />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">الرسالة</label>
                <textarea id="contact-message" name="message" rows={6} required />
              </div>

              {status === 'error' && (
                <p className="contact-error" role="alert">
                  عذرًا، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى أو مراسلتنا عبر{' '}
                  <a href="mailto:info@bahai-egypt.org">info@bahai-egypt.org</a>.
                </p>
              )}

              <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'جارٍ الإرسال…' : 'إرسال'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
