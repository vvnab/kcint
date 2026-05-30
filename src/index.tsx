/* @refresh reload */
import { render } from 'solid-js/web'
import App from './App.tsx'
import "flexboxgrid";
import "flexboxgrid-helpers";
import './index.css'

const root = document.getElementById('root')

render(() => <App />, root!)
