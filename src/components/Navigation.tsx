import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import { cn } from '@/lib/utils'

const sectionItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'speaking', label: 'Speaking' },
]

const pageItems = [
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Vimeo', href: 'https://vimeo.com' },
]

export function Navigation() {
  const activeSection = useActiveSection()
  const isVisible = useScrollVisibility()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'

  const goToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    if (!isHome) {
      navigate(`/#${sectionId}`)
      return
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const linkClass = (active: boolean) =>
    cn(
      'text-sm text-white mix-blend-difference transition-all duration-300 relative py-1 text-left',
      'hover:opacity-60',
      active && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
    )

  const renderItems = (align: 'start' | 'end') => (
    <>
      {sectionItems.map((item) => (
        <button
          key={item.id}
          onClick={() => goToSection(item.id)}
          className={linkClass(isHome && activeSection === item.id)}
        >
          {item.label}
        </button>
      ))}
      {pageItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={() => setMobileMenuOpen(false)}
          className={cn(
            linkClass(location.pathname.startsWith(item.to)),
            align === 'end' && 'text-right'
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  )

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start md:hidden">
        <div className="relative">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-sm text-white mix-blend-difference"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>

          <div
            className={cn(
              'flex flex-col items-start gap-3 mt-6 transition-all duration-300',
              mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            )}
          >
            {renderItems('start')}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Social Links */}
      <div className="hidden md:block fixed top-0 right-0 z-50 p-6 md:p-10">
        <div className="flex items-center gap-6 justify-end">
          <Link
            to="/contact"
            className="text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity"
          >
            Contact
          </Link>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Navigation Items */}
      <nav
        className={cn(
          'hidden md:block fixed bottom-0 right-0 z-50 p-6 md:p-10 transition-all duration-500',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-end gap-3">{renderItems('end')}</div>
      </nav>
    </>
  )
}
