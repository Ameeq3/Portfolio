import { ImageResponse } from 'next/og';
import theme from './theme';

export const alt = 'Ameeq K.V — Frontend Software Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const { primary, secondary } = theme.palette;
const dark = theme.palette.background;
const text = theme.palette.text;

const techStack = ['React.js', 'Next.js', 'TypeScript', 'React Native', 'Flutter'];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: dark.default,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background glow — top-left primary, bottom-right secondary */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${primary.dark}44 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -60,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${secondary.dark}33 0%, transparent 70%)`,
          }}
        />

        {/* Logo mark */}
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 28 }}>
          <span style={{ fontSize: 48, fontWeight: 800, color: primary.main, letterSpacing: '-1px' }}>A</span>
          <span style={{ fontSize: 52, fontWeight: 800, color: secondary.main }}>.</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: text.primary,
            letterSpacing: '-3px',
            marginBottom: 14,
            display: 'flex',
          }}
        >
          AMEEQ K.V
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 30,
            color: text.secondary,
            marginBottom: 44,
            letterSpacing: '0.02em',
            display: 'flex',
          }}
        >
          Frontend Software Developer
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 64,
            height: 4,
            background: `linear-gradient(90deg, ${primary.main}, ${secondary.main})`,
            borderRadius: 2,
            marginBottom: 44,
          }}
        />

        {/* Tech stack pills */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 44 }}>
          {techStack.map((tech) => (
            <div
              key={tech}
              style={{
                padding: '10px 20px',
                borderRadius: 8,
                background: `${primary.main}1E`,
                border: `1px solid ${primary.main}44`,
                color: primary.light,
                fontSize: 18,
                display: 'flex',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Location */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: text.disabled,
            fontSize: 18,
          }}
        >
          <span>📍 Dubai, UAE</span>
          <span>·</span>
          <span>kvameeq123@gmail.com</span>
        </div>
      </div>
    ),
    size,
  );
}
