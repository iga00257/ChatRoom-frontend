import './App.css'
import { ChatRoom } from './pages/chatroom'
import SideMenu from './pages/SideMenu'

function App () {
  return (
    <div>
      <div data-tauri-drag-region className="fixed h-12 w-full" />
      <div className="flex h-screen w-screen">
        <div className="h-full w-64 bg-zinc-50/50">
          <SideMenu />
        </div>
        <div className="h-full grow bg-zinc-50 border flex justify-center py-10">
            <p className="mx-4 text-center text-xs opacity-60">
               <ChatRoom />
            </p>
        </div>
      </div>
    </div>
  )
}

export default App
