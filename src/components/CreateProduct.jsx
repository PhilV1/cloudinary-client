const CreateProduct = () => {
  return (
    <div className="p-10">
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Description"
            className="textarea textarea-bordered"
          ></textarea>
        </div>
        <button className="btn btn-primary">Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct
