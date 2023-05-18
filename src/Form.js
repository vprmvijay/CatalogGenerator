import './Form.css'
function Form(){
    
    return(
        <div className='Form'>
            <label className='title'>Generate content for single listing</label>
            <div class="">
                <form>
                    <div className=''>
                        <label>Product</label>
                        <input type="text" name="Product" id ="Product" placeholder="Brand,Product_Name" required />
                        
                    </div>
                    <div className='container'>
                    <div>
                        <label>Keywords</label>
                        <textarea rows="9" type="text" name="Keywords" id="Keywords" ></textarea>
                    </div>
                    <div>
                        <label>Features</label>
                        <textarea rows="9" type="text" name="Features" id="Features" ></textarea>   
                    </div>
                    <div>
                        <label>Search</label>
                        <textarea rows="9" type="text" name="search" id="search"></textarea>
                    </div>
                    </div>
                    <div>
                        <button value="submit" id="submit" type="submit" >Gerate Catalog</button>
                    </div>  
                </form>
            </div>
        </div>
  
)
};

export default Form;