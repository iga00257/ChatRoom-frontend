import IconMdiFaceManProfile from '~icons/mdi/face-man-profile'
import IconMdiAlphaFBox from '~icons/mdi/alpha-f-box'
import IconMdiMagnify from '~icons/mdi/magnify'
import IconMdiSquareEditOutline from '~icons/mdi/square-edit-outline'
import IconMdiImageFilterCenterFocus from '~icons/mdi/image-filter-center-focus'
import IconMdiAccountGroup from '~icons/mdi/account-group'

import MenuButton from './MenuButton'

function SideMenu () {
  return (
    <nav className="z-10 flex h-full w-full flex-col text-xs">
      <div className="flex shrink-0 flex-col gap-2 py-3 px-4">
        {/* profile */}
        <div className="flex justify-between">
          <MenuButton>
            <IconMdiAlphaFBox /> GoChat
          </MenuButton>
          <MenuButton>
            <IconMdiFaceManProfile />
          </MenuButton>
        </div>
        {/* new-issue */}
        <div className="flex justify-between gap-3">
          <MenuButton className="flex flex-1">
            <IconMdiSquareEditOutline />
            Add New ChatRoom
          </MenuButton>
          <MenuButton>
            <IconMdiMagnify />
          </MenuButton>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4">
        {/* items */}
        <MenuButton>
          <IconMdiImageFilterCenterFocus />
          My Chat Room
        </MenuButton>
        <MenuButton>
          <IconMdiAccountGroup />
          Teams Chatroom
        </MenuButton>
        <div className="h-2"></div>
        {/* your-teams Collapse */}
      </div>
    </nav>
  )
}

export default SideMenu
