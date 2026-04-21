import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Haruka Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
           <h1 style={{ fontSize: 100, fontWeight: 700, margin: 0, letterSpacing: '-0.05em' }}>Haruka.</h1>
           <p style={{ fontSize: 32, marginTop: 24, opacity: 0.6 }}>Types Fast, Breaks Things Faster.</p>
        </div>
        <div style={{ position: 'absolute', bottom: 40, left: 40, display: 'flex', opacity: 0.3, fontSize: 24, fontFamily: 'monospace' }}>
          SYS_RENDER: MINIMAL | STATE: ONLINE
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
