import React, {useState} from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        massage: "",


    })
    const inputEvent = (e) => {
        const {name, value} = e.target;
        setData(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }
    const fromSubmit = (e) => {
        e.preventDefault();
        alert(`Your name is ${data.fullName}. Your phone number is ${data.phone}.
         Your email address is ${data.email}. And you send me {${data.massage}} `)
    }


    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="col-md-6 col-10 mx-auto">
                                <form onSubmit={fromSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput"
                                               placeholder="Enter your name"
                                               required
                                               name="fullName"
                                               value={data.fullName}
                                               onChange={inputEvent}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Phone No</label>
                                        <input type="number" className="form-control" id="formGroupExampleInput"
                                               placeholder="Enter your phone number"
                                               required
                                               name="phone"
                                               value={data.phone}
                                               onChange={inputEvent}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">Email
                                            Address</label>
                                        <input type="email" className="form-control" id="formGroupExampleInput2"
                                               placeholder="Enter your email address"
                                               required
                                               name="email"
                                               value={data.email}
                                               onChange={inputEvent}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">
                                            Massage
                                        </label>
                                        <textarea type="text" className="form-control" id="formGroupExampleInput2"
                                                  placeholder="Enter your massage"
                                                  required
                                                  name="massage"
                                                  value={data.massage}
                                                  onChange={inputEvent}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary form-control mt-4">Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
