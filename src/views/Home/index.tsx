import { Outlet } from "react-router-dom"
const View = () => {
  return (
    <div className='home'>
      <p>这是home页面内容</p>
      <Outlet />
    </div>
  )
}

export default View