import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({
  imageUploader,
  fileName,
  onFileChange,
  buttonText,
}) => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);

  const onClick = e => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = async e => {
    setLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

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
      {loading && <div className={styles.loading}></div>}
      {!loading && (
        <button
          className={`${styles.button} ${
            fileName ? styles.orange : styles.grey
          }`}
          onClick={onClick}
        >
          {fileName || buttonText || 'No File'}
        </button>
      )}
    </div>
  );
};

export default ImageFileInput;
