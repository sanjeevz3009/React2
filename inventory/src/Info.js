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
    render() {
        const title = "This is my title";
        const showTitle = true;

        return (
            <div>
                <h1>{showTitle ? title : "No title"}</h1>
                <p>Manage your inventory</p>
            </div>
        );
    }
}

export default Info;
