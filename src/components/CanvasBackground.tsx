import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>/?`~';

interface Cell {
  char: string;
  brightness: number;
  changeTimer: number;
}

const FONT_SIZE = 14;
const CHAR_W = 12;
const LINE_H = 22;
const VERT_STRETCH = 1.28;

function CanvasBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      scrollRef.current = Math.min(1, scrollY / (heroHeight * 0.6));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let cells: Cell[][] = [];
    let COLS = 0;
    let ROWS = 0;

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;

      COLS = Math.floor(w / CHAR_W) + 2;
      ROWS = Math.floor(h / LINE_H) + 2;

      cells = [];
      for (let r = 0; r < ROWS; r++) {
        cells[r] = [];
        for (let c = 0; c < COLS; c++) {
          cells[r][c] = {
            char: chars[Math.floor(Math.random() * chars.length)],
            brightness: 0.22 + Math.random() * 0.28,
            changeTimer: Math.floor(Math.random() * 120),
          };
        }
      }
    };

    init();
    const handleResize = () => init();
    window.addEventListener('resize', handleResize);

    const draw = () => {
      const progress = scrollRef.current;

      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const fontStr = `${FONT_SIZE}px "SF Mono", "Fira Code", "monospace"`;
      ctx.font = fontStr;
      ctx.textBaseline = 'top';

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const cell = cells[r][c];
          const x = c * CHAR_W;
          const y = r * LINE_H;

          cell.changeTimer--;
          if (cell.changeTimer <= 0) {
            cell.char = chars[Math.floor(Math.random() * chars.length)];
            cell.changeTimer = 30 + Math.floor(Math.random() * 80);
            cell.brightness = 0.5 + Math.random() * 0.4;
          }

          cell.brightness = Math.max(0.03, cell.brightness - 0.0012);

          if (Math.random() < 0.001) {
            cell.brightness = 0.65;
          }

          const opacity = cell.brightness * (1 - progress * 0.35);
          ctx.save();
          ctx.translate(x, y);
          ctx.scale(1, VERT_STRETCH);
          ctx.fillStyle = `rgba(200, 180, 150, ${opacity})`;
          ctx.fillText(cell.char, 0, 0);
          ctx.restore();
        }
      }

      // 暗化覆盖（减轻）
      if (progress > 0) {
        ctx.fillStyle = `rgba(0, 0, 0, ${progress * 0.3})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // 四边暗角：中心全亮，四边+四角狠狠压黑
      const W = canvas.width;
      const H = canvas.height;
      const edgeW = W * 0.28;
      const edgeH = H * 0.28;

      // 左边缘
      const gl = ctx.createLinearGradient(0, 0, edgeW, 0);
      gl.addColorStop(0, 'rgba(0,0,0,0.75)');
      gl.addColorStop(0.3, 'rgba(0,0,0,0.35)');
      gl.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gl;
      ctx.fillRect(0, 0, edgeW, H);

      // 右边缘
      const gr = ctx.createLinearGradient(W - edgeW, 0, W, 0);
      gr.addColorStop(0, 'rgba(0,0,0,0)');
      gr.addColorStop(0.7, 'rgba(0,0,0,0.35)');
      gr.addColorStop(1, 'rgba(0,0,0,0.75)');
      ctx.fillStyle = gr;
      ctx.fillRect(W - edgeW, 0, edgeW, H);

      // 上边缘
      const gt = ctx.createLinearGradient(0, 0, 0, edgeH);
      gt.addColorStop(0, 'rgba(0,0,0,0.75)');
      gt.addColorStop(0.3, 'rgba(0,0,0,0.35)');
      gt.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gt;
      ctx.fillRect(0, 0, W, edgeH);

      // 下边缘
      const gb = ctx.createLinearGradient(0, H - edgeH, 0, H);
      gb.addColorStop(0, 'rgba(0,0,0,0)');
      gb.addColorStop(0.7, 'rgba(0,0,0,0.35)');
      gb.addColorStop(1, 'rgba(0,0,0,0.75)');
      ctx.fillStyle = gb;
      ctx.fillRect(0, H - edgeH, W, edgeH);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      sx={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

export default CanvasBackground;
