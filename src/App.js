import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Menu, X, Code, Briefcase, GraduationCap, Award, User, MessageCircle, Send } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openGoogleMaps = () => {
    const location = "Mysore, Karnataka, India";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status message when user starts typing
    if (formStatus.message) {
      setFormStatus({ type: '', message: '' });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all fields.' });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Using Gmail compose URL (opens Gmail in browser)
      const gmailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=punyash610@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${gmailBody}`;
      
      window.open(gmailLink, '_blank', 'noopener,noreferrer');
      
      setFormStatus({ 
        type: 'success', 
        message: 'Opening Gmail... Please send the email from there.' 
      });
      
      // Reset form after short delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus({ type: '', message: '' });
      }, 3000);

    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try emailing directly at punyash610@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const skillCategories = {
    Languages: ['C', 'C++', 'Java', 'Python', 'SQL', 'HTML, CSS', 'JavaScript'],
    Frameworks: ['Django', 'React.js', 'Streamlit', 'TensorFlow', 'YAMNet', 'Keras', 'OpenCV', 'YOLOv8'],
    Tools: ['VS Code', 'PyCharm', 'Jupyter Notebook', 'Git', 'GitHub', 'Canva', 'Anaconda', 'pip']
  };

  const projects = [
    {
      title: 'EchoEye: Real-time Audio & Visual AI Monitoring',
      description: 'Developed an AI-powered system for real-time audio classification and visual monitoring using Streamlit for e-learning and surveillance applications.',
      tech: ['Python', 'Streamlit', 'YAMNet', 'OpenCV', 'YOLOv8'],
      github: 'https://github.com/PunyashreeS06/EchoEye'
    },
    {
      title: 'Lyrics-Based Mood Detection in Music',
      description: 'Built a machine learning model to classify song lyrics into happy, sad, calm and energetic moods using Python and text mining techniques.',
      tech: ['Python', 'Machine Learning', 'Text Mining', 'NLP'],
      github: 'https://github.com/PunyashreeS06/Lyric-Emotion-Detector'
    },
    {
      title: 'Automation for Lung Cancer Prediction',
      description: 'Developed a web-based application for early detection of lung cancer in patients using Django framework with machine learning algorithms.',
      tech: ['Django', 'Python', 'Machine Learning', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/PunyashreeS06/Lung-cancer-detection-using-ML'
    },
  ];

  const experience = {
    title: 'Software Development Intern',
    company: 'Excelsoft Technologies',
    location: 'Mysore',
    description: 'Worked as a Software Development Intern, gaining hands-on experience in software development lifecycle, learning industry best practices, and contributing to real-world projects while expanding technical skills.'
  };

  const certifications = [
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'Certification Course',
      year: '2024',
      description: 'Comprehensive understanding of AI concepts, machine learning algorithms, and practical applications.'
    },
    {
      title: 'Python with AI',
      issuer: 'Certification Course',
      year: '2025',
      description: 'Advanced Python programming with focus on AI development, How to integrate AI tools for data manipulation, analysis, and visualization. Leverage AI assistants to debug code, explain concepts, and enhance your learning, mirroring real-world software development practices.'
    },
    {
      title: 'Prompt Engineering',
      issuer: 'Certification Course',
      year: '2025',
      description: 'Learn prompt engineering best practices for application development, Discover new ways to use LLMs, gain hands-on practice writing and iterating on prompts using the OpenAI API and Llama 2 & 3 models. Interact with Meta Llama 2 Chat, Code Llama, and Llama Guard models. See how you can build safe, responsible AI applications using the Llama Guard model.'
    },
    {
      title: 'Java Programming',
      issuer: 'Certification Course',
      year: '2024',
      description: 'Proficiency in Java programming language, object-oriented programming concepts, and application development.'
    },
    {
      title: 'Cyber Security',
      issuer: 'Certification Course',
      year: '2024',
      description: 'Understanding of cybersecurity fundamentals, security protocols, and best practices for digital security.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'skills', 'projects', 'education', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-4 py-2 space-y-2">
              {['hero', 'about', 'experience', 'skills', 'projects', 'education', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 rounded-md capitalize hover:bg-gray-800 transition-colors"
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <img
              src="/images/punyashree.jpg"
              alt="Punyashree S"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-2xl object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Punyashree S
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            MCA Graduate 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume/Punyashree_S_Resume.pdf';
                link.download = 'Punyashree_S_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-8 py-3 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Punyashree S, a fresh Master of Computer Application graduate with a passion for technology and a strong foundation in software development and artificial intelligence. Having recently completed my MCA from NMAM Institute of Technology, Nitte, I'm eager to begin my career in the IT industry and contribute to innovative solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                As an enthusiastic fresher with a solid academic background and hands-on project experience, I'm excited to apply my knowledge of machine learning, web development, and AI systems in real-world scenarios. My educational journey has equipped me with both theoretical understanding and practical skills through diverse projects and continuous learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-blue-400" />
                  <span>Mysore, Karnataka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={20} className="text-blue-400" />
                  <span>punyash610@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={20} className="text-blue-400" />
                  <span>+91 7975129764</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Facts</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Academic Projects:</span>
                    <span className="font-semibold">4+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Certifications Earned:</span>
                    <span className="font-semibold">5</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Internship:</span>
                    <span className="font-semibold">5 Months</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Research Papers Published:</span>
                    <span className="font-semibold">1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Briefcase size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">{experience.title}</h3>
                  <p className="text-purple-400 font-medium text-lg">{experience.company}</p>
                  <p className="text-gray-400">{experience.location}</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{experience.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}:</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 group">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <Github size={20} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Master of Computer Application</h3>
              </div>
              <p className="text-purple-400 font-medium mb-2">NMAM Institute Of Technology, Nitte</p>
              <p className="text-gray-400 text-sm mb-3">2023 - 2025 • CGPA: 8.29</p>
              <p className="text-gray-300">Specialized in Software Development and Artificial Intelligence with focus on Machine Learning and Web Technologies.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Bachelor of Computer Application</h3>
              </div>
              <p className="text-purple-400 font-medium mb-2">NIE First Grade College, Mysore</p>
              <p className="text-gray-400 text-sm mb-3">2020 - 2023 • CGPA: 7.191</p>
              <p className="text-gray-300">Foundation in Computer Science with emphasis on programming, databases, and software engineering principles.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Pre University (12th)</h3>
              </div>
              <p className="text-purple-400 font-medium mb-2">VVS GJ PU College, Mysore</p>
              <p className="text-gray-400 text-sm mb-3">2018 - 2020 • Percentage: 80</p>
              <p className="text-gray-300">Commerce stream with Computer Science from Karnataka PU Board, covering Economics, Business Studies, Accountancy, and Computer Science with primary focus on computing and programming concepts.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Class X</h3>
              </div>
              <p className="text-purple-400 font-medium mb-2">Bharatiya Vidya Bhavan, Mysore</p>
              <p className="text-gray-400 text-sm mb-3">2018 • Percentage: 78.72</p>
              <p className="text-gray-300">A Class 10 Karnataka State Board student with foundations in Mathematics, Science, and Social Studies, actively developing Computer skills and computational thinking to pursue Computer Science in higher education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certification Courses
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400">{cert.title}</h3>
                    <p className="text-purple-400 font-medium text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">{cert.year}</p>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities and interesting projects.
              Let's connect and create something amazing together!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <a 
                href="mailto:punyash610@gmail.com"
                className="flex items-center gap-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400 hover:text-blue-400 transition-colors">punyash610@gmail.com</p>
                </div>
              </a>
              <a 
                href="tel:+917975129764"
                className="flex items-center gap-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-400 hover:text-blue-400 transition-colors">+91 7975129764</p>
                </div>
              </a>
              <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400 hover:text-blue-400 transition-colors">Mysore, Karnataka, India</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/PunyashreeS06" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/punyashree-s-91058a2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div className="space-y-6">
              {formStatus.message && (
                <div className={`p-4 rounded-lg ${
                  formStatus.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500 text-green-400' 
                    : 'bg-red-500/20 border border-red-500 text-red-400'
                }`}>
                  {formStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none text-white"
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Punyashree S. All rights reserved. 
          </p>
          <p className="text-gray-400">
            Seeking opportunities to contribute and grow through hands-on experience.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;