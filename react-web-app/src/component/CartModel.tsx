import { Component } from "react";

export class CartModel extends Component<any, {sizes:string[],idValue:string}> {
render (){
    return (
        <div className="modal" id={"id-"+this.props.idValue} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add to Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form className="row g-3 needs-validation" >
                    <div className="form-group">
<label >Email</label>
<input type="email" className="form-control" placeholder="Enter email"/>
</div>    
<div className="form-group">
<label >Password</label>
<input type="password" className="form-control" placeholder="Password"/>
</div>    
                        <div className="form-group">
                            <select className="form-select" defaultValue={3} >
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
                            { this.props.sizes.map((size:string)=>(<div className="form-check form-check-inline" key={size}>
                                <input className="form-check-input" type="radio" name="size" value={size} />
                                <label className="form-check-label" >{size}</label>
                            </div>)) }
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
}