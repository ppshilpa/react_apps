
export const CartModel = () => {
    return (
        <div className="modal" id="CartModal" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add to Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form className="row g-3 needs-validation" >
                        <div className="form-group">
                            <select className="form-select" >
                                <option >Select Quantity</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Select Size</label><br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="size" value="option1" />
                                <label className="form-check-label" >S</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="size" value="option2" />
                                <label className="form-check-label" >M</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="size" value="option3" />
                                <label className="form-check-label" >XL </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Checkout</button>
                </div>
            </div>
        </div>
        </div >)
}