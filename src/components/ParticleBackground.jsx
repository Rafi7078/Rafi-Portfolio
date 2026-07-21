import { useEffect, useRef } from 'react'

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    let animationFrameId
    let particles = []
    let mouse = {
      x: null,
      y: null,
      radius: 150,
    }

    const particleColor = '173, 255, 47'

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      createParticles()
    }

    const getParticleCount = () => {
      if (window.innerWidth < 600) return 35
      if (window.innerWidth < 1000) return 55
      return 85
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.8 + 0.5
        this.speedX = Math.random() * 0.35 - 0.175
        this.speedY = Math.random() * 0.35 - 0.175
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX *= -1
        }

        if (this.y < 0 || this.y > canvas.height) {
          this.speedY *= -1
        }
      }

      draw() {
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fillStyle = `rgba(${particleColor}, 0.55)`
        context.fill()
      }
    }

    const createParticles = () => {
      particles = []

      const particleCount = getParticleCount()

      for (let index = 0; index < particleCount; index += 1) {
        particles.push(new Particle())
      }
    }

    const connectParticles = () => {
      const connectionDistance = 120

      for (let firstIndex = 0; firstIndex < particles.length; firstIndex += 1) {
        for (
          let secondIndex = firstIndex + 1;
          secondIndex < particles.length;
          secondIndex += 1
        ) {
          const dx = particles[firstIndex].x - particles[secondIndex].x
          const dy = particles[firstIndex].y - particles[secondIndex].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance

            context.beginPath()
            context.strokeStyle = `rgba(${particleColor}, ${opacity * 0.14})`
            context.lineWidth = 0.6
            context.moveTo(
              particles[firstIndex].x,
              particles[firstIndex].y,
            )
            context.lineTo(
              particles[secondIndex].x,
              particles[secondIndex].y,
            )
            context.stroke()
          }
        }
      }
    }

    const connectMouse = () => {
      if (mouse.x === null || mouse.y === null) {
        return
      }

      particles.forEach((particle) => {
        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          const opacity = 1 - distance / mouse.radius

          context.beginPath()
          context.strokeStyle = `rgba(${particleColor}, ${opacity * 0.5})`
          context.lineWidth = 0.8
          context.moveTo(mouse.x, mouse.y)
          context.lineTo(particle.x, particle.y)
          context.stroke()

          context.beginPath()
          context.arc(particle.x, particle.y, particle.size + 1, 0, Math.PI * 2)
          context.fillStyle = `rgba(${particleColor}, ${opacity})`
          context.fill()
        }
      })
    }

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connectParticles()
      connectMouse()

      animationFrameId = window.requestAnimationFrame(animate)
    }

    const handleMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="particle-background"
      aria-hidden="true"
    />
  )
}

export default ParticleBackground