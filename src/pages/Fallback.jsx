import "../App.css"; 
import "../styles/404page.css";

export const Fallback = () => {
  return (
    <div className="not-found">
      <h3> Count Exceeded </h3>
      <h1> Error! </h1>
      <p> Go back to Home Page </p>
      <a href="#"> Home Page </a>
      ADD LINK OR ROUTE TO HOME PAGE HERE, USE THE SAME CSS AS THAT OF THE
      NAVIGATION CSS CLASS HERE
    </div>
  );
};
