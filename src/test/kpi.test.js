import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import KPI from '../components/KPI';
import { MdOutlineKingBed } from 'react-icons/md';

afterEach(cleanup);

describe('KPI', () => {
	test("renders correctly and display flex is ok", () => {
		render(<KPI icon={<MdOutlineKingBed />} amount={5555} text={"New boret"} />)
		const kpi = KPI(<MdOutlineKingBed />, 5555, "New boret").type.styledComponentId
		const kpiRoots = document.getElementsByClassName(kpi)
		const style = window.getComputedStyle(kpiRoots[0])

		expect(style.display).toBe('flex')
		
	})

})