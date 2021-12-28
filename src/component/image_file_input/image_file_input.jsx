import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ fileName, fileURL }) => {
  const inputRef = useRef();

  const onClick = e => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = () => {};

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.fileInput}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onClick}>
        {fileName || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
