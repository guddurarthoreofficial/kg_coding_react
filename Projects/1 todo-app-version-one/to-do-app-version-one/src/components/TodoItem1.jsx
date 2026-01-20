import React from 'react'

function TodoItem1() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-10">

                {/* Todo Item 1 */}
                <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                    <div>
                        <h5 className="mb-1">Buy Milk</h5>
                        <small className="text-muted">4/10/2023</small>
                    </div>
                    <button className="btn btn-danger px-4">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem1