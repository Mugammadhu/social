

export const Footer = () => {
  const date=new Date();
  return (
    <footer className="footer">
        <div className="fixed">
          <h1>Thank you</h1>
          <p>Copyright &copy; {date.getFullYear()}</p>
        </div>
    </footer>
  )
}
