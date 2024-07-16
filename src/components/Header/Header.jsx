import "./Header.scss";

function Header() {
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <span className="username">John Doe</span>
          <span className="today-date">{formatDate(new Date())}</span>
        </div>
        <div className="header-right">
          <input
            type="text"
            placeholder="Search for food, coffe, etc.."
            className="search-input"
          />
          <img src="search.png" alt="Search" className="search-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
