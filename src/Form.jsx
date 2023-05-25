import { useState } from 'react';


import './Form.css'
import Select from './components/select.jsx';
import Select2 from './components/select2.jsx';
import Select3 from './components/select3.jsx';
import Select4 from './components/select4.jsx';


function Form(){
    
    const [flag,setflag] = useState(true);
    const [show1, setShow1] = useState(false);
    const [show, setShow] = useState(false);
    const [selectedMarketplace, setSelectedMarketplace] = useState('Amazon');
    const [selectedGender, setSelectedGender] = useState('Male');
    const [selectedAge, setSelectedAge] = useState('Teen');
    const [selectedTone, setSelectedTone] = useState('Friendly');
    const [product, setProduct] = useState('');
    const [features, setFeatures] = useState('');
    const [manual, setManual] = useState('');
    let [mData, setmData] = useState({});
    const test="hello,this,is,sample,keywords";
    const catalog = {
        product: product,
        marketplace: selectedMarketplace,
        gender:selectedGender,
        age:selectedAge,
        tone:selectedTone,
        features:features,
        keywords:manual
    };
    const handleManualChange = (event) => {
        setManual(event.target.value);
      };
    const handleProductChange = (event) => {
        setProduct(event.target.value);
      };
    const handleFeatureChange = (event) => {
        setFeatures(event.target.value);
      };
    const handleToneChange = (value) => {
        setSelectedTone(value);
      };
    const handleAgeChange = (value) => {
        setSelectedAge(value);
      };
    const handleGenderChange = (value) => {
        setSelectedGender(value);
      };
    const handleMarketplaceChange = (value) => {
        setSelectedMarketplace(value);
      };

    const handleSubmit = async (event) => {
        

   
        const catalog = {
            product: product,
            marketplace: selectedMarketplace,
            gender:selectedGender,
            age:selectedAge,
            tone:selectedTone,
            features:features,
            keywords:manual
        };

        console.log(catalog);
        try {
            const response = await fetch(``, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(catalog)
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data = await response.json(); // Parse the JSON response
            mData = data;
          } catch (error) {
            console.log(error);
          }
        //   setmData({
        //     ...mData,
        //     [event.target.name]: event.target.value,
        //   });
        }
        const regenerate = async () => {
            try {
              const response = await fetch(`API_ENDPOINT_URL`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(catalog),
              });
        
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
        
              const data = await response.json();
             mData=data;
            } catch (error) {
              console.log(error);
            }
    };
    
    
    return(
        <div>
        { flag ?
        <div className='Form'>
            <label className='Head'>Amazon Catalog Generator</label>
            <label className='title'>Generate content for single listing</label>
            <div className="">
                <form>
                    <div className=''>
                        <label>Product*</label>
                        <input type="text" name="Product" id ="Product" placeholder="Brand_Name,Product_Name" required onChange={handleProductChange}/>
                        
                    </div>
                    <div>
                        <div className='container'>
                            <div>
                                <label className='label-1'>Select Marketplace</label>
                                <Select onChange={handleMarketplaceChange} />
                            </div>
                            <div>
                                <label className='label-1'>Select Gender</label>
                                <Select2 onChange={handleGenderChange}/>

                            </div>
                            <div>
                                <label className='label-1'>AgeGroup</label>
                                <Select3 onChange={handleAgeChange}/>

                            </div>
                            <div>
                                <label className='label-1'>Select Tone</label>
                                <Select4 onChange={handleToneChange}/>

                            </div>
                        </div>
                    </div>
                    <div className='container-1'>
                    <div>
                        <label>Features*</label>
                        <textarea rows="9" type="text" name="Features" id="Features" placeholder="Values must be seperated by comma(,)" required onChange={handleFeatureChange}></textarea>   
                    </div>
                    <div>
                        <label>Keywords</label>
                        <div>
                            { show1 ? <div> 
                                        <p className='generate'>These are the generated Keywords --</p>
                                        <textarea  readOnly value={test}></textarea>
                                    </div>  : null }
                            {show ? <div>
                                        <p className='manual'>Enter the keywords manually --</p>
                                        <textarea rows="4" type="text" name="Keywords" id="Keywords" placeholder="Values must be separated by comma(,)" required onChange={handleManualChange}></textarea> 
                                    </div>  : null } 
                            { show1 ? null: <button  onClick={() => setShow1(!show1)} className='button-2' value="automatic" id="automatic" >Generate Keywords Automatically</button>}
                            { show ? null : <button onClick={() => setShow(!show)} className='button-2' value="manual" id="manual" >Enter Keywords Manually</button>  }  
                                                    
                        </div>
                        
                    </div>
                    </div>
                    <div className='but'>
                        <button onClick={() => { setflag(!flag); handleSubmit();}} className='button-1' value="submit" id="submit" >Generate Catalog</button>
                    </div>  
                </form>
            </div>
        </div>
        : 
        <div class="response">
            <div class="content">
                <label class="r-title">Product Name: {catalog.product}</label><br />
                <label class="r-label">Title: </label><br />
                <label class="r-value">{mData.title}</label><br />
                <label class="r-label">Product Description:</label><br />
                <label class="r-value">{mData.productdescription}</label><br />
                <label class="r-label">Bullet Points:</label><br />
                <label class="r-value">{mData.bulletpoints}</label><br />
                <label class="r-label">Search Terms:</label><br />
                <label class="r-value">{mData.searchterms}</label><br />
            </div>
            <div class="buttons">
                <button onClick={regenerate} class="r-button">Regenerate Response</button>
                <button onClick={() => setflag(!flag)} class="r-button" value="back" id="back">Back to Generate Catalog</button>
            </div>
        </div>
        }
    </div>
)
};

export default Form;