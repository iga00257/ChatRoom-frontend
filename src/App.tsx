import { useState } from 'react'
import './App.css'
import { ChatRoom } from './pages/chatroom'
import SideMenu from './pages/SideMenu'
import Button from './components/buttons'

function App () {
  const [show, changeShow] = useState(false)
  return (
    <div>
      <div data-tauri-drag-region className="fixed h-12 w-full" />
      <div className="flex h-screen w-screen">
        <div className="h-full w-64 bg-zinc-50/50">
          <SideMenu />
        </div>
            <Button className=' bg-zinc-300 fixed right-0 top-0' onClick={() => { changeShow(!show) }}>open Chatroom</Button>
        <div className="h-full grow bg-zinc-50 border flex justify-center py-10 flex-col">
            <div className="mx-4 text-center text-xs opacity-60">
               {show && <ChatRoom />}
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
