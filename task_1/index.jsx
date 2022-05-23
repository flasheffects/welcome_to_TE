import { Component } from 'react';


// Task 1 - solution start
const [name, setName] = useState("");

  useEffect(() => { 
  }, [name]);
// Task 1 - solution end


// functional component
const FirstComponent = ({ name }) => (
    <div>my name is {name}</div>
);

// class component
class SecondComponent extends Component {
    render() {
        return (
            <div>my name is {this.props.name}</div>
        )
    }
}
