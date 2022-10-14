
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

export default function Form ({ setInput }) {

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setInput(URL.createObjectURL(file));
      };
    return  (
        <div className="form">
            <input 
            type="file" 
            id="file" 
            name="file"
            accept="image/png, image/jpeg" 
            className='picture_input' 
            onChange = { (e) => onImageChange(e)
            }/>

           
            <label htmlFor="file"><AddPhotoAlternateOutlinedIcon /></label>
        </div>
    )
}