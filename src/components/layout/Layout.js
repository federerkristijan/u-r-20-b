import classes from "./Layout.module.css"
import Navbar from "./Navbar"

const Layout = (props) => {
  return (
    <section>
      <Navbar />
      <main className={classes.main}>
        {props.children}
      </main>
    </section>
  )
}

export default Layout
