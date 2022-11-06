/*import React from "react";


class MyErrorBoundary extends React.Component {
  state = {
    errorMessage: "",
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  // A fake logging service.
  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      return 
      <p> Go back to Home Page </p>;
      //<p>{this.state.errorMessage}</p>;
      //Fall Back UI
      //<div>
        //<h1> 404 </h1>
       // <p>We can't find the page you're looking for! </p>
       // <p> Go back to Home Page </p>
       // <Link to="/"> Home Page </Link>
      //</div>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
*/