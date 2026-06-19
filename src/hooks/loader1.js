import React from "react";

function Loader1() {
    return (
        <div className="skeleton-row">
            {[0, 1, 2, 3].map((i) => (
                <div key={i} className="skeleton-card" />
            ))}
        </div>
    );
}

export default Loader1;
