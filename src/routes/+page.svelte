<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  
  interface Section extends HTMLElement {
    isVisible?: boolean;
  }
  
  let sections: Section[] = [];
  let formIframeLoaded = false;
  
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target as Section;
        if (entry.isIntersecting) {
          element.isVisible = true;
        }
      });
    }, { threshold: 0.1 });

    sections = Array.from(document.querySelectorAll<Section>('section, .card, .value-item, .skill-card'));
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      const typedAnchor = anchor as HTMLAnchorElement;
      typedAnchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = typedAnchor.getAttribute('href');
        const targetElement = document.querySelector(targetId || '') as HTMLElement;
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Form handler setup
    const jotformHandler = (window as any).jotformEmbedHandler;
    if (jotformHandler) {
      jotformHandler("iframe[id='JotFormIFrame-0195b9f2d0777e7abba3138ab580695fbb38']",
        "https://www.jotform.com");
    }
  });

  function hideLoader() {
    const loader = document.getElementById('form-loader');
    if (loader) {
      loader.style.display = 'none';
    }
  }

  function handleIframeLoad() {
    formIframeLoaded = true;
    hideLoader();
  }
</script>

<svelte:head>
  <title>IT Cell Recruitment</title>
  <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
</svelte:head>

<div class="page-container">
  <Navigation />
  
  <main id="main-content" role="main">
    <section id="hero" class="hero-section" role="banner" aria-labelledby="hero-title">
      <div class="hero-content">
        <h1 id="hero-title" tabindex="-1">Join the KaliPutra Mission IT Cell</h1>
        <p>Merging spirituality and technology at the frontier of innovation.</p>
        <a href="#apply" class="cta-button" aria-label="Apply now to join IT Cell">Apply Now</a>
      </div>
    </section>

    <section id="about" class="about-section" role="region" aria-labelledby="about-title">
      <h2 id="about-title" class="section-title" tabindex="-1">About Our IT Cell</h2>
      <div class="about-content">
        <p>The KaliPutra Mission IT Cell is a dedicated team of tech volunteers working to support and enhance our spiritual mission through technology. We're committed to using our technical skills to help spread awareness and facilitate the pursuit of oneness under the guidance of Maa Adya.</p>
        <p>Our team blends spiritual dedication with technical expertise to pioneer innovative AI applications and other projects. We believe technology can unite, inspire, and uplift lives while honoring our spiritual values.</p>
      </div>
    </section>

    <section id="looking-for" class="looking-for grid-section" role="region" aria-labelledby="looking-title">
      <h2 id="looking-title" class="section-title" tabindex="-1">Are You Ready to Make a Difference?</h2>
      <h3>We're Looking For:</h3>
      <div class="grid-container">
        <div class="card">
          <div class="card-content" style="color: #fff;">
            <h4>Tech Enthusiasts</h4>
            <p>Anyone with experience in IT, Computer Science, or tech-related fields – from web development to cybersecurity – is welcome to contribute!</p>
          </div>
        </div>
        <div class="card">
          <div class="card-content" style="color: #fff;">
            <h4>Curious Learners</h4>
            <p>We're passionate about exploring new technologies! Think Python, web development, cybersecurity, or anything that sparks your curiosity and desire to learn.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-content" style="color: #fff;">
            <h4>Hands-On Builders</h4>
            <p>Do you love building things from scratch? We want to help you dive into hands-on projects and develop valuable new skills.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-content" style="color: #fff;">
            <h4>Creative Problem-Solvers</h4>
            <p>You're comfortable tackling challenges, troubleshooting, and learning as you go – we need someone ready to roll up your sleeves and find solutions.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="what-we-value">
      <h2 class="section-title">What We Value in Our Volunteers:</h2>
      <div class="values-container">
        <div class="value-item">
          <h4 style="color: var(--secondary-color);">Self-Driven Initiative</h4>
          <p style="color: #fff;">We really value individuals who are comfortable working independently, proactively troubleshooting, and continuously learning. Don't worry about having all the answers – we'll be there to guide and support you.</p>
        </div>
        <div class="value-item">
          <h4 style="color: var(--secondary-color);">Embracing Growth Through Challenges</h4>
          <p style="color: #fff;">We understand that learning often involves making mistakes. We want to see you embrace those moments as opportunities to grow and refine your approach. It's okay to stumble – the key is to learn from it!</p>
        </div>
        <div class="value-item">
          <h4 style="color: var(--secondary-color);">Ownership & Proactive Engagement</h4>
          <p style="color: #fff;">We want to see someone who takes ownership of their learning journey and actively seeks out opportunities to grow and contribute.</p>
        </div>
      </div>
    </section>

    <section id="skills" class="skills-shine grid-section" role="region" aria-labelledby="skills-title">
      <h2 id="skills-title" class="section-title" tabindex="-1">Where Your Skills Can Shine:</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <h4 style="color: var(--secondary-color);">Python & Scripting</h4>
          <p style="color: #fff;">Developing and maintaining scripts for automation – streamlining processes and improving efficiency.</p>
        </div>
        <div class="skill-card">
          <h4 style="color: var(--secondary-color);">Other Automation Languages</h4>
          <p style="color: #fff;">Developing and maintaining scripts for automation – streamlining processes and improving efficiency.</p>
        </div>
        <div class="skill-card">
          <h4 style="color: var(--secondary-color);">AI & Machine Learning</h4>
          <p style="color: #fff;">Exploring and experimenting with AI tools and techniques, including image AI and training models for creative applications.</p>
        </div>
        <div class="skill-card">
          <h4 style="color: var(--secondary-color);">ChatGPT & LLMs</h4>
          <p style="color: #fff;">Utilizing and experimenting with ChatGPT and other large language models for various applications.</p>
        </div>
        <div class="skill-card">
          <h4 style="color: var(--secondary-color);">Chatbot Development</h4>
          <p style="color: #fff;">Designing and building conversational AI interfaces.</p>
        </div>
      </div>
      <p class="skills-note" style="color: #fff;">We encourage volunteers to propose innovative automation solutions and to bring your own ideas to the table – let's build something amazing together!</p>
    </section>

    <section id="apply" class="application-form" role="region" aria-labelledby="apply-title">
      <div class="form-container">
        <h2 id="apply-title" class="section-title" tabindex="-1">Apply Now!</h2>
        <div class="cta-container">
          <p class="cta-text" id="form-description">Ready to make an impact? Join our team and help spread the Nama of Ma Adya Kali with your technical skills!</p>
          <div class="form-loader-container" aria-live="polite" role="status">
            <div id="form-loader" class="loading-spinner" aria-label="Loading application form">
              <span class="sr-only">Loading application form...</span>
            </div>
            <iframe 
              id="JotFormIFrame-0195b9f2d0777e7abba3138ab580695fbb38" 
              title="IT Cell Application Form"
              on:load={handleIframeLoad}
              allowtransparency={true}
              allow="geolocation; microphone; camera; fullscreen"
              src="https://agent.jotform.com/0195b9f2d0777e7abba3138ab580695fbb38?embedMode=iframe&background=1&shadow=1"
              style="min-width:100%;max-width:100%;height:688px;border:none;width:100%;" 
              scrolling="no"
              aria-labelledby="apply-title"
              aria-describedby="form-description"
            >
              <p>Your browser does not support iframes. Please visit the form directly at https://agent.jotform.com/0195b9f2d0777e7abba3138ab580695fbb38</p>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <Footer />
</div>

<style>
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

  section {
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: calc(100% - 4rem);
    background: rgba(0, 0, 0, 0.75);
    border-radius: 12px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .hero-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    background: transparent;
    border-radius: 0;
    box-shadow: none;
    backdrop-filter: none;
    transform: none;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    width: min(800px, 95%);
    margin-inline: auto;
    padding: 2rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-content h1 {
    font-size: clamp(3rem, 6vw, 5rem); /* Increase font size */
    margin-bottom: 1.5rem;
    color: var(--primary-color);
    line-height: 1.2;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add text shadow */
  }

  .hero-content p {
    font-size: clamp(1.5rem, 3vw, 2rem); /* Increase font size */
    margin-bottom: 2rem;
    line-height: 1.6;
    color: var(--text-color);
    text-align: center;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); /* Add text shadow */
  }

  .section-title {
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
    font-size: clamp(2rem, 4vw, 2.75rem);
    text-shadow: 0 0 5px rgba(153, 0, 0, 0.5);
    position: relative;
    padding-bottom: 1rem;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  }

  h3 {
    text-align: center;
    color: var(--secondary-color);
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    margin: 2rem 0;
  }

  .grid-container, .values-container, .skills-grid {
    display: grid;
    gap: 2rem;
    padding: 1rem;
    margin-top: 3rem;
  }

  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .values-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .card, .value-item, .skill-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: var(--card-background);
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    padding: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 1;
    transform: translateY(0);
    color: var(--text-color);
    box-shadow: 0 2px 10px rgba(153, 0, 0, 0.2);
  }

  .card-content {
    color: var(--text-color) !important;
  }

  .card-content h4 {
    color: var(--secondary-color) !important;
    margin-bottom: 1rem;
  }

  .card-content p {
    color: var(--text-color) !important;
    opacity: 1 !important;
  }

  .card:hover, .value-item:hover, .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(153, 0, 0, 0.3);
    background: rgba(48, 16, 16, 0.95);
    border-color: var(--secondary-color);
  }

  /* Make sure elements are visible initially regardless of JavaScript */
  .card, .value-item, .skill-card {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  /* Override any potential conflicting styles */
  h4, p {
    visibility: visible !important;
    display: block !important;
  }

  .form-container {
    margin: 0 1rem;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
  }

  h4 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
  }

  .about-section {
    background: rgba(0, 0, 0, 0.85);
  }

  .about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 2rem;
  }

  .about-content p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.1rem;
    opacity: 0.9;
  }

  .looking-for {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .application-form {
    background: rgba(0, 0, 0, 0.9);
    margin-bottom: 0;
    border-radius: 12px;
    padding-bottom: 4rem;
  }

  .cta-text {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }

  .cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: var(--primary-color);
    color: #ffffff;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-top: 1.5rem;
    box-shadow: 0 2px 8px rgba(153, 0, 0, 0.4);
  }

  .cta-button:hover {
    background-color: var(--secondary-color);
    color: #000000;
  }

  .loading-spinner {
    border: 4px solid rgba(255, 153, 51, 0.1);
    border-left: 4px solid var(--primary-color);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 2rem auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  @media (max-width: 768px) {
    section {
      padding: 4rem 1.5rem;
      margin: 1rem auto;
      width: calc(100% - 2rem);
    }

    h4 {
      font-size: 1.15rem;
    }

    .card, .value-item, .skill-card {
      padding: 1.25rem;
    }

    .skills-note {
      padding: 0 1rem;
      font-size: 0.95rem;
    }

    .grid-container, .values-container, .skills-grid {
      gap: 1.5rem;
      padding: 0.5rem;
      margin-top: 2rem;
    }

    .about-content {
      padding: 1rem;
    }

    .about-content p {
      font-size: 1rem;
      line-height: 1.6;
    }

    iframe {
      height: 800px !important;
    }
  }

  @media (max-width: 480px) {
    section {
      padding: 3rem 1rem;
      margin: 0.5rem auto;
      width: calc(100% - 1rem);
    }

    .section-title {
      font-size: clamp(1.75rem, 4vw, 2rem);
      margin-bottom: 1.5rem;
    }

    .grid-container, .values-container, .skills-grid {
      gap: 1rem;
    }

    .card, .value-item, .skill-card {
      padding: 1.25rem;
    }

    .form-container {
      margin: 0 0.5rem;
      padding: 1rem;
    }
    
    .application-form {
      padding-bottom: 3rem;
    }

    .hero-content {
      width: 90%;
      padding: 2rem 1rem;
    }
  }

  /* Improve focus styles for better accessibility */
  :global(.section-title:focus),
  :global(a:focus-visible),
  :global(button:focus-visible) {
    outline: 2px solid var(--secondary-color);
    outline-offset: 4px;
    text-decoration: underline;
  }
</style>
