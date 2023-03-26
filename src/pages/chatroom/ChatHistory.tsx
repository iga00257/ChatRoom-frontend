interface MessageProps {
  user: { name: string, id: number }
  message: string
  imgUrl: string
}
interface messageItem {
  user: {
    id: number
    name: string
  }
  message: string
}

function ChatMessage (props: MessageProps) {
  const { user, message } = props
  return (
        <div className="  flex my-1 text-sm items-center" >
            <img className=" w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"/>
            <span className=" p-1">{user.name}:</span>
            <span className=" p-1 border bg-green-100 rounded-lg">{message}</span>
        </div>
  )
}

// export const ChatHistory = (props: props) => {
//   const { user, message } = props
//   return (
//     <div className="  h-full bg-white overflow-y-scroll">
//     <div className=" flex flex-col px-2">
//       {chatHistory.map((item: messageItem, index: number) => (
//         <ChatMessage
//           key={index}
//           user={item.user}
//           message={item.message}
//           imgUrl={imgUrl}
//         />
//       ))}
//     </div>
//   </div>
//   )
// }

export default ChatMessage
