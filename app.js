const root = document.getElementById('root');

root.innerHTML = `
  <header>
    <div class="header-inner container">
      <div class="brand">
        <img src="logo.png" alt="QuickNest logo">
        <span>QuickNest<br><small>by Falling Feathers Studio</small></span>
      </div>
      <nav>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    <section id="hero">
      <h1>Helping small brands look like big deals.</h1>
      <img src="QuicknestFB.png"
           width="960" height="540"
           loading="lazy"
           alt="Before and after examples of QuickNest Sites work"
           class="hero-img">
      <p>Your brand deserves more than a Facebook page and a prayer. At QuickNest, we turn your purpose into a platform—and make sure the world doesn’t scroll past what matters.</p>
      <a href="#contact" class="cta-btn">Get Started</a>
      <p style="margin-top:var(--space-s);font-style:italic;">
        You don’t need to be tech-savvy. You just need a spark—we’ll help light it up.
      </p>
    </section>

    <section id="services" class="container">
      <h2>What We Offer</h2>
      <ul class="feather-list">
        <li><strong>Landing Page Build</strong> – 1-page site with clean layout, contact form, and mobile optimization</li>
        <li><strong>Full Website (3–5 Pages)</strong> – Homepage, About, Services, Contact, Optional Add-on</li>
        <li><strong>QR-Linked Flyer Creation</strong> – Branded flyer with QR code to your site</li>
        <li><strong>Business Card Design</strong> – Branded digital/print-ready cards</li>
        <li><strong>Monthly Maintenance Package</strong> – Ongoing updates, backups, and priority support</li>
      </ul>
    </section>

    <section id="pricing" class="container">
      <h2>Pricing</h2>
      <table>
        <tr><td>Landing Page</td><td>$150</td></tr>
        <tr><td>Full Website</td><td>$350 – $500</td></tr>
        <tr><td>QR Flyer</td><td>$60</td></tr>
        <tr><td>Business Cards</td><td>$40</td></tr>
        <tr><td><strong>Promo Bundle</strong></td><td><strong>$225</strong></td></tr>
        <tr><td>Monthly Maintenance</td><td>$25/mo</td></tr>
      </table>
      <p style="margin-top:var(--space-m);font-size:1.05rem;">
        <strong>We know what it’s like to build from nothing.</strong><br>
        If your budget’s not there yet, but your passion is—we’ve got your back.<br>
        Ask us about our <em>pay-what-you-can</em> plan. You won’t find fine print here. Just folks who believe in your idea.
      </p>
    </section>

    <section id="contact" class="container">
      <h2>Let’s Build Something</h2>
      <p>Email us at <a href="mailto:QuickNest@fallingfeathers.us">QuickNest@fallingfeathers.us</a></p>
      <form>
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <textarea name="msg" rows="5" placeholder="What do you need help with?" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  </main>

  <footer>
    <p>QuickNest Sites is a service of <a href="https://fallingfeathers.studio">Falling Feathers Studio</a>.</p>
    <p>&copy; 2025 QuickNest Sites. All rights reserved.</p>
  </footer>
`;
