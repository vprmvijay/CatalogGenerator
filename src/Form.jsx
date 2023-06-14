import React,{ useState} from 'react';
// import keywordExtractor from 'keyword-extractor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from './components/loadingSpinner';
import './Form.css'
import Select from './components/select.jsx';
import Select2 from './components/select2.jsx';
import Select3 from './components/select3.jsx';
import Select4 from './components/select4.jsx';
//import Bulletpoints from'./components/Bulletpoints';
import { saveAs } from 'file-saver';




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

    

    const [keywords, setKeywords] = useState([]);
    const [responses, setResponses] = useState([]);
    //const [currentResponseIndex, setCurrentResponseIndex] = useState(0);
    //const totalResponses = responses.length;
    //const [title, setTitle] = useState('');
    //const [productDescription, setProductDescription] = useState('');
    //const [bulletPoints, setBulletPoints] = useState('');
    
    const [isCollapsedArray, setIsCollapsedArray] = useState([]);
    const handleDownload = (index) => {
      const response = responses[index];
      const formattedText = response.replace(/(Title:|Product Description:|Features:|Bullet point:)/g, '\n$1');
      const blob = new Blob([formattedText], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, `responses${index+1}.txt`);
    };
    
    
    const copyTitleClipboard = (index) =>{
      const temp=getTitle(index);
      const tempInput = document.createElement('textarea');
      tempInput.value = temp;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    };
    const copyPDClipboard = (index) =>{
      const temp=getProductDescription(index);
      const tempInput = document.createElement('textarea');
      tempInput.value = temp;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    };
    const copyBPClipboard = (value) =>{
      const temp=value
      const tempInput = document.createElement('textarea');
      tempInput.value = temp;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    };
   
    const getTitle = (index) => {
      if (responses[index]) {
        const matches = responses[index].match(/(Title:)(.*?)(Product Description:)/s);
      if (matches && matches[2]) {
        return matches[2].trim();
        }
      }
      return '';
    };

    const getProductDescription = (index) => {
      if (responses[index]) {
        const matches = responses[index].match(/(Product Description:)(.*?)(Features:)/s);
        if (matches && matches[2]) {
          return matches[2].trim();
        }
      }
    return '';
    };

    const getBulletPoints = (index) => {
      if (responses[index]) {
        const matches = responses[index].match(/(Features:)([\s\S]*)/s);
        if (matches && matches[2]) {
          const bulletPoints = matches[2].trim();
          const bulletPointArray = bulletPoints.split("Bullet point: ");
          return bulletPointArray;
        }
      }
      return [];
    };
  

    const handleTitleChange = (event) => {

    };

    const handleProductDescriptionChange = (event) => {

    };



    //const [isManuallyModified, setIsManuallyModified] = useState(false);

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
        // const updateResponseElement = (index, newValue) => {
        //   setResponses(prevResponses => {
        //     const newResponses = [...prevResponses]; // Create a copy of the original array
        //     newResponses[index] = newValue; // Update the desired element
        //     return newResponses; // Set the new array as the state value
        //   });
        // };
        
        
   
  
    
  
    const handleManualChange = (event) => {       
      setKeywords(event.target.value);
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
      
      
      // Usage
      //const currentResponse = responses[currentResponseIndex];
      //const formattedOutput = currentResponse ? formatData(currentResponse) : '';
      const handleBulletPointChange = (event, index) => {
        const newBulletPoints = [...getBulletPoints()];
        newBulletPoints[index] = event.target.value;
        //setBulletPoints(newBulletPoints.join(' - '));
      };
      
      
    const handleSubmit = async (event) => {
        setflag(false);
      event.preventDefault();
      
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
            
           
            setResponses(prevResponses => [...prevResponses, data]);
            ///setCurrentResponseIndex(totalResponses);
            setflag(false);
            console.log(data);

          } catch (error) {
            console.log(error);
          }
         setLoading(false);
        }
        
        
        // const regenerate = async () => {
        //   setLoading(true);
        //   //setIsManuallyModified(false);
        //     try {
        //       const response = await fetch(`https://cataloggeneratorv1.azurewebsites.net/api/CatalogGeneratorV1?product=${catalog.product}&brand=${catalog.brand}&marketplace=${catalog.marketplace}&gender=${catalog.gender}&age=${catalog.age}&quantity=${catalog.quantity}&tone=${catalog.tone}&features=${catalog.features}&keywords=${catalog.keywords}`, {
        //         method: 'POST',
        //         headers: {
        //           'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(catalog),
        //       });
        
        //       if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //       }
              
        //       const data = await response.json();
        //       setResponses(prevResponses => [...prevResponses, data]);
        //       setCurrentResponseIndex(totalResponses);
              
              
              
        //     } catch (error) {
        //       console.log(error);
        //     }
        //     setLoading(false);
            
        //   }
    return(
        <div className='brahma'>
            <div className='bar'>
                <div className='split'>
                <div className='splittitle'>
                  <label className='Head'>brahmã</label><br />
                  <label className='title'>Generate Amazon Catalog Content</label>
                </div>
                <div className='helpbutton'>
                <button className='b-button'>Help</button>
                </div>
                  
                </div>
                
            </div>
            <div className="line" /> 
            <div className='page'>
              <div className="Form">
                <form onSubmit={handleSubmit}>
                    <div className=''>
                        <label>Product Name*</label>
                        <input type="text" name="Product" id ="Product"  required onChange={handleProductChange}/>
                        
                    </div>
                    <div className='hell'>
                        <label>Brand Name*</label>
                        <input type="text" name="brand" id ="brand" required onChange={handleBrandChange}/>
                        
                    </div>
                    <div className=''>
                        <label>Quantity</label>
                        <input type="text" name="quantity" id ="quantity" onChange={handleQuantityChange}/>
                        
                    </div>
                    <div>
                        <div className='container'>
                            <div>
                                <label className='label'>Select Marketplace*</label>
                                <Select onChange={handleMarketplaceChange} />
                            </div>
                            <div>
                                <label className='label'>Select Gender*</label>
                                <Select2 onChange={handleGenderChange}/>
                            </div>
                        </div>
                        <div className='container'>
                            <div>
                                <label className='label'>Select Age Group*</label>
                                <Select3 onChange={handleAgeChange}/>
                            </div>
                            <div>
                                <label className='label'>Select Tone*</label>
                                <Select4 onChange={handleToneChange}/>

                            </div>
                        </div>
                    </div>
                    <div className='container'>
                    <div>
                        <label>Features*</label>
                        <textarea className="enter" rows="7" type="text" name="Features" id="Features" placeholder="Values must be seperated by comma(,)" required onChange={handleFeatureChange}></textarea>   
                    </div>
                    <div>
                        <label>Keywords*</label>
                        <div>
                         <textarea
                         className='enter'
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
                        <button  type="submit" className='button-1'  >{flag ?'Generate catalog':"Regenerate catalog"}</button>
                    </div>  
                </form>
              </div>
             

              
              <div className="response">
                {flag && <label className='ph'>Generate Response For Single Listing</label>}
                {loading && <LoadingSpinner />}
                {responses.map((response,index)=> (
                
                  <div key={index} className='rescon'>
                 
                  <div onClick={() => setIsCollapsedArray(prevArray => {
                  const newArray = [...prevArray];
                  newArray[index] = !newArray[index]; // Toggle the collapse state for the current index
                  return newArray;
                  })} className="collapse-button">
                    <button type="button" className='res-button'>Response {index+1}</button>
                    <div className="download-icon" onClick={() => handleDownload(index)}>
                      <FontAwesomeIcon icon={faDownload} />
                    </div>
                    <div className="down-icon">
                      {isCollapsedArray[index] ? <FontAwesomeIcon icon={faChevronDown} rotation={270} />:<FontAwesomeIcon icon={faChevronDown} /> }
                    </div>
                  </div>
                  {!isCollapsedArray[index] && (
                    <div className="content">
                                   
                    <div className='r-title'>
                     <div className='r-title-s'>
                       <label>Title:</label>
                       <div className='r-svg'>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em"  onClick={()=>copyTitleClipboard(index)} fill="currentColor" className="h-4 w-4 fill-gray-6 hover:fill-gray-7 dark:fill-dark-gray-6 dark:hover:fill-dark-gray-7 hidden group-hover:block"><path fillRule="evenodd" d="M11.3 8.3H19a3 3 0 013 3V19a3 3 0 01-3 3h-7.7a3 3 0 01-3-3v-7.7a3 3 0 013-3zm0 2a1 1 0 00-1 1V19a1 1 0 001 1H19a1 1 0 001-1v-7.7a1 1 0 00-1-1h-7.7zm-5.6 3.4a1 1 0 110 2h-.9A2.8 2.8 0 012 12.9V4.8A2.8 2.8 0 014.8 2h8.1a2.8 2.8 0 012.8 2.8v.9a1 1 0 11-2 0v-.9a.8.8 0 00-.8-.8H4.8a.8.8 0 00-.8.8v8.1a.8.8 0 00.8.8h.9z" clipRule="evenodd"></path></svg>
                       </div>
                     </div>
                     <textarea rows="4" value={getTitle(index)} onChange={handleTitleChange} ></textarea>
                    </div>
                    <div className='r-title'>
                     <div className='r-title-s'>
                       <label>Product Description:</label>
                       <div className='r-svg'>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" onClick={()=>copyPDClipboard(index)} fill="currentColor" className="h-4 w-4 fill-gray-6 hover:fill-gray-7 dark:fill-dark-gray-6 dark:hover:fill-dark-gray-7 hidden group-hover:block"><path fillRule="evenodd" d="M11.3 8.3H19a3 3 0 013 3V19a3 3 0 01-3 3h-7.7a3 3 0 01-3-3v-7.7a3 3 0 013-3zm0 2a1 1 0 00-1 1V19a1 1 0 001 1H19a1 1 0 001-1v-7.7a1 1 0 00-1-1h-7.7zm-5.6 3.4a1 1 0 110 2h-.9A2.8 2.8 0 012 12.9V4.8A2.8 2.8 0 014.8 2h8.1a2.8 2.8 0 012.8 2.8v.9a1 1 0 11-2 0v-.9a.8.8 0 00-.8-.8H4.8a.8.8 0 00-.8.8v8.1a.8.8 0 00.8.8h.9z" clipRule="evenodd"></path></svg>
                       </div>
                     </div>
                     <textarea rows="10" value={getProductDescription(index)} onChange={handleProductDescriptionChange}></textarea>
                     </div>
                    <div>
                  {getBulletPoints(index).map((bulletPoint, index) => (
                    
                   
                    <div key={index}>
               
                      {index > 0 && (
                        
                        <>
                        <div className='r-title'>
                          <div className='r-title-s'>
                          <label htmlFor={`bulletPoint${index}`}>Bullet Point {index}:</label>
                          <div className='r-svg'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" onClick={()=>copyBPClipboard(bulletPoint)} fill="currentColor" className="h-4 w-4 fill-gray-6 hover:fill-gray-7 dark:fill-dark-gray-6 dark:hover:fill-dark-gray-7 hidden group-hover:block"><path fillRule="evenodd" d="M11.3 8.3H19a3 3 0 013 3V19a3 3 0 01-3 3h-7.7a3 3 0 01-3-3v-7.7a3 3 0 013-3zm0 2a1 1 0 00-1 1V19a1 1 0 001 1H19a1 1 0 001-1v-7.7a1 1 0 00-1-1h-7.7zm-5.6 3.4a1 1 0 110 2h-.9A2.8 2.8 0 012 12.9V4.8A2.8 2.8 0 014.8 2h8.1a2.8 2.8 0 012.8 2.8v.9a1 1 0 11-2 0v-.9a.8.8 0 00-.8-.8H4.8a.8.8 0 00-.8.8v8.1a.8.8 0 00.8.8h.9z" clipRule="evenodd"></path></svg>
                          </div>
                          </div>
                          <textarea
                          id={`bulletPoint${index}`}
                          rows={3}
                          value={bulletPoint}
                          onChange={event => handleBulletPointChange(event, index)}
                          />
                        </div>
                        </>
                      )}
                    </div>
                  ))}
 
             
             </div>
                 
             
                 </div>
               )}
             </div>
             
             ))}
             
             
              </div>
              
            </div>
            <div className='footer'>
              <label className='foot'>To give a feedback, please click on the <span className='whats'>what'sapp</span> button.</label>
            </div>
        </div>
)
};

export default Form;

