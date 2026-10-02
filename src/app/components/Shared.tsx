import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import heroVideo from "../../imports/Hero-video-1.mp4"
import jyskVideo from "../../imports/Jysk.mp4"
import slippersVideo from "../../imports/Slippers.MP4?url"
import q36Video from "../../imports/Q36.mp4"
import desenioVideo from "../../imports/Desenio-Campaign-web.mp4"
import knittingVideo from "../../imports/Knitting-web.mp4"
import eventMarketing3Video from "../../imports/Event-Marketing-3-Figma-Make.mp4"
import borkopIntroPoster from "../../imports/BC-REKLAMEFILM.png"
import desenioPoster from "../../imports/Desenio-Campaign.png"
import jyskPoster from "../../imports/Jysk.png"
import knittingPoster from "../../imports/Knitting.png"
import slippersPoster from "../../imports/Slippers.png"
import q36Poster from "../../imports/Q36.png"
import eventMarketing1Poster from "../../imports/Event-marketing-1.png"
import eventMarketing2Poster from "../../imports/Event-marketing-2.png"
import eventMarketing3Poster from "../../imports/Event-marketing-3.png"

export function Header() {
  const { pathname } = useLocation()
  const activeSection =
    pathname === "/" ? "/" : pathname === "/contact" ? "/contact" : "/my-work"
  return (
    <header
      className="h-[104.13px] border-b-[1.602px] border-[#ddd3c7] bg-[#f7f3ee]"
      data-name="Nav"
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between pl-[109.206px] pr-[110.899px]">
        <Link
          to="/"
          className="font-['Lora:Medium_Italic'] text-[27.09px] font-medium italic leading-[40.85px] tracking-[1.634px] whitespace-nowrap text-[#2c1f17]"
        >
          NICOLINE SØE LARSEN
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-[51.262px]"
        >
          {[
            { to: "/", label: "HOME" },
            { to: "/my-work", label: "MY WORK" },
            { to: "/contact", label: "CONTACT" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={`border-b-[1.602px] pb-[3.204px] text-[16.931px] leading-[26.432px] tracking-[3.172px] whitespace-nowrap ${
                activeSection === to
                  ? "border-[#4a3728] font-['Outfit:Medium'] font-medium text-[#4a3728]"
                  : "border-transparent font-['Outfit:Regular'] font-normal text-[#7a6558]"
              }`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer
      className="h-[308.148px] bg-[#7a6558] text-white"
      data-name="Footer"
    >
      <div className="relative mx-auto h-full max-w-[1280px] overflow-clip">
        <div className="absolute top-[52.487px] left-[46.561px] grid h-[172.698px] w-[1187.725px] grid-cols-[391.111px_328.466px_314.074px_154.074px]">
          <div className="relative">
            <Link
              to="/"
              className="absolute top-[22.011px] left-[13.545px] font-['Lora:Italic'] text-[20.317px] italic leading-[normal] whitespace-nowrap text-[#f7f3ee]"
            >
              NICOLINE SØE LARSEN
            </Link>
            <div
              className="handwriting absolute top-[62.646px] left-[42.328px] w-[153.228px] text-center text-[20.317px] leading-[normal] whitespace-nowrap text-[#f7f3ee]"
              data-font-pending="Nicolines Handskrift"
            >
              <p>made by</p>
              <p>Nicoline Søe Larsen</p>
            </div>
          </div>
          <div className="pt-[28.783px]">
            <p className="text-[13.545px] leading-[12.698px] tracking-[2.032px] text-[#ddd3c7] uppercase">
              navigate
            </p>
            <nav
              aria-label="Footer navigation"
              className="mt-[11.852px] flex flex-col text-[13.545px] leading-[33.862px]"
            >
              <Link to="/">Home</Link>
              <Link to="/my-work">My Work</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <div className="pt-[28.783px]">
            <p className="text-[13.545px] leading-[12.698px] tracking-[2.032px] text-[#ddd3c7] uppercase">
              Contact
            </p>
            <div className="mt-[11.852px] flex flex-col text-[13.545px] leading-[33.862px]">
              <a href="mailto:nicoline944@gmail.com">nicoline944@gmail.com</a>
              <a href="tel:+4542576057">+45 42576057</a>
            </div>
          </div>
          <div className="relative pt-[28.783px]">
            <p className="pl-[11.852px] text-[13.545px] leading-[12.698px] tracking-[2.032px] text-[#ddd3c7] uppercase">
              follow
            </p>
            <div className="absolute top-[53.333px] flex h-[45.714px] items-center gap-[28.783px]">
              <a
                href="https://www.instagram.com/soeeknitwear/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="relative size-[33.862px]"
              >
                <picture className="block size-full">
                  <source media="(width < 1024px)" srcSet="/portfolio/assets/e80ae.svg" />
                  <img
                    src="/portfolio/assets/bbe9b.svg"
                    alt="Instagram"
                    className="size-full"
                  />
                </picture>
              </a>
              <a
                href="https://www.linkedin.com/in/nicoline-larsen-44a7a2234/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="relative size-[33.862px]"
              >
                <picture className="block size-full">
                  <source media="(width < 1024px)" srcSet="/portfolio/assets/6212a.svg" />
                  <img
                    src="/portfolio/assets/111f6.svg"
                    alt="LinkedIn"
                    className="size-full"
                  />
                </picture>
              </a>
            </div>
            <div className="absolute top-[103.28px] -left-[6.772px] flex gap-[16.085px] text-center text-[10.159px] leading-[normal]">
              <a
                href="https://www.instagram.com/soeeknitwear/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[46.561px]"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/nicoline-larsen-44a7a2234/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[46.561px]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <picture className="contents">
          <source media="(width < 1024px)" srcSet="/portfolio/assets/ee27f.svg" />
          <img
            src="/portfolio/assets/dc855.svg"
            alt=""
            className="absolute top-[242.963px] left-[36.402px] h-[0.847px] w-[1207.196px]"
          />
        </picture>
        <p className="absolute top-[257.354px] left-[36.402px] text-[13.545px] leading-[33.862px] text-[#ddd3c7]">
          © 2026 NICOLINE SØE LARSEN
          <span className="max-[1024px]:hidden">. All rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}

export function ReturnButton({ to }: { to: string }) {
  return (
    <Link
      to={to}
      aria-label="Go back"
      className="relative flex w-[173px] items-center gap-[7px] overflow-clip border border-[#7a6558] bg-[#fcf9f5] px-[19px] py-[17px]"
      data-name="Return btn"
    >
      <img
        src="/portfolio/assets/1f0c2.svg"
        alt=""
        className="h-[7.36px] w-[37px] shrink-0 rotate-180"
      />
      <span className="font-['Outfit:Regular'] text-[16px] leading-[15px] tracking-[2.4px] whitespace-nowrap text-[#4a3728]">
        GO BACK
      </span>
    </Link>
  )
}

export function ReturnSection({ to }: { to: string }) {
  return (
    <div
      className="h-[102.43px] pt-[24.87px] pl-[calc(8.33%+2.33px)]"
      data-name="Return section"
    >
      <ReturnButton to={to} />
    </div>
  )
}

export function RegularButton({
  children,
  to,
  href,
  className = "",
}: {
  children: ReactNode
  to?: string
  href?: string
  className?: string
}) {
  const classes = `inline-flex items-end overflow-clip border-[1.099px] border-[#7a6558] bg-[#fcf9f5] px-[19px] py-[17px] font-['Outfit:Regular'] text-[16px] leading-[normal] tracking-[3px] whitespace-nowrap text-[#4a3728] ${className}`
  if (href)
    return (
      <a
        className={classes}
        data-name="Regular btn"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title="View the supplied website design"
      >
        {children}
      </a>
    )
  return (
    <Link className={classes} data-name="Regular btn" to={to ?? "/my-work"}>
      {children}
    </Link>
  )
}

export type MediaId = "home-hero" | "borkop-intro" | "process-knitting" | "desenio" | "jysk" | "knitting" | "slippers" | "event-1" | "q36" | "event-2" | "event-3"
export const mediaSources: Partial<Record<MediaId, {
  src?: string
  youtubeId?: string
  poster?: string
  ambient?: boolean
}>> = {
  "home-hero": { src: heroVideo },
  jysk: { src: jyskVideo, poster: jyskPoster },
  slippers: { src: slippersVideo, poster: slippersPoster },
  q36: { src: q36Video, poster: q36Poster },
  "borkop-intro": { youtubeId: "8ktHJwvEGQQ", poster: borkopIntroPoster },
  desenio: { src: desenioVideo, poster: desenioPoster },
  "process-knitting": { src: knittingVideo, poster: knittingPoster },
  knitting: { src: knittingVideo, poster: knittingPoster },
  "event-1": { youtubeId: "4bExb8Zsna4", poster: eventMarketing1Poster },
  "event-2": { youtubeId: "b9rcH9Zizb0", poster: eventMarketing2Poster },
  "event-3": { src: eventMarketing3Video, poster: eventMarketing3Poster },
}

function YouTubeMedia({
  id,
  youtubeId,
  poster,
  className,
  label,
}: {
  id: MediaId
  youtubeId: string
  poster?: string
  className?: string
  label: string
}) {
  const [started, setStarted] = useState(false)
  return (
    <div
      className={`relative block size-full overflow-hidden ${className ?? ""}`}
      data-media-slot={id}
    >
      {started ? (
        <iframe
          className="block size-full border-0"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&loop=0&mute=0&controls=1&playsinline=1&fs=1&rel=0`}
          title={label}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          className="relative block size-full cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
          aria-label={`Play ${label}`}
          onClick={() => setStarted(true)}
        >
          <img src={poster} alt="" className="block size-full object-cover" />
          <span
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-black/60">
              <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white" />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}

export function MediaSlot({
  id,
  className,
  label,
}: {
  id: MediaId
  className?: string
  label: string
}) {
  const media = mediaSources[id]
  const ambient = id === "home-hero" || Boolean(media?.ambient)
  if (media?.youtubeId) {
    return (
      <YouTubeMedia
        id={id}
        youtubeId={media.youtubeId}
        poster={media.poster}
        className={className}
        label={label}
      />
    )
  }
  return (
    <video
      className={`block size-full object-contain ${className ?? ""}`}
      src={media?.src}
      poster={media?.poster}
      aria-label={label}
      data-media-slot={id}
      data-media-pending={!media || undefined}
      controls={Boolean(media) && !ambient}
      controlsList={!ambient ? "nodownload noplaybackrate" : undefined}
      disablePictureInPicture={!ambient ? true : undefined}
      onContextMenu={!ambient ? (event) => event.preventDefault() : undefined}
      autoPlay={Boolean(media) && ambient}
      loop={ambient}
      muted={ambient || !media}
      playsInline
      preload="none"
    />
  )
}

export function MobileScrollControl({
  targetId,
  label,
}: {
  targetId: string
  label: string
}) {
  const [position, setPosition] = useState(0)
  const [mobile, setMobile] = useState(
    () => window.matchMedia("(width < 1024px)").matches,
  )
  const [scrollable, setScrollable] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLSpanElement>(null)
  const [availableTravel, setAvailableTravel] = useState(0)
  const wheelTarget = useRef<number | null>(null)
  useLayoutEffect(() => {
    const track = trackRef.current
    const indicator = indicatorRef.current
    if (!track || !indicator) return
    const measure = () => {
      if (!track.getClientRects().length) {
        setAvailableTravel(0)
        return
      }
      const trackStyle = getComputedStyle(track)
      const innerWidth =
        Number.parseFloat(trackStyle.width) -
        Number.parseFloat(trackStyle.borderLeftWidth) -
        Number.parseFloat(trackStyle.borderRightWidth)
      const indicatorWidth = Number.parseFloat(
        getComputedStyle(indicator).width,
      )
      setAvailableTravel(Math.max(0, innerWidth - indicatorWidth))
    }
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    observer.observe(indicator)
    measure()
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const element = document.querySelector<HTMLElement>(
      `[data-node-id="${targetId}"]`,
    )
    if (!element) return
    const media = window.matchMedia("(width < 1024px)")
    const updateViewport = () => setMobile(media.matches)
    let gesture: {
      pointerId: number
      x: number
      y: number
      scrollLeft: number
      dragging: boolean
    } | null = null
    let suppressClick = false
    let clickReset: ReturnType<typeof setTimeout> | undefined
    const update = () => {
      const maximum = element.scrollWidth - element.clientWidth
      setScrollable(maximum > 1)
      element.dataset.scrollable = String(maximum > 1)
      setPosition(
        maximum > 0
          ? maximum - element.scrollLeft <= 1
            ? 1000
            : Math.max(0, Math.min(1000, (element.scrollLeft / maximum) * 1000))
          : 0,
      )
    }
    const startDrag = (event: PointerEvent) => {
      if (
        event.pointerType !== "mouse" ||
        event.button !== 0 ||
        element.scrollWidth <= element.clientWidth
      )
        return
      wheelTarget.current = null
      element.scrollTo({ left: element.scrollLeft, behavior: "instant" })
      const video = (event.target as Element).closest("video")
      if (video && event.clientY > video.getBoundingClientRect().bottom - 48)
        return
      clearTimeout(clickReset)
      suppressClick = false
      gesture = {
        pointerId: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        scrollLeft: element.scrollLeft,
        dragging: false,
      }
    }
    const moveDrag = (event: PointerEvent) => {
      if (!gesture || event.pointerId !== gesture.pointerId) return
      const distance = event.clientX - gesture.x
      if (!gesture.dragging) {
        if (
          Math.abs(distance) < 6 ||
          Math.abs(distance) <= Math.abs(event.clientY - gesture.y)
        )
          return
        gesture.dragging = true
        element.setPointerCapture(event.pointerId)
        element.classList.add("is-dragging")
        window.getSelection()?.removeAllRanges()
      }
      event.preventDefault()
      const scale = element.getBoundingClientRect().width / element.offsetWidth
      element.scrollLeft = gesture.scrollLeft - distance / scale
    }
    const stopDrag = (event: PointerEvent) => {
      if (!gesture || event.pointerId !== gesture.pointerId) return
      suppressClick = gesture.dragging && event.type === "pointerup"
      if (element.hasPointerCapture(event.pointerId))
        element.releasePointerCapture(event.pointerId)
      element.classList.remove("is-dragging")
      gesture = null
      clickReset = setTimeout(() => {
        suppressClick = false
      }, 0)
    }
    const preventDragClick = (event: MouseEvent) => {
      if (!suppressClick) return
      event.preventDefault()
      event.stopImmediatePropagation()
    }
    const preventImageDrag = (event: DragEvent) => event.preventDefault()
    const resetWheelTarget = () => {
      wheelTarget.current = null
    }
    const scrollWithWheel = (event: WheelEvent) => {
      if (media.matches || event.ctrlKey || event.defaultPrevented) return
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        resetWheelTarget()
        return
      }
      if (!event.deltaY) return
      const maximum = element.scrollWidth - element.clientWidth
      const current = element.scrollLeft
      if (event.deltaY > 0 ? maximum - current <= 1 : current <= 1) return
      event.preventDefault()
      const scale = element.getBoundingClientRect().width / element.offsetWidth
      const unit =
        event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? element.clientWidth
            : 1
      const distance = (event.deltaY * unit) / scale
      const previousTarget = wheelTarget.current ?? current
      const start =
        (previousTarget - current) * distance < 0 ? current : previousTarget
      const nextTarget = Math.max(0, Math.min(maximum, start + distance))
      if (nextTarget === wheelTarget.current) return
      wheelTarget.current = nextTarget
      element.scrollTo({
        left: wheelTarget.current,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      })
    }
    media.addEventListener("change", updateViewport)
    element.addEventListener("scroll", update, { passive: true })
    element.addEventListener("scrollend", resetWheelTarget)
    element.addEventListener("wheel", scrollWithWheel, { passive: false })
    element.addEventListener("pointerdown", startDrag)
    element.addEventListener("click", preventDragClick, true)
    element.addEventListener("dragstart", preventImageDrag)
    window.addEventListener("pointermove", moveDrag, { passive: false })
    window.addEventListener("pointerup", stopDrag)
    window.addEventListener("pointercancel", stopDrag)
    const observer = new ResizeObserver(update)
    observer.observe(element)
    for (const child of element.children) observer.observe(child)
    update()
    return () => {
      clearTimeout(clickReset)
      media.removeEventListener("change", updateViewport)
      element.removeEventListener("scroll", update)
      element.removeEventListener("scrollend", resetWheelTarget)
      element.removeEventListener("wheel", scrollWithWheel)
      resetWheelTarget()
      element.removeEventListener("pointerdown", startDrag)
      element.removeEventListener("click", preventDragClick, true)
      element.removeEventListener("dragstart", preventImageDrag)
      window.removeEventListener("pointermove", moveDrag)
      window.removeEventListener("pointerup", stopDrag)
      window.removeEventListener("pointercancel", stopDrag)
      element.classList.remove("is-dragging")
      delete element.dataset.scrollable
      observer.disconnect()
    }
  }, [targetId])
  return (
    <div
      ref={trackRef}
      aria-label={label}
      role={mobile ? "progressbar" : undefined}
      aria-valuemin={mobile ? 0 : undefined}
      aria-valuemax={mobile ? 1000 : undefined}
      aria-valuenow={mobile ? position : undefined}
      data-scrollable={scrollable}
      className="mobile-scroll-control hidden overflow-hidden"
    >
      <span
        ref={indicatorRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-[3.5px] left-0 h-[7px] w-[66px] rounded-[45px] bg-[#fcf9f5]"
        style={{
          transform: `translateX(${Math.max(0, Math.min(availableTravel, (position / 1000) * availableTravel))}px)`,
        }}
      />
      {!mobile && (
        <input
          type="range"
          min={0}
          max={1000}
          step="any"
          value={position}
          aria-label={label}
          className="absolute inset-0 size-full cursor-pointer appearance-none opacity-0"
          onChange={(event) => {
            const element = document.querySelector<HTMLElement>(
              `[data-node-id="${targetId}"]`,
            )
            const nextPosition = Number(event.target.value)
            wheelTarget.current = null
            setPosition(nextPosition)
            if (element)
              element.scrollLeft =
                (nextPosition / 1000) *
                (element.scrollWidth - element.clientWidth)
          }}
        />
      )}
    </div>
  )
}

export function SiteLayout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: "instant" })
    const titles: Record<string, string> = {
      "/": "Home",
      "/my-work": "My Work",
      "/school-projects": "School Projects",
      "/school-projects/online-sikkerhed": "OnlineSikkerhed.dk",
      "/school-projects/garn-og-craft": "Garn og Craft",
      "/creative-production": "Creative Production",
      "/soe-knitwear": "Søe Knitwear",
      "/personal-skills": "Personal Skills",
      "/contact": "Contact",
    }
    document.title = `${titles[pathname] ?? "Portfolio"} — Nicoline Søe Larsen`
  }, [pathname, hash])
  return (
    <div className="desktop-site min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-[1280px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
