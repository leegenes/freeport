import React from 'react';

class Letter extends React.Component {
  render() {
    var letterStyle = {
      padding: 5,
      fontFamily: "'Fira Mono', monospace",
      fontSize: "16px",
      backgroundColor: this.props.bgColor
    }

    return(
      <div style={letterStyle}>
        {this.props.children}
      </div>
    );
  }
}

class Logo extends React.Component {
  render() {
    var logoStyle = {
      flex: "0 0 200px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    }

    return(
      <div style={logoStyle}>
        <Letter bgColor="#58B3FF">f</Letter>
        <Letter bgColor="#FF605F">r</Letter>
        <Letter bgColor="#FFD52E">e</Letter>
        <Letter bgColor="#49DD8E">e</Letter>
        <Letter bgColor="#AE99FF">p</Letter>
        <Letter bgColor="#58B3FF">o</Letter>
        <Letter bgColor="#FF605F">r</Letter>
        <Letter bgColor="#FFD52E">t</Letter>
      </div>
    )
  }
}

class CompanySettingsDropdown extends React.Component {
  render() {
    if (this.props.showDropdown) {
      return(
        <div>
          <div>Item1</div>
          <div>Item2</div>
          <div>Item3</div>
        </div>
      )
    } else {
      return(<div />)
    }
  }
}

class CompanyButton extends React.Component {
  render() {
    var companyButtonStyle = {
      height: "100%",
      padding: "auto 5",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      verticalAlign: "middle",
      lineHeight: "100%",
      border: "none",
      backgroundColor: "white"
    }

    return(
      <button style={companyButtonStyle}>
        {this.props.companyName ? this.props.companyName:"Your Company"} <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </button>
    )
  }
}

class CompanySettings extends React.Component {
  render() {
    return(
      <div>
        <CompanyButton companyName={this.props.companyName} />
        <CompanySettingsDropdown isDisplayed={this.props.showDropdown} />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    var headerStyle = {
      display: "flex",
      justifyContent: "space-between",
      flex: "0 0 50px",
      width: "100%",
      borderBottom: "1px solid #58B3FF"
    }
    return(
      <div style={headerStyle}>
        <Logo />
        <CompanySettings companyName="NotSoSimple" showDropdown="false" />
      </div>
    )
  }
}

export default Header;
