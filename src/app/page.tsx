'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

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
      <aside className="w-[410px] p-6 border-l border-zinc-700">
        <VideoSection />
      </aside>
    </main>
  );
}

function VideoSection() {
  const videos = [
    {
      id: 1,
      title: 'FURIA 0 x 2 THE MONGOLZ ',
      date: '09/04',
      youtubeId: 'd6353XB63_Y',
    },
    {
      id: 2,
      title: 'FURIA 0 x 2 VIRTUS.PRO',
      date: '08/04',
      youtubeId: 'mW8Boa_VCWA',
    },
    {
      id: 3,
      title: 'FURIA 1 x 2 COMPLEXITY',
      date: '07/04',
      youtubeId: 'TcsoiOdHWRk',
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white-500">Highlights</h2>

      <div className="aspect-video mb-4">
        <iframe
          className="w-full h-full rounded"
          src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
          title={selectedVideo.title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <ul className="space-y-2 text-sm">
        {videos.map((video) => (
          <li
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className={`flex items-center gap-2 cursor-pointer px-2 py-1 rounded ${selectedVideo.id === video.id
                ? 'bg-zinc-800 text-white font-semibold'
                : 'text-zinc-400 hover:text-white'
              }`}
          >
            <img src="/logo-furia.png" alt="Furia logo" className="w-5 h-5" />
            <span>{video.title}</span>
            <span className="text-xs ml-auto text-zinc-500">{video.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}



