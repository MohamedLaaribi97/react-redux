import React from "react";

class App extends React.Component {
  state = {
    person: {
      fullName: "Mohamed Laaribi",
      bio: "Mohamed is a junior developer with a passion for coding and problem-solving. He recently studiying at GoMyCode coding bootcamp and has a little experience working with HTML, CSS, JavaScript, and React. Mohamed is eager to learn more about web development and is excited to contribute to new projects. In his free time, he enjoys traveling to many destinations, and hitting the gym for a good workout",
      imgSrc: <img src="./bio.png" alt="bio"></img>,
      profession: "Web Developer",
    },
    shows: false,
    mountTime: 0,
  };

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, mountTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <img src="./bio.png" alt={person.fullName} />
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Component mounted at: {new Date(mountTime).toLocaleTimeString()}</p>
      </div>
    );
  }
  componentDidMount() {
    this.mountInterval = setInterval(() => {
      this.setState({ mountTime: Date.now() });
    });
  }
}

export default App;
