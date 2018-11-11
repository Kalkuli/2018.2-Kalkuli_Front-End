import ReportLabels from '../UI/ReportLabels/ReportLabels';

describe('Testing <ReportLabels />', () => {

    it('should have found labels in report', () => {
        const wrapper = shallow(<ReportLabels/>)
        expect(wrapper.find('.report-labels')).toHaveLength(1)
    })
})