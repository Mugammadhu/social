import { Link } from "react-router-dom"

export const Missing = () => {
  return (
    <main className="Missing">
    <h1>Missing</h1>
    <div className="box">
      <p>Well, that is disappointing</p>
      <p>
        Visit Home Page
        <Link to='/'>HOME</Link>
      </p>
    </div>

</main>
  )
}
