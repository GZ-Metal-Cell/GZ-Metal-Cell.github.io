'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import { useMDXComponents } from '@mdx-js/react'
import type { ComponentType } from 'react'

// Disable SSR — Remotion's <Player> requires browser APIs
const Player = dynamic(
  () => import('@remotion/player').then((mod) => mod.Player),
  { ssr: false }
)

type Props = {
  /**
   * Name of the Remotion composition registered as an MDX component.
   * Pass the component name as a string so MDX can resolve it from
   * useMDXComponents() — plain identifiers like {Foo} in JSX expressions
   * are NOT auto-resolved after MDX import stripping.
   */
  component: string
  /** Total frames of the composition */
  durationInFrames?: number
  /** Frames per second */
  fps?: number
  /** Composition canvas width */
  compositionWidth?: number
  /** Composition canvas height */
  compositionHeight?: number
  /**
   * Show the player control bar (play/pause, timeline, fullscreen, etc.).
   * - false (default): looks like a native auto-playing animation
   * - true: looks like a standard video player
   */
  controls?: boolean
  /** Auto-play on mount (default true) */
  autoPlay?: boolean
  /** Loop playback (default true) */
  loop?: boolean
  /** Click to toggle play/pause when controls are hidden (default true) */
  clickToPlay?: boolean
  /** Show volume slider in control bar (only relevant when controls=true) */
  showVolumeControls?: boolean
}

export function RemotionPlayer({
  component: componentName,
  durationInFrames = 210,
  fps = 30,
  compositionWidth = 1920,
  compositionHeight = 1080,
  controls = true,
  autoPlay = true,
  loop = true,
  clickToPlay = true,
  showVolumeControls = false,
}: Props) {
  const mdxComponents = useMDXComponents()
  const Comp = (mdxComponents[componentName] ??
    (() => null)) as ComponentType

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Show a placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div
        className="my-4 overflow-hidden rounded-lg"
        style={{ aspectRatio: `${compositionWidth}/${compositionHeight}` }}
      >
        <div className="flex h-full items-center justify-center bg-muted text-sm text-muted-foreground">
          Loading animation…
        </div>
      </div>
    )
  }

  return (
    <div className="my-4 overflow-hidden rounded-lg">
      <Player
        component={Comp}
        durationInFrames={durationInFrames}
        fps={fps}
        compositionWidth={compositionWidth}
        compositionHeight={compositionHeight}
        style={{ width: '100%', display: 'block' }}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        clickToPlay={controls ? false : clickToPlay}
        showVolumeControls={showVolumeControls}
      />
    </div>
  )
}
