import { useState } from 'react';
import './Form.css'
import Select from './components/select.jsx';
import Select2 from './components/select2.jsx';
import Select3 from './components/select3.jsx';
import Select4 from './components/select4.jsx';
import Generate from './components/Generate.jsx'
import Manual from './components/Manual';

function Form(){
    const [show1, setShow1] = useState(false);
    const [show, setShow] = useState(false);
    const [selectedMarketplace, setSelectedMarketplace] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedTone, setSelectedTone] = useState('');
    const [product, setProduct] = useState('');
    const [features, setFeatures] = useState('');
    const [manual, setManual] = useState('');
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

    const handleSubmit = (event) => {
        event.preventDefault();

   
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
    };
    return(
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
                            { show1 ? <Generate /> : null }
                            {show ? <textarea rows="6" type="text" name="Keywords" id="Keywords" placeholder="Values must be separated by comma(,)" required onChange={handleManualChange}></textarea> : null} 
                            { show1 ? null: <button  onClick={() => setShow1(!show1)} className='button-2' value="automatic" id="automatic" >Generate Keywords Automatically</button>}
                            { show ? null : <button onClick={() => setShow(!show)} className='button-2' value="manual" id="manual" >Enter Keywords Manually</button>  }  
                                                    
                        </div>
                        
                    </div>
                    </div>
                    <div className='but'>
                        <button className='button-1' value="submit" id="submit" onClick={handleSubmit}>Generate Catalog</button>
                    </div>  
                </form>
            </div>
        </div>
  
)
};

export default Form;