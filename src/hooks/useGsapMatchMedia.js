import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapMatchMedia(scopeRef, animate, deps = []) {
    useLayoutEffect(() => {
        const animationContext = gsap.context(() => {
            const motionPreference = gsap.matchMedia();

            motionPreference.add('(prefers-reduced-motion: reduce)', () => {
                gsap.set(scopeRef.current.querySelectorAll('[data-animate]'), {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    clearProps: 'transform',
                });
            });

            motionPreference.add('(prefers-reduced-motion: no-preference)', () => {
                animate(gsap, ScrollTrigger);
            });

        }, scopeRef);

        function handleWindowLoad() {
            ScrollTrigger.refresh();
        }

        window.addEventListener('load', handleWindowLoad);

        if (document.readyState === 'complete') {
            ScrollTrigger.refresh();
        }

        document.fonts.ready.then(() => {
            ScrollTrigger.refresh();
        });

        return () => {
            animationContext.revert();
            window.removeEventListener('load', handleWindowLoad);
        };
 // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}