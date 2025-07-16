import chefLogo from '../assets/robo-logo.png'

function Header(){
    return (
        <header className="header">
            <img src ={chefLogo} alt = 'chefLogo' className = 'logo'/>
            <h1 className = 'headerTitle'>Pantry Pal</h1>
            <span className='headerPhrase'>artificial chef, authentic taste</span>
        </header>
    )
}

export default Header