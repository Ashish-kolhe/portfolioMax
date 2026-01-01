"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, Mail, Linkedin, Github, Hand, ScanFace, Instagram, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef, useEffect } from "react"

const projects = [
  {
    title: "Coddeit",
    category: "Product Design",
    type: "Product",
    description: "Coddeit is a practical coding platform focused on building real-world projects.",
    tags: ["Next.js", "DaisyUI"],
    image: "/images/coddeit.gif",
    url: "https://coddeit.vercel.app",
  },
  {
    title: "ResumeForU",
    category: "Tool",
    type: "Product",
    description:
      "ResumeForU is a fully functional, free-to-use resume builder that helps users create professional resumes in minutes.",
    tags: ["Mobile Design", "Tool", "Interaction Design"],
    image: "/images/resumeforu.gif",
    url: "https://resumeforu.vercel.app",
  },
  {
    title: "UiForU",
    category: "Dataset",
    type: "UI",
    description:
      "UiforU is a modern, open-source UI component library designed to help developers build beautiful and responsive web interfaces efficiently.",
    tags: ["Dashboard Design", "UX"],
    image: "/images/uiforu.gif",
    url: "https://uiforu.vercel.app",
  },
  {
    title: "TextChat",
    category: "Communication",
    type: "Web App",
    description: "A simple, real-time messaging web app focused on fast, intuitive chat without complicated setup.",
    tags: ["React", "Next.js", "Chat App"],
    image: "/images/textchat.gif",
    url: "https://textchat.vercel.app",
  },
  {
    title: "TokenCoin",
    category: "Finance",
    type: "Digital Asset Platform",
    description:
      "A modern digital asset and token platform interface designed to showcase token information and potentially interact with blockchain assets",
    tags: ["Blockchain", "Gamification", "Digital Assets"],
    image: "/images/tokencoin.gif",
    url: "https://tokencoin.vercel.app",
  },
]

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const scrollContainer = scrollRef.current
  if (!scrollContainer) return

  // No custom scroll logic needed
}, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              AK<span className="text-primary">.</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="#work" className="text-sm hover:text-primary transition-colors">
                Work
              </Link>
              <Link href="#about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Marquee */}
      <section className="relative overflow-hidden pt-32 pb-10 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance flex items-center justify-start">
              Ashish Kolhe <ScanFace className="mb-6 ml-2 h-6 w-6 text-primary" />
            </h1>
          </div>

          {/* Animated Marquee */}
          <div className="space-y-4 mb-8">
            <MarqueeText
              text="user-centered • user-centered • user-centered . user-centered"
              speed={30}
              direction="left"
            />
            <MarqueeText
              text="design-driven • design-driven • design-driven • design-driven"
              speed={40}
              direction="right"
            />
            <MarqueeText
              text="pixel-perfect • pixel-perfect • pixel-perfect • pixel-perfect"
              speed={35}
              direction="left"
            />
          </div>

          {/* Hero Content */}
          <div className="mb-4">
            <p className="text-md text-muted-foreground max-w-2xl">
              3rd year undergrad at <span className="text-white font-semibold">ATC, Ahilyanagar</span>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-10 bg-black">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Featured <span className="text-primary">Work</span>
              </h2>
              <p className="text-muted-foreground">In short, I love Design & Development</p>
            </div>
            <div className="hidden md:flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-border hover:bg-primary hover:text-white bg-transparent"
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" })
                  }
                }}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-border hover:bg-primary hover:text-white bg-transparent"
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" })
                  }
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="relative w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-10 scroll-smooth"
        >
          <div className="flex gap-6 px-6 min-w-max">
            {[...projects, ...projects].map((project, i) => (
              <Card
                key={i}
                className="flex-shrink-0 w-[320px] md:w-[450px] aspect-[4/5] relative group overflow-hidden bg-black rounded-xl border-none"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-4">
                    <span className="text-[10px] px-2 py-1 rounded-full border border-white/20 text-white bg-white/10 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="text-[10px] px-2 py-1 rounded-full border border-primary/20 text-primary bg-primary/10 backdrop-blur-md">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-white/70 mb-6 text-sm leading-relaxed line-clamp-2 opacity-100 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between opacity-100 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-[10px] text-white/50">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1"
                    >
                      View Project <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Web developer who enjoys building useful things on the internet, breaking them occasionally, fixing them
                again, and who <span className="text-primary">Writes</span> sometimes
              </p>

              <div className="flex gap-4">
                <Button
                  variant="primary"
                  className="border border-1 border-primary"
                  onClick={() => {
                    window.location.href = "mailto:developerashishkolhe@gmail.com"
                  }}
                >
                  Say Hi <Hand className="h-6 w-6 text-primary" />
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="relative aspect-square rounded-xl border border-r-2 border-b-2 border-t-0 border-l-0 border-primary overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
                <Image src="/images/dark.jpg" alt="Ashish Kolhe" width={350} height={350} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold mb-3">
            Skills <span className="text-primary">&</span> Expertise
          </h2>
          <p className="text-muted-foreground mb-12">Tools and technologies I use to bring ideas to life</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {[
              { name: "Figma", color: "border-l-pink-400" },
              { name: "React", color: "border-l-cyan-400" },
              { name: "Tailwind", color: "border-l-teal-400" },
              { name: "HTML/CSS", color: "border-l-red-400" },
              { name: "JavaScript", color: "border-l-amber-400" },
              { name: "TypeScript", color: "border-l-blue-500" },
            ].map((skill, i) => (
              <Card
                key={i}
                className={`group relative overflow-hidden bg-black p-4 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border-border border-l-4 ${skill.color} cursor-pointer text-center`}
              >
                <div className="relative z-10">
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{skill.name}</h3>
                </div>

                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </Card>
            ))}
          </div>

          {/* Additional competencies */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { title: "Design Process", items: ["User Research", "Wireframing", "Prototyping", "Usability Testing"] },
              {
                title: "Soft Skills",
                items: ["Team Collaboration", "Problem Solving", "Communication", "Time Management"],
              },
            ].map((category, i) => (
              <Card key={i} className="p-6 bg-black border-border backdrop-blur-sm">
                <h3 className="font-bold mb-4 text-primary">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-balance">Let's Create Something Amazing</h2>
            <p className="text-primary-foreground/90 mb-8 text-lg leading-relaxed">
              Have a project in mind? Let's collaborate and bring your vision to life
            </p>
            <Button onClick={() => {
                    window.location.href = "mailto:developerashishkolhe@gmail.com"
                  }} size="lg" variant="secondary" className="mb-12 shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>

            <div className="flex justify-center gap-6 pt-8 border-t border-primary-foreground/20">
              <Link
                href="https://www.linkedin.com/in/ashish-kolhe-b4800b343"
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/Ashish-kolhe"
                className="hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://instagram.com/ashishkolhe_"
                className="hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:developerashishkolhe@gmail.com"
                className="hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black font-bold">
              © {new Date().getFullYear()} Ashish Kolhe. All rights reserved.
            </p>
            <p className="text-sm text-black">Designed & Built with passion</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Marquee Component
function MarqueeText({
  text,
  speed = 40,
  direction = "left",
}: {
  text: string
  speed?: number
  direction?: "left" | "right"
}) {
  const repeatedText = Array(20).fill(text).join(" • ")

  return (
    <div className="relative overflow-hidden py-4 border-y border-border/30">
      <div
        className={`flex whitespace-nowrap ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="text-xl md:text-2xl font-bold text-muted-foreground/30 uppercase">{repeatedText}</span>
      </div>
    </div>
  )
}
