import React,{ useState } from 'react';
// import keywordExtractor from 'keyword-extractor';
import LoadingSpinner from './components/loadingSpinner';
import './Form.css'
import Select from './components/select.jsx';
import Select2 from './components/select2.jsx';
import Select3 from './components/select3.jsx';
import Select4 from './components/select4.jsx';


function Form(){
    
    const [flag,setflag] = useState(true);
    
    const [selectedMarketplace, setSelectedMarketplace] = useState('Amazon');
    const [selectedGender, setSelectedGender] = useState('Male');
    const [selectedAge, setSelectedAge] = useState();
    const [selectedTone, setSelectedTone] = useState('Friendly');
    const [product, setProduct] = useState('');
    const [brand, setBrand] = useState('');
    const [quantity, setQuantity] = useState('');
    const [features, setFeatures] = useState('');
    const [loading, setLoading] = useState(false);

    const [mData, setmData] = useState({});
    const [pData, setpData] = useState({});
    const [nData, setnData] = useState({});
    const [keywords, setKeywords] = useState([]);
        // const handleAutomaticClick = (event) => {
        //   event.preventDefault();
        //   const concatenatedText = product + ' ' + features;
        //   const extractedKeywords = keywordExtractor.extract(concatenatedText, {
        //     language: 'english',
        //     remove_digits: true,
        //     return_changed_case: true,
        //     remove_duplicates: true,
        //   });
        //   setKeywords(extractedKeywords);
        // };
    
   
  
    const handleAutomaticClick = (event) => {
        event.preventDefault(); 
      setKeywords(test);
    };
  
    const handleManualChange = (event) => {
        
      setKeywords(event.target.value);
    };
    const catalog = {
        product: product,
        brand:brand,
        marketplace: selectedMarketplace,
        gender:selectedGender,
        age:selectedAge,
        quantity:quantity,
        tone:selectedTone,
        features:features,
        keywords:keywords
    };
    
    const handleProductChange = (event) => {
        setProduct(event.target.value);
      };
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
      };
    const handleBrandChange = (event) => {
        setBrand(event.target.value);
      };
    const handleFeatureChange = (event) => {
        setFeatures(event.target.value);
      };
    const handleToneChange = (value) => {
        setSelectedTone(value);
      };
      const handleAgeChange = (value) => {
        if (value.length === 0) {
          setSelectedAge([""]); // Add an empty string to indicate no selection
        } else {
          setSelectedAge(value);
        }
      };
      
      
    const handleGenderChange = (value) => {
        setSelectedGender(value);
      };
    const handleMarketplaceChange = (value) => {
        setSelectedMarketplace(value);
      };
   

  
      const formatData = (data) => {
        const dataString = JSON.stringify(data); // Convert data object to string
        const formattedData = dataString.replace(
          /(Title:)(.*?)(Product Description:)(.*?)(Bullet Points:)([\s\S]*)/s,
          (match, title, titleValue, desc, descValue, bullet, bulletValue) => {
            //const productDescription = addLineBreaks(descValue.trim(), 180);
            const bulletPoints = addLineBreaksBullet(bulletValue.trim());
            return `${title}${titleValue}\n\n${desc}\n\n${descValue}\n\n${bullet}\n${bulletPoints}`;
          }
        );
      
        return formattedData;
      };
      
      
      // const addLineBreaks = (text, maxWidth) => {
      //   const words = text.split(' ');
      //   let currentLine = '';
      //   let lines = [];
      
      //   words.forEach((word) => {
      //     if (currentLine.length + word.length <= maxWidth) {
      //       currentLine += (currentLine === '' ? '' : ' ') + word;
      //     } else {
      //       lines.push(currentLine);
      //       currentLine = word;
      //     }
      //   });
      
      //   lines.push(currentLine);
      //   return lines.join('\n');
      // };
      
      const addLineBreaksBullet = (text) => {
        const lines = [];
        const bullets = text.split(/(?=\d\.)/);
      
        bullets.forEach((bullet) => {
          lines.push(bullet.trim());
        });
      
        return lines.join('\n');
      };
      
      
      
      
      // Usage
      const formattedOutput = formatData(mData);

    const handleSubmit = async (event) => {
        
        
   
        const catalog = {
          product: product,
          brand:brand,
          marketplace: selectedMarketplace,
          gender:selectedGender,
          age:selectedAge,
          quantity:quantity,
          tone:selectedTone,
          features:features,
          keywords:keywords
        };
        setLoading(true); 
        console.log(catalog);
        try {
            const response = await fetch(`https://cataloggeneratorv1.azurewebsites.net/api/CatalogGeneratorV1?product=${catalog.product}&brand=${catalog.brand}&marketplace=${catalog.marketplace}&gender=${catalog.gender}&age=${catalog.age}&quantity=${catalog.quantity}&tone=${catalog.tone}&features=${catalog.features}&keywords=${catalog.keywords}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(catalog)
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data = await response.json();
            setmData(data);
            setpData(data);
            setnData(data);
            setflag(false);
      console.log(data);

          } catch (error) {
            console.log(error);
          }
         setLoading(false);
        }
        const previous = () => {
          setmData(pData);
        }
        const next =()=>{
          setmData(nData);
        }
        const regenerate = async () => {
          setLoading(true);
            try {
              const response = await fetch(`https://cataloggeneratorv1.azurewebsites.net/api/CatalogGeneratorV1?product=${catalog.product}&brand=${catalog.brand}&marketplace=${catalog.marketplace}&gender=${catalog.gender}&age=${catalog.age}&quantity=${catalog.quantity}&tone=${catalog.tone}&features=${catalog.features}&keywords=${catalog.keywords}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(catalog),
              });
        
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              setpData(mData);
              const data = await response.json();
              setmData(data);
              setnData(data);
              
            } catch (error) {
              console.log(error);
            }
            setLoading(false);
    
          }
    return(
        <div>
        { flag ?
        <div className='Form'>
            <label className='Head'>Amazon Catalog Generator</label><br />
            <label className='title'>Generate content for single listing</label>
            <div className="">
                <form>
                    <div className=''>
                        <label>Product Name*</label>
                        <input type="text" name="Product" id ="Product"  required onChange={handleProductChange}/>
                        
                    </div>
                    <div className='hell'>
                        <label>Brand Name*</label>
                        <input type="text" name="brand" id ="brand" required onChange={handleBrandChange}/>
                        
                    </div>
                    <div className=''>
                        <label>Quantity*</label>
                        <input type="text" name="quantity" id ="quantity"  required onChange={handleQuantityChange}/>
                        
                    </div>
                    <div>
                        <div className='container'>
                            <div>
                                <label className='label-1'>Select Marketplace*</label>
                                <Select onChange={handleMarketplaceChange} />
                            </div>
                            <div>
                                <label className='label-1'>Select Gender*</label>
                                <Select2 onChange={handleGenderChange}/>

                            </div>
                            <div>
                                <label className='label-1-2'>Age Group*</label>
                                <Select3 onChange={handleAgeChange}/>

                            </div>
                            <div>
                                <label className='label-1'>Select Tone*</label>
                                <Select4 onChange={handleToneChange}/>

                            </div>
                        </div>
                    </div>
                    <div className='container-1'>
                    <div>
                        <label>Features*</label>
                        <textarea rows="7" type="text" name="Features" id="Features" placeholder="Values must be seperated by comma(,)" required onChange={handleFeatureChange}></textarea>   
                    </div>
                    <div>
                        <label>Keywords*</label>
                        <div>
                         <textarea
                         rows="7"
                         type="text"
                        
                         name="Keywords"
                         id="Keywords"
                         placeholder="Values must be separated by comma(,)"
                         value={keywords}
                         onChange={handleManualChange}
                         required
                       />

                    {/* <button  onClick={handleAutomaticClick} className='button-2' >
                    Generate Keywords
                    </button> */}
                    </div>
                        
                    </div>
                    </div>
                    <div className='but'>
                        <button onClick={() => { setflag(!flag); handleSubmit();}} type="button" className='button-1'  >Generate Catalog</button>
                    </div>  
                </form>
            </div>
        </div>
        : 
        <div className="response">
            <div className="content">
                <label className="r-title">Product Name: {catalog.product}</label><br /><br />
                {/* <pre className='r-label'>{formattedOutput}</pre> */}
                <textarea rows='24' value={formattedOutput} onChange={handleAutomaticClick}></textarea>
               {/* <pre className='r-label'>{mData}</pre> */}
            <br />
                
            </div>
            {loading && <LoadingSpinner />}
            <div className="buttons">
                <button onClick={regenerate} className="r-button">Regenerate Response</button>
                <button onClick={previous} className="r-button">Back</button>
                <button onClick={next} className="r-button">next</button>
                <button onClick={() => setflag(!flag)} className="r-button"  id="back">Back to Generate Catalog</button>
            </div>
             
        </div>

        }
    </div>
)
};

export default Form;

