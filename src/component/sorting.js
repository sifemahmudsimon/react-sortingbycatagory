import React, { useState } from 'react';

const Sorting = () => {

    const [show, setShow] = useState('all');

    const [data, setData] = useState([]);

    const [sorted, setSorted] = useState([]);


    const handleClick = (val) => {
        setShow(val);

        if (val === 'active') {
            const activeTasks = data.filter(data => data.status === 'Active');
            setSorted(activeTasks);
          } else if (val === 'completed') {
            const completedTasks = data.filter(data => data.status === 'Completed');
            setSorted(completedTasks);
          }else if(val === 'other'){
            const otherTasks = data.filter(data => data.status !== 'Active' && data.status !== 'Completed');
            setSorted(otherTasks);
          }else {
            setSorted(data);
          }          
    }

    const handleSubmit = (e) => { 
        e.preventDefault();

        const Name=e.target.elements.name.value;
        const Status=e.target.elements.status.value;
        const updateData = [...data, {name: Name, status: Status}];
        setData(updateData);

        e.target.reset();
    }


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Sorting By Status</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4"  onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name='name' />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name='status' />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'other' && 'active'}`} type="button" onClick={() => handleClick('other')}>Other</button>
                        </li>
                        
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sorted.map(
                                (data,index)=>(
                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.status}</td>
                                    </tr>)
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Sorting;