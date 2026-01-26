import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class HeroComponent extends HTMLElement {
  private timeline: gsap.core.Timeline | null = null;

  connectedCallback() {
    this.render();
    this.initAnimations();
  }

  disconnectedCallback() {
    this.timeline?.kill();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  private render() {
    this.innerHTML = `
      <section class="hero relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
        <div class="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950"></div>
        
        <div class="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl"></div>
        
        <div class="container relative z-10 mx-auto px-6 text-center">
          <div class="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full mb-8">
            <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            <span class="text-sm text-dark-300 font-mono">Professional Camera Equipment</span>
          </div>
          
          <h1 class="hero-title text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span class="block text-dark-100">Precision</span>
            <span class="block text-gradient">Imaging Tech</span>
          </h1>
          
          <p class="hero-description max-w-2xl mx-auto text-lg md:text-xl text-dark-400 mb-10 leading-relaxed">
            High-performance camera systems engineered for professionals. 
            Cutting-edge technology meets uncompromising quality.
          </p>
          
          <div class="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/collections/all" class="btn-primary">
              <span>Explore Products</span>
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="/pages/about" class="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        
        <div class="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span class="text-xs text-dark-500 font-mono uppercase tracking-widest">Scroll</span>
          <div class="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
        </div>
        
        <div class="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-dark-700 to-transparent hero-line"></div>
        <div class="absolute top-40 right-20 w-px h-24 bg-gradient-to-b from-transparent via-dark-700 to-transparent hero-line"></div>
        <div class="absolute bottom-32 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent hero-line"></div>
      </section>
    `;
  }

  private initAnimations() {
    this.timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set(['.hero-badge', '.hero-title', '.hero-description', '.hero-cta', '.hero-scroll'], {
      opacity: 0,
      y: 30,
    });

    gsap.set('.hero-glow', {
      scale: 0.5,
      opacity: 0,
    });

    gsap.set('.hero-line', {
      scaleY: 0,
      opacity: 0,
    });

    this.timeline
      .to('.hero-glow', {
        scale: 1,
        opacity: 1,
        duration: 1.5,
      })
      .to('.hero-badge', {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=1')
      .to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
      }, '-=0.6')
      .to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.7')
      .to('.hero-cta', {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.6')
      .to('.hero-scroll', {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.4')
      .to('.hero-line', {
        scaleY: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
      }, '-=0.8');

    gsap.to('.hero-glow', {
      scale: 1.1,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    ScrollTrigger.create({
      trigger: this,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.to('.hero-glow', {
          y: self.progress * 100,
          opacity: 1 - self.progress * 0.5,
        });
      },
    });
  }
}

customElements.define('hero-component', HeroComponent);
