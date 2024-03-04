import React from 'react'
import styles from './styles/Form.module.css'
import { Button, TextField } from '@mui/material';
import axios from '../axios.js';
import { useDispatch, useSelector } from 'react-redux';
import { addUrl } from '../app/urlSlice.js';
import { StyledForm } from './muiComponents.js';

export default function Form() {
  const dispatch = useDispatch();
  const urls = useSelector(state => state.urls);

  async function handleOnSubmit(e) {
    try {
      e.preventDefault();
      const form = document.getElementById("inputField");
      let str = form?.value?.trim();
      // const data = new URLSearchParams();
      // data.append('url',str);

      // let res = await axios.post("/api/v1/shorten",data);
      // console.log(res);

      dispatch(addUrl({
        old: str,
        new: str
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
          <StyledForm id='inputField' variant='outlined' sx={{ width: "90%", color: "white" }} placeholder='Shorten a link here...' />
        </form>
        <Button variant='contained' onClick={handleOnSubmit} style={{ flex: 1, borderRadius: "5px" }}>Shorten it!</Button>
      </div>
      <div className={styles.formBodyBottom}>
        {
          urls.map((url, index) => {
            return (
              <div key={index} className={styles.box}>
                <p>{url.old}</p>
                <div>
                  <p>{url.new}</p>
                  <Button variant='contained'>Copy</Button>
                  {/* another button will be formed here */}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
