'use client';

import { useState, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import './Contact.css';
import { asset } from '@/utils/asset';

// Messages are sent through Web3Forms (web3forms.com), which emails them to
// the inbox this access key was created for. The key is public by design.
const WEB3FORMS_KEY = '79216a5d-3c57-46dc-8487-98997dfc9857';
const CONTACT_EMAIL = 'info@bahai-egypt.org';
// Web3Forms' shared hCaptcha site key for free plans. hCaptcha must also be
// switched on for this form in the Web3Forms dashboard.
const HCAPTCHA_SITE_KEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';

export default function Contact() {
  // idle | captcha | sending | success | error
  const [status, setStatus] = useState('idle');
  const [captchaToken, setCaptchaToken] = useState('');
  const cardRef = useRef(null);
  const captchaRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!captchaToken) {
      setStatus('captcha');
      return;
    }
    setStatus('sending');

    try {
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          access_key: WEB3FORMS_KEY,
          'h-captcha-response': captchaToken,
          subject: data.subject || 'رسالة جديدة من موقع البهائيين في مصر',
          from_name: 'Bahai Egypt website',
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(`Form submission failed: ${result.message}`);
      form.reset();
      setStatus('success');
      // The thank-you card is shorter than the form, so bring it into view.
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      // Each captcha answer works only once, so ask for a fresh one next time.
      captchaRef.current?.resetCaptcha();
      setCaptchaToken('');
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <img src={asset('/assets/nile-night.jpeg')} alt="" className="contact-hero-img" />
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
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Spam trap: hidden from people; Web3Forms drops messages where it is filled. */}
              <p className="contact-honeypot" aria-hidden="true">
                <label>
                  لا تملأ هذا الحقل: <input name="botcheck" tabIndex={-1} autoComplete="off" />
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

              <div className="contact-captcha">
                <HCaptcha
                  ref={captchaRef}
                  sitekey={HCAPTCHA_SITE_KEY}
                  reCaptchaCompat={false}
                  languageOverride="ar"
                  onVerify={(token) => {
                    setCaptchaToken(token);
                    if (status === 'captcha') setStatus('idle');
                  }}
                  onExpire={() => setCaptchaToken('')}
                />
              </div>

              {status === 'captcha' && (
                <p className="contact-error" role="alert">
                  يرجى تأكيد أنك لست روبوتًا قبل إرسال الرسالة.
                </p>
              )}

              {status === 'error' && (
                <p className="contact-error" role="alert">
                  عذرًا، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى أو مراسلتنا عبر{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
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
