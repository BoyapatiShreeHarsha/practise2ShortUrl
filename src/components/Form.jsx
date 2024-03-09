import React,{useState,useEffect} from 'react'
import styles from './styles/Form.module.css'
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUrl } from '../app/urlSlice.js';
import { StyledForm } from './muiComponents.js';

export default function Form() {
  const dispatch = useDispatch();
  const urls = useSelector(state => state.urls);
  const [select, setSelect] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setSelect("");
  }, [])
  

  async function handleButtonClick(url,id){
    try {
      let res = navigator.clipboard.writeText(url);
      setSelect(id);
    } catch (error) {
      console.log(error);
    }
  }

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

  async function handleOnSubmit(e) {
    try {
      e.preventDefault();
      setError(false);
      const form = document.getElementById("inputField");
      if(!isValidUrl(form.value)){
        setError(true);
        return;
      }
      let str = form?.value?.trim();
      const data = {
        "data": str
      }
      let res = await axios.post("http://localhost:5000/getUrl", data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      dispatch(addUrl({
        old: str,
        new: res.data.result_url
      }));
      form.value = "";
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.formBody}>
      <div className={styles.formBodyTop}>
        <form onSubmit={handleOnSubmit} style={{ flex: 4 }}>
          <StyledForm error={error} id='inputField' className={error?"error":""} data-testid="form" inputProps={{
            "data-testid":"form-input",
          }} variant='outlined' sx={{ width: "90%", color: "white" }} placeholder='Shorten a link here...' />
        </form>
        <Button variant='contained' data-testid="shortbtn" onClick={handleOnSubmit} style={{ flex: 1, borderRadius: "5px" }}>Shorten it!</Button>
      </div>
      <div className={styles.formBodyBottom}>
        {
          urls.map((url, index) => {
            return (
              <div key={index} className={styles.box}>
                <p>{url.old}</p>
                <div>
                  <p>{url.new}</p>
                  <Button id={`button${index}`} data-testid={`button${index}`} variant='contained' onClick={()=>handleButtonClick(url.new,`button${index}`)} sx={{
                    bgcolor:select===`button${index}`?"hsl(257, 27%, 26%)":"hsl(180, 66%, 49%)",
                    '&:hover':{
                      bgcolor:select===`button${index}`?"hsl(257, 27%, 26%)":"hsl(180, 66%, 49%)"
                    }
                  }}>{select===`button${index}`?"Copied!":"Copy"}</Button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
