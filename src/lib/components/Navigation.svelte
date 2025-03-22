<script lang="ts">
  import { onMount } from 'svelte';
  import { focusTrap } from 'svelte-focus-trap';
  
  let mobileMenuOpen = false;
  let skipLinkFocused = false;
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    // Ensure focus is trapped when menu is open
    if (mobileMenuOpen) {
      setTimeout(() => {
        const firstMenuItem = document.querySelector('.nav-links a') as HTMLElement;
        firstMenuItem?.focus();
      }, 100);
    }
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && mobileMenuOpen) {
      closeMobileMenu();
    }
  }
  
  onMount(() => {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (mobileMenuOpen && 
          target && 
          !target.closest('.nav-links') && 
          !target.closest('.mobile-menu-toggle')) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<a 
  href="#main-content" 
  class="skip-link" 
  class:focused={skipLinkFocused}
  on:focus={() => skipLinkFocused = true}
  on:blur={() => skipLinkFocused = false}
>
  Skip to main content
</a>

<nav class="navigation" aria-label="Main Navigation">
  <div class="nav-container">
    <a href="/" class="logo" aria-label="Home">
      <img 
        src="/logo.png" 
        srcset="/logo.png 1x, /logo.png 2x" 
        alt="IT Cell Logo" 
        width="50" 
        height="50" 
        loading="eager" 
        decoding="async" 
        fetchpriority="high"
      >
      <span>IT Cell</span>
    </a>
    <button 
      class="mobile-menu-toggle" 
      aria-label="Toggle navigation menu" 
      aria-expanded={mobileMenuOpen} 
      aria-controls="nav-links"
      on:click={toggleMobileMenu}
    >
      <span class="hamburger" class:active={mobileMenuOpen}></span>
    </button>
    <div 
      id="nav-links"
      class="nav-links" 
      class:active={mobileMenuOpen} 
      aria-hidden={!mobileMenuOpen}
      use:focusTrap={mobileMenuOpen}
      role="menu"
    >
      <a href="#about" role="menuitem" on:click={closeMobileMenu}>About</a>
      <a href="#looking-for" role="menuitem" on:click={closeMobileMenu}>Join Us</a>
      <a href="#skills" role="menuitem" on:click={closeMobileMenu}>Skills</a>
      <a href="#apply" role="menuitem" class="cta-link" on:click={closeMobileMenu}>Apply Now</a>
    </div>
  </div>
</nav>

<style>
  .navigation {
    background-color: rgba(32, 10, 10, 0.9);
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 15px rgba(153, 0, 0, 0.4);
    width: 100%;
    border-bottom: 1px solid var(--primary-color);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--primary-color);
    font-family: var(--primary-font);
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: -0.025em;
  }

  .logo img {
    margin-right: 0.75rem;
    border-radius: 50%;
    object-fit: cover;
    width: 50px;
    height: 50px;
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-links a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    font-family: var(--secondary-font);
    position: relative;
    transition: color 0.3s ease;
    font-size: 1.0625rem;
  }

  .nav-links a:hover {
    color: var(--secondary-color);
    text-shadow: 0 0 5px var(--secondary-color);
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: width 0.3s ease, box-shadow 0.3s ease;
  }

  .nav-links a:hover::after {
    width: 100%;
    box-shadow: 0 0 8px var(--secondary-color);
  }

  .cta-link {
    background-color: var(--primary-color);
    color: #ffffff !important;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(233, 75, 100, 0.3);
  }

  .cta-link:hover {
    background-color: var(--secondary-color);
    color: #000000 !important;
    box-shadow: 0 4px 15px rgba(0, 255, 204, 0.4);
    transform: translateY(-2px);
  }

  .cta-link::after {
    display: none !important;
  }

  .mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .hamburger {
    display: block;
    width: 24px;
    height: 2px;
    background: #ffffff;
    position: relative;
    transition: background 0.3s;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: #ffffff;
    transition: transform 0.3s;
  }

  .hamburger::before {
    top: -6px;
  }

  .hamburger::after {
    bottom: -6px;
  }

  .hamburger.active {
    background: transparent;
  }

  .hamburger.active::before {
    transform: rotate(45deg);
    top: 0;
  }

  .hamburger.active::after {
    transform: rotate(-45deg);
    bottom: 0;
  }

  @media (max-width: 768px) {
    .navigation {
      padding: 0.5rem 1rem;
    }

    .mobile-menu-toggle {
      display: block;
      z-index: 200;
    }

    .nav-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    
    .nav-links {
      position: fixed;
      top: 0;
      right: -100%;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.95);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: right 0.3s ease;
      padding: 4rem 2rem;
      backdrop-filter: blur(10px);
      gap: 2rem;
    }

    .nav-links.active {
      right: 0;
    }

    .nav-links a {
      font-size: 1.25rem;
      padding: 0.75rem;
      width: 100%;
      text-align: center;
    }

    .logo {
      font-size: 1.25rem;
    }

    .logo img {
      width: 40px;
      height: 40px;
    }
  }

  .skip-link {
    position: absolute;
    top: -100px;
    left: 0;
    padding: 1rem;
    background-color: var(--primary-color);
    color: #ffffff;
    text-decoration: none;
    z-index: 1000;
    transition: top 0.3s ease;
  }

  .skip-link.focused {
    top: 0;
  }

  /* Ensure proper focus styles for all interactive elements */
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--secondary-color);
    outline-offset: 2px;
  }

  /* Ensure proper focus management in mobile menu */
  .nav-links.active {
    display: flex;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    
    .nav-links.active {
      display: flex;
    }
  }
</style>