"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ParticleButton } from "../components/ui/particle-button";

export default function Home() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set target date (30 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setShowSuccess(true);
      setEmail("");
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 min-h-[80vh] flex items-center justify-center py-4 sm:py-6 lg:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="hero flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
            
            {/* Left Content */}
            <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-accent">Coming Soon</span>
              </div>

              {/* Main Title */}
              <div className="space-y-3">
                <h1 className="font-black text-heading leading-tight tracking-tight"
                    style={{
                      fontSize: 'clamp(1.75rem, 4.5vw, 4rem)',
                      lineHeight: '1.1',
                      textWrap: 'balance'
                    }}>
                  <span className="block text-heading">Discover Your Ideal Living</span>
                  <span className="block text-heading">Space Today</span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
                   style={{ lineHeight: '1.5', textWrap: 'balance' }}>
                  Find PGs, Flats, and Compatible Roommates – 
                  <span className="font-semibold text-accent"> Powered by AI</span>
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <div className="text-sm font-medium text-foreground/70 text-center lg:text-left">
                  Launching in:
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-4">
                  {/* Days */}
                  <div className="flex flex-col items-center bg-card-bg/50 backdrop-blur-sm border border-accent/20 rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[70px]">
                    <span className="text-xl sm:text-2xl font-bold text-accent">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="text-xs text-foreground/60 uppercase tracking-wide">Days</span>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex flex-col items-center bg-card-bg/50 backdrop-blur-sm border border-primary/20 rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[70px]">
                    <span className="text-xl sm:text-2xl font-bold text-primary">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-xs text-foreground/60 uppercase tracking-wide">Hours</span>
                  </div>
                  
                  {/* Minutes */}
                  <div className="flex flex-col items-center bg-card-bg/50 backdrop-blur-sm border border-highlight/20 rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[70px]">
                    <span className="text-xl sm:text-2xl font-bold text-highlight">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-xs text-foreground/60 uppercase tracking-wide">Mins</span>
                  </div>
                  
                  {/* Seconds */}
                  <div className="flex flex-col items-center bg-card-bg/50 backdrop-blur-sm border border-accent/20 rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[70px]">
                    <span className="text-xl sm:text-2xl font-bold text-accent animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-xs text-foreground/60 uppercase tracking-wide">Secs</span>
                  </div>
                </div>
              </div>
              
              {/* Feature highlights */}
              <div className="flex flex-wrap sm:flex-nowrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-accent/10 backdrop-blur-sm border border-accent/20 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-full hover:bg-accent/20 transition-all duration-300 whitespace-nowrap">
                  <span className="text-accent">🤖</span>
                  <span className="text-xs sm:text-sm font-medium text-accent">AI-Powered</span>
                </div>
                
                <div className="flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-full hover:bg-primary/20 transition-all duration-300 whitespace-nowrap">
                  <span className="text-primary">🏠</span>
                  <span className="text-xs sm:text-sm font-medium text-primary">Smart Matching</span>
                </div>
                
                <div className="flex items-center space-x-2 bg-highlight/10 backdrop-blur-sm border border-highlight/20 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-full hover:bg-highlight/20 transition-all duration-300 whitespace-nowrap">
                  <span className="text-highlight">⭐</span>
                  <span className="text-xs sm:text-sm font-medium text-highlight">Premium Quality</span>
                </div>
                
                <div className="flex items-center space-x-2 bg-accent/10 backdrop-blur-sm border border-accent/20 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-full hover:bg-accent/20 transition-all duration-300 whitespace-nowrap">
                  <span className="text-accent">💡</span>
                  <span className="text-xs sm:text-sm font-medium text-accent">Innovation</span>
                </div>
              </div>

            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center lg:justify-end max-w-lg lg:max-w-none">
              <div className="relative group w-full max-w-xs sm:max-w-sm lg:max-w-md">
                {/* Main Image Container */}
                <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl blur-3xl opacity-50"></div>
                  <Image
                    src="/hero-pic.png"
                    alt="AI-Powered Room and Roommate Matching Platform"
                    width={450}
                    height={450}
                    className="relative w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10"
                    style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))' }}
                    priority
                  />
                </div>
                
                {/* Floating Elements - Arranged in square formation with labels */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 flex items-center space-x-1 sm:space-x-2 group-hover:animate-bounce transition-all duration-500">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg">AI-Powered</span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-sm sm:text-base">🤖</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -right-4 sm:-bottom-4 sm:-right-8 flex items-center space-x-1 sm:space-x-2 group-hover:animate-bounce transition-all duration-500 delay-100">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg">Innovation</span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-sm sm:text-base">💡</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -left-4 sm:-bottom-4 sm:-left-8 flex items-center space-x-1 sm:space-x-2 group-hover:animate-bounce transition-all duration-500 delay-200">
                  <span className="text-xs font-medium text-highlight bg-highlight/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg">Premium</span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-highlight to-highlight/80 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-sm sm:text-base">⭐</span>
                  </div>
                </div>
                
                <div className="absolute -top-2 -left-4 sm:-top-4 sm:-left-8 flex items-center space-x-1 sm:space-x-2 group-hover:animate-bounce transition-all duration-500 delay-300">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg">Smart Home</span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-sm sm:text-base">🏠</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Feature Preview Section */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading">
                Key Features
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Discover what makes our platform the smartest choice for finding your perfect living space and roommate
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* PG & Flat Listings */}
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-heading">PG & Flat Listings</h3>
                  <p className="text-foreground/70">Verified accommodations in your city</p>
                </div>
              </div>

              {/* AI Matchmaking */}
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    <circle cx="17" cy="4" r="1" fill="currentColor"/>
                    <circle cx="17" cy="8" r="1" fill="currentColor"/>
                    <circle cx="17" cy="12" r="1" fill="currentColor"/>
                    <circle cx="17" cy="16" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-heading">AI Matchmaking</h3>
                  <p className="text-foreground/70">Personalized roommate matching using AI</p>
                </div>
              </div>

              {/* Secure Connect */}
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 bg-highlight/10 rounded-2xl flex items-center justify-center group-hover:bg-highlight/20 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-highlight" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-4 1-1-4 .257-.257A6 6 0 1118 8zm-6-2a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-heading">Secure Connect</h3>
                  <p className="text-foreground/70">Chat before finalizing your stay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Subscription Section */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-heading">
                Be the First to Know
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Get notified when we launch and be among the first to experience AI-powered room and roommate matching.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 px-6 bg-card-bg border-2 border-accent/20 rounded-full text-foreground placeholder-foreground/60 focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                </div>
                <ParticleButton 
                  type="submit"
                  size="default"
                  className="h-12 px-8 bg-primary border-2 border-primary text-white font-semibold rounded-full hover:bg-primary/90 hover:border-primary/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95 whitespace-nowrap"
                  onSuccess={() => console.log('Email submitted with particles!')}
                >
                  Notify Me
                </ParticleButton>
              </form>
              
              {/* Success Message */}
              <div className={`mt-4 p-4 bg-accent/10 border border-accent/20 rounded-xl transition-all duration-300 ${showSuccess ? 'block' : 'hidden'}`}>
                <p className="text-accent font-medium">
                  Thanks! We'll keep you updated.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-6 pt-4 text-sm text-foreground/60">
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-background py-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex justify-center">
            <div className="flex items-center space-x-6">
              {/* Instagram */}
              <a
                href="#"
                className="group w-12 h-12 bg-card-bg border border-foreground/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6 text-foreground/70 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group w-12 h-12 bg-card-bg border border-foreground/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Connect with us on LinkedIn"
              >
                <svg className="w-6 h-6 text-foreground/70 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                className="group w-12 h-12 bg-card-bg border border-foreground/10 rounded-full flex items-center justify-center hover:bg-black hover:border-black transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on X"
              >
                <svg className="w-5 h-5 text-foreground/70 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-foreground/10 py-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright Text */}
            <div className="text-center md:text-left">
              <p className="text-sm text-foreground/70">
                © 2025 ApanaGhr. Built with ❤️ in India.
              </p>
            </div>
            
            {/* Footer Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Privacy
              </a>
              <span className="text-foreground/30">|</span>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Terms
              </a>
              <span className="text-foreground/30">|</span>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
