import { useState, useEffect } from "react";

function Form({ addProduct, closeForm, initialData }) {
    const [save, setSave] = useState({
        name: '',
        mobile: '',
        place: ''
    });

    const [submit,setSubmit]=useState(false);

    useEffect(() => {
        if (initialData) {
            setSave(initialData);
        }
    }, [initialData]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setSave((data) => ({
            ...data, [id]: value
        }));
    }

    const saveUser = (e) => {
        e.preventDefault();
        // Call the addProduct function from App component
        addProduct(save);
        // Reset form fields after submission
        setSave({
            name: '',
            mobile: '',
            place: ''
        });
    }

    return (
        <>
            <div className="user-data-form">
                <form onSubmit={saveUser}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control w-100" id="name"
                            aria-describedby="emailHelp" value={save.name} onChange={handleInputChange} />

                            {
                               submit && save.name===''&& <span className='text-danger'>Enter user name</span>
                            }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input type="text" className="form-control w-100" id="mobile"
                            value={save.mobile} onChange={handleInputChange} />
                             {
                               submit && save.mobile===''&& <span className='text-danger'>Enter Mobile name</span>
                            }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="place" className="form-label">Place</label>
                        <input type="text" className="form-control w-100" id="place"
                            value={save.place} onChange={handleInputChange} />
                             {
                               submit && save.place===''&& <span className='text-danger'>Enter Place</span>
                            }
                    </div>
                    <button type="submit" className="btn btn-primary mx-auto"   onClick={(e)=>{
                             e.preventDefault();
                             setSubmit(true);
                             if(!!save.name && !!save.mobile && !!save.place)
                             {
                                 addProduct(save);
                             }
                    }}>Send</button>
                    <button type="button" className="btn btn-danger mx-auto float-end" onClick={closeForm}>Close</button>
                </form>
            </div>
        </>
    );
}

export default Form;
