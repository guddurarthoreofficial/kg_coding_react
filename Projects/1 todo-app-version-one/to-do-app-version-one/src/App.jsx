

function App() {
  return (
    <>
      <div className="container mt-5">
      <h1 className="text-center fw-bold mb-4">Todo App</h1>

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

      {/* Todo List */}
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

          {/* Todo Item 2 */}
          <div className="d-flex justify-content-between align-items-center border-bottom py-3">
            <div>
              <h5 className="mb-1">Go to College</h5>
              <small className="text-muted">4/10/2023</small>
            </div>
            <button className="btn btn-danger px-4">Delete</button>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
