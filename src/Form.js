import './Form.css'
function Form(){
    
    return(
        <div className='Form'>
            <label className='Head'>Amazon Catalog Generator</label>
            <label className='title'>Generate content for single listing</label>
            <div class="">
                <form>
                    <div className=''>
                        <label>Product</label>
                        <input type="text" name="Product" id ="Product" placeholder="Brand_Name,Product_Name" required />
                        
                    </div>
                    <div className='container'>
                    <div>
                        <label>Keywords</label>
                        <textarea rows="9" type="text" name="Keywords" id="Keywords" placeholder="Values must be seperated by comma(,)" required></textarea>
                    </div>
                    <div>
                        <label>Features</label>
                        <textarea rows="9" type="text" name="Features" id="Features" placeholder="Values must be seperated by comma(,)" required></textarea>   
                    </div>
                    <div>
                        <label>Search Terms</label>
                        <textarea rows="9" type="text" name="search" id="search" placeholder="Values must be seperated by comma(,)"></textarea>
                    </div>
                    </div>
                    <div className='but'>
                        <button value="submit" id="submit" type="submit" >Gerate Catalog</button>
                    </div>  
                </form>
            </div>
        </div>
  
)
};

export default Form;