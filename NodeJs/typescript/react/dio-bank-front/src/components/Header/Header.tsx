import './header.css';

interface Text {
    children: string;
}

export const Header = ({children}: Text) => {
    return (
        <div className='header'>
            {children}
        </div>
    )
}