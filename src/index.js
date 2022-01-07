import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import CardRepository from './service/card_repository';
import firebaseApp from './service/firebase';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './component/image_file_input/image_file_input';

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App
      FileInput={FileInput}
      authService={authService}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
