// ===== PORTFOLIO MAIN JAVASCRIPT =====
// Production-ready, optimized JavaScript for Pavan Kiran's Portfolio

// TYPING EFFECT
const roles = ["Full-Stack Developer", "React Developer", "Python Enthusiast", "UI/UX Enthusiast", "Problem Solver"];
let ri = 0, ci = 0, del = false;
const tel = document.getElementById('typingEl');

function type() {
  const cur = roles[ri];
  if (!del) {
    tel.innerHTML = cur.slice(0, ci + 1) + '<span class="typing-cursor"></span>';
    ci++;
    if (ci === cur.length) { 
      del = true; 
      setTimeout(type, 2000); 
      return;
    }
  } else {
    tel.innerHTML = cur.slice(0, ci - 1) + '<span class="typing-cursor"></span>';
    ci--;
    if (ci === 0) { 
      del = false; 
      ri = (ri + 1) % roles.length;
    }
  }
  setTimeout(type, del ? 60 : 100);
}

// Initialize typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (tel) type();
});

// NAVBAR SCROLL EFFECT
const nav = document.getElementById('navbar');
const backTopBtn = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 80;
  nav?.classList.toggle('scrolled', scrolled);
  backTopBtn?.classList.toggle('show', window.scrollY > 300);
});

// SCROLL REVEAL + SKILL BARS ANIMATION
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Animate skill bars
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        const width = bar.dataset.w;
        if (width) {
          setTimeout(() => {
            bar.style.width = width + '%';
          }, 200);
        }
      });
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// THEME TOGGLE
let isDarkMode = true;
const themeToggle = document.getElementById('themeToggle');

themeToggle?.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('light', !isDarkMode);
  themeToggle.innerHTML = isDarkMode
    ? '<i class="fas fa-moon" aria-hidden="true"></i>'
    : '<i class="fas fa-sun" aria-hidden="true"></i>';
  
  // Save theme preference
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    isDarkMode = false;
    document.body.classList.add('light');
    if (themeToggle) {
      themeToggle.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
    }
  }
});

// ===== MOBILE MENU SYSTEM =====
const hambBtn = document.getElementById('hambBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');
const body = document.body;

// Initialize mobile menu as closed
function initializeMobileMenu() {
  mobileMenu?.classList.remove('open');
  mobileMenu?.setAttribute('aria-hidden', 'true');
  hambBtn?.classList.remove('active');
  hambBtn?.setAttribute('aria-expanded', 'false');
  body.style.overflow = '';
}

// Open mobile menu
function openMobileMenu() {
  if (!mobileMenu || !hambBtn) return;
  mobileMenu.classList.add('open');
  hambBtn.classList.add('active');
  hambBtn.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
  body.style.overflow = 'hidden';
}

// Close mobile menu
function closeMobileMenu() {
  if (!mobileMenu || !hambBtn) return;
  mobileMenu.classList.remove('open');
  hambBtn.classList.remove('active');
  hambBtn.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  body.style.overflow = '';
}

// Mobile menu event listeners
hambBtn?.addEventListener('click', openMobileMenu);
closeBtn?.addEventListener('click', closeMobileMenu);
menuOverlay?.addEventListener('click', closeMobileMenu);

// Close menu when clicking nav links
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) {
    closeMobileMenu();
  }
});

// Close menu on window resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && mobileMenu?.classList.contains('open')) {
    closeMobileMenu();
  }
});

// Initialize mobile menu on page load
document.addEventListener('DOMContentLoaded', initializeMobileMenu);

// FAQ TOGGLE SYSTEM
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
});

// ===== EMAILJS CONTACT FORM =====
// Initialize EmailJS
(function() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({
      publicKey: "VeC476zOLBb0nNDdP"
    });
    console.log("EmailJS v4 initialized successfully");
  }
})();

// Contact form submission
function submitForm(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById("fname")?.value.trim();
  const email = document.getElementById("femail")?.value.trim();
  const message = document.getElementById("fmsg")?.value.trim();
  
  console.log("Form data:", { name, email, message });
  
  // Validation
  if (!name || !email || !message) { 
    alert("Please fill all required fields (marked with *)"); 
    return; 
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) { 
    alert("Please enter a valid email address"); 
    return; 
  }
  
  // Update button state
  const btn = document.querySelector("#contact .btn-primary");
  if (!btn) return;
  
  const originalHTML = btn.innerHTML;
  btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending...`;
  btn.disabled = true;
  
  // Template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
    to_name: "Pavan Kiran",
    to_email: "pavankiran26082003@gmail.com"
  };
  
  console.log("Sending email via EmailJS...");
  
  // Send using EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.send("service_i305qwp", "template_5m4x5qk", templateParams)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        showSuccess(btn, originalHTML);
      })
      .catch((error) => {
        console.error("EmailJS FAILED:", error);
        handleEmailError(error, name, email, message, btn, originalHTML);
      });
  } else {
    console.error("EmailJS not loaded");
    handleEmailError(new Error("EmailJS not loaded"), name, email, message, btn, originalHTML);
  }
}

// Success handler
function showSuccess(btn, originalHTML) {
  // Success - Turn button green with "Sent" text
  btn.innerHTML = `<i class="fas fa-check"></i> Sent`;
  btn.style.background = "#22c55e";
  btn.style.boxShadow = "0 8px 24px rgba(34, 197, 94, 0.4)";
  btn.classList.add('success');
  
  // Show success message
  const formContent = document.getElementById("formContent");
  const formSuccess = document.getElementById("formSuccess");
  
  if (formContent) formContent.style.display = "none";
  if (formSuccess) formSuccess.style.display = "block";
  
  // Reset form and button after 3 seconds
  setTimeout(() => {
    if (formContent) formContent.style.display = "block";
    if (formSuccess) formSuccess.style.display = "none";
    
    const form = document.querySelector("#contactForm");
    if (form) form.reset();
    
    btn.innerHTML = originalHTML;
    btn.style.background = "";
    btn.style.boxShadow = "";
    btn.classList.remove('success');
    btn.disabled = false;
  }, 3000);
}

// Error handler
function handleEmailError(error, name, email, message, btn, originalHTML) {
  console.error("Error details:", error.text || error.message);
  
  // Show user-friendly message and ask before opening mailto
  const useMailto = confirm("Email service is temporarily unavailable. Would you like to open your email client to send the message directly?");
  
  if (useMailto) {
    // Fallback: Open mailto link
    const subject = encodeURIComponent("Portfolio Contact from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:pavankiran26082003@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
  }
  
  // Show success anyway (user attempted to contact)
  showSuccess(btn, originalHTML);
}

// Smooth scroll for back to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
});

// Console log for production
console.log('🚀 Pavan Kiran Portfolio - Production Ready');
console.log('📧 Contact: pavankiran26082003@gmail.com');
console.log('🌐 Portfolio: https://pavankiran.netlify.app');