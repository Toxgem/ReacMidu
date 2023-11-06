import './App.css'
import "./app.scss"
function App() {
 
  return (
   <section className='maind-grid'>
    <aside className='main-side'>
      <header className='common-header'>
        <div className='common-header-start'>
        <button className="u-flex js-user-nav">
             <img className="profile-image" src="./src/assets/valProf.jpg" alt="Val 🦇"/>
             <div className="common-header-content">
                <h1 className="common-header-title">Val🦇</h1>
            </div>
           </button>       
        </div>
        <nav className="common-nav">
           <ul className="common-nav-list">
             <li className="common-nav-item">
               <button className="common-button">
                 <span className="icon">🕘</span>
               </button>
             </li>
             <li className="common-nav-item">
               <button className="common-button">
                 <span className="icon icon-status">💬</span>
               </button>
             </li>
             <li className="common-nav-item">
               <button className="common-button">
                 <span className="icon icon-menu" aria-label="menu"></span>
               </button>
             </li>
           </ul>
         </nav>
      </header>
      <section className="common-alerts"></section>
    <section className="common-search">
        <input type="search" className="text-input" placeholder="Search or start new chat"/>
    </section>
      <section className='chats'>

        <ul className='chats-list'>
        <li className="chats-item">
          <div className="chats-item-button js-chat-button" role="button" tabindex="0">
            <img className="profile-image" src="./src/assets/valProf.jpg" alt="Val"/>
            <header className="chats-item-header">
              <h3 className="chats-item-title">Val🦇</h3>
              <time className="chats-item-time">00:00</time>
            </header>
            <div className="chats-item-content">
              <p className="chats-item-last">Preparate</p>
              <ul className="chats-item-info">
                <li className="chats-item-info-item"><span className="unread-messsages"></span></li>
              </ul>
            </div>
          </div>
        </li>
        </ul>
      </section>

    </aside>




   </section>

  )
}

export default App
