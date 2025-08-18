'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [particles, setParticles] = useState<Array<{left: number, top: number, size: number, delay: number, duration: number}>>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 50 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2
    }));
    setParticles(newParticles);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Side Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 bg-gray-900/80 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col space-y-6">
          <button
            onClick={() => scrollToSection('home')}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cyber-glow ${
              activeSection === 'home' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-purple-600 hover:text-white'
            }`}
            title="Home"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cyber-glow ${
              activeSection === 'about' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-purple-600 hover:text-white'
            }`}
            title="About"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('video')}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cyber-glow ${
              activeSection === 'video' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-purple-600 hover:text-white'
            }`}
            title="Video"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M6 20l4-16m4 16l4-16" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cyber-glow ${
              activeSection === 'skills' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-purple-600 hover:text-white'
            }`}
            title="Skills"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cyber-glow ${
              activeSection === 'projects' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-purple-600 hover:text-white'
            }`}
            title="Projects"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cyber-glow ${
              activeSection === 'contact' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-purple-600 hover:text-white'
            }`}
            title="Contact"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center ml-20 z-10">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-7xl md:text-9xl font-black mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent neon-text glitch-effect">
                  DAVID
                </span>
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-white/90 mb-2">SHAN DANIEL</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-lg md:text-xl text-gray-300">
                <span className="px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30 cyber-glow hover:scale-105 transition-transform duration-300">
                  🔒 Cybersecurity Student
                </span>
                <span className="px-4 py-2 bg-blue-600/20 rounded-full border border-blue-500/30 cyber-glow hover:scale-105 transition-transform duration-300">
                  💻 Software Engineer
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 cyber-glow skill-card">
                <div className="text-3xl font-bold text-green-400 mb-2">🎓</div>
                <div className="text-lg font-semibold text-white">Best Graduate</div>
                <div className="text-sm text-gray-400">Destiny Schools</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 cyber-glow skill-card">
                <div className="text-3xl font-bold text-blue-400 mb-2">🔒</div>
                <div className="text-lg font-semibold text-white">Cybersecurity</div>
                <div className="text-sm text-gray-400">FUASKACHIA</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 cyber-glow skill-card">
                <div className="text-3xl font-bold text-purple-400 mb-2">💻</div>
                <div className="text-lg font-semibold text-white">Software Dev</div>
                <div className="text-sm text-gray-400">Passionate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 cyber-glow"
              >
                Discover My Journey
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 cyber-glow"
              >
                View My Work
              </button>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center ml-20 py-20 z-10 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Visual */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl border border-gray-700/50 overflow-hidden matrix-bg">
                <div className="relative w-full h-full">
                  <Image
                    src="/david_danie.jpg"
                    alt="David Shan Daniel"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-left">
                    <div className="text-2xl font-bold text-white mb-1">David Shan Daniel</div>
                    <div className="text-gray-200">Aspiring Cybersecurity Expert</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-600/30 rounded-full flex items-center justify-center border border-purple-500/50 cyber-glow">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center border border-blue-500/50 cyber-glow">
                <span className="text-xl">💻</span>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-black text-white mb-4">
                  About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm David Shan Daniel, an aspiring cybersecurity student at the Federal University of Applied Sciences, Kachia.
                  My strong foundation in science subjects fuels my passion and contributes greatly to my strength in software engineering and development.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 skill-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-400 mb-2">Academic Excellence</h3>
                      <p className="text-gray-300">Best overall graduating student and best graduating science student at Destiny Schools. This foundation drives my passion for logical thinking and problem-solving.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 skill-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">Current Focus</h3>
                      <p className="text-gray-300">Pursuing cybersecurity while developing skills in software engineering, graphic design, and system troubleshooting. Always open to challenges and eager to learn.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 skill-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-400 mb-2">Future Vision</h3>
                      <p className="text-gray-300">Passionate about working with innovative companies like Microsoft. I'm proactive, resourceful, and determined to make a meaningful impact in software development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="min-h-screen flex items-center ml-20 py-20 z-10 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              My <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-xl text-gray-300">Get to know me through my elevator pitch</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Video Player */}
            <div className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 cyber-glow">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl border border-gray-600/50 flex items-center justify-center relative overflow-hidden">
                  {/* Video Placeholder - Replace with actual video */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Elevator Pitch Video</h3>
                    <p className="text-gray-400 mb-4">Coming Soon!</p>
                    <div className="text-sm text-gray-500">
                      Upload your video file to the public folder and update the src below
                    </div>
                  </div>

                  {/* Uncomment and update when video is ready */}
                  {/*
                  <video
                    controls
                    className="w-full h-full rounded-xl"
                    poster="/david_danie.jpg"
                  >
                    <source src="/david_elevator_pitch.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  */}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600/30 rounded-full flex items-center justify-center border border-red-500/50 cyber-glow">
                <span className="text-xl">🎬</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-600/30 rounded-full flex items-center justify-center border border-pink-500/50 cyber-glow">
                <span className="text-lg">🎤</span>
              </div>
            </div>

            {/* Right Side - Video Description */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">My Elevator Pitch</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Watch my personal introduction where I share my journey, passion for cybersecurity,
                  and vision for making a meaningful impact in the tech industry.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 skill-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-red-400 mb-2">My Mission</h4>
                      <p className="text-gray-300">To leverage my strong foundation in science and passion for technology to create innovative cybersecurity solutions.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 skill-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-pink-400 mb-2">My Vision</h4>
                      <p className="text-gray-300">Working with innovative companies like Microsoft to develop cutting-edge software solutions that make a difference.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 skill-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💪</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-purple-400 mb-2">My Commitment</h4>
                      <p className="text-gray-300">Dedicated to continuous learning, fast-paced execution, and delivering excellence in every project I undertake.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-full hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 cyber-glow"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center ml-20 py-20 z-10 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              My <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies and abilities that drive my passion</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "💻", name: "Software Engineering", color: "from-blue-500 to-purple-600" },
              { icon: "🔒", name: "Cybersecurity", color: "from-red-500 to-pink-600" },
              { icon: "🛠️", name: "System Troubleshooting", color: "from-green-500 to-teal-600" },
              { icon: "🎨", name: "Graphic Design", color: "from-purple-500 to-indigo-600" },
              { icon: "🧠", name: "Problem Solving", color: "from-yellow-500 to-orange-600" },
              { icon: "🚀", name: "Proactive Approach", color: "from-pink-500 to-rose-600" },
              { icon: "🤝", name: "Team Collaboration", color: "from-cyan-500 to-blue-600" },
              { icon: "⚡", name: "Fast Execution", color: "from-emerald-500 to-green-600" }
            ].map((skill, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 skill-card cyber-glow"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-center text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 cyber-glow">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Core Strengths</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-purple-400 mb-2">Detail-Oriented</h4>
                <p className="text-gray-300">Meticulous attention to detail ensures accuracy and quality in every project.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                  <span className="text-3xl">💪</span>
                </div>
                <h4 className="text-xl font-bold text-blue-400 mb-2">Resourceful</h4>
                <p className="text-gray-300">Strong-willed and determined to find innovative solutions to complex challenges.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                  <span className="text-3xl">🌟</span>
                </div>
                <h4 className="text-xl font-bold text-green-400 mb-2">Growth-Minded</h4>
                <p className="text-gray-300">Always open to challenges and eager to learn new technologies and methodologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center ml-20 py-20 z-10 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-300">Showcasing my work and contributions</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 mb-12 cyber-glow">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Agric Tech Titans</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  A comprehensive agricultural technology solution addressing the challenges faced by small farmers.
                  This platform revolutionizes farming by providing accessible tools and resources.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Access to farm tools through affordable rental system",
                    "Real-time tool availability and booking system",
                    "Secure payment options including mobile money and bank transfers",
                    "User-friendly booking management system"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://youtu.be/PvXJtpqTD3E?si=efzo4a_8KsuuBL7_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 cyber-glow"
                  >
                    <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Watch Demo Video
                  </a>
                  <a
                    href="https://docs.google.com/presentation/d/1ETYLEf3qQDJrrn9NZ_WZlW-hKFEROGGN/edit?usp=sharing&ouid=117187821649266037546&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border-2 border-green-500 text-green-400 px-6 py-3 rounded-full font-medium hover:bg-green-500 hover:text-white transition-all duration-300 cyber-glow"
                  >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Presentation
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl border border-gray-700/50 flex items-center justify-center matrix-bg">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌾</div>
                    <div className="text-2xl font-bold text-white mb-2">Agric Tech Titans</div>
                    <div className="text-gray-400">Empowering Farmers Through Technology</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-600/30 rounded-full flex items-center justify-center border border-green-500/50 cyber-glow">
                  <span className="text-xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center ml-20 py-20 z-10 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-300">Ready to collaborate and create amazing solutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Let's Connect!</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  I'm always excited to discuss technology, share ideas, or explore opportunities where I can contribute my skills and passion for software development and cybersecurity.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center cyber-glow">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-400">Available on request</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center cyber-glow">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                    <p className="text-gray-400">Connect with me professionally</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center cyber-glow">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Goals</h4>
                    <p className="text-gray-400">Software Engineering Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 cyber-glow">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-gray-700/50 relative">
                  <Image
                    src="/david_danie.jpg"
                    alt="David Shan Daniel"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">David Shan Daniel</h3>
                <p className="text-gray-400 mb-6">Aspiring Cybersecurity Expert & Software Engineer</p>
                <div className="space-y-3">
                  <div className="px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30 text-purple-400">
                    Federal University of Applied Sciences, Kachia
                  </div>
                  <div className="px-4 py-2 bg-blue-600/20 rounded-full border border-blue-500/30 text-blue-400">
                    Best Graduating Student - Destiny Schools
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/90 backdrop-blur-sm border-t border-gray-800 py-8 ml-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-1">David Shan Daniel</h3>
              <p className="text-gray-400">Cybersecurity Student | Software Engineer</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-1">Ready to make a meaningful impact in technology</p>
              <p className="text-sm text-gray-500">© 2024 David Shan Daniel. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
