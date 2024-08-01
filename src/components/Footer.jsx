function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer-container">
        <hr />
        <footer>
          <p>
            Crafted with care by
            <a href="https://github.com/riverachacon"> Giovanni</a>
          </p>
          <p>Copyright ⓒ {year}</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
