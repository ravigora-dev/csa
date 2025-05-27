import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StudentReels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const containerRef = useRef(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const playerRefs = useRef([]);
  const [playerReady, setPlayerReady] = useState(false);
  const [error, setError] = useState(null);
  const [showControls, setShowControls] = useState(false);
  const controlsTimeoutRef = useRef(null);
  const dragTimeoutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  // Check if device is mobile and handle visibility
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          // Pause video when not visible
          const currentPlayer = playerRefs.current[currentIndex];
          if (currentPlayer?.pauseVideo) {
            currentPlayer.pauseVideo();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, [currentIndex]);

  // Updated video testimonials with relevant data structure
  const videoTestimonials = [
    {
      id: 1,
      name: "Dileep",
      role: "Software Developer",
      company: "Wipro",
      videoUrl: "https://www.youtube.com/embed/XsPbphv-0H4",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 2,
      name: "Barenkala Guru Charan",
      role: "Software Tester",
      company: "Amplelogic",
      videoUrl: "https://www.youtube.com/embed/ETOGGjsHTEo",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 3,
      name: "Archana Vusa",
      role: "Software Developer",
      company: "V&V Technologies",
      videoUrl: "https://www.youtube.com/embed/25uxEDvDlfM",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 4,
      name: "Udhay kaitha",
      role: "Software Developer",
      company: "Multiplier Ai",
      videoUrl: "https://www.youtube.com/embed/1PFjrhqpcQk",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 5,
      name: "Tirumala teja",
      role: "Software Developer",
      company: "Multiplier Ai",
      videoUrl: "https://www.youtube.com/embed/jFbrJB-PEjM",
      achievement: "Secured 4 LPA Package",
    },
  ];

  // Initialize YouTube API
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setPlayerReady(true);
    };

    return () => {
      playerRefs.current.forEach((player) => {
        if (player?.destroy) {
          player.destroy();
        }
      });
    };
  }, []);

  // Effect to handle video changes
  useEffect(() => {
    if (!playerReady || !isVisible) return;

    setIframeLoading(true);
    setError(null);

    // Pause all other videos
    playerRefs.current.forEach((player, index) => {
      if (index !== currentIndex && player?.pauseVideo) {
        player.pauseVideo();
      }
    });

    // Reset mute state for new video
    setIsMuted(true);

    // Play current video only if user has interacted
    const currentPlayer = playerRefs.current[currentIndex];
    if (currentPlayer?.playVideo && hasInteracted) {
      const playTimer = setTimeout(() => {
        try {
          currentPlayer.playVideo();
          currentPlayer.mute(); // Ensure new video starts muted
          setIsPlaying(true);
        } catch (err) {
          console.error('Error playing video:', err);
          setError('Failed to play video. Please try again.');
        }
      }, 100);
      return () => clearTimeout(playTimer);
    }
  }, [currentIndex, playerReady, isVisible, hasInteracted]);

  // Show/hide controls on touch/mouse move
  const handleInteraction = useCallback(() => {
    if (!isMobile) {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  }, [isMobile]);

  // Handle touch start with controls
  const handleTouchStart = useCallback((e) => {
    if (e.touches.length === 1) {
      const target = e.target;
      const isControl = target.closest('.video-controls');
      
      if (!isControl) {
        setIsDragging(true);
        setStartY(e.touches[0].clientY);
        setCurrentY(e.touches[0].clientY);
        
        const currentPlayer = playerRefs.current[currentIndex];
        if (currentPlayer?.pauseVideo) {
          currentPlayer.pauseVideo();
          setIsPlaying(false);
        }
      }
    }
  }, [currentIndex]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const currentPosition = e.touches[0].clientY;
    setCurrentY(currentPosition);
  }, [isDragging]);

  const handleTouchEnd = useCallback((e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = currentY - startY;
    const threshold = 50;

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      } else if (dragDistance < 0 && currentIndex < videoTestimonials.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (dragDistance > 0 && currentIndex === 0) {
        setCurrentIndex(videoTestimonials.length - 1);
      } else if (dragDistance < 0 && currentIndex === videoTestimonials.length - 1) {
        setCurrentIndex(0);
      }
    }

    setCurrentY(startY);
  }, [isDragging, currentY, startY, currentIndex, videoTestimonials.length]);

  // Toggle play/pause on video click
  const handleVideoClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setHasInteracted(true);
    const currentPlayer = playerRefs.current[currentIndex];
    if (currentPlayer) {
      try {
        if (isPlaying) {
          currentPlayer.pauseVideo();
        } else {
          currentPlayer.playVideo();
        }
        setIsPlaying(!isPlaying);
      } catch (err) {
        console.error('Error toggling play/pause:', err);
        setError('Failed to control video. Please try again.');
      }
    }
  }, [currentIndex, isPlaying]);

  // Toggle mute state
  const handleMuteToggle = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setHasInteracted(true);
    const currentPlayer = playerRefs.current[currentIndex];
    if (currentPlayer) {
      try {
        if (isMuted) {
          currentPlayer.unMute();
          currentPlayer.setVolume(100);
        } else {
          currentPlayer.mute();
        }
        setIsMuted(!isMuted);
      } catch (err) {
        console.error('Error toggling mute:', err);
      }
    }
  }, [currentIndex, isMuted]);

  // Handle video end
  const handleVideoEnd = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videoTestimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIframeLoading(true);
    setIsMuted(true); // Reset mute state when video ends
  }, [videoTestimonials.length]);

  // Add event listeners for touch
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleInteraction, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleInteraction);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleInteraction, handleTouchEnd]);

  // Animation variants for consistent animations
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  };

  // Variants for text/badge entrance
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } },
  };

  // Variants for stats block highlight
  const statVariants = {
    initial: { scale: 1, borderColor: "rgba(255, 255, 255, 0.1)" },
    active: {
      scale: 1.02,
      borderColor: "rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
    inactive: {
      scale: 1,
      borderColor: "rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  // Add why join points
  const whyJoinPoints = [
    {
      id: 1,
      point: "Industry-Driven Curriculum: Our curriculum is constantly updated to match industry requirements and latest technologies",
    },
    {
      id: 2,
      point: "Expert Mentorship: Learn from industry experts with years of real-world experience",
    },
    {
      id: 3,
      point: "100% Placement Support: Dedicated placement cell with 500+ hiring partners",
    },
    {
      id: 4,
      point: "Practical Learning: Hands-on projects and real-world case studies",
    },
    {
      id: 5,
      point: "Flexible Learning: Learn at your own pace with 24/7 access to course materials",
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden relative"
      ref={containerRef}
      onMouseMove={handleInteraction}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Diagonal Line Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #ffffff1a 8%, transparent 8%, transparent 92%, #ffffff1a 92%), linear-gradient(-45deg, #ffffff1a 8%, transparent 8%, transparent 92%, #ffffff1a 92%)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen w-full flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-900 to-black">
        {/* Left Section - Why Join */}
        <div className="w-full md:w-1/2 p-6 md:p-8 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-blue-500/30 pb-4">
              Why Join <span className="text-primary">Career Sure Academy</span> ?
            </h2>
            
            <div className="space-y-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-blue-500/20 backdrop-blur-sm">
              {whyJoinPoints.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex items-start space-x-3 group hover:bg-blue-500/5 p-3 rounded-lg transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.id * 0.1 }}
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Section - Video Player */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 order-1 md:order-2">
          <div className="relative max-w-sm w-full">
            <motion.div
              ref={containerRef}
              className="relative w-full overflow-hidden rounded-3xl bg-black cursor-pointer touch-none border-2 border-blue-500/30 shadow-2xl shadow-blue-500/10"
              style={{
                aspectRatio: "9/16",
                maxHeight: "calc(100vh - 100px)",
                minHeight: "500px",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={handleVideoClick}
            >
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-4 left-4 right-4 bg-red-500/90 text-white p-3 rounded-lg text-sm"
                >
                  {error}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setError(null);
                    }}
                    className="absolute top-2 right-2 text-white hover:text-gray-200"
                  >
                    ×
                  </button>
                </motion.div>
              )}

              {iframeLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <motion.div
                    className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              )}

              <AnimatePresence mode="wait">
                {videoTestimonials.map((testimonial, index) => {
                  if (index !== currentIndex) return null;

                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <div className="relative w-full h-full">
                        <motion.iframe
                          key={testimonial.id}
                          id={`youtube-player-${testimonial.id}`}
                          src={`${testimonial.videoUrl}?enablejsapi=1&origin=${window.location.origin}&playsinline=1&rel=0&autoplay=0&mute=1&controls=0&modestbranding=1`}
                          title={`${testimonial.name}'s Success Story`}
                          className={`w-full h-full object-cover ${
                            iframeLoading ? "opacity-0" : "opacity-100"
                          } transition-opacity duration-500`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          onLoad={() => {
                            setIframeLoading(false);
                            if (!playerRefs.current[index] && window.YT?.Player) {
                              try {
                                playerRefs.current[index] = new window.YT.Player(`youtube-player-${testimonial.id}`, {
                                  events: {
                                    'onReady': (event) => {
                                      if (isPlaying && hasInteracted) {
                                        event.target.playVideo();
                                        event.target.mute(); // Ensure new video starts muted
                                      }
                                      setIsPlayerReady(true);
                                    },
                                    'onStateChange': (event) => {
                                      const playerState = event.data;
                                      if (playerState === window.YT.PlayerState.PLAYING) {
                                        setIsPlaying(true);
                                      } else if (playerState === window.YT.PlayerState.PAUSED || 
                                               playerState === window.YT.PlayerState.ENDED) {
                                        setIsPlaying(false);
                                      }
                                      if (playerState === window.YT.PlayerState.ENDED) {
                                        handleVideoEnd();
                                      }
                                    },
                                    'onError': (event) => {
                                      console.error('YouTube Player Error:', event.data);
                                      setError('Failed to load video. Please try again.');
                                    }
                                  },
                                });
                              } catch (err) {
                                console.error('Error creating YouTube player:', err);
                                setError('Failed to initialize video player. Please refresh the page.');
                              }
                            }
                          }}
                        />

                        {/* Play/Pause and Mute Controls */}
                        <AnimatePresence>
                          {(showControls || isMobile) && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute top-4 right-4 flex flex-row gap-2 video-controls"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <motion.button
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center touch-manipulation active:scale-95 transition-transform"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleVideoClick(e);
                                }}
                              >
                                {isPlaying ? (
                                  <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                )}
                              </motion.button>
                              <motion.button
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center touch-manipulation active:scale-95 transition-transform"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleMuteToggle(e);
                                }}
                              >
                                {isMuted ? (
                                  <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                  </svg>
                                )}
                              </motion.button>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Content Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={contentVariants}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <motion.div
                              className="mb-4"
                              variants={contentVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              <h6 className="text-2xl font-bold text-white mb-1">
                                {testimonial.name}
                              </h6>
                              <p className="text-blue-400 font-medium">
                                {testimonial.role} at {testimonial.company}
                              </p>
                            </motion.div>

                            <motion.div
                              className="mb-4"
                              variants={contentVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              transition={{ delay: 0.1 }}
                            >
                              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm font-medium">
                                <svg
                                  className="w-4 h-4 mr-2"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {testimonial.achievement}
                              </span>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* Video Navigation */}
            <motion.div
              className="flex justify-center gap-2 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                      : "bg-gray-600 w-4 hover:bg-gray-500"
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default StudentReels;