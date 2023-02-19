interface props {
  user: { name: string, id: number }
  message: string
  imgUrl: string
}

export const ChatHistory = (props: props) => {
  const { user, message } = props
  return (
        <div className="  flex my-1 text-sm" >
            <span className=" p-1">{user.name}:</span>
            <span className=" p-1 border bg-green-100 rounded-lg">{message}</span>
        </div>
  )
}
