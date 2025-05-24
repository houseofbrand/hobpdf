document.addEventListener("DOMContentLoaded", () => {
  // Ordering guidelines for categories that have subcategories
  const orderingGuidelines = {
    sunglasses: "For sunglasses, please ensure you specify the lens type and frame color. Orders must be placed by 10 AM local time.",
    watches: "For watches, please note that warranty details are included in the PDF. Verify model specifications before ordering.",
    lingerie: "For lingerie, please check our size guide and color availability. Orders are subject to stock confirmation.",
    accessorygiftset: "For accessory gift sets, please note minimum order quantities apply.",
    watchgiftset: "For watch gift sets, please verify packaging requirements before ordering."
  };

  const categoryElements = document.querySelectorAll('.category');
    
  categoryElements.forEach(category => {
    category.addEventListener('click', function () {
      const dataCategory = this.getAttribute('data-category');
      let subcategories = [];
      let folderName = '';
      
      // Define subcategories and correct folder names
      if (dataCategory === 'sunglasses') {
        subcategories = ['Kids Sunglass', 'Unisex Sunglasses'];
        folderName = 'Sunglasses';
      } else if (dataCategory === 'watches') {
        subcategories = ['Kids Watches', 'Men Watches', 'Women Watches'];
        folderName = 'Watches';
      } else if (dataCategory === 'lingerie') {
        subcategories = [
          { name: 'Amour Babydoll', image: 'amour-babydoll.jpg' },
          { name: 'Babydoll Dress', image: 'babydoll-dress.png' },
          { name: 'Babydoll-full', image: 'free-size-lingerie.png' },
          { name: 'Co-ord Lingerie Sets', image: 'co-ord-lingerie-sets.jpg' },
          { name: 'Honeymoon Wear', image: 'honeymoon-wear.png' },
          { name: 'Lingerie Set Collection', image: 'free-size-lingerie.png' },
          { name: 'Lingerie with Robe', image: 'lingerie-with-robe.png' },
          { name: 'Premium Baby Doll', image: 'premium-babydoll.png' },
          { name: 'Swimwear and Bikinis', image: 'swimwear-and-bikinis.png' }
        ];
        folderName = 'Lingerie';
      } else if (dataCategory === 'accessorygiftset') {
        subcategories = ['Men Belt Wallet Set'];
        folderName = 'AccessoryGiftSet';
      } else if (dataCategory === 'watchgiftset') {
        subcategories = ['Men', 'Women'];
        folderName = 'WatchGiftSet';
      }
      
      // For categories with only one subcategory, open PDF directly
      if (subcategories.length === 1) {
        const subItem = typeof subcategories[0] === 'object' ? subcategories[0].name : subcategories[0];
        const pdfUrl = `https://houseofbrand.github.io/sourcingwala/assets/Pdfs/${folderName}/${encodeURIComponent(subItem)}.pdf`;
        window.open(pdfUrl, '_blank');
        return;
      }
      
      // Build the subcategories overlay with ordering guidelines and heading
      const subCatContainer = document.querySelector('#subcategories .subcategories-content');
      const guidelinesText = orderingGuidelines[dataCategory] || "";
      subCatContainer.innerHTML = `<h2>Catalogue PDF Download</h2>
        <p class="ordering-guidelines">${guidelinesText}</p>
        <h3>Select your option:</h3>`;
      
      // Create subcategory buttons
      subcategories.forEach(sub => {
        const btn = document.createElement('button');
        const isObject = typeof sub === 'object';
        const subName = isObject ? sub.name : sub;
        
        if (isObject && sub.image) {
          // Create button with image for lingerie
          btn.innerHTML = `
            <img src="assets/images/lingerie-assets/${sub.image}" alt="${subName}" class="sub-btn-image">
            <span class="sub-btn-text">${subName}</span>
          `;
        } else {
          // Create text-only button for other categories
          btn.textContent = subName;
        }
        
        btn.classList.add('sub-btn');
        if (isObject && sub.image) {
          btn.classList.add('sub-btn-with-image');
        }
        
        btn.addEventListener('click', function () {
          const pdfUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(`https://houseofbrand.github.io/sourcingwala/assets/Pdfs/${folderName}/${encodeURIComponent(subName)}.pdf`)}&embedded=true`;
          window.open(pdfUrl, '_blank');
        });
        subCatContainer.appendChild(btn);
      });
      
      document.getElementById('subcategories').classList.remove('hidden');
    });
  });
  
  // Close the subcategories overlay
  document.getElementById('closeSubcategories').addEventListener('click', function () {
    document.getElementById('subcategories').classList.add('hidden');
  });
  
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('header nav');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });
});