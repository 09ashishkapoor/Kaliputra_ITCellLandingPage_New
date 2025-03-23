<script>
  import { page } from '$app/stores';
</script>

<div class="error-container">
  <h1>{$page.status}: {$page.error?.message}</h1>
  <p>We apologize for the inconvenience. Please try again later or contact us if the problem persists.</p>
  <a href="/" class="back-button">Return to Home</a>
</div>

<style>
  .error-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.8);
    color: var(--text-color);
  }

  h1 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }

  p {
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .back-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary-color);
    color: #ffffff;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .back-button:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
  }
</style>