import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://static.photocdn.pt/images/articles/2019/09/12/wide-angle_landscape_photography_2.jpg" alt=""></img>
        </div>
    )
}