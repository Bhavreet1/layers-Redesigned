import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Preloader = ({ onFinish = () => { } }) => {
    const [step, setStep] = useState(1);
    const [userInteracted, setUserInteracted] = useState(false);
    const audioRef = useRef(null);
    const flashupAudioRef = useRef(null);

    // Handle user interaction with CHAOS text
    const handleChaosClick = () => {
        if (!userInteracted) {
            setUserInteracted(true);
            // Start background music after user interaction
            if (audioRef.current) {
                audioRef.current.volume = 0.3;
                // Small delay to ensure audio context is ready
                setTimeout(() => {
                    if (audioRef.current) {
                        audioRef.current.play().catch(error => {
                            // Audio play failed silently
                        });
                    }
                }, 100);
            }
        }
    };

    useEffect(() => {
        let timeout;

        if (userInteracted && step === 1) {
            // Move to step 2 after user clicks

            timeout = setTimeout(() => {
                setStep(2);
            }, 800);
        } else if (step === 2) {
            // Move to step 3 after video plays

            timeout = setTimeout(() => {
                setStep(3);
            }, 4000); // 3.2 seconds for video
        } else if (step === 3) {
            // Finish after final reveal

            timeout = setTimeout(() => {
                // Fade out music before finishing
                if (audioRef.current && !audioRef.current.paused) {
                    const fadeOut = setInterval(() => {
                        if (audioRef.current && audioRef.current.volume > 0.1) {
                            audioRef.current.volume -= 0.1;
                        } else {
                            if (audioRef.current) {
                                audioRef.current.pause();
                            }
                            clearInterval(fadeOut);
                        }
                    }, 200);
                }
                setTimeout(() => {
                    if (onFinish && typeof onFinish === 'function') {
                        onFinish();
                    }
                }, 500);
            }, 5000); // 5 seconds for final reveal
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [userInteracted, step, onFinish]);

    return (
        <div className="fixed top-0 left-0 w-full h-screen select-none bg-black text-white flex items-center justify-center z-50 overflow-hidden">
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="chaos-text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center"
                    >
                        <motion.h1
                            className="text-6xl md:text-[7rem] font-bold tracking-[0.3em] font-[Zumme] mb-4 cursor-pointer select-none"
                            onClick={handleChaosClick}
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.8, 1, 0.8]
                            }}
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            CHAO<span className='text-blue-600'>S</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-lg text-gray-300 tracking-wide mb-4"
                        >
                            Unleashing the experience...
                        </motion.p>

                        {/* Click indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="flex items-center justify-center space-x-2"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-2 h-2 bg-blue-400 rounded-full"
                            />
                            <motion.span
                                animate={{
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-sm text-blue-400 font-medium tracking-wider"
                            >
                                Click to continue
                            </motion.span>

                        </motion.div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="video"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <motion.video
                            src="./Layers - Thought Over Design_1.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover shadow-2xl"
                            animate={{
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                scale: { duration: 2, ease: "easeInOut", repeat: Infinity }
                            }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-2xl border-4 border-blue-500"
                            animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="final-reveal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* ANARC Text with Zoom Effect */}
                        <motion.h2
                            className="text-xl md:text-[6rem] font-bold tracking-[0.2em] font-[Zumme] text-blue-600 relative z-20"
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{
                                scale: [1, 2.5, 100],
                                opacity: [1, 1, 0]
                            }}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                times: [0, 0.3, 1]
                            }}
                        >
                            A N <span className='text-white'>A</span> R C
                        </motion.h2>

                        {/* Smooth fade transition */}
                        <motion.div
                            className="absolute inset-0 bg-white z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 2,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Home Preview Content */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center z-15 bg-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5, duration: 0.8 }}
                        >
                            <div className="text-center text-gray-800">
                                {/* Logo Preview */}
                                <motion.div
                                    className="flex items-center justify-center mb-8"
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 2.8, duration: 0.8 }}
                                    onAnimationStart={() => {
                                        // Play flashup audio 1 second after logo animation starts
                                        setTimeout(() => {
                                            if (flashupAudioRef.current) {
                                                flashupAudioRef.current.volume = 0.6;
                                                flashupAudioRef.current.play().catch(error => {
                                                    // Flashup audio failed silently
                                                });
                                            }
                                        }, 3100);
                                    }}
                                >
                                    <video
                                        src="./Layers - Thought Over Design White.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="h-16 w-16 rounded-lg object-cover mr-3"
                                    />
                                    <span className="text-4xl -translate-x-6 font-bold font-[Aeonic] text-black tracking-[.3rem]">
                                        ayers
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, -100]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>

            {/* Background Music */}
            <audio
                ref={audioRef}
                preload="auto"
            >
                <source src="/sound/dark-engine-logo.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Flashup Audio for Layers Logo */}
            <audio
                ref={flashupAudioRef}
                preload="auto"
            >
                <source src="/sound/new-noti.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default Preloader;
