import './styles/theme.css';
import './components/Hero';
import './components/FeaturesGrid';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initPageTransitions();
  initProductCards();
});

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href') || '');
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: target, offsetY: 80 },
          ease: 'power3.inOut',
        });
      }
    });
  });
}

function initPageTransitions() {
  gsap.from('body', {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
  });
}

function initProductCards() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -8,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });

  gsap.set('.product-card', { opacity: 0, y: 30 });
  
  ScrollTrigger.batch('.product-card', {
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    },
    start: 'top 85%',
  });
}

declare global {
  interface Window {
    Shopify?: {
      theme?: {
        name: string;
        id: number;
      };
    };
  }
}

if (import.meta.env.DEV) {
  console.log('🚀 Theme development mode active');
}
