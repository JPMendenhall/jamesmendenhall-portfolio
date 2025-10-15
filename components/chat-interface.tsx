'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Loader2, Paperclip } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const EXAMPLE_QUESTIONS = [
  "What's James's professional background?",
  "Tell me about the AI projects he's built",
  "Does James have compliance experience?",
  "Upload or paste a job posting to see fit"
]

const COMPACT_QUESTIONS = [
  "What's James's background?",
  "Tell me about his AI projects",
  "Upload/paste job to analyze fit"
]

interface ChatInterfaceProps {
  compact?: boolean
}

export default function ChatInterface({ compact = false }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: compact 
        ? "Hi! Ask me about James's experience, projects, or skills."
        : "Hi! I'm an AI assistant that can answer questions about James Mendenhall's professional background, projects, and experience. Ask me anything!"
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (question?: string) => {
  const messageText = question || input.trim()
  if (!messageText || loading) return

  // Add user message
  const userMessage: Message = { role: 'user', content: messageText }
  setMessages(prev => [...prev, userMessage])
  setInput('')
  setLoading(true)

  try {
    // Create empty assistant message that we'll update
    const assistantMessageIndex = messages.length + 1
    setMessages(prev => [...prev, { role: 'assistant', content: '' }])

    const response = await fetch('https://web-production-888e.up.railway.app/chat-stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: messageText }),
    })

    if (!response.ok) throw new Error('Failed to get response')

    const reader = response.body?.getReader()
    const decoder = new TextDecoder()

    if (!reader) throw new Error('No reader available')

    let accumulatedContent = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value)
      const lines = chunk.split('\n')

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6))
            
            if (data.content) {
              accumulatedContent += data.content
              // Update the assistant message with accumulated content
              setMessages(prev => {
                const newMessages = [...prev]
                newMessages[assistantMessageIndex] = {
                  role: 'assistant',
                  content: accumulatedContent
                }
                return newMessages
              })
            }

            if (data.error) {
              throw new Error(data.error)
            }
          } catch (e) {
            // Skip invalid JSON
          }
        }
      }
    }
  } catch (error) {
    console.error('Error:', error)
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: "Sorry, I encountered an error. Please try again."
    }])
  } finally {
    setLoading(false)
  }
}

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || loading) return

    // Add user message showing file name
    const userMessage: Message = { 
      role: 'user', 
      content: `📎 Analyzing job posting: ${file.name}` 
    }
    setMessages(prev => [...prev, userMessage])
    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('https://web-production-888e.up.railway.app/upload-job', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to process file')
      }

      const data = await response.json()

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.answer
      }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: error instanceof Error 
          ? `Error: ${error.message}` 
          : "Sorry, I couldn't process that file. Please try pasting the job description text instead."
      }])
    } finally {
      setLoading(false)
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const exampleQuestions = compact ? COMPACT_QUESTIONS : EXAMPLE_QUESTIONS
  const chatHeight = compact ? 'h-[400px]' : 'h-[600px]'

  return (
    <div className={`flex flex-col ${chatHeight} bg-black/40 backdrop-blur-sm border-2 border-white/30 rounded-2xl overflow-hidden`}>
      {/* Example questions */}
      {messages.length === 1 && (
        <div className="p-4 border-b border-white/30">
          <p className="text-sm text-gray-400 mb-3">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {exampleQuestions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(question)}
                className="text-xs px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/30 rounded-full transition-colors text-gray-300"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-gray-200 border border-white/30'
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/30 rounded-2xl px-4 py-3">
              <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/30">
        <div className="flex gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx,.txt"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={loading}
            className="bg-white/5 hover:bg-white/10 disabled:bg-gray-700 disabled:cursor-not-allowed border border-white/30 text-white rounded-xl px-4 py-3 transition-colors flex items-center gap-2"
            title="Upload job posting (PDF, DOC, DOCX, TXT)"
          >
            <Paperclip className="w-5 h-5" />
            {!compact && <span className="text-xs hidden md:inline">Upload Job</span>}
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about James's experience..."
            disabled={loading}
            className="flex-1 bg-white/5 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-xl px-6 py-3 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}