import { Component } from "react";

class Elections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forMayor: [
        { name: "Dina Pili", totalVotes: 0 },
        { name: "Lucky Chan", totalVotes: 0 },
        { name: "Pama Hi-in", totalVotes: 0 },
      ],
      forVPres: [
        { name: "Pat Tumbakita", totalVotes: 0 },
        { name: "Ben Eko", totalVotes: 0 },
        { name: "Crystal Maiden", totalVotes: 0 },
      ],
      forCRep: [
        { name: "Juan Tutri", totalVotes: 0 },
        { name: "Tom Mabakana", totalVotes: 0 },
        { name: "Cory Corykok", totalVotes: 0 },
        { name: "Anne Nonanaman", totalVotes: 0 },
        { name: "Pete Chapay", totalVotes: 0 },
      ],
      selectedMayor: "",
      selectedVPres: "",
      selectedCReps: [],
    };
  }

  voteMayor = (event) => {
    const selectedMayor = event.target.value;
    this.setState({ selectedMayor });
  };

  voteVPres = (event) => {
    const selectedVPres = event.target.value;
    this.setState({ selectedVPres });
  };

  voteCRep = (event) => {
    const selectedCReps = [...this.state.selectedCReps];
    const selectedCRep = event.target.value;
    const maxSelection = 3;

    if (selectedCReps.includes(selectedCRep)) {
      selectedCReps.splice(selectedCReps.indexOf(selectedCRep), 1);
    } else {
      if (selectedCReps.length < maxSelection) {
        selectedCReps.push(selectedCRep);
      } else {
        alert("You can only choose 3 class representatives!");
      }
    }

    this.setState({ selectedCReps });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { selectedMayor, selectedVPres, selectedCReps } = this.state;

    this.setState((prevState) => ({
      forMayor: prevState.forMayor.map((candidate) => {
        if (candidate.name === selectedMayor) {
          return { ...candidate, totalVotes: candidate.totalVotes + 1 };
        }
        return candidate;
      }),
      forVPres: prevState.forVPres.map((candidate) => {
        if (candidate.name === selectedVPres) {
          return { ...candidate, totalVotes: candidate.totalVotes + 1 };
        }
        return candidate;
      }),
      forCRep: prevState.forCRep.map((candidate) => {
        if (selectedCReps.includes(candidate.name)) {
          return { ...candidate, totalVotes: candidate.totalVotes + 1 };
        }
        return candidate;
      }),
      selectedMayor: "",
      selectedVPres: "",
      selectedCReps: [],
    }));
  };

  render() {
    return (
      <div>
        <h1>Voting form</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h2 className="pt-4">Mayor</h2>
            <label className="my-2">
              <b>Please vote for a Mayor.</b> <br />
            </label>
            {this.state.forMayor.map((leader) => (
              <div key={leader.name}>
                <input
                  type="radio"
                  name="mayor"
                  value={leader.name}
                  className="mx-2"
                  checked={this.state.selectedMayor === leader.name}
                  onChange={this.voteMayor}
                />
                {leader.name}
              </div>
            ))}
            <h2 className="pt-4">Vice President</h2>
            <label className="my-2">
              <b>Please vote for a Vice President.</b> <br />
            </label>
            {this.state.forVPres.map((vleader) => (
              <div key={vleader.name}>
                <input
                  type="radio"
                  name="vice_pres"
                  value={vleader.name}
                  className="mx-2"
                  checked={this.state.selectedVPres === vleader.name}
                  onChange={this.voteVPres}
                />
                {vleader.name}
              </div>
            ))}
            <h2 className="pt-4">Class Representatives</h2>
            <label className="my-2">
              <b>Please choose 3 class Representatives</b> <br />
            </label>
            {this.state.forCRep.map((crep) => (
              <div key={crep.name}>
                <input
                  type="checkbox"
                  name="class_rep"
                  value={crep.name}
                  className="mx-2"
                  checked={this.state.selectedCReps.includes(crep.name)}
                  onChange={this.voteCRep}
                />
                {crep.name}
              </div>
            ))}

            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div>
          <h1 class="mt-4">Vote Record</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Total Votes</th>
              </tr>
            </thead>
            <tbody>
              {this.state.forMayor.map((mayor) => (
                <tr key={mayor.name}>
                  <td
                    className={
                      mayor.totalVotes === 0 ? "text-secondary" : "text-dark"
                    }
                  >
                    {mayor.name}
                  </td>
                  <td
                    className={
                      mayor.totalVotes === 0 ? "text-secondary" : "text-dark"
                    }
                  >
                    Mayor
                  </td>
                  <td
                    className={
                      mayor.totalVotes === 0 ? "text-secondary" : "text-dark"
                    }
                  >
                    {mayor.totalVotes}
                  </td>
                </tr>
              ))}

              {this.state.forVPres.map((vicepres) => (
                <tr key={vicepres.name}>
                  <td
                    className={
                      vicepres.totalVotes === 0 ? "text-secondary" : "text-dark"
                    }
                  >
                    {vicepres.name}
                  </td>
                  <td
                    className={
                      vicepres.totalVotes === 0 ? "text-secondary" : "text-dark"
                    }
                  >
                    Vice President
                  </td>
                  <td
                    className={
                      vicepres.totalVotes === 0 ? "text-secondary" : "text-dark"
                    }
                  >
                    {vicepres.totalVotes}
                  </td>
                </tr>
              ))}

              {this.state.forCRep.map((classrep) => (
                <tr key={classrep.name}>
                  <td
                    className={
                      classrep.totalVotes === 0 ? "text-secondary" : "text-dark"
                    }
                  >
                    {classrep.name}
                  </td>
                  <td
                    className={
                      classrep.totalVotes === 0 ? "text-secondary" : "text-dark"
                    }
                  >
                    Class Representative
                  </td>
                  <td
                    className={
                      classrep.totalVotes === 0 ? "text-secondary" : "text-dark"
                    }
                  >
                    {classrep.totalVotes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Elections;
