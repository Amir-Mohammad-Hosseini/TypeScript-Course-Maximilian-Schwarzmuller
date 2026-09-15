interface HeaderProps {
    image : {
        src : string,
        alt : string
    }
}

const Header = ({image} : HeaderProps) => {
  return (
    <header>
        <img src={image.src} alt={image.alt} />
    </header>
  )
}

export default Header
