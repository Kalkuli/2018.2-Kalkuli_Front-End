import ReportWarning from '../../UI/ReportWarning/ReportWarning';

describe('Testing <ReportWarning />', () => {

    it('should', () => {
        const wrapper = shallow(<ReportWarning><p>testing</p></ReportWarning>)
        expect(wrapper.find('.report')).toHaveLength(1)
    })
})