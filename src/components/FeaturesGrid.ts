import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class FeaturesGridComponent extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initAnimations();
  }

  private render() {
    this.innerHTML = `
      <section class="features py-24 bg-dark-950">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="features-title text-3xl md:text-5xl font-bold text-dark-100 mb-4">
              Technical <span class="text-gradient">Excellence</span>
            </h2>
            <p class="features-subtitle text-dark-400 max-w-xl mx-auto">
              Every component engineered for maximum performance and reliability.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="feature-card card-tech">
              <div class="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-100 mb-2">4K Resolution</h3>
              <p class="text-dark-400 text-sm">Ultra-high definition capture with exceptional clarity and detail.</p>
              <div class="mt-4 pt-4 border-t border-dark-700/50">
                <span class="text-xs font-mono text-primary-500">8.3MP • 60fps</span>
              </div>
            </div>
            
            <div class="feature-card card-tech">
              <div class="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-100 mb-2">Low Latency</h3>
              <p class="text-dark-400 text-sm">Real-time streaming with minimal delay for critical applications.</p>
              <div class="mt-4 pt-4 border-t border-dark-700/50">
                <span class="text-xs font-mono text-primary-500">&lt;50ms • H.265</span>
              </div>
            </div>
            
            <div class="feature-card card-tech">
              <div class="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-100 mb-2">IP67 Rated</h3>
              <p class="text-dark-400 text-sm">Weather-sealed construction for demanding environments.</p>
              <div class="mt-4 pt-4 border-t border-dark-700/50">
                <span class="text-xs font-mono text-primary-500">-40°C to +60°C</span>
              </div>
            </div>
            
            <div class="feature-card card-tech">
              <div class="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-100 mb-2">AI Analytics</h3>
              <p class="text-dark-400 text-sm">Built-in neural processing for intelligent detection.</p>
              <div class="mt-4 pt-4 border-t border-dark-700/50">
                <span class="text-xs font-mono text-primary-500">Edge AI • NPU</span>
              </div>
            </div>
            
            <div class="feature-card card-tech">
              <div class="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-100 mb-2">Wireless</h3>
              <p class="text-dark-400 text-sm">Dual-band WiFi 6 for reliable high-bandwidth streaming.</p>
              <div class="mt-4 pt-4 border-t border-dark-700/50">
                <span class="text-xs font-mono text-primary-500">802.11ax • 2.4/5GHz</span>
              </div>
            </div>
            
            <div class="feature-card card-tech">
              <div class="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-dark-100 mb-2">Night Vision</h3>
              <p class="text-dark-400 text-sm">Advanced IR illumination for 24/7 monitoring capability.</p>
              <div class="mt-4 pt-4 border-t border-dark-700/50">
                <span class="text-xs font-mono text-primary-500">50m IR • Starlight</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private initAnimations() {
    gsap.set('.features-title, .features-subtitle', {
      opacity: 0,
      y: 30,
    });

    gsap.set('.feature-card', {
      opacity: 0,
      y: 50,
    });

    ScrollTrigger.create({
      trigger: this,
      start: 'top 80%',
      onEnter: () => {
        gsap.to('.features-title', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
        gsap.to('.features-subtitle', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
        });
        gsap.to('.feature-card', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.4,
          ease: 'power3.out',
        });
      },
    });
  }
}

customElements.define('features-grid', FeaturesGridComponent);
