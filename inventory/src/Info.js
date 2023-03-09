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
        console.log(props)
    }

    render() {
        const title = this.props.title
        const showTitle = true;

        return (
            <div>
                <h1>{showTitle ? title : "No title"}</h1>
                <p>Manage your inventory</p>
            </div>
        );
    }
}


Info.defaultProps = {
    title: "Default title"
}

export default Info;
