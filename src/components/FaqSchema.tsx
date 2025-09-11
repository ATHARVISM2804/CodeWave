// filepath: f:\Agency CLients works\Parusha\CodeWave\src\components\FaqSchema.tsx
import React from 'react';

const FaqSchema: React.FC = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Codewave.it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Codewave.it is an Intelligence Studio that builds AI-powered websites, custom software, mobile apps, GovTech platforms, and digital marketing solutions for startups, businesses, enterprises, and governments worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Codewave.it offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer Web Development, Custom Software Solutions, AI-Powered Automation & Smart Tools, GovTech Applications, Mobile App Development, UI/UX Design, API Integration & Data Intelligence, and Digital Marketing."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does Codewave.it serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We partner with startups & scaleups, government & law enforcement, logistics & delivery, fintech & professional services, education & eLearning, and healthcare & wellness to deliver smart, secure, and scalable digital solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build SEO and AI-friendly websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build fast, SEO-optimized, and AI-agent friendly websites that are structured for discoverability, semantic clarity, and high performance."
        }
      },
      {
        "@type": "Question",
        "name": "What is custom software development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom software is built to fit your unique workflows. We design internal tools, dashboards, portals, and automation systems that adapt to your organization instead of forcing you to adapt to generic tools."
        }
      },
      {
        "@type": "Question",
        "name": "How does Codewave use AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We create AI-powered chatbots, knowledge assistants, document summarizers, automated reporting tools, and smart workflows that reduce manual work, improve decision-making, and accelerate growth."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with governments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design secure GovTech applications including complaint portals, citizen communication tools, field dashboards, and case management systems — all built for compliance, accountability, and scale."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build mobile apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build cross-platform and native mobile apps with features like GPS tracking, real-time notifications, secure authentication, and offline-first capability — from MVPs to enterprise-scale apps."
        }
      },
      {
        "@type": "Question",
        "name": "Why is UI/UX design important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Great design guides action, reduces friction, and delights users. Our UX services cover user journeys, wireframes, prototypes, and scalable design systems tested with real users."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide API integration and data dashboards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build secure API integrations with CRMs, ERPs, and internal tools, along with dashboards that transform raw data into actionable insights for smarter business decisions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our digital marketing solutions combine SEO, content marketing, social media, paid campaigns, and AI insights to grow your brand visibility, authority, and revenue."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Codewave.it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact us at hello@codewave.it, connect via WhatsApp, or schedule a call through our website."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
};

export default FaqSchema;