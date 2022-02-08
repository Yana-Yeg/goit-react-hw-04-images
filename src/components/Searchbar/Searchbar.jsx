// import { shape } from "prop-types";
import { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    query: "",
  };
  handleQueryChange = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query.trim() === "") {
      alert("need query");
      return;
    }
    this.props.handleFormSubmit(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
