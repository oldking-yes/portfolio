import { useState, useRef, useEffect, useCallback } from 'react';
import { Box, Container, Typography, IconButton, TextField, CircularProgress } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SendIcon from '@mui/icons-material/Send';

const WORKER_URL = '/api/chat';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const QUICK_PROMPTS = [
  { label: '最有挑战的项目', prompt: '你做过的项目里，技术上最有挑战的是哪个？难在哪？' },
  { label: '为什么选 AI 方向', prompt: '你为什么选择 AI 产品经理/应用开发方向？' },
  { label: '一个人怎么做的', prompt: '这些项目是你一个人完成的吗？遇到不会的技术怎么解决？' },
  { label: '成本控制', prompt: '你的项目在 API 调用和部署上怎么控制成本的？' },
  { label: '和别人有什么不同', prompt: '跟同届应届生比，你觉得自己最大的优势是什么？' },
];

function AiChat(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const parseSSEStream = useCallback(async (reader: ReadableStreamDefaultReader<Uint8Array>, onChunk: (text: string) => void) => {
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6).trim();
          if (data === '[DONE]') return;
          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content || '';
            if (content) onChunk(content);
          } catch {
            // skip malformed lines
          }
        }
      }
    }
  }, []);

  const sendMessage = useCallback(async (text?: string) => {
    const trimmed = (text ?? input).trim();
    if (!trimmed || loading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: trimmed }]);

    setLoading(true);
    const assistantMsg: Message = { role: 'assistant', content: '' };
    setMessages((prev) => [...prev, assistantMsg]);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`请求失败 (${res.status}): ${errText}`);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error('无法读取响应流');

      let accumulated = '';
      await parseSSEStream(reader, (chunk) => {
        accumulated += chunk;
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last?.role === 'assistant') {
            updated[updated.length - 1] = { ...last, content: accumulated };
          }
          return updated;
        });
      });
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: `抱歉，出错了：${err.message}。请稍后再试。` },
      ]);
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  }, [input, loading, parseSSEStream]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Box
      component="section"
      id="ai-chat"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box className="reveal" sx={{ textAlign: 'center', mb: { xs: 4, sm: 5 } }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <SmartToyIcon sx={{ color: '#8fa4b8', fontSize: 24 }} />
            <Typography
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.85rem' },
                color: 'rgba(143, 164, 184, 0.7)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              AI Assistant
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.2rem' },
              fontWeight: 700,
              mb: 1.5,
              background: 'linear-gradient(135deg, #dce3ea 0%, #8fa4b8 50%, #dce3ea 100%)',
              backgroundSize: '200% auto',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            试试和 AI 聊聊
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem' },
              color: 'rgba(255,255,255,0.4)',
              maxWidth: 480,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            我的 AI 助手了解我的所有项目经历和技术栈，你可以直接问我任何问题
          </Typography>
        </Box>

        {/* Quick prompts */}
        <Box
          className="reveal"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1,
            mb: { xs: 3, sm: 4 },
          }}
        >
          {QUICK_PROMPTS.map((qp) => (
            <Box
              key={qp.label}
              onClick={() => sendMessage(qp.prompt)}
              sx={{
                px: 2,
                py: 1,
                borderRadius: '24px',
                border: '1px solid rgba(143, 164, 184, 0.15)',
                backgroundColor: 'rgba(143, 164, 184, 0.04)',
                color: 'rgba(200, 208, 216, 0.6)',
                fontSize: { xs: '0.78rem', sm: '0.82rem' },
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                lineHeight: 1.4,
                userSelect: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(143, 164, 184, 0.10)',
                  borderColor: 'rgba(143, 164, 184, 0.30)',
                  color: '#e8e0d0',
                  transform: 'translateY(-1px)',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
            >
              {qp.label}
            </Box>
          ))}
        </Box>

        {/* Chat area */}
        <Box
          className="reveal"
          sx={{
            border: '1px solid rgba(143, 164, 184, 0.08)',
            borderRadius: 3,
            backgroundColor: 'rgba(143, 164, 184, 0.02)',
            overflow: 'hidden',
          }}
        >
          {/* Messages */}
          <Box
            ref={listRef}
            sx={{
              height: { xs: 320, sm: 400 },
              overflowY: 'auto',
              px: { xs: 2.5, sm: 3.5 },
              py: 2.5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
              scrollBehavior: 'smooth',
              '&::-webkit-scrollbar': { width: 3 },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(143, 164, 184, 0.15)',
                borderRadius: 2,
              },
            }}
          >
            {messages.length === 0 && (
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.15)',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                  }}
                >
                  点击上方问题，或直接输入你的问题
                </Typography>
              </Box>
            )}

            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: { xs: '88%', sm: '75%' },
                  animation: 'fadeInUp 0.3s ease-out',
                }}
              >
                {/* Role label */}
                <Typography
                  sx={{
                    fontSize: '0.7rem',
                    color: msg.role === 'user' ? 'rgba(143, 164, 184, 0.5)' : 'rgba(143, 164, 184, 0.4)',
                    mb: 0.5,
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                  }}
                >
                  {msg.role === 'user' ? '你' : 'AI'}
                </Typography>
                <Box
                  sx={{
                    px: 2,
                    py: 1.3,
                    borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                    backgroundColor:
                      msg.role === 'user'
                        ? 'rgba(143, 164, 184, 0.10)'
                        : 'rgba(255, 255, 255, 0.03)',
                  }}
                >
                  <Typography
                    sx={{
                      color: msg.role === 'user' ? '#c8d0d8' : '#b0b8c0',
                      fontSize: { xs: '0.83rem', sm: '0.88rem' },
                      lineHeight: 1.7,
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {msg.content}
                    {loading && i === messages.length - 1 && msg.role === 'assistant' && !msg.content && (
                      <Box component="span" sx={{ display: 'inline-flex', gap: 0.4, ml: 0.5, verticalAlign: 'middle' }}>
                        {[0, 0.2, 0.4].map((d) => (
                          <Box
                            key={d}
                            component="span"
                            sx={{
                              animation: 'dotPulse 1.4s infinite both',
                              animationDelay: `${d}s`,
                              width: 5,
                              height: 5,
                              borderRadius: '50%',
                              backgroundColor: 'rgba(143, 164, 184, 0.5)',
                              display: 'inline-block',
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Input */}
          <Box
            sx={{
              px: { xs: 2, sm: 3 },
              py: 1.5,
              borderTop: '1px solid rgba(143, 164, 184, 0.06)',
              display: 'flex',
              gap: 1,
              alignItems: 'flex-end',
            }}
          >
            <TextField
              fullWidth
              multiline
              maxRows={3}
              placeholder="问关于王子轩的问题…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  color: '#e8e0d0',
                  fontSize: '0.85rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: 2,
                  px: 1.5,
                  py: 0.8,
                  '&::placeholder': { color: 'rgba(255,255,255,0.2)' },
                },
              }}
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: 2,
                },
              }}
            />
            <IconButton
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              sx={{
                width: 38,
                height: 38,
                backgroundColor: loading || !input.trim() ? 'transparent' : 'rgba(143, 164, 184, 0.12)',
                '&:hover': { backgroundColor: 'rgba(143, 164, 184, 0.22)' },
                '&.Mui-disabled': { backgroundColor: 'transparent' },
                transition: 'background-color 0.2s',
                flexShrink: 0,
              }}
            >
              {loading ? (
                <CircularProgress size={18} sx={{ color: '#8fa4b8' }} />
              ) : (
                <SendIcon sx={{ color: input.trim() ? '#8fa4b8' : 'rgba(143,164,184,0.3)', fontSize: 18, transition: 'color 0.2s' }} />
              )}
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AiChat;
