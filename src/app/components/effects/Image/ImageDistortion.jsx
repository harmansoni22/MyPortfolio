"use client";

import { useEffect, useRef } from "react";
import {
  Renderer,
  Program,
  Mesh,
  Triangle,
  Texture,
  Vec2,
} from "ogl";

export default function HoverDistortImage({
  src,
  alt = "",
  width = 500,
  height = 650,
  className = "",
  intensity = 0.18,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !src) return;

    const renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    gl.canvas.style.display = "block";
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const texture = new Texture(gl);

    const mouse = new Vec2(-1, -1);
    const targetMouse = new Vec2(-1, -1);
    const velocity = new Vec2(0, 0);
    const lastMouse = new Vec2(-1, -1);

    let hover = 0;
    let targetHover = 0;
    let raf;

    const program = new Program(gl, {
      vertex: `
        attribute vec2 uv;
        attribute vec2 position;
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
      fragment: `
        precision highp float;

        uniform sampler2D uTexture;
        uniform vec2 uMouse;
        uniform vec2 uVelocity;
        uniform vec2 uResolution;
        uniform float uHover;
        uniform float uTime;
        uniform float uIntensity;

        varying vec2 vUv;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);

          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));

          vec2 u = f * f * (3.0 - 2.0 * f);

          return mix(a, b, u.x) +
                 (c - a) * u.y * (1.0 - u.x) +
                 (d - b) * u.x * u.y;
        }

        float circle(vec2 uv, vec2 center, float radius, float blur) {
          float d = distance(uv, center);
          return 1.0 - smoothstep(radius, radius + blur, d);
        }

        void main() {
          vec2 uv = vUv;

          float mask = circle(uv, uMouse, 0.14, 0.24) * uHover;

          vec2 dir = normalize(uVelocity + vec2(0.0001));
          float n1 = noise(uv * 18.0 + uTime * 0.8);
          float n2 = noise(uv * 42.0 - uTime * 1.2);

          vec2 particleDrift = dir * (n1 - 0.5) * 0.035 * mask * uIntensity;
          vec2 ripple = vec2(
            sin((uv.y + uTime * 0.15) * 40.0),
            sin((uv.x - uTime * 0.12) * 40.0)
          ) * 0.004 * mask * (1.0 + length(uVelocity) * 2.0);

          vec2 distortedUv = uv + particleDrift + ripple;

          vec4 tex = texture2D(uTexture, distortedUv);

          vec2 rgbShift = dir * 0.0045 * mask * (0.5 + min(length(uVelocity) * 4.0, 1.0));

          float r = texture2D(uTexture, distortedUv + rgbShift).r;
          float g = tex.g;
          float b = texture2D(uTexture, distortedUv - rgbShift).b;

          vec3 color = vec3(r, g, b);

          float grain = (n2 - 0.5) * 0.12 * mask;
          color += grain;

          gl_FragColor = vec4(color, tex.a);
        }
      `,
      uniforms: {
        uTexture: { value: texture },
        uMouse: { value: mouse },
        uVelocity: { value: velocity },
        uResolution: { value: new Vec2(width, height) },
        uHover: { value: hover },
        uTime: { value: 0 },
        uIntensity: { value: intensity },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = src;
    image.onload = () => {
      texture.image = image;
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      renderer.setSize(bounds.width, bounds.height);
      program.uniforms.uResolution.value.set(bounds.width, bounds.height);
    };

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;

      targetMouse.set(x, y);

      velocity.set(x - lastMouse.x, y - lastMouse.y);
      lastMouse.set(x, y);

      targetHover = 1;
    };

    const onEnter = (e) => {
      onMove(e);
      targetHover = 1;
    };

    const onLeave = () => {
      targetHover = 0;
      velocity.set(0, 0);
    };

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);

    resize();

    const update = (t) => {
      raf = requestAnimationFrame(update);

      mouse.x += (targetMouse.x - mouse.x) * 0.12;
      mouse.y += (targetMouse.y - mouse.y) * 0.12;
      hover += (targetHover - hover) * 0.08;

      velocity.x *= 0.9;
      velocity.y *= 0.9;

      program.uniforms.uTime.value = t * 0.001;
      program.uniforms.uHover.value = hover;

      renderer.render({ scene: mesh });
    };

    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
      if (gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }
    };
  }, [src, width, height, intensity]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-label={alt}
      style={{
        width,
        height,
        overflow: "hidden",
        borderRadius: "0px",
        cursor: "default",
      }}
    />
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import {
//   Renderer,
//   Program,
//   Mesh,
//   Triangle,
//   Texture,
//   Vec2,
// } from "ogl";

// export default function HoverDistortImage({
//   src,
//   alt = "",
//   width = 500,
//   height = 650,
//   className = "",
//   intensity = 0.18, // unused here but kept for API
// }) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container || !src) return;

//     const renderer = new Renderer({
//       alpha: true,
//       antialias: true,
//       dpr: Math.min(window.devicePixelRatio, 2),
//     });

//     const gl = renderer.gl;
//     gl.clearColor(0, 0, 0, 0);
//     gl.canvas.style.width = "100%";
//     gl.canvas.style.height = "100%";
//     gl.canvas.style.display = "block";
//     container.appendChild(gl.canvas);

//     const geometry = new Triangle(gl);
//     const texture = new Texture(gl);

//     const mouse = new Vec2(-1, -1);
//     const targetMouse = new Vec2(-1, -1);
//     const velocity = new Vec2(0, 0);
//     const lastMouse = new Vec2(-1, -1);

//     let hover = 0;
//     let targetHover = 0;
//     let raf;

//     const program = new Program(gl, {
//       vertex: `
//         attribute vec2 uv;
//         attribute vec2 position;
//         varying vec2 vUv;

//         void main() {
//           vUv = uv;
//           gl_Position = vec4(position, 0.0, 1.0);
//         }
//       `,
//       fragment: `
//         precision highp float;

//         uniform sampler2D uTexture;
//         uniform vec2 uMouse;
//         uniform vec2 uVelocity;
//         uniform vec2 uResolution;
//         uniform float uHover;
//         uniform float uTime;
//         uniform float uIntensity;

//         varying vec2 vUv;

//         float circle(vec2 uv, vec2 center, float radius, float blur) {
//           float d = distance(uv, center);
//           return 1.0 - smoothstep(radius, radius + blur, d);
//         }

//         void main() {
//           vec2 uv = vUv;

//           // Original texture
//           vec4 tex = texture2D(uTexture, uv);

//           // Grayscale version
//           float gray = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
//           vec3 grayColor = vec3(gray);

//           // Torch mask around cursor
//           float mask = circle(uv, uMouse, 0.18, 0.15) * uHover;

//           // Color inside torch, grayscale outside
//           vec3 color = mix(grayColor, tex.rgb, mask);

//           gl_FragColor = vec4(color, tex.a);
//         }
//       `,
//       uniforms: {
//         uTexture: { value: texture },
//         uMouse: { value: mouse },
//         uVelocity: { value: velocity },
//         uResolution: { value: new Vec2(width, height) },
//         uHover: { value: hover },
//         uTime: { value: 0 },
//         uIntensity: { value: intensity },
//       },
//     });

//     const mesh = new Mesh(gl, { geometry, program });

//     const image = new Image();
//     image.crossOrigin = "anonymous";
//     image.src = src;
//     image.onload = () => {
//       texture.image = image;
//     };

//     const resize = () => {
//       const bounds = container.getBoundingClientRect();
//       renderer.setSize(bounds.width, bounds.height);
//       program.uniforms.uResolution.value.set(bounds.width, bounds.height);
//     };

//     const onMove = (e) => {
//       const rect = container.getBoundingClientRect();
//       const x = (e.clientX - rect.left) / rect.width;
//       const y = 1 - (e.clientY - rect.top) / rect.height;

//       targetMouse.set(x, y);

//       velocity.set(x - lastMouse.x, y - lastMouse.y);
//       lastMouse.set(x, y);

//       targetHover = 1;
//     };

//     const onEnter = (e) => {
//       onMove(e);
//       targetHover = 1;
//     };

//     const onLeave = () => {
//       targetHover = 0;
//       velocity.set(0, 0);
//     };

//     container.addEventListener("mousemove", onMove);
//     container.addEventListener("mouseenter", onEnter);
//     container.addEventListener("mouseleave", onLeave);
//     window.addEventListener("resize", resize);

//     resize();

//     const update = (t) => {
//       raf = requestAnimationFrame(update);

//       mouse.x += (targetMouse.x - mouse.x) * 0.12;
//       mouse.y += (targetMouse.y - mouse.y) * 0.12;
//       hover += (targetHover - hover) * 0.08;

//       velocity.x *= 0.9;
//       velocity.y *= 0.9;

//       program.uniforms.uTime.value = t * 0.001;
//       program.uniforms.uHover.value = hover;

//       renderer.render({ scene: mesh });
//     };

//     raf = requestAnimationFrame(update);

//     return () => {
//       cancelAnimationFrame(raf);
//       container.removeEventListener("mousemove", onMove);
//       container.removeEventListener("mouseenter", onEnter);
//       container.removeEventListener("mouseleave", onLeave);
//       window.removeEventListener("resize", resize);
//       if (gl.canvas.parentNode === container) {
//         container.removeChild(gl.canvas);
//       }
//     };
//   }, [src, width, height, intensity]);

//   return (
//     <div
//       ref={containerRef}
//       className={className}
//       aria-label={alt}
//       style={{
//         width,
//         height,
//         overflow: "hidden",
//         borderRadius: "0px",
//         cursor: "default",
//       }}
//     />
//   );
// }