// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded successfully")

  // 初期表示の確保 - すべてのコンテンツを即座に表示
  function ensureContentVisibility() {
    // すべてのセクションを表示
    const sections = document.querySelectorAll(".section")
    sections.forEach((section) => {
      section.style.opacity = "1"
      section.style.visibility = "visible"
    })

    // コンテンツテキストを確実に表示
    const contentTexts = document.querySelectorAll(".content-text")
    contentTexts.forEach((text) => {
      text.style.opacity = "1"
      text.style.visibility = "visible"
    })

    // ギャラリーアイテムを即座に表示
    const galleryItems = document.querySelectorAll(".gallery-item")
    galleryItems.forEach((item) => {
      item.style.opacity = "1"
      item.style.transform = "translateY(0)"
    })

    // 最初の3つのステップを表示
    const stepItems = document.querySelectorAll(".step-item")
    stepItems.forEach((step, index) => {
      step.style.opacity = "1"
      step.style.transform = "translateX(0)"

      // 最初の3つのステップをアクティブにする
      if (index < 3) {
        step.classList.add("active")
      }
    })

    // Enjoyステップを即座に表示
    const enjoySteps = document.querySelectorAll(".enjoy-step")
    enjoySteps.forEach((step) => {
      step.style.opacity = "1"
      step.style.transform = "translateY(0)"
    })
  }

  // 初期表示を即座に実行
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
  const stepItems = document.querySelectorAll(".step-item")
  const timelineProgress = document.querySelector(".timeline-progress")

  function updateTimeline() {
    const windowHeight = window.innerHeight
    const centerY = windowHeight / 2

    let activeStepIndex = -1
    let closestDistance = Number.POSITIVE_INFINITY

    stepItems.forEach((step, index) => {
      const rect = step.getBoundingClientRect()
      const stepCenterY = rect.top + rect.height / 2
      const distance = Math.abs(stepCenterY - centerY)

      // ステップが画面内にある場合
      if (rect.top < windowHeight && rect.bottom > 0) {
        if (distance < closestDistance) {
          closestDistance = distance
          activeStepIndex = index
        }
      }
    })

    // すべてのステップからactiveクラスを削除
    stepItems.forEach((step) => {
      step.classList.remove("active")
    })

    // 最も近いステップをアクティブにする（距離が適切な場合）
    if (activeStepIndex !== -1 && closestDistance < windowHeight * 0.4) {
      stepItems[activeStepIndex].classList.add("active")
    } else {
      // デフォルトで最初の3つを表示
      stepItems.forEach((step, index) => {
        if (index < 3) {
          step.classList.add("active")
        }
      })
    }

    // タイムラインプログレスの更新
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

  // 初期実行
  setTimeout(() => {
    updateTimeline()
  }, 100)

  console.log("All event listeners attached and content displayed")
})
