import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [
            project1Ref.current,
            project2Ref.current,
            project3Ref.current,
        ];

        projects.forEach((project, index) => {
            gsap.fromTo(
                project,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: 'top bottom-=100',
                    },
                }
            );
        });

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            id="work"
            className="scroll-mt-20 app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <a
                            href="https://shafeeque27.github.io/movie-explorer/"
                            className="no-underline">
                            <div className="image-wrapper">
                                <img src="images/project1.png" alt="Ryde" />
                            </div>
                        </a>
                        <div className="text-content">
                            <h2>
                                Movie Explorer - Discover and Search Movies
                                Instantly
                            </h2>
                            <p className="text-white-50 md: text-xl">
                                Movie Explorer is a React-based web application
                                that allows users to explore trending movies and
                                search for their favorite films. Built using
                                Vite, TailwindCSS, Appwrite, and TMDB API, this
                                app provides a seamless and efficient movie
                                discovery experience.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img
                                    src="/images/project2.png"
                                    alt="Library Management"
                                />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img
                                    src="/images/project3.png"
                                    alt="YC Directory"
                                />
                            </div>
                            <h2>YC Directory - A Startup Showcase App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
