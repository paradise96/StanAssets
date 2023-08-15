import { useEffect } from 'react';

export function useAnimate(className, reference) {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                }
            });
        });

        reference.current.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

}
export function returnHiddenEl(reference ,el) {
    return reference.current.push(el);
}


