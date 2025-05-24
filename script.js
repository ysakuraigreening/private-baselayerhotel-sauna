// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded successfully")

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const target = document.querySelector(targetId)

      if (target) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = target.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenu = document.querySelector(".mobile-menu")
  const mobileMenuClose = document.querySelector(".mobile-menu-close")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a")

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active")
  })

  mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
  })

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
    })
  })

  // Language switcher
  const langBtns = document.querySelectorAll(".lang-btn")
  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang

      // Update active state
      langBtns.forEach((b) => b.classList.remove("active"))
      document.querySelectorAll(`[data-lang="${lang}"]`).forEach((b) => b.classList.add("active"))

      // Here you could implement actual language switching logic
      console.log(`Language switched to: ${lang}`)
    })
  })

  // Floating reservation button
  const floatingBtn = document.querySelector(".floating-reservation")

  function toggleFloatingButton() {
    if (window.scrollY > 300) {
      floatingBtn.classList.add("show")
    } else {
      floatingBtn.classList.remove("show")
    }
  }

  // Initial check
  toggleFloatingButton()

  // Listen for scroll events
  window.addEventListener("scroll", toggleFloatingButton)

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")

        // Animate gallery items with delay
        if (entry.target.classList.contains("gallery")) {
          const galleryItems = entry.target.querySelectorAll(".gallery-item")
          galleryItems.forEach((item, index) => {
            const delay = item.dataset.delay || index * 100
            setTimeout(() => {
              item.classList.add("animate-in")
            }, delay)
          })
        }

        // Animate enjoy steps with delay
        if (entry.target.classList.contains("enjoy-steps")) {
          const enjoySteps = entry.target.querySelectorAll(".enjoy-step")
          enjoySteps.forEach((step, index) => {
            const delay = step.dataset.delay || index * 100
            setTimeout(() => {
              step.classList.add("animate-in")
            }, delay)
          })
        }
      }
    })
  }, observerOptions)

  // Observe all sections for animation
  const scrollElements = document.querySelectorAll(".scroll-animate")
  scrollElements.forEach((element) => {
    observer.observe(element)
  })

  // Observe gallery and enjoy steps separately
  const gallery = document.querySelector(".gallery")
  const enjoySteps = document.querySelector(".enjoy-steps")
  if (gallery) observer.observe(gallery)
  if (enjoySteps) observer.observe(enjoySteps)

  // Tab functionality
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabPanels = document.querySelectorAll(".tab-panel")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.tab

      // Update active tab button
      tabBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      // Update active tab panel
      tabPanels.forEach((panel) => {
        panel.classList.remove("active")
        if (panel.id === `${targetTab}-panel`) {
          panel.classList.add("active")
        }
      })
    })
  })

  // FAQ functionality
  const faqItems = document.querySelectorAll(".faq-item")
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active")

      // Close all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active")
      })

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active")
      }
    })
  })

  // Reservation timeline animation
  const timelineProgress = document.querySelector(".timeline-progress")
  const stepItems = document.querySelectorAll(".step-item")

  function updateTimeline() {
    const windowHeight = window.innerHeight
    const centerY = windowHeight / 2

    let activeStep = -1
    let closestDistance = Number.POSITIVE_INFINITY

    stepItems.forEach((step, index) => {
      const rect = step.getBoundingClientRect()
      const stepCenterY = rect.top + rect.height / 2
      const distance = Math.abs(stepCenterY - centerY)

      // Remove active class from all steps
      step.classList.remove("active")

      // Check if step is in viewport and closest to center
      if (rect.top < windowHeight && rect.bottom > 0) {
        if (distance < closestDistance) {
          closestDistance = distance
          activeStep = index
        }
      }
    })

    // Activate closest step if within reasonable distance
    if (activeStep !== -1 && closestDistance < windowHeight * 0.3) {
      stepItems[activeStep].classList.add("active")
    }

    // Update timeline progress
    const reservationSection = document.querySelector("#reservation")
    if (reservationSection && timelineProgress) {
      const sectionRect = reservationSection.getBoundingClientRect()

      if (sectionRect.top <= windowHeight * 0.5 && sectionRect.bottom >= 0) {
        const scrollTop = window.pageYOffset
        const sectionTop = reservationSection.offsetTop
        const sectionHeight = reservationSection.offsetHeight
        const startPoint = sectionTop - windowHeight * 0.5
        const endPoint = sectionTop + sectionHeight - windowHeight * 0.5
        const progress = Math.max(0, Math.min(1, (scrollTop - startPoint) / (endPoint - startPoint)))

        timelineProgress.style.height = `${progress * 100}%`
      }
    }
  }

  // Update timeline on scroll
  window.addEventListener("scroll", updateTimeline)
  updateTimeline() // Initial call

  // Gallery hover effects
  const galleryItems = document.querySelectorAll(".gallery-item:not(.no-hover)")
  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.02)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })

  console.log("All event listeners attached")
})
