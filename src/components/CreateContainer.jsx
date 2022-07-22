import React from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
import {categories} from '../components/data'
import {Md, MdAttachMoney, MdCategory, MdCloudUpload, MdDelete, MdDescription, MdFastfood, MdFoodBank, MdMoney, MdPriceChange, MdPriceCheck} from 'react-icons/md'
import Loader from './Loader'
import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import {storage} from '../firebase'
import { saveNewItem } from '../utils/firebaseFunctions'

const CreateContainer = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState(null);
  const [desc, setDesc] = useState('');
  const [calories, setCalories] = useState('');
  const [cost, setCost] = useState('');
  const [fields, setFields] = useState(false);

  const [progress, setprogress] = useState(false);
  const [warning, setWarning] = useState('Danger');
  const [msg, setMsg] = useState('');
  const [image, setImage] = useState(null);

  const handleUploadImage = (e) =>{
    setprogress(true)
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, (error) => {
      console.log(error);
      setFields(true)
      setMsg("Error while uploading image. Please Try again ⚠️!");
      setWarning("Danger");
      setTimeout(()=>{
        setFields(false);
        setprogress(false);
      }, 4000)
    }, ()=> {
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        setImage(downloadURL)
        setprogress(false)
        setFields(true)
        setMsg("Image Uploaded Successfully 😊");
        setWarning('Success')
        setTimeout(() => {
          setFields(false);
          setprogress(false);
        }, 4000)
      })
    });
  }
  
  const handleDeleteImage = () =>{
    setprogress(true)
    const deleteRef = ref(storage, image);
    deleteObject(deleteRef).then(()=>{
      setImage(null)
      setprogress(false)
      setFields(true)
      setMsg("Image Deleted Successfully 😊");
      setWarning('Success')
      setTimeout(() => {
        setFields(false);
        setprogress(false);
      }, 4000)
    })
  }

  const handleSave = () =>{
    setprogress(true)
    try {
      if(!name || !calories || !desc || !cost || !category || !image)
      {
        setFields(true)
        setMsg("Please fill all the fields");
        setWarning("Danger");
        setTimeout(()=>{
          setFields(false);
          setprogress(false);
        }, 4000)
      }
      else{
        const data = {
          id:`${Date.now()}-${name}`,
          title: name,
          imageURL : image,
          category : category,
          cost: cost,
          desc : desc,
          qty : 1
        }
        saveNewItem(data);
        setprogress(false)
        setFields(true);
        clearAll();
        setMsg("Data Saved Successfully 😊");
        setWarning('Success')
        setTimeout(() => {
          setFields(false);
          setprogress(false);
        }, 4000)

      }
    } catch (error) {
      console.log(error);
      setFields(true)
      setMsg("Error while Saving New Item. Please Try again ⚠️!");
      setWarning("Danger");
      setTimeout(()=>{
        setFields(false);
        setprogress(false);
      }, 4000)
    }
  }

  const clearAll = () =>{
    setName("")
    setCalories("other")
    setCategory(null)
    setCost('')
    setImage(null)
    setDesc('')
  }

  return (
    <div className='w-full flex items-center justify-center min-h-screen p-2'>
      <div className='gap-3 flex flex-col justify-center ml-auto mr-auto items-center w-[70%] md:w-[55%] border p-4 border-red-500 rounded-lg'>
        {
          fields && (
            <motion.p
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              className={`w-full p-2 font-semibold text-center ${warning==='Danger' ? "bg-red-300" : 'bg-green-600'}`}>
              {msg}
            </motion.p>
        )}
        <div className='w-full py-2  flex items-center justify-center gap-3 border-b'>
          <MdFastfood className='text-xl text-gray-600'/>
          <input type="text" required value={name}
           onChange={(event)=>setName(event.target.value)}
           className="w-full h-full text-lg placeholder:text-gray-400 font-semibold p-1 bg-transparent  text-textColor border-gray-300 outline-none" 
           placeholder="Item Name"/>
        </div>
        <div className='w-full py-2  flex items-center justify-center border-b gap-3'>
          <MdCategory className='text-xl text-gray-600'/>
          <select required
           onChange={(event)=>setCategory(event.target.value)}
           className="w-full h-full text-lg placeholder:text-gray-400 font-semibold p-1 bg-transparent  text-textColor border-gray-300 outline-none" 
           >
            <option className='text-textColor border-gray-300 outline-none' value={"other"}>Choose Category</option>
            {
              categories && categories.map((item)=>(
                <option key={item.id} value={item.url} className='text-base border-0 outline-none bg-white text-textColor'>
                  {item.name}
                </option>
              )) 
            }
           </select>
        </div>
        <div className='w-full py-2  flex items-center justify-center gap-3 border-b'>
          <MdDescription className='text-xl text-gray-600'/>
          <input type="text" required value={desc}
           onChange={(event)=>setDesc(event.target.value)}
           className="w-full h-full text-lg placeholder:text-gray-400 font-semibold p-1 bg-transparent  text-textColor border-gray-300 outline-none" 
           placeholder="Item Description"/>
        </div>
        <div className='group flex flex-col items-center justify-center rounded-lg  border-2 border-gray-300 w-full h-[325px] md:h-[320px] cursor-pointer'>
            {
              progress?<Loader/>:<>
                {
                  !image? <>
                    <label className='flex flex-col items-center justify-center cursor-pointer w-full h-full'>
                      <div className='flex flex-col items-center justify-center w-full h-full'>
                        <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-600'/>
                        <p className='text-gray-500 hover:text-gray-600'>Upload Food Image</p>
                      </div>
                      <input type={"file"} name="uploadImage" className='w-0 h-0' onChange={handleUploadImage} accept='image/*'/>
                    </label>
                  </>:
                  <>
                    <div className='relative h-full'>
                      <img src={image} className="w-full h-full object-cover" />
                      <button type="button" className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-lg
                      duration-500 transition-all ease-in-out' onClick={handleDeleteImage}>
                        <MdDelete className='text-white'/>
                      </button>
                    </div>
                  </>
                }
              </>
            }

        </div>
        <div className='w-full py-2 flex items-center justify-between gap-5'>
          <div className='w-full py-2  flex items-center justify-center gap-3 border-b'>
            <MdFoodBank className='text-xl text-gray-600'/>
            <input type="number" required value={calories}
            onChange={(event)=>setCalories(event.target.value)}
            className="w-full h-full text-lg placeholder:text-gray-400 font-semibold p-1 bg-transparent  text-textColor border-gray-300 outline-none" 
            placeholder="Calories"/>
          </div>
          <div className='w-full py-2  flex items-center justify-center gap-3 border-b'>
            <MdAttachMoney className='text-xl text-gray-600'/>
            <input type="number" required value={cost}
            onChange={(event)=>setCost(event.target.value)}
            className="w-full h-full text-lg placeholder:text-gray-400 font-semibold p-1 bg-transparent  text-textColor border-gray-300 outline-none" 
            placeholder="Cost"/>
          </div>
        </div>
       
        <div className='flex items-center justify-center w-full'>
          <button type='button' 
          onClick={handleSave}
          className='ml-0 md:ml-auto w-full bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold md:w-auto border-none outline-none'>
            Add Item
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateContainer