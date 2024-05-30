document.querySelectorAll('.hero-section').forEach((hero) =>{


  // ----------- | fetching attributes and information |  ----- //
    const device = hero.getAttribute('data-device')
    const heroTitle = hero.getAttribute('data-hero-title')
    const heroSubtitle = hero.getAttribute('data-hero-subtitle')

    const heroSection = document.createElement('div')
    heroSection.classList.add('hero-section' , 'container-fluid' , device)
    heroSection.innerHTML = `
    <div class="container">
        <div class="title">
          <h2 class="heading">${heroTitle}</h2>
          <h3 class="subheading">${heroSubtitle}</h3>
        </div>
        <div class="cta">
          <a href="" class="cta-link">Learn More</a>
          <a href="" class="cta-link text-blue cta-link-buy">Buy</a>
        </div>
      </div>
    `;

    // ---- |inserting hero sections| ---- //
    hero.appendChild(heroSection);
  })