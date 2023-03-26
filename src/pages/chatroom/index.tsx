import { useEffect, useState } from 'react'
import ChatMessage from './ChatHistory'
import Iconsendvariantoutline from '~icons/mdi/send-variant-outline'

interface messageItem {
  user: {
    id: number
    name: string
  }
  message: string
}

const getRandomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const ChatRoom = () => {
  const [chatHistory, setchatHistory] = useState<messageItem[]>([])
  const [message, setmessage] = useState({ text: '' })
  const [username, setUsername] = useState(`Guest${getRandomNum(0, 1000)}`)
  const socket = new WebSocket('ws://localhost:3000/ws')

  useEffect(() => {
    socket.onopen = () => {
      console.log('Successfully Connected')
    }
    socket.onmessage = (msg) => {
      console.log(msg.data)
      setchatHistory((currentState) => {
        const prev: messageItem[] = [...currentState]
        prev.push({
          user: {
            id: 2,
            name: JSON.parse(msg.data).username
          },
          message: JSON.parse(msg.data).text
        })
        return prev
      })
    }
    socket.onclose = (event) => {
      console.log('Socket Closed Connection: ', event)
    }

    socket.onerror = (error) => {
      console.log('Socket Error: ', error)
    }
    return () => {
      console.log(socket)
      console.log('component unmount')
      if (socket.readyState === 1) { // <-- This is important
        socket.close()
      }
      console.log('close connection')
    }
  }, [])

  const textBoxOnSend = () => {
    socket.send(JSON.stringify({ username, text: message.text }))
    setmessage({ ...message, text: '' })
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      socket.send(JSON.stringify({ username, text: message.text }))
      setmessage({ ...message, text: '' })
    }
  }
  return (
    <>
      <section className="borderflex flex-col w-[500px] h-[80vh] py-1">
        <div className="  h-1/8 flex justify-start items-center px-2 py-2 bg-primary text-base">
          {' '}
          Go-Chat 匿名聊天室
        </div>
        <div className="  h-full bg-white overflow-y-scroll">
    <div className=" flex flex-col px-2">
      {chatHistory.map((item: messageItem, index: number) => (
        <ChatMessage
          key={index}
          user={item.user}
          message={item.message}
        />
      ))}
    </div>
  </div>
        <div className=" h-1/8 flex justify-between items-center text-gray-500 bg-primary px-5 text-sm">
          <input
            className=" border border-gray-400 outline-none w-1/2 px-2"
            placeholder="說些什麼吧～"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setmessage({ ...message, text: e.target.value })
            }}
            value={message.text}
            onKeyUp={(e) => { onKeyDown(e) }}
          />
          <button
            className="  border h-full w-4 justify-center"
            onClick={() => {
              textBoxOnSend()
            }}
          >
            <Iconsendvariantoutline />
          </button>
        </div>
      </section>
    </>
  )
}
