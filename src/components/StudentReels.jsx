import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StudentReels = () => {
  // Core video states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Player references and states
  const playerRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  // UI states
  const [showControls, setShowControls] = useState(false);
  const controlsTimeoutRef = useRef(null);
  const [isMobile] = useState(() => window.innerWidth <= 768);

  // Video testimonials data
  const videoTestimonials = [
    {
      id: 1,
      name: "Dileep",
      role: "Software Developer",
      company: "Wipro",
      videoId: "XsPbphv-0H4",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 2,
      name: "Barenkala Guru Charan",
      role: "Software Tester",
      company: "Amplelogic",
      videoId: "ETOGGjsHTEo",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 3,
      name: "Archana Vusa",
      role: "Software Developer",
      company: "V&V Technologies",
      videoId: "25uxEDvDlfM",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 4,
      name: "Udhay kaitha",
      role: "Software Developer",
      company: "Multiplier Ai",
      videoId: "1PFjrhqpcQk",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 5,
      name: "Tirumala teja",
      role: "Software Developer",
      company: "Multiplier Ai",
      videoId: "jFbrJB-PEjM",
      achievement: "Secured 4 LPA Package",
    },
  ];

  // Initialize YouTube API
  useEffect(() => {
    const loadYouTubeAPI = () => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    };

    if (!window.YT) {
      loadYouTubeAPI();
    } else {
      initializePlayer();
    }

    return () => {
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
        }
    };
  }, []);

  // Initialize player for current video
  const initializePlayer = () => {
    if (!window.YT?.Player) return;

    const currentVideo = videoTestimonials[currentIndex];
    
    try {
      playerRef.current = new window.YT.Player(`youtube-player-${currentVideo.id}`, {
        videoId: currentVideo.videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          mute: 1,
        },
        events: {
          onReady: handlePlayerReady,
          onStateChange: handlePlayerStateChange,
          onError: handlePlayerError,
        },
      });
    } catch (err) {
      console.error('Error initializing player:', err);
      setError('Failed to initialize video player');
    }
  };

  // Handle player ready event
  const handlePlayerReady = (event) => {
    setIsPlayerReady(true);
    setIsLoading(false);
    event.target.mute(); // Ensure initial muted state
    setIsMuted(true);
  };

  // Handle player state changes
  const handlePlayerStateChange = (event) => {
    switch (event.data) {
      case window.YT.PlayerState.PLAYING:
          setIsPlaying(true);
        setIsLoading(false);
        break;
      case window.YT.PlayerState.PAUSED:
        setIsPlaying(false);
        break;
      case window.YT.PlayerState.ENDED:
        handleVideoEnd();
        break;
      case window.YT.PlayerState.BUFFERING:
        setIsLoading(true);
        break;
      default:
        break;
    }
  };

  // Handle player errors
  const handlePlayerError = (event) => {
    console.error('YouTube Player Error:', event.data);
    setError('Failed to play video. Please try again.');
    setIsLoading(false);
  };

  // Handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false);
    setIsMuted(true);
    const nextIndex = (currentIndex + 1) % videoTestimonials.length;
    handleVideoChange(nextIndex);
  };

  // Handle video change
  const handleVideoChange = (newIndex) => {
    setIsLoading(true);
    setCurrentIndex(newIndex);
          setIsPlaying(false);
    setIsMuted(true);

    if (playerRef.current?.loadVideoById) {
      try {
        playerRef.current.loadVideoById({
          videoId: videoTestimonials[newIndex].videoId,
          startSeconds: 0,
        });
        playerRef.current.pauseVideo();
        playerRef.current.mute();
      } catch (err) {
        console.error('Error changing video:', err);
        setError('Failed to change video');
      }
    }
  };

  // Handle play/pause
  const handlePlayPause = () => {
    if (!playerRef.current) return;

      try {
        if (isPlaying) {
        playerRef.current.pauseVideo();
        } else {
        playerRef.current.playVideo();
      }
    } catch (err) {
      console.error('Error toggling play state:', err);
      setError('Failed to control video');
    }
  };

  // Handle mute/unmute
  const handleMuteToggle = () => {
    if (!playerRef.current) return;

      try {
        if (isMuted) {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
        } else {
        playerRef.current.mute();
        }
        setIsMuted(!isMuted);
      } catch (err) {
      console.error('Error toggling mute state:', err);
    }
  };

  // Show/hide controls on interaction
  const handleInteraction = () => {
    if (isMobile) return;
    
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // Navigation dots
  const renderNavigationDots = () => (
    <div className="flex justify-center gap-2 mt-6">
      {videoTestimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => handleVideoChange(index)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
              : "bg-gray-600 w-4 hover:bg-gray-500"
          }`}
          aria-label={`Go to video ${index + 1}`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <div className="relative min-h-screen w-full flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-900 to-black">
        {/* Video Player Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 order-1 md:order-2">
          <div className="relative max-w-sm w-full">
            <motion.div
              className="relative w-full overflow-hidden rounded-3xl bg-black cursor-pointer touch-none border-2 border-blue-500/30 shadow-2xl shadow-blue-500/10"
              style={{
                aspectRatio: "9/16",
                maxHeight: "calc(100vh - 100px)",
                minHeight: "500px",
              }}
              onMouseMove={handleInteraction}
              onClick={handlePlayPause}
            >
              {/* Error Message */}
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

              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <motion.div
                    className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              )}

              {/* YouTube Player */}
              <div className="absolute inset-0">
                <div
                  id={`youtube-player-${videoTestimonials[currentIndex].id}`}
                  className="w-full h-full"
                />
              </div>

              {/* Video Controls */}
              <AnimatePresence>
                {(showControls || isMobile) && (
                  <>
                    {/* Left Arrow */}
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        const prevIndex = currentIndex === 0 ? videoTestimonials.length - 1 : currentIndex - 1;
                        handleVideoChange(prevIndex);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg 
                        className="w-6 h-6 text-orange-500 transform -translate-x-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>

                    {/* Right Arrow */}
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextIndex = (currentIndex + 1) % videoTestimonials.length;
                        handleVideoChange(nextIndex);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg 
                        className="w-6 h-6 text-orange-500 transform translate-x-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>

                    {/* Existing Play/Pause and Mute Controls */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                      className="absolute top-4 right-4 flex flex-row gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Play/Pause Button */}
                              <motion.button
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                        onClick={handlePlayPause}
                              >
                                {isPlaying ? (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                  </svg>
                                ) : (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                )}
                              </motion.button>

                      {/* Mute/Unmute Button */}
                              <motion.button
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                        onClick={handleMuteToggle}
                              >
                                {isMuted ? (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                  </svg>
                                ) : (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                  </svg>
                                )}
                              </motion.button>
                            </motion.div>
                  </>
                          )}
                        </AnimatePresence>

              {/* Video Info Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                              className="mb-4"
                            >
                              <h6 className="text-xl font-bold text-white mb-1">
                      {videoTestimonials[currentIndex].name}
                              </h6>
                              <p className="text-blue-400 font-medium text-sm">
                      {videoTestimonials[currentIndex].role} at {videoTestimonials[currentIndex].company}
                              </p>
                            </motion.div>

                            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                              className="mb-4"
                            >
                              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-md font-medium">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                      {videoTestimonials[currentIndex].achievement}
                              </span>
                            </motion.div>
                          </div>
                        </motion.div>
            </motion.div>

            {/* Navigation Dots */}
            {renderNavigationDots()}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 order-2 md:order-1">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-blue-500/30 pb-4">
              Why Join <span className="text-primary">Career Sure Academy</span>?
            </h2>
            
            <div className="space-y-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-blue-500/20 backdrop-blur-sm">
              {[
                "Industry-Driven Curriculum: Our curriculum is constantly updated to match industry requirements",
                "Expert Mentorship: Learn from industry experts with years of real-world experience",
                "100% Placement Support: Dedicated placement cell with 500+ hiring partners",
                "Practical Learning: Hands-on projects and real-world case studies",
                "Flexible Learning: Learn at your own pace with 24/7 access to course materials"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 group hover:bg-blue-500/5 p-3 rounded-lg transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300" />
                  <p className="text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudentReels;