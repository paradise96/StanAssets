export default function Hamburger({ isOpen }) {
    return(
        <>
            <div>
                <div className={`burger ${isOpen ? 'burger1' : ''}`} />
                <div className={`burger ${isOpen ? 'burger2' : ''}`} />
                <div className={`burger ${isOpen ? 'burger3' : ''}`} />
            </div>
        </>
    )
}