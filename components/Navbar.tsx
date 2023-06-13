"use client"

interface NavItem {
  label: string
  page: string
}

const navItems: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

export default function Navbar(){
  return(
    <header>
      
    </header>
  )
}