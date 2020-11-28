import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// qiankun exports

/**
 * The bootstrap will only be called once when the child application is initialized.
 * The next time the child application re-enters, the mount hook will be called directly, and bootstrap will not be triggered repeatedly.
 * Usually we can do some initialization of global variables here,
 * such as application-level caches that will not be destroyed during the unmount phase.
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}
/**
 * The mount method is called every time the application enters,
 * usually we trigger the application's rendering method here.
 */
export async function mount(props) {
  const app = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
  
  ReactDOM.render(app, props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}
/**
 * Methods that are called each time the application is switched/unloaded,
 * usually in this case we uninstall the application instance of the subapplication.
 */
export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}
/**
 * Optional lifecycle，just available with loadMicroApp way
 */
export async function update(props) {
  console.log('update props', props);
}