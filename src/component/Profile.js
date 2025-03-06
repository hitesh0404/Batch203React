import React from 'react';

const Profile = ({name , age, img}) => {
    return (
        <>
            <div class="card col-4 bg-dark text-primary">
                <img class="card-img-top" src={img} alt="Title" height={100} width={100} />
                <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <p class="card-text">{age}</p>
                </div>
            </div>
        </>
    );
};

export default Profile;