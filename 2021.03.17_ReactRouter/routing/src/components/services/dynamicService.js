import React from 'react';
import {useParams} from 'react-router-dom'

const DynamicService = () => {

    let parameters = useParams();
    console.log(parameters);

    return (
        <div>
            this is Dynamic Service {parameters.par}
        </div>
    );
};

export default DynamicService;