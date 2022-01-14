import Link from 'next/link'

const Navbar = () => {
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Accueil</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/form">
            <a className="nav-link">Ajouter élèment</a>
          </Link>
        </li>
      </ul>
    </nav>
  </>
}
export default Navbar