<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer" role="contentinfo">
  <div class="footer-container">
    <div class="ai-credits" aria-label="Development Credits">
      <p>Built with ❤️ by AI (GitHub Copilot and Claude 3.5 Sonnet)</p>
    </div>
    <div class="copyright">
      <p>&copy; {currentYear} KaliPutra Mission IT Cell. All rights reserved.</p>
      <p class="disclaimer" aria-label="Legal Disclaimer">This website and its contents are protected by copyright law. Any unauthorized reproduction, distribution, or use of the materials on this website is strictly prohibited. All trademarks, service marks, and trade names are proprietary to KaliPutra Mission IT Cell.</p>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    background: rgba(0, 0, 0, 0.95);
    padding: 2rem 0;
    width: 100%;
    border-top: 1px solid rgba(255, 153, 51, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-container {
    width: min(800px, 90%);
    text-align: center;
  }

  .ai-credits {
    margin-bottom: 1.5rem;
    color: var(--secondary-color);
    font-size: 0.95rem;
    opacity: 0.9;
  }

  .ai-credits p {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .copyright {
    color: var(--text-color);
    font-size: 0.85rem;
    opacity: 0.7;
  }

  .copyright p {
    width: 100%;
    text-align: center;
    margin: 0.5rem auto;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .disclaimer {
    font-size: 0.8rem;
    line-height: 1.4;
    margin-top: 1rem;
  }

  .footer-container > * {
    margin-bottom: 1.5rem;
  }

  .footer-container > *:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .site-footer {
      padding: 1.5rem 0;
    }
    
    .footer-container {
      width: min(95%, 600px);
    }
  }

  @media (max-width: 480px) {
    .site-footer {
      padding: 1rem 0;
    }
    
    .footer-container {
      width: 95%;
    }
  }
</style>