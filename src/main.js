// styles
import './styles.css';

require('./another');

const app = document.getElementById('app');

app.innerHTML = `
<h1>Hello Parcel Demo!</h1>
<div class="about">
  Parcel is being used to bundle this demo app. You can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;