function Form(){
    
    return(
        <div>
            <label>Generate content for single listing</label>
            <div class="">
                <form name="myForm">
                    <div>
                        <label>Product</label>
                        <input type="text" name="Product" id ="Product" placeholder="Brand,Product_Name" required />
                        
                    </div>
                    <div>
                        <label>Keywords</label>
                        <textarea rows="6" type="text" name="Keywords" id="Keywords" ></textarea>
                    </div>
                    <div>
                        <label>Features</label>
                        <textarea rows="6" type="text" name="Features" id="Features" ></textarea>   
                    </div>
                    <div>
                        <label>Search</label>
                        <textarea rows="6" type="text" name="search" id="search"></textarea>
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