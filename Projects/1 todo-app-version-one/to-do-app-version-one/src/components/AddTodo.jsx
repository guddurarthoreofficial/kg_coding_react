import React from 'react'

function AddTodo() {
    return (
        <div className="container mt-5">

            {/* Input Row */}
            <div className="row g-2 justify-content-center mb-4">
                <div className="col-md-5">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Todo here"
                    />
                </div>

                <div className="col-md-3">
                    <input
                        type="date"
                        className="form-control form-control-lg"
                    />
                </div>

                <div className="col-md-2 d-grid">
                    <button className="btn btn-success btn-lg">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo