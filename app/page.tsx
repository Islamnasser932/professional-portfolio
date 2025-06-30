"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Menu,
  X,
  Sun,
  Moon,
  ExternalLink,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  User,
  Brain,
  Database,
  BarChart3,
  Bot,
  Calculator,
  Lightbulb,
  FileText,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IslamNasserPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("home")

  const downloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/cv/Islam-Nasser-CV.pdf"
    link.download = "Islam-Nasser-CV.pdf"
    link.click()
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "education", "projects", "certificates", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Python",
      items: [
        "Data Analysis (Pandas, NumPy)",
        "Machine Learning (Scikit-learn)",
        "Web Scraping (BeautifulSoup, Scrapy)",
        "Data Visualization (Matplotlib, Seaborn)",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases & SQL",
      items: ["SQL (Advanced Queries, Joins)", "MySQL", "Database Management", "ETL Processes"],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence & Viz",
      items: ["Power BI Dashboarding", "Looker Studio", "Excel & Google Sheets", "Reporting & Presentations"],
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Machine Learning",
      items: [
        "Regression Analysis",
        "Classification Techniques",
        "Clustering (K-Means, DBSCAN)",
        "Model Evaluation & Tuning",
      ],
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Statistics & Math",
      items: ["Inferential Statistics", "Hypothesis Testing", "Probability", "A/B Testing"],
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving & Logic",
      items: [
        "Competitive Programming",
        "Algorithmic Thinking",
        "Structured Problem Solving",
        "Debugging & Optimization",
      ],
    },
  ]

  const experience = [
    {
      role: "Real Time Analyst",
      company: "Outsourcing Skill",
      date: "May 2025 – Present",
      description:
        "Analyze operational metrics including sales, productivity, attendance, and quality. Build and maintain performance dashboards and KPIs in Excel and Power BI. Translate raw data into insights, trends, and visual storytelling while supporting department heads with forecasting, budgeting, and workflow analysis.",
    },
    {
      role: "Data Analyst",
      company: "In-Call Outsourcing",
      date: "Sep 2023 – Mar 2025",
      description:
        "Analyzed and interpreted complex data sets, providing actionable insights that supported key business decisions. Developed predictive models and forecasts to enhance decision-making processes, and created comprehensive reports and interactive dashboards using advanced data visualization tools.",
    },
    {
      role: "Tele Sales Agent",
      company: "In-Call Outsourcing",
      date: "Nov 2022 – Sep 2023",
      description:
        "Successfully managed high-volume inbound and outbound calls, consistently meeting and exceeding sales targets and KPIs. Utilized persuasive communication skills to build rapport with customers, addressing their needs and providing tailored solutions.",
    },
    {
      role: "Customer Service Representative",
      company: "Xceed Company",
      date: "Feb 2022 – May 2022",
      description:
        "Collaborated with a high-performing team that consistently ranked #1 on the floor, contributing to achieving top-tier customer satisfaction and operational efficiency. Applied effective communication and problem-solving strategies to help customers achieve their goals.",
    },
    {
      role: "Call Center Agent",
      company: "Ison Xperiences",
      date: "Feb 2021 – Oct 2021",
      description:
        "Conducted cold calling to potential customers, effectively introducing products and services while highlighting benefits tailored to their specific needs, resulting in high conversion rates and customer satisfaction.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Commerce",
      institution: "Ain Shams University",
      date: "2020 – 2025",
      description:
        "Comprehensive studies in business administration, economics, and management principles, providing a strong foundation for data-driven business analysis and decision making.",
    },
  ]

  const projects = [
    {
      title: "Sales-Retail Analysis",
      description:
        "Developed a comprehensive sales performance dashboard using Looker Studio and Python for data analysis. Features interactive visualizations tracking key metrics, customer segmentation, product analysis, and location-based insights with 2.30M total sales across 9.99K products.",
      link: "https://github.com/Islamnasser932/Sales-Retail",
      image: "/images/sales-retail-dashboard.png",
      technologies: ["Looker Studio", "Python", "Data Analysis"],
      icon: "📊",
    },
    {
      title: "Loan-Prediction Model",
      description:
        "Built an interactive Streamlit web application for loan approval prediction using machine learning algorithms. Features comprehensive data analysis, interactive visualizations, and real-time prediction capabilities with loan purpose segmentation and interest rate analysis.",
      link: "https://github.com/Islamnasser932/Loan-approval-prediction",
      image: "/images/loan-prediction-app.png",
      technologies: ["Streamlit", "Python", "Machine Learning", "Random Forest", "KNN", "Data Analysis"],
      icon: "🏦",
    },
    {
      title: "Bank Marketing Campaign Analysis",
      description:
        "Comprehensive analysis of bank marketing campaign data using advanced machine learning techniques. Implemented data preprocessing, resampling strategies, KNN and Random Forest algorithms to identify factors influencing customer subscription to term deposits.",
      link: "https://github.com/Islamnasser932/Bank-Marketing-Dataset",
      image: "/images/bank-marketing-code.png",
      technologies: ["Python", "Data Analysis", "Machine Learning", "KNN", "Random Forest"],
      icon: "📢",
    },
    {
      title: "Car-Price Prediction",
      description:
        "Comprehensive regression analysis for predicting used car prices using multiple machine learning techniques. Features extensive exploratory data analysis, correlation matrix visualization, and implementation of both linear and polynomial regression models in an interactive Streamlit application.",
      link: "https://github.com/Islamnasser932/car-price-prediction",
      image: "/images/car-price-analysis.png",
      technologies: [
        "Python",
        "Data Analysis",
        "Regression",
        "Linear Regression",
        "Polynomial Regression",
        "Streamlit",
      ],
      icon: "🚗",
    },
    {
      title: "Money Laundering Detection",
      description:
        "Advanced fraud detection system using unsupervised learning techniques for anomaly detection in financial transactions. Features comprehensive data analysis with violin plots and statistical visualizations to identify suspicious cash-in and transfer patterns.",
      link: "https://github.com/Islamnasser932/Money-Laundering",
      image: "/images/money-laundering-analysis.png",
      technologies: ["Python", "Data Analysis"],
      icon: "💸",
    },
  ]

  const certificatesData = [
    {
      id: "machinfy",
      title: "Data Science & AI Course",
      provider: "Machinfy",
      date: "Nov 2024",
      details: "130 Training Hours, Grade: Excellent",
      certificateNo: "MFA-668-4b",
      description: "Comprehensive training program covering AI and Data Science fundamentals",
      verifyLink: null,
      pdfPath: "/certificates/machinfy-data-science-ai.pdf",
      certificateImage: "/certificates/machinfy-certificate.png",
      icon: <Award className="w-8 h-8" />,
    },
    {
      id: "stanford-ml",
      title: "Supervised Machine Learning",
      provider: "Stanford & DeepLearning.AI",
      date: "Sep 2023",
      details: "Regression and Classification",
      certificateNo: null,
      description: "Online course authorized by DeepLearning.AI and Stanford University via Coursera",
      verifyLink: "https://coursera.org/verify/LZQZASSBVJ5Z",
      pdfPath: "/certificates/stanford-ml-coursera.pdf",
      certificateImage: "/certificates/stanford-coursera-certificate.png",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      id: "datacamp-eda",
      title: "Exploratory Data Analysis in Python",
      provider: "DataCamp",
      date: "Mar 2022",
      details: "Certificate #23,321,512",
      certificateNo: "23,321,512",
      description: "Advanced techniques for data exploration and visualization in Python",
      verifyLink: null,
      pdfPath: "/certificates/datacamp-eda-python.pdf",
      certificateImage: "/certificates/datacamp-eda-certificate.png",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      id: "datacamp-python",
      title: "Data Analyst with Python Track",
      provider: "DataCamp",
      date: "Apr 2021",
      details: "Certificate #212,282",
      certificateNo: "212,282",
      description: "Complete track covering Python for data analysis and manipulation",
      verifyLink: null,
      pdfPath: "/certificates/datacamp-python-track.pdf",
      certificateImage: "/certificates/datacamp-python-certificate.png",
      icon: <Code className="w-8 h-8" />,
    },
  ]

  const navItems = [
    { id: "home", label: "Home", icon: <User className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Brain className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="w-4 h-4" /> },
    { id: "certificates", label: "Certificates", icon: <Award className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/90 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center font-bold text-white">
                I
              </div>
              <span className="text-xl font-semibold text-foreground">Islam Nasser</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={downloadCV}
                className="bg-gradient-to-r from-orange-400 to-pink-400 hover:opacity-90 text-white border-0"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-foreground"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center space-x-2 px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                  Hi, I'm
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    ISLAM NASSER
                  </span>
                </h1>
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground">Data Scientist</h2>
                  <p className="text-lg text-muted-foreground">ML Enthusiast | Data Analytics Expert</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-orange-400 to-pink-400 hover:opacity-90 text-white px-8 py-3 text-lg border-0">
                  Work with ME →
                </Button>
                <Button
                  onClick={downloadCV}
                  variant="outline"
                  className="border-border text-muted-foreground hover:bg-muted hover:text-foreground px-8 py-3 text-lg bg-transparent"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+20 01017912265</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>eslamnasser932@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Giza, Egypt</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-primary hover:bg-muted"
                  asChild
                >
                  <Link href="https://github.com/Islamnasser932" target="_blank">
                    <Github className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-accent hover:bg-muted"
                  asChild
                >
                  <Link href="https://linkedin.com/in/islam-nasser1" target="_blank">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <Image
                      src="/images/profile.jpg"
                      alt="Islam Nasser"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm Islam Nasser, a passionate <strong className="text-primary">Data Scientist</strong> with
                expertise in data cleaning, visualization, and machine learning. I'm proficient in Python, Pandas, and
                NumPy for data manipulation, and skilled in applying supervised learning techniques like linear
                regression, logistic regression, random forests, and XGBoost.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have extensive experience in building predictive models, analyzing complex datasets, and delivering
                actionable insights using Power BI and Looker Studio. My expertise includes both supervised learning
                methods (regression and classification techniques) and unsupervised learning like K-means clustering.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in <strong className="text-primary">translating data into business solutions</strong> that
                drive growth and efficiency. My strong problem-solving and communication skills enable me to transform
                raw data into actionable intelligence that supports strategic business decisions.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="text-9xl">🧠</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-primary">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">{skill.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground text-sm flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-card border-border border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="border-accent text-accent mt-2 md:mt-0 bg-transparent">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.date}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-accent">{edu.degree}</h3>
                      <p className="text-lg text-muted-foreground">{edu.institution}</p>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary mt-2 md:mt-0 bg-transparent">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.date}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-0">
                  {project.image && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-3xl">{project.icon}</span>
                      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    </div>

                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-primary text-primary bg-primary/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    {project.link !== "#" && (
                      <Button
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                        asChild
                      >
                        <Link href={project.link} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my continuous learning journey and professional development in AI, data science, and
              programming.
            </p>
          </div>

          {/* Visual Certificate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {certificatesData.map((cert, index) => (
              <Card
                key={cert.id}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg border-b border-border">
                    <Image
                      src={cert.certificateImage || "/placeholder.svg"}
                      alt={`${cert.title} Certificate`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-primary group-hover:text-primary/80">{cert.provider}</h3>
                        <p className="text-sm text-muted-foreground">{cert.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        {cert.verifyLink && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                            asChild
                          >
                            <Link href={cert.verifyLink} target="_blank">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Verify
                            </Link>
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                          asChild={
                            cert.id === "datacamp-python" ||
                            cert.id === "stanford-ml" ||
                            cert.id === "machinfy" ||
                            cert.id === "datacamp-eda"
                          }
                        >
                          {cert.id === "datacamp-python" ||
                          cert.id === "stanford-ml" ||
                          cert.id === "machinfy" ||
                          cert.id === "datacamp-eda" ? (
                            <Link
                              href={
                                cert.id === "datacamp-python"
                                  ? "/certificates/datacamp-python-track.pdf"
                                  : cert.id === "stanford-ml"
                                    ? "/certificates/stanford-ml-coursera.pdf"
                                    : cert.id === "machinfy"
                                      ? "/certificates/machinfy-data-science-ai.pdf"
                                      : "/certificates/datacamp-eda-python.pdf"
                              }
                              target="_blank"
                            >
                              <FileText className="w-3 h-3 mr-1" />
                              View PDF
                            </Link>
                          ) : (
                            <>
                              <FileText className="w-3 h-3 mr-1" />
                              View PDF
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Additional Certifications</h3>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Business Analytics – Udacity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Google Data Analytics – Coursera</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Excel – Udemy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Power BI – Udemy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">SQL for Data Science – Coursera</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto"></div>
          </div>

          <Card className="bg-card border-border max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground mb-8">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <Link href="mailto:eslamnasser932@gmail.com" className="text-primary hover:text-primary/80">
                    eslamnasser932@gmail.com
                  </Link>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">+20 01017912265</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Giza, Egypt</span>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <Link href="https://linkedin.com/in/islam-nasser1" target="_blank">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/Islamnasser932" target="_blank">
                    <Github className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">© 2025 Islam Nasser. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-400 to-pink-400 hover:opacity-90 text-white rounded-full w-12 h-12 shadow-lg border-0"
        size="icon"
        asChild
      >
        <Link href="#home">↑</Link>
      </Button>
    </div>
  )
}
