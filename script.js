// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded successfully")

  // 画像の遅延読み込み設定
  function setupLazyLoading() {
    const lazyImages = document.querySelectorAll(".lazy-image")

    // Intersection Observer がサポートされている場合
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target
              const src = img.getAttribute("data-src")

              if (src) {
                // 新しい画像オブジェクトを作成して事前読み込み
                const newImg = new Image()
                newImg.onload = () => {
                  img.src = src
                  img.classList.add("loaded")
                  img.removeAttribute("data-src")
                }
                newImg.onerror = () => {
                  // エラー時のフォールバック
                  img.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4="
                  img.classList.add("loaded")
                }
                newImg.src = src
              }

              observer.unobserve(img)
            }
          })
        },
        {
          rootMargin: "50px 0px", // 画面に入る50px前から読み込み開始
          threshold: 0.01,
        },
      )

      lazyImages.forEach((img) => {
        imageObserver.observe(img)
      })
    } else {
      // フォールバック: Intersection Observer がサポートされていない場合
      lazyImages.forEach((img) => {
        const src = img.getAttribute("data-src")
        if (src) {
          img.src = src
          img.classList.add("loaded")
          img.removeAttribute("data-src")
        }
      })
    }
  }

  // 画像の事前読み込み（重要な画像のみ）
  function preloadCriticalImages() {
    const criticalImages = [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/concept-image.jpg-FQgRt33Q1Hg8HDulRlgZEtOT57dJUU.jpeg", // ヒーロー画像
    ]

    criticalImages.forEach((src) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      document.head.appendChild(link)
    })
  }

  // 初期化
  preloadCriticalImages()
  setupLazyLoading()

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

    // Enjoy overlayを確実に表示
    const enjoyOverlays = document.querySelectorAll(".enjoy-overlay")
    enjoyOverlays.forEach((overlay) => {
      overlay.style.opacity = "1"
      overlay.style.visibility = "visible"
    })

    // Enjoy overlay内のテキストを確実に表示
    const enjoyNumbers = document.querySelectorAll(".enjoy-number")
    const enjoyTitles = document.querySelectorAll(".enjoy-title")
    const enjoyDescriptions = document.querySelectorAll(".enjoy-description")

    enjoyNumbers.forEach((element) => {
      element.style.opacity = "1"
      element.style.visibility = "visible"
    })

    enjoyTitles.forEach((element) => {
      element.style.opacity = "1"
      element.style.visibility = "visible"
    })

    enjoyDescriptions.forEach((element) => {
      element.style.opacity = "1"
      element.style.visibility = "visible"
    })
  }

  // 初期表示を即座に実行
  ensureContentVisibility()

  // 少し遅延させて再度実行（確実性を高める）
  setTimeout(() => {
    ensureContentVisibility()
  }, 100)

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
