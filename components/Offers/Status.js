import React from 'react';

const Status = ({
    isActivated
}) => {
    let status
    let color
    if(isActivated.user && !isActivated.admin){
        status = "Не потвърдена"
        color = "text-red-500"
    }
    if(isActivated.user && isActivated.admin) {
        status = "Активна"
        color = "text-green-500"
    }

    return (
        <div className={`${color}`}>
            {status}
        </div>
    );
}

export default Status;
