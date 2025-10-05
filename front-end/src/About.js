import { useEffect, useState } from "react";
import './About.css'

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const About = props => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/about-data")
      .then(res => res.json())
      .then(json => {
        console.log("Fetched data:", json);
        setData(json);
      })
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Loading</p>;

  const [width, height] = data.images.size.split('x');

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <br />
      <p>{data.body}</p>
      <img src={data.images.link} width={width} height={height} alt="Picture" />
    </div>
  );
}


// make this component available to be imported into any other file
export default About
