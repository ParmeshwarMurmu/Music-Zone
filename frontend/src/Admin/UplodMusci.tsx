import React, { useRef, useState } from 'react';
import { Button, Input } from '@chakra-ui/react';
import axios from 'axios';
import { APP_URL } from '../Endpoints/Endpoints';


export const UplodMusci = () => {

  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);

      setFile(selectedFile);
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData()

    try {

      if (file) {
        let formData = new FormData();
        formData.append('music', file);
        const response = await axios.post(`${APP_URL}/admin/uploadMusic`, formData);
        console.log(response.data)
      }
    } catch (error) {

    }
    // formData.append('music', file)
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input type="file" onChange={fileHandler} accept=".mp3" />
        <input type="submit" value={'Submit'} />
      </form>
    </div>
  );
};
