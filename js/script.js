document.addEventListener("DOMContentLoaded", () => {
  const categoryElements = document.querySelectorAll('.category');
    
  categoryElements.forEach(category => {
    category.addEventListener('click', function () {
      const dataCategory = this.getAttribute('data-category');
      
      // Direct PDF opens for individual categories
      let pdfUrl = '';
      
      // Sunglasses categories
      if (dataCategory === 'kids-sunglasses') {
        pdfUrl = `https://houseofbrand.github.io/sourcingwala/assets/Pdfs/Sunglasses/Kids Sunglass.pdf`;
      } else if (dataCategory === 'unisex-sunglasses') {
        pdfUrl = `https://houseofbrand.github.io/sourcingwala/assets/Pdfs/Sunglasses/Unisex Sunglasses.pdf`;
      }
      
      // Lingerie categories
      else if (dataCategory === 'amour-babydoll') {
        pdfUrl = `https://houseofbrand.github.io/sourcingwala/assets/Pdfs/Lingerie/Amour Babydoll.pdf`;
      } else if (dataCategory === 'babydoll-dress') {
        pdfUrl = `https://houseofbrand.github.io/sourcingwala/assets/Pdfs/Lingerie/Babydoll Dress.pdf`;
      } else if (dataCategory === 'coord-lingerie-sets') {
        pdfUrl = `https://houseofbrand.github.io/sourcingwala/assets/Pdfs/Lingerie/Co-ord Lingerie Sets.pdf`;
      } else if (dataCategory === 'honeymoon-wear') {
        pdfUrl = `https://houseofbrand.github.io/sourcingwala/assets/Pdfs/Lingerie/Honeymoon Wear.pdf`;
      } else if (dataCategory === 'lingerie-set-collection') {
        pdfUrl = `https://houseofbrand.github.io/sourcingwala/assets/Pdfs/Lingerie/Lingerie Set Collection.pdf`;
      } else if (dataCategory === 'lingerie-with-robe') {
        pdfUrl = `https://houseofbrand.github.io/sourcingwala/assets/Pdfs/Lingerie/Lingerie with Robe.pdf`;
      } else if (dataCategory === 'premium-baby-doll') {
        pdfUrl = `https://houseofbrand.github.io/sourcingwala/assets/Pdfs/Lingerie/Premium Baby Doll.pdf`;
      } else if (dataCategory === 'swimwear-and-bikinis') {
        pdfUrl = `https://houseofbrand.github.io/sourcingwala/assets/Pdfs/Lingerie/Swimwear and Bikinis.pdf`;
      }
      
      if (pdfUrl) {
        const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
        window.open(viewerUrl, '_blank');
      }
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