// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded successfully")

  // 初期表示の確保 - ページロード時にコンテンツを表示
  function ensureContentVisibility() {
    // コンテンツテキストを確実に表示
    const contentTexts = document.querySelectorAll(".content-text")
    contentTexts.forEach((text) => {
      text.style.opacity = "1"
      text.style.visibility = "visible"
    })

    // ギャラリーアイテムを段階的に表示
    const galleryItems = document.querySelectorAll(".gallery-item")
    galleryItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("animate-in")
      }, index * 100)
    })

    // 最初の3つのステップを表示
    const stepItems = document.querySelectorAll(".step-item")
    stepItems.slice(0, 3).forEach((step, index) => {
      setTimeout(() => {
        step.classList.add("animate-in")
        step.classList.add("active")
      }, index * 200)
    })
  }

  // 初期表示を実行
  ensureContentVisibility()

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

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("active")
    })
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
    })
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("active")
      }
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

      console.log(`Language switched to: ${lang}`)
    })
  })

  // Floating reservation button
  const floatingBtn = document.querySelector(".floating-reservation")

  function toggleFloatingButton() {
    if (floatingBtn) {
      if (window.scrollY > 300) {
        floatingBtn.classList.add("show")
      } else {
        floatingBtn.classList.remove("show")
      }
    }
  }

  // Initial check
  toggleFloatingButton()

  // Listen for scroll events
  window.addEventListener("scroll", toggleFloatingButton)

  // Scroll animations with improved visibility
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
    if (question) {
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
    }
  })

  // Reservation timeline animation - 改善版
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

      // Check if step is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        step.classList.add("animate-in")

        if (distance < closestDistance) {
          closestDistance = distance
          activeStep = index
        }
      }
    })

    // Activate closest step if within reasonable distance
    if (activeStep !== -1 && closestDistance < windowHeight * 0.4) {
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

  // 初期実行を遅延させて確実に動作させる
  setTimeout(() => {
    updateTimeline()
  }, 100)

  console.log("All event listeners attached")
})
