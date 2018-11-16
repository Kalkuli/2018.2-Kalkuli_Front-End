import '../../services/__mocks__/matchMedia'
import BarChart from '../UI/BarChart/BarChart'
import Chart from "react-apexcharts";

describe('Testing <BarChart />', () => {
    let wrapper = null 
    let instance = null

    const props = {
        options: {
            xaxis: {
                categories: [1,2]
            }
        },
        series: [{
            data: [3,4]
        }],
    }

    beforeEach(() => {
        wrapper = shallow(<BarChart {...props} />)
        instance = wrapper.instance()
    })

    it('should display a chart', () => {
        wrapper.setState({smallDevice: true})
        expect(wrapper.find(Chart).exists()).toBeTruthy()
    })

    it('should display a chart', () => {
        wrapper.setState({smallDevice: true})
        wrapper.setState({height: '150%'})
        expect(wrapper.find(Chart).exists()).toBeTruthy()
    })
})