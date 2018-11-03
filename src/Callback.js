import {Component} from 'react';
import {setIdToken, setAccessToken} from './utils/AuthService';

export class Callback extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/Learn";
  }

  render() {
    return null;
  }
}