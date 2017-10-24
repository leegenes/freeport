import React from 'react';

class MenuItem extends React.Component {
  render() {
    var menuItemStyle = {
      flex: "0 0 50px",
      width: "100%",
      margin: "2 0 2 0",
      textDecoration: "none",
      backgroundColor: "inherit",
      border: "none",
      borderLeft: "10px solid #58B3FF",
      textAlign: "left",
      fontSize: "18px"
    }

    return(
      <button style={menuItemStyle}>{ this.props.name }</button>
    )
  }
}

class Menu extends React.Component {
  render() {
    var menuStyle = {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: 200,
      marginTop: 5,
      backgroundColor: "white",
      padding: 0
    }

    return(
    <div className="menu-container"
         id="menu"
         style={menuStyle}>
      { this.props.menuItems.map((item) => {
        return (
          <MenuItem name={item.name} />
        )
      })}
    </div>
    );
  }
};

export default Menu;
