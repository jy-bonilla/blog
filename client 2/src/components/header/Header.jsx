import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Blog</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className="headerImg" src="assets/mountains.png
            " alt="bonillaCodes logo" />
        </div>
    )
}
