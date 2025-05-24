// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
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

  // Show/hide floating reservation button on scroll
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

  // Add scroll animation for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all sections for animation
  document.querySelectorAll(".section").forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    observer.observe(section)
  })

  // Add hover effects for gallery items
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.02)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })
})
