import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ name }) => {
  const inputRef = useRef();

  const onClick = e => {
    e.preventDefault();
    inputRef.current.click();
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.fileInput}
        type="file"
        accept="image/*"
        name="file"
      />
      <button className={styles.button} onClick={onClick}>
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
