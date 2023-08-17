import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [faqOpenId, setFaqOpenId] = useState<number | null>(null);

  const handleFaqClick = (id: number) => {
    setFaqOpenId(id === faqOpenId ? null : id);
  };

  const faqs = [
    {
      question: 'How can I start trading with SolarBitTrade?',
      answer: 'You can start by creating an account and depositing the minimum required amount.',
    },
    {
      question: 'What is the minimum amount required to start trading?',
      answer: 'The minimum amount required to start trading is $100.',
    },
    {
      question: 'Can I withdraw my funds anytime?',
      answer: 'Yes, you can withdraw your funds anytime with our easy withdrawal process.',
    },
    {
      question: 'Is SolarBitTrade secure?',
      answer: 'Absolutely! We use state-of-the-art security measures to protect your funds and personal information.',
    },
    {
      question: 'Do I need prior trading experience to use SolarBitTrade?',
      answer: 'No, SolarBitTrade is designed to be user-friendly for both experienced traders and beginners.',
    },
    {
      question: 'How does SolarBitTrade contribute to sustainability?',
      answer: 'SolarBitTrade contributes to sustainability by investing in renewable energy projects, particularly solar power. We believe that investing in renewable energy is not only good for the planet, but also a profitable venture.',
    },
    {
      question: 'Why should I invest in solar energy?',
      answer: 'Solar energy is a renewable, plentiful, and sustainable form of energy. By investing in solar energy, you’re not only contributing to reducing global carbon emissions but also investing in an industry with huge growth potential.',
    },
    {
      question: 'How reliable is solar energy for trading?',
      answer: 'Solar energy is one of the fastest-growing energy sources in the world. As more people recognize the importance of clean energy, the demand for solar is increasing, making it a reliable sector for trading.',
    },
    {
      question: 'What is SolarBitTrade’s approach to responsible investing?',
      answer: 'At SolarBitTrade, we believe in a balanced approach to investing. While profitability is important, we also recognize our responsibility towards the environment. Hence, we prioritize investments in projects that not only yield good returns but also have a positive impact on the environment.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.companyName}>
          <h1>SolarBitTrade</h1>
        </div>
        <nav>
          <ul className={styles.nav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/solution">Solution</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className={styles["sign-in"]}>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>

      <section id="contact" className={styles.contact}>
  <div className={styles.container}>
    <h2 className={styles.heading}>Contact Us</h2>
    <div className={styles["contact-intro"]}>Have a question or feedback? We would love to hear from you!</div>
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name">Your Name</label>
        <input className={styles.input} type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">Your Email</label>
        <input className={styles.input} type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="message">Your Message</label>
        <textarea className={styles.input} id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <button className={styles.submitButton} type="submit">Submit</button>
    </form>
  </div>
</section>

      <section id="faq" className={styles.faq}>
        <div className={`${styles.container} container`}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.subHeading}>Here are some of the most frequently asked questions from our users:</p>
          
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} onClick={() => handleFaqClick(index)} className={`${styles.faqItem} ${faqOpenId === index ? styles.open : ''}`}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 Solarbittrade</p>
      </footer>
    </>
  );
};

export default Contact;
