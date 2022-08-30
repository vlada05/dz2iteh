import React from 'react'

const AppContaner = ({ title, children }) => {
    return (
        <div className="container" style={{margin: "10px auto"}}>
            <div className="card">
                <h5 className="card-header">{title}</h5>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AppContaner;
