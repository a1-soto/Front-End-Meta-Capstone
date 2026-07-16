import "./Carousel.css";
import lemon from "../../assets/images/scroll-lemon.png";
import { useRef, useState, useEffect } from "react";

const EASE_FACTOR = 0.15;
const LEMON_SIZE = 22;
const RIGHT_FADE_OFFSET = 15;
const DRAG_THRESHOLD = 5;
const STOP_THRESHOLD = 0.5;

export default function Carousel({ children }) {

    const scrollRef = useRef(null);
    const trackRef = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);
    const [lemonLeft, setLemonLeft] = useState(0);

    const [isDragging, setIsDragging] = useState(false);
    const [isLemonDragging, setIsLemonDragging] = useState(false);

    const targetScroll = useRef(0);
    const isAnimating = useRef(false);
    const rafId = useRef(null);

    const isDraggingRef = useRef(false);
    const isLemonDraggingRef = useRef(false);

    const drag = useRef({
        startX: 0,
        startTarget: 0,
        distance: 0
    });

    const lemonDrag = useRef({
        startX: 0,
        startTarget: 0
    });


    function getTrackTravel() {
        if (!trackRef.current) return 0;

        return trackRef.current.offsetWidth - LEMON_SIZE;
    }

    useEffect(() => {

        const container = scrollRef.current;

        function checkScroll() {

            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;
            const maxScroll = scrollWidth - clientWidth;

            const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
            const travel = getTrackTravel();

            setLemonLeft((progress / 100) * travel);

            setShowLeft(scrollLeft > 0);
            setShowRight(scrollLeft + clientWidth < scrollWidth - RIGHT_FADE_OFFSET);

            if (!isAnimating.current && !isDraggingRef.current && !isLemonDraggingRef.current) {
                targetScroll.current = scrollLeft;
            }
        }

        checkScroll();

        container.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);

        return () => {
            container.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };

    }, []);

    function startEasingLoop() {

        if (rafId.current) return;

        function animate() {

            const container = scrollRef.current;
            if (!container) return;

            isAnimating.current = true;

            const current = container.scrollLeft;
            const target = targetScroll.current;
            const diff = target - current;

            if (Math.abs(diff) < STOP_THRESHOLD) {
                container.scrollLeft = target;
                isAnimating.current = false;
                rafId.current = null;
                return;
            }

            container.scrollLeft = current + diff * EASE_FACTOR;

            rafId.current = requestAnimationFrame(animate);
        }

        rafId.current = requestAnimationFrame(animate);
    }

    function getMaxScroll() {
        const container = scrollRef.current;
        return container.scrollWidth - container.clientWidth;
    }

    function handleMouseDown(e) {
        e.preventDefault();


        scrollRef.current.focus();

        setIsDragging(true);
        isDraggingRef.current = true;

        drag.current.startX = e.pageX;
        drag.current.startTarget = targetScroll.current;
        drag.current.distance = 0;
    }

    function handleMouseMove(e) {
        if (!isDraggingRef.current) return;

        const maxScroll = getMaxScroll();

        const distance = e.pageX - drag.current.startX;
        drag.current.distance = Math.abs(distance);

        let newTarget = drag.current.startTarget - distance;
        newTarget = Math.max(0, Math.min(maxScroll, newTarget));

        targetScroll.current = newTarget;
        startEasingLoop();
    }

    function handleMouseUp(e) {
        setIsDragging(false);
        isDraggingRef.current = false;

        if (drag.current.distance > DRAG_THRESHOLD) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    function handleMouseLeave() {
        setIsDragging(false);
        isDraggingRef.current = false;
    }

    function handleLemonMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();

        setIsLemonDragging(true);
        isLemonDraggingRef.current = true;

        lemonDrag.current.startX = e.pageX;
        lemonDrag.current.startTarget = targetScroll.current;
    }

    function handleTrackClick(e) {

        if (e.target.closest(".carousel-progress-lemon")) return;

        const maxScroll = getMaxScroll();
        const track = trackRef.current;

        const trackRect = track.getBoundingClientRect();
        const clickX = e.clientX - trackRect.left;

        const travel = getTrackTravel();

        const adjustedClickX = clickX - LEMON_SIZE / 2;
        const clampedX = Math.max(0, Math.min(travel, adjustedClickX));
        const progress = travel > 0 ? clampedX / travel : 0;

        const newTarget = progress * maxScroll;

        targetScroll.current = newTarget;
        startEasingLoop();
    }

    function handleKeyDown(e) {
        const maxScroll = getMaxScroll();
        const step = 300;

        if (e.key === "ArrowRight") {
            e.preventDefault();
            targetScroll.current = Math.min(maxScroll, targetScroll.current + step);
            startEasingLoop();
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            targetScroll.current = Math.max(0, targetScroll.current - step);
            startEasingLoop();
        }
    }

    useEffect(() => {

        if (!isLemonDragging) return;

        function handleWindowMouseMove(e) {
            const maxScroll = getMaxScroll();


            const travel = getTrackTravel();

            const deltaPx = e.pageX - lemonDrag.current.startX;
            const scrollDelta = travel > 0 ? (deltaPx / travel) * maxScroll : 0;

            let newTarget = lemonDrag.current.startTarget + scrollDelta;
            newTarget = Math.max(0, Math.min(maxScroll, newTarget));

            targetScroll.current = newTarget;
            startEasingLoop();
        }

        function handleWindowMouseUp() {
            setIsLemonDragging(false);
            isLemonDraggingRef.current = false;
        }

        window.addEventListener("mousemove", handleWindowMouseMove);
        window.addEventListener("mouseup", handleWindowMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleWindowMouseMove);
            window.removeEventListener("mouseup", handleWindowMouseUp);
        };

    }, [isLemonDragging]);

    return (

        <div className="carousel">

            {showLeft && <div className="carousel-gradient-left" />}

            <div
                className={`carousel-scroll ${isDragging ? "dragging" : ""}`}
                ref={scrollRef}
                tabIndex={0}
                role="region"
                aria-roledescription="carousel"
                aria-label="This week's specials"
                onKeyDown={handleKeyDown}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onClickCapture={(e) => {
                    if (drag.current.distance > DRAG_THRESHOLD) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }}
            >
                {children}
            </div>

            {showRight && <div className="carousel-gradient-right" />}

            <div className="carousel-progress" aria-hidden="true">
                <div className="carousel-progress-track" ref={trackRef} onClick={handleTrackClick}>
                    <div
                        className={`carousel-progress-lemon ${isLemonDragging ? "dragging" : ""}`}
                        style={{ left: `${lemonLeft}px` }}
                        onMouseDown={handleLemonMouseDown}
                    >
                        {/*  🍋 */}   <img
                            src={lemon}
                            alt="Scroll position indicator"
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}