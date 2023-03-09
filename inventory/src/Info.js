import React from "react";

// export default function Info() {
//     const title = "This is my title";
//     const showTitle = true;

//     return (
//         <div>
//             <h1>{showTitle ? title : "No title"}</h1>
//             <p>Manage your inventory</p>
//         </div>
//     );
// }

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        // this.buttonPressed = this.buttonPressed.bind(this);
    }

    buttonPressed() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.buttonPressed()}>Click Me!</button>
            </div>
        )
    }
}


Info.defaultProps = {
    title: "Default title"
}

export default Info;
