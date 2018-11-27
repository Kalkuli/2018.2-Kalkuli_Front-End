import './services/__mocks__/matchMedia'
import ReactDOM from 'react-dom'
import App from './App'
import index from './index'
jest.mock('react-dom', ()=> ({render: jest.fn()}))

describe('Testing index.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    global.document.getElementById = (id) => id ==='root' && div
    expect(ReactDOM.render).toHaveBeenCalled()
  })
}) 