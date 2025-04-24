'use client';

import { useChat } from '@ai-sdk/react';

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="min-h-screen flex bg-zinc-900 text-white">
      {/* Coluna da esquerda */}
      <aside className="w-1/4 p-6 border-r border-zinc-700">
      <img src="/logo-furia.png" alt="Fúria Bot" className="h-40 mx-auto mb-4" />
      <h2 className="text-5xl font-bold text-outline-white">Quem<br />Somos</h2>
        <ul className="text-sm space-y-5">
          <li>Somos FURIA. Uma organização de esports que nasceu do desejo de representar o Brasil no CS e conquistou muito mais que isso: expandimos nossas ligas, disputamos os principais títulos, adotamos novos objetivos e ganhamos um propósito maior. Somos muito mais que o sucesso competitivo.</li>
        </ul>
      </aside>

      {/*Chat */}
      <section className="flex-1 flex flex-col items-center justify-between p-6">
        <div className="w-full max-w-xl">
          {messages.map(message => (
            <div key={message.id} className="whitespace-pre-wrap my-2">
              <span className="font-semibold">
                {message.role === 'user' ? 'Você: ' : 'Fúria Bot: '}
              </span>
              {message.parts.map((part, i) =>
                part.type === 'text' ? <span key={`${message.id}-${i}`}>{part.text}</span> : null
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-xl mt-4">
          <input
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-600 focus:outline-none"
            value={input}
            placeholder="Saiba tudo sobre o time de CS da Furia..."
            onChange={handleInputChange}
          />
        </form>
      </section>

      {/* Coluna da direita */}
      <aside className="w-1/4 p-6 border-l border-zinc-700">
      <h2 className="text-xl font-bold text-outline-white">Patrocinadores</h2>
        <p className="text-sm mb-6">
    
        </p>
      </aside>
    </main>
  );
}
